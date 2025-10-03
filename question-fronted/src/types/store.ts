import type { TextProps, OptionsProps, PicLink, Status } from '@/types';
// 题目类型
export type SurveyComName = 'single-select' | 'single-pic-select';

// 业务组件类型(题目类型 + 非题目类型)
export type Material = SurveyComName | 'text-note';

export interface Actions {
  setTextStatus: (textProps: TextProps, text: string) => void;
  addOption: (optionProps: OptionsProps) => void;
  removeOption: (optionProps: OptionsProps, index: number) => number;
  setPosition: (optionProps: OptionsProps, index: number) => void;
  setCurrentStatus: (optionProps: OptionsProps, index: number) => void;
  setPicLinkByIndex: (optionProps: OptionsProps, payload: PicLink) => void;
  setColor: (optionProps: OptionsProps, color: string) => void;
  setItalic: (optionProps: OptionsProps, italic: boolean) => void;
  setWeight: (optionProps: OptionsProps, weight: number) => void;
  setSize: (optionProps: OptionsProps, size: number) => void;
  setUse: (optionsProps: OptionsProps, isUse: boolean) => void;
  setTextType: (typeProps: OptionsProps, index: number) => void;

}

// 仓库状态
export interface MaterialStore extends Actions {
  currentMaterialCom: Material;
  coms: Record<Material, Status>;
  setCurrentSurveyCom: (com: Material) => void;
  setOptionsStatusByIndex: (optionProps: OptionsProps, payload: optionsStatusByIndexPayload) => void;
}
export interface EditorStore extends Actions {
  currentComponentIndex: number
  surveyCount: number
  coms: Status[]
  setCurrentComponentIndex: (index: number) => void
  addCom: (coms: Status[], newCom: Status) => void
  // setStore: (storeStatus: SurveyDBData) => void
  initStore: () => void
  removeCom: (index: number) => void
  resetComs: () => void
}

export type optionsStatusByIndexPayload = {
  val: string
  index: number
}

export function isOptionsStatusByIndexPayload(obj: object): obj is optionsStatusByIndexPayload {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'val' in obj &&
    typeof (obj as optionsStatusByIndexPayload).val === 'string' &&
    'index' in obj &&
    typeof (obj as optionsStatusByIndexPayload).index === 'number'
  )
}