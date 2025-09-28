// 工具库
import type { TextProps, OptionsProps } from '@/types/index';

export function getTextStatus(props: TextProps) {
  return props.status;
}

export function getStringStatus(props: OptionsProps) {
  return props.status;
}

export function getCurrentStatus(props: OptionsProps) {
  return props.currentStatus;
}

export function getStringStatusByCurrentStatus(props: OptionsProps) {
  return props.status[props.currentStatus] as string;
}
