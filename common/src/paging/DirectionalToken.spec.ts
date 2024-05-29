import { DirectionalToken, Direction } from './DirectionalToken';
import { UserId } from '../ids';

describe('DirectionalToken', () => {
  it('should create a DirectionalToken with a valid Id and Direction', () => {
    const id = new UserId();
    const direction = Direction.Forward;
    const token = new DirectionalToken(id, direction);

    expect(token.id).toBe(id);
    expect(token.direction).toBe(direction);
  });

  it('should create a forward DirectionalToken with a valid Id', () => {
    const id = new UserId();
    const token = DirectionalToken.forward(id);

    expect(token.id).toBe(id);
    expect(token.direction).toBe(Direction.Forward);
  });

  it('should create a backward DirectionalToken with a valid Id', () => {
    const id = new UserId();
    const token = DirectionalToken.backward(id);

    expect(token.id).toBe(id);
    expect(token.direction).toBe(Direction.Backward);
  });

  it('should return a base64 encoded string with the correct format and values for a forward DirectionalToken', () => {
    const id = new UserId();
    const token = DirectionalToken.forward(id);
    const encodedToken = token.encode();
    const decodedToken = Buffer.from(encodedToken, 'base64').toString('utf-8');
    const parsedToken = JSON.parse(decodedToken);

    expect(parsedToken.id).toBe(id.getValue());
    expect(parsedToken.direction).toBe(Direction.Forward);
  });

  it('should return a base64 encoded string with the correct format and values for a backward DirectionalToken', () => {
    const id = new UserId();
    const token = DirectionalToken.backward(id);
    const encodedToken = token.encode();
    const decodedToken = Buffer.from(encodedToken, 'base64').toString('utf-8');
    const parsedToken = JSON.parse(decodedToken);

    expect(parsedToken.id).toBe(id.getValue());
    expect(parsedToken.direction).toBe(Direction.Backward);
  });

  it('should create backward token from string', () => {
    const id = new UserId();
    const token = DirectionalToken.backward(id);

    const newToken = DirectionalToken.fromString(token.encode());
    expect(newToken.id.getValue()).toEqual(id.getValue());
    expect(newToken.direction).toEqual(Direction.Backward);
  });

  it('should create forward token from string', () => {
    const id = new UserId();
    const token = DirectionalToken.forward(id);

    const newToken = DirectionalToken.fromString(token.encode());
    expect(newToken.id.getValue()).toEqual(id.getValue());
    expect(newToken.direction).toEqual(Direction.Forward);
  });
});
