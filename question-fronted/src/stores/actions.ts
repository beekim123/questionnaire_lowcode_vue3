import type { TextProps } from '@/types/index';
export function setTextStatus(textProps: TextProps, text: string) {
  textProps.status = text;
}
