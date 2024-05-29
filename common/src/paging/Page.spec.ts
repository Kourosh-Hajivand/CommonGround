import { PageMetadata } from './PageMetadata';
import { Page } from './Page';
import { UserId } from '../ids';

describe('Page', () => {
  it('should create a Page object with a result array and optional metadata', () => {
    const result = [1, 2, 3];
    const forwardId = new UserId();
    const backwardId = new UserId();
    const metadata = PageMetadata.builder()
      .withNextPage(forwardId)
      .withPreviousPage(backwardId)
      .build();

    const page = new Page(result, metadata);

    expect(page.result).toEqual(result);
    expect(page.metadata).toEqual(metadata);
  });

  // Page object can be created with a result array and default metadata
  it('should create a Page object with a result array and default metadata', () => {
    const result = [1, 2, 3];

    const page = new Page(result);

    expect(page.result).toEqual(result);
    expect(page.metadata.nextPage).toBeNull();
    expect(page.metadata.previousPage).toBeNull();
  });

  it('should create a Page object with an empty result array and optional metadata', () => {
    const result: number[] = [];
    const metadata = PageMetadata.builder().build();

    const page = new Page(result, metadata);

    expect(page.result).toEqual(result);
    expect(page.metadata).toEqual(metadata);
  });

  it('should pipe page to a new page', () => {
    const result: number[] = [1, 2, 3];
    const metadata = PageMetadata.builder().build();

    const page = new Page([...result], metadata);
    expect(page.result).toEqual(result);
    expect(page.metadata).toEqual(metadata);

    const newPage = page.pipe((x) => x * x);
    expect(newPage.result).toEqual([1, 4, 9]);
    expect(newPage.metadata).toEqual(metadata);

    // old data should not change
    expect(page.result).toEqual(result);
  });
});
