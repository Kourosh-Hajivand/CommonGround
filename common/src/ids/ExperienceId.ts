import { Id } from './Id';

export class ExperienceId extends Id {
  // This is required for stricter TS check
  // @ts-ignore
  private readonly _brand!: void;

  public static PREFIX = 'EX';

  public getPrefix(): string {
    return ExperienceId.PREFIX;
  }

  public static isValid(id: string): boolean {
    return (
      id !== null && id.startsWith(ExperienceId.PREFIX) && Id.looksLikeId(id)
    );
  }
}
