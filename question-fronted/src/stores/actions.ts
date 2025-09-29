import type { TextProps, OptionsProps } from '@/types';
import { isStringArray } from '@/types';
export function setTextStatus(textProps: TextProps, text: string) {
  textProps.status = text;
}

export function addOption(optionProps: OptionsProps) {
  if (isStringArray(optionProps.status)) {
    optionProps.status.push('新选项');
  }
}

export function removeOption(optionProps: OptionsProps, index: number) {
  if (optionProps.status.length === 2) {
    return false;
  }
  optionProps.status.splice(index, 1);
  return true;
}

export function setPosition(optionProps: OptionsProps, index: number) {
  optionProps.currentStatus = index;
}

export function setSize(optionProps: OptionsProps, index: number) {
  optionProps.currentStatus = index;
}

export function setColor(colorProps: TextProps, color: string) {
  colorProps.status = color
}



export function setWeight(weightProps: OptionsProps, index: number) {
  weightProps.currentStatus = index
}

export function setItalic(italicProps: OptionsProps, index: number) {
  italicProps.currentStatus = index
}