import * as PathUtils from './PathUtils';

describe('PathUtils', () => {
  describe('trimSlash', () => {
    it('should remove leading slash when it is present', () => {
      const result = PathUtils.trimSlash('/example');
      expect(result).toBe('example');
    });

    // Should remove trailing slash from string
    it('should remove trailing slash when it is present', () => {
      const result = PathUtils.trimSlash('example/');
      expect(result).toBe('example');
    });

    it('should remove both leading and trailing slashes when they are present', () => {
      const result = PathUtils.trimSlash('/example/');
      expect(result).toBe('example');
    });

    it('should handle input with only one leading slash', () => {
      const result = PathUtils.trimSlash('/');
      expect(result).toBe('');
    });

    it('should handle empty string', () => {
      const result = PathUtils.trimSlash('');
      expect(result).toBe('');
    });
  });

  // Generated by CodiumAI

  describe('joinUriComponents', () => {
    // Join two uri components
    it('should join two uri components when both are provided', () => {
      expect(PathUtils.joinUriComponents('path1', 'path2')).toBe('path1/path2');
    });

    // Join three uri components
    it('should join three uri components when all are provided', () => {
      expect(PathUtils.joinUriComponents('path1', 'path2', 'path3')).toBe(
        'path1/path2/path3',
      );
    });

    // Join multiple uri components
    it('should join multiple uri components when all are provided', () => {
      expect(
        PathUtils.joinUriComponents('path1', 'path2', 'path3', 'path4'),
      ).toBe('path1/path2/path3/path4');
    });

    // Join uri components with different levels of nesting
    it('should join uri components with different levels of nesting', () => {
      expect(
        PathUtils.joinUriComponents('path1', 'path2/', '/path3', 'path4/'),
      ).toBe('path1/path2/path3/path4');
    });

    // Join uri components with spaces
    it('should join uri components with spaces', () => {
      expect(PathUtils.joinUriComponents('path1 ', ' path2 ', ' path3 ')).toBe(
        'path1/path2/path3',
      );
    });
  });
});
