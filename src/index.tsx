export { default as TextCustom } from '../src/component/text';
export { default as TextInputCustom } from '../src/component/text/text_input';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a + b);
}
