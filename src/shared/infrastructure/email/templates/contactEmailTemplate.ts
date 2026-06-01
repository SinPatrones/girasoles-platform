import type { ContactRequest } from '@/modules/web/domain/models/ContactRequest';

export function contactEmailTemplate(data: ContactRequest): string {
  const eventDateRow = data.eventDate
    ? `
      <tr>
        <td style="padding: 10px 16px; font-weight: 600; color: #374151; width: 180px; border-bottom: 1px solid #f3f4f6;">Fecha del evento</td>
        <td style="padding: 10px 16px; color: #6b7280; border-bottom: 1px solid #f3f4f6;">${formatDate(data.eventDate)}</td>
      </tr>`
    : '';

  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nueva consulta de contacto</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f9fafb; font-family: Arial, Helvetica, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">

          <!-- Header -->
          <tr>
            <td style="background-color: #ca8a04; padding: 32px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 700; letter-spacing: 0.5px;">
                Los Girasoles — Nueva Consulta
              </h1>
              <p style="margin: 8px 0 0; color: #fef9c3; font-size: 14px;">
                Un cliente ha completado el formulario de contacto
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 32px 40px;">
              <p style="margin: 0 0 24px; color: #374151; font-size: 15px;">
                A continuación los datos ingresados por el cliente:
              </p>

              <table width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #e5e7eb; border-radius: 6px; overflow: hidden;">
                <tr>
                  <td style="padding: 10px 16px; font-weight: 600; color: #374151; width: 180px; border-bottom: 1px solid #f3f4f6; background-color: #f9fafb;">Nombre</td>
                  <td style="padding: 10px 16px; color: #6b7280; border-bottom: 1px solid #f3f4f6;">${escapeHtml(data.name)}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 16px; font-weight: 600; color: #374151; border-bottom: 1px solid #f3f4f6; background-color: #f9fafb;">Correo</td>
                  <td style="padding: 10px 16px; border-bottom: 1px solid #f3f4f6;">
                    <a href="mailto:${escapeHtml(data.email)}" style="color: #ca8a04; text-decoration: none;">${escapeHtml(data.email)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 16px; font-weight: 600; color: #374151; border-bottom: 1px solid #f3f4f6; background-color: #f9fafb;">Teléfono</td>
                  <td style="padding: 10px 16px; color: #6b7280; border-bottom: 1px solid #f3f4f6;">
                    <a href="tel:${escapeHtml(data.phone)}" style="color: #ca8a04; text-decoration: none;">${escapeHtml(data.phone)}</a>
                  </td>
                </tr>
                ${eventDateRow}
                <tr>
                  <td style="padding: 10px 16px; font-weight: 600; color: #374151; vertical-align: top; background-color: #f9fafb;">Mensaje</td>
                  <td style="padding: 10px 16px; color: #6b7280; white-space: pre-line;">${escapeHtml(data.message)}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 40px 32px; text-align: center; border-top: 1px solid #f3f4f6;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                Este correo fue generado automáticamente desde el formulario de contacto de
                <strong style="color: #6b7280;">losgirasoleseventos.com</strong>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatDate(isoDate: string): string {
  const [year, month, day] = isoDate.split('-');
  const months = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
  ];
  return `${parseInt(day)} de ${months[parseInt(month) - 1]} de ${year}`;
}
