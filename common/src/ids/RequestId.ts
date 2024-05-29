import { Id } from './Id';

export class RequestId extends Id {
  // This is required for stricter TS check
  // @ts-ignore
  private readonly _brand!: void;

  public static PREFIX = 'RQ';

  public getPrefix(): string {
    return RequestId.PREFIX;
  }

  public static isValid(id: string): boolean {
    return id !== null && id.startsWith(RequestId.PREFIX) && Id.looksLikeId(id);
  }
}
