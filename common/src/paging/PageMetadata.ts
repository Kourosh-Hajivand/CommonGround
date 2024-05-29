import { DirectionalToken } from './DirectionalToken';
import { Id } from '../ids';

type BuilderData = {
  nextPageId?: Id;
  previousPageId?: Id;
};

export class PageMetadata {
  private readonly nextPageToken?: DirectionalToken;

  private readonly previousPageToken?: DirectionalToken;

  private constructor(
    nextPageToken?: DirectionalToken,
    previousPageToken?: DirectionalToken,
  ) {
    this.nextPageToken = nextPageToken;
    this.previousPageToken = previousPageToken;
  }

  /**
   * Builder method for the metadata
   */
  public static builder() {
    const data: BuilderData = {};
    const builder = {
      withNextPage(id: Id) {
        data.nextPageId = id;
        return builder;
      },
      withPreviousPage(id: Id) {
        data.previousPageId = id;
        return builder;
      },
      build() {
        const nextPageToken = data.nextPageId
          ? DirectionalToken.forward(data.nextPageId)
          : undefined;
        const previousPageToken = data.previousPageId
          ? DirectionalToken.backward(data.previousPageId)
          : undefined;
        return new PageMetadata(nextPageToken, previousPageToken);
      },
    };

    return builder;
  }

  /**
   * Returns the next page base64 encoded token
   */
  get nextPage() {
    if (this.nextPageToken) {
      return this.nextPageToken.encode();
    }

    return null;
  }

  /**
   * Returns the previous base base64 encoded token
   */
  get previousPage() {
    if (this.previousPageToken) {
      return this.previousPageToken.encode();
    }

    return null;
  }
}
