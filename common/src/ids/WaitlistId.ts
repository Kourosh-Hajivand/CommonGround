import { Id } from './Id';

export class WaitlistId extends Id {
  // This is required for stricter TS check
  // @ts-ignore
  private readonly _brand!: void;

  public static PREFIX = 'WL';

  public getPrefix(): string {
    return WaitlistId.PREFIX;
  }

  public static isValid(id: string): boolean {
    return (
      id !== null && id.startsWith(WaitlistId.PREFIX) && Id.looksLikeId(id)
    );
  }
}
