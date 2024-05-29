import { Id } from './Id';

export class AddressId extends Id {
  // This is required for stricter TS check
  // @ts-ignore
  private readonly _brand!: void;

  public static PREFIX = 'AD';

  public getPrefix(): string {
    return AddressId.PREFIX;
  }

  public static isValid(id: string): boolean {
    return id !== null && id.startsWith(AddressId.PREFIX) && Id.looksLikeId(id);
  }
}
