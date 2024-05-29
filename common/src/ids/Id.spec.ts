import { Id } from '.';
import * as ids from '.';

describe('Id', () => {
  class FakeId extends Id {
    public static PREFIX = 'FK';

    public getPrefix(): string {
      return FakeId.PREFIX;
    }
  }

  it('should create a new id via constructor', () => {
    const id = new FakeId();
    expect(id.getValue().length).toEqual(34);
  });

  it('should create a new id via static create', () => {
    const id = Id.create(FakeId.PREFIX);
    expect(id.length).toEqual(34);
    expect(id.substring(0, 2)).toEqual(FakeId.PREFIX);
  });

  it('should create correct prefix', () => {
    const id = new FakeId();
    expect(id.getPrefix()).toEqual(FakeId.PREFIX);
    expect(id.getValue().substring(0, 2)).toEqual(FakeId.PREFIX);
  });

  it('should look like sid', () => {
    [
      'US00000000000000000000000000000000',
      'USa0000000000000000000000000000000',
      'USb0000000000000000000000000000000',
      'USc0000000000000000000000000000000',
      'USd0000000000000000000000000000000',
      'USe0000000000000000000000000000000',
      'USf0000000000000000000000000000000',
    ].forEach((id) => {
      expect(Id.looksLikeId(id)).toEqual(true);
    });
  });

  it('should not look like sid', () => {
    [
      'US0000000000000000000000000000000',
      'us00000000000000000000000000000000',
      'USh0000000000000000000000000000000',
    ].forEach((id) => {
      expect(Id.looksLikeId(id)).toEqual(false);
    });
  });

  it('all prefixes should be unique', () => {
    const prefixes = Object.values(ids)
      .filter((id) => !(id instanceof ids.Id))
      .map((id) => {
        // @ts-ignore
        return id.PREFIX;
      });

    expect(prefixes.length).toBeGreaterThan(0);
    expect(new Set(prefixes).size).toEqual(prefixes.length);
  });
});
