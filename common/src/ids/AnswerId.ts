import { Id } from './Id';

export class AnswerId extends Id {
  // This is required for stricter TS check
  // @ts-ignore
  private readonly _brand!: void;

  public static PREFIX = 'AS';

  public getPrefix(): string {
    return AnswerId.PREFIX;
  }

  public static isValid(id: string): boolean {
    return id !== null && id.startsWith(AnswerId.PREFIX) && Id.looksLikeId(id);
  }
}
