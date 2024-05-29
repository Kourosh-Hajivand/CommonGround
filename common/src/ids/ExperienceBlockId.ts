import { Id } from './Id';

export class ExperienceBlockId extends Id {
  // This is required for stricter TS check
  // @ts-ignore
  private readonly _brand!: void;

  public static PREFIX = 'EB';

  public getPrefix(): string {
    return ExperienceBlockId.PREFIX;
  }

  public static isValid(id: string): boolean {
    return (
      id !== null &&
      id.startsWith(ExperienceBlockId.PREFIX) &&
      Id.looksLikeId(id)
    );
  }
}
