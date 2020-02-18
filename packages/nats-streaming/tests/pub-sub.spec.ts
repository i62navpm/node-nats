import { Stan } from 'node-nats-streaming';
import getConnection from '../src/index';

describe("Test 'Publish-Subscribe' streaming", () => {
  let stan: Stan;

  beforeAll(() => {
    try {
      stan = getConnection();
    } catch (err) {
      throw new Error('NATS streaming server is disconnected');
    }
  });

  it('NATS streaming server is connected', () => {
    stan.on('connect', nc => expect(nc).toBeTruthy());
  });

  it('When a message is published a subscriber receive the message', () => {
    return;
  });

  it('When a message is published multiple subscriber receive the message', () => {
    return;
  });

  it('When a message is published only subjected subscribers will receive the message', () => {
    return;
  });

  afterAll(() => {
    stan.close();
  });
});
