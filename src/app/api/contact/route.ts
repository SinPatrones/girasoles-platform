import { NextRequest, NextResponse } from 'next/server';
import { ContactService } from '@/modules/web/application/services/ContactService';

const contactService = new ContactService();

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: 'Cuerpo de la solicitud inválido' }, { status: 400 });
  }

  const { name, email, phone, message, eventDate, recaptchaToken } = body;

  if (!name || !email || !phone || !message) {
    return NextResponse.json({ error: 'Campos requeridos faltantes' }, { status: 400 });
  }

  if (!recaptchaToken) {
    return NextResponse.json({ error: 'Token de verificación requerido' }, { status: 400 });
  }

  const recaptchaRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
  });

  const recaptchaData = await recaptchaRes.json();

  if (!recaptchaData.success) {
    return NextResponse.json({ error: 'Verificación de seguridad fallida' }, { status: 400 });
  }

  try {
    await contactService.sendContactEmail({ name, email, phone, message, eventDate });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Error al enviar el correo' }, { status: 500 });
  }
}
