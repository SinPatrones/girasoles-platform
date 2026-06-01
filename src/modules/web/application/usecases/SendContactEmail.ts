import type { IEmailService } from '@/shared/domain/services/IEmailService';
import type { ContactRequest } from '@/modules/web/domain/models/ContactRequest';
import { contactEmailTemplate } from '@/shared/infrastructure/email/templates/contactEmailTemplate';

export class SendContactEmail {
  async execute(data: ContactRequest, emailService: IEmailService): Promise<void> {
    await emailService.send({
      to: [],
      subject: `Nueva consulta de contacto — ${data.name}`,
      html: contactEmailTemplate(data),
    });
  }
}
