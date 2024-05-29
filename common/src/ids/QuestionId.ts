import { Id } from './Id';

export class QuestionId extends Id {
  // This is required for stricter TS check
  // @ts-ignore
  private readonly _brand!: void;

  public static PREFIX = 'QS';

  public getPrefix(): string {
    return QuestionId.PREFIX;
  }

  public static isValid(id: string): boolean {
    return (
      id !== null && id.startsWith(QuestionId.PREFIX) && Id.looksLikeId(id)
    );
  }
}
