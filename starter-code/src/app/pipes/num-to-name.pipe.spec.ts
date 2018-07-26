import { NumToNamePipe } from './num-to-name.pipe';

describe('NumToNamePipe', () => {
  it('create an instance', () => {
    const pipe = new NumToNamePipe();
    expect(pipe).toBeTruthy();
  });
});
