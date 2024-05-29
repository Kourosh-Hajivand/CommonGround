import { Id } from './Id';

export class VerificationId extends Id {
  // This is required for stricter TS check
  // @ts-ignore
  private readonly _brand!: void;

  public static PREFIX = 'VR';

  public getPrefix(): string {
    return VerificationId.PREFIX;
  }

  public static isValid(id: string): boolean {
    return (
      id !== null && id.startsWith(VerificationId.PREFIX) && Id.looksLikeId(id)
    );
  }
}
