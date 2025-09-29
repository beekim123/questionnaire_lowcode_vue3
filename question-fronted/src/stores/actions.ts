import type { TextProps, OptionsProps,PicLink } from '@/types';
import { isStringArray,isPicTitleDescStatusArr } from '@/types';
export function setTextStatus(textProps: TextProps, text: string) {
  textProps.status = text;
}

export function addOption(optionProps: OptionsProps) {
  if (isStringArray(optionProps.status)) {
    optionProps.status.push('新选项');
  }else if (isPicTitleDescStatusArr(optionProps.status)) {
    optionProps.status.push({ picTitle: '图片标题', picDesc: '图片描述', value: '' });
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

export function setPicLinkByIndex(optionProps: OptionsProps, payload: PicLink) {
  console.log(optionProps, 'optionPropsoptionPropsoptionProps');
  console.log(payload, 'payloadpayloadpayload');
  if (isPicTitleDescStatusArr(optionProps.status)) {
    console.log('first');
    optionProps.status[payload.index].value = payload.link;
  }
}
