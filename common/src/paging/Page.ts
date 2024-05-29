import { CollectionOf } from '@tsed/schema';
import { PageMetadata } from './PageMetadata';

export class Page<T> {
  @CollectionOf(Object) // Change if needed to match the expected type
  result: T[];

  metadata: PageMetadata;

  constructor(result: T[], metadata?: PageMetadata) {
    this.result = result;
    this.metadata = metadata || PageMetadata.builder().build();
  }

  /**
   * Pipes the data into a mapper and returns a new {@link Page}
   * @param mapper
   */
  public pipe = <U>(mapper: (data: T) => U) => {
    const mapped = this.result.map(mapper);

    return new Page<U>(mapped, this.metadata);
  };
}
