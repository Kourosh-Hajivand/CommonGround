import { Id } from './Id';

export class TicketTierId extends Id {
  // This is required for stricter TS check
  // @ts-ignore
  private readonly _brand!: void;

  public static PREFIX = 'TT';

  public getPrefix(): string {
    return TicketTierId.PREFIX;
  }

  public static isValid(id: string): boolean {
    return (
      id !== null && id.startsWith(TicketTierId.PREFIX) && Id.looksLikeId(id)
    );
  }
}
