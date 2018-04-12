import { WithKeyPipe } from './with-key.pipe';

describe('WithKeyPipe', () => {
  it('create an instance', () => {
    const pipe = new WithKeyPipe();
    expect(pipe).toBeTruthy();
  });
});
