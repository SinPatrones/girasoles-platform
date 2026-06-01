import nodemailer from 'nodemailer';
import type { IEmailService, EmailPayload } from '@/shared/domain/services/IEmailService';

export class NodemailerEmailService implements IEmailService {
  private transporter: nodemailer.Transporter;
  private from: string;
  private defaultRecipients: string[];

  constructor() {
    this.from = process.env.EMAIL_USER!;
    this.defaultRecipients = (process.env.EMAIL_RECIPIENTS ?? '')
      .split(',')
      .map((r) => r.trim())
      .filter(Boolean);

    this.transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  async send(payload: EmailPayload): Promise<void> {
    // Use payload.to if explicitly provided; fall back to EMAIL_RECIPIENTS from env
    const to = payload.to.length > 0 ? payload.to : this.defaultRecipients;

    await this.transporter.sendMail({
      from: this.from,
      to,
      subject: payload.subject,
      html: payload.html,
    });
  }
}
