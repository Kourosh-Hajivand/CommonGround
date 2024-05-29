import { Id } from './Id';

export class UserRoleId extends Id {
  // This is required for stricter TS check
  // @ts-ignore
  private readonly _brand!: void;

  public static PREFIX = 'UR';

  public getPrefix(): string {
    return UserRoleId.PREFIX;
  }

  public static isValid(id: string): boolean {
    return (
      id !== null && id.startsWith(UserRoleId.PREFIX) && Id.looksLikeId(id)
    );
  }
}
