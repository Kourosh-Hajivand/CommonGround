import { Id } from './Id';

export class UserId extends Id {
  // This is required for stricter TS check
  // @ts-ignore
  private readonly _brand!: void;

  public static PREFIX = 'US';

  public getPrefix(): string {
    return UserId.PREFIX;
  }

  public static isValid(id: string): boolean {
    return id !== null && id.startsWith(UserId.PREFIX) && Id.looksLikeId(id);
  }
}
