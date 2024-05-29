import { PageMetadata } from './PageMetadata';
import { DirectionalToken, Direction } from './DirectionalToken';
import { UserId } from '../ids';

describe('PageMetadata', () => {
  it('should create a PageMetadata object with no arguments', () => {
    const pageMetadata = PageMetadata.builder().build();
    expect(pageMetadata.nextPage).toBeNull();
    expect(pageMetadata.previousPage).toBeNull();
  });

  it('should create a PageMetadata object with only a nextPageToken', () => {
    const nextPageToken = new DirectionalToken(new UserId(), Direction.Forward);
    const pageMetadata = PageMetadata.builder()
      .withNextPage(nextPageToken.id)
      .build();
    expect(pageMetadata.nextPage).toBe(nextPageToken.encode());
    expect(pageMetadata.previousPage).toBeNull();
  });

  it('should create a PageMetadata object with only a previousPageToken', () => {
    const previousPageToken = new DirectionalToken(
      new UserId(),
      Direction.Backward,
    );
    const pageMetadata = PageMetadata.builder()
      .withPreviousPage(previousPageToken.id)
      .build();
    expect(pageMetadata.nextPage).toBeNull();
    expect(pageMetadata.previousPage).toBe(previousPageToken.encode());
  });

  it('should create a PageMetadata object with undefined nextPageToken and previousPageToken', () => {
    const pageMetadata = PageMetadata.builder().build();
    expect(pageMetadata.nextPage).toBeNull();
    expect(pageMetadata.previousPage).toBeNull();
  });

  it('should create a PageMetadata object with null nextPageToken and previousPageToken', () => {
    const pageMetadata = PageMetadata.builder().build();
    expect(pageMetadata.nextPage).toBeNull();
    expect(pageMetadata.previousPage).toBeNull();
  });

  it('should create a PageMetadata object with nextPageToken and previousPageToken as the same DirectionalToken', () => {
    const forward = new DirectionalToken(new UserId(), Direction.Forward);
    const backward = new DirectionalToken(new UserId(), Direction.Backward);
    const pageMetadata = PageMetadata.builder()
      .withNextPage(forward.id)
      .withPreviousPage(backward.id)
      .build();
    expect(pageMetadata.nextPage).toBe(forward.encode());
    expect(pageMetadata.previousPage).toBe(backward.encode());
  });
});
