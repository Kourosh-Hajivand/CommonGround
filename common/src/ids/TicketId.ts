import { Id } from './Id';

export class TicketId extends Id {
  // This is required for stricter TS check
  // @ts-ignore
  private readonly _brand!: void;

  public static PREFIX = 'TK';

  public getPrefix(): string {
    return TicketId.PREFIX;
  }

  public static isValid(id: string): boolean {
    return id !== null && id.startsWith(TicketId.PREFIX) && Id.looksLikeId(id);
  }
}
