import { CollectionOf, Generics } from '@tsed/schema';
import { PageMetadata } from './PageMetadata';

@Generics('T')
export class Page<T> {
  @CollectionOf('T')
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
