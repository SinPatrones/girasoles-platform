import { NodemailerEmailService } from '@/shared/infrastructure/email/NodemailerEmailService';
import { SendContactEmail } from '@/modules/web/application/usecases/SendContactEmail';
import type { ContactRequest } from '@/modules/web/domain/models/ContactRequest';

export class ContactService {
  private emailService = new NodemailerEmailService();
  private useCase = new SendContactEmail();

  async sendContactEmail(data: ContactRequest): Promise<void> {
    await this.useCase.execute(data, this.emailService);
  }
}
