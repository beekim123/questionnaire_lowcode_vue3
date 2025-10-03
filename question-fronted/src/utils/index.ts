// 工具库
import type { TextProps, OptionsProps, TypeStatus } from '@/types/index';
import  {isPicTitleDescStatusArr } from '@/types/index';

export function getTextStatus(props: TextProps) {
  return props.status;
}

export function getStringStatus(props: OptionsProps) {
  return props?.status;
}

export function getCurrentStatus(props: OptionsProps) {
  return props?.currentStatus;
}

export function getStringStatusByCurrentStatus(props: OptionsProps) {
  return props.status[props.currentStatus] as string;
}

export function getPicTitleDescStatusArr(props: OptionsProps) {
  if (props && isPicTitleDescStatusArr(props.status)) {
    return props.status;
  }
}
export function changeEditorIsShowStatus(status: TypeStatus, type: number) {
  if (type !== status.type.currentStatus) {
    status.title.isShow = !status.title.isShow;
    status.desc.isShow = !status.desc.isShow;
    status.position.isShow = !status.position.isShow;
    status.titleSize.isShow = !status.titleSize.isShow;
    status.descSize.isShow = !status.descSize.isShow;
    status.titleWeight.isShow = !status.titleWeight.isShow;
    status.descWeight.isShow = !status.descWeight.isShow;
    status.titleItalic.isShow = !status.titleItalic.isShow;
    status.descItalic.isShow = !status.descItalic.isShow;
    status.titleColor.isShow = !status.titleColor.isShow;
    status.descColor.isShow = !status.descColor.isShow;
  }
}