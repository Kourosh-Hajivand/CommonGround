import { Id } from './Id';

export class HostId extends Id {
  // This is required for stricter TS check
  // @ts-ignore
  private readonly _brand!: void;

  public static PREFIX = 'HS';

  public getPrefix(): string {
    return HostId.PREFIX;
  }

  public static isValid(id: string): boolean {
    return id !== null && id.startsWith(HostId.PREFIX) && Id.looksLikeId(id);
  }
}
