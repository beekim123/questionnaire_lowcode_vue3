import type { TextProps, OptionsProps, PicLink, Status, VueComType } from '@/types';
// 题目类型
export type SurveyComName =
  | 'single-select'
  | 'multi-select'
  | 'option-select'
  | 'single-pic-select'
  | 'multi-pic-select'
  | 'text-input'
  | 'personal-info-name'
  | 'personal-info-id'
  | 'personal-info-tel'
  | 'personal-info-wechat'
  | 'personal-info-qq'
  | 'personal-info-email'
  | 'personal-info-address'
  | 'personal-info-gender'
  | 'personal-info-age'
  | 'personal-info-education'
  | 'personal-info-career'
  | 'rate-score'
  | 'date-time'
  | 'personal-info-birth'
  | 'personal-info-collage'
  | 'personal-info-major'
  | 'personal-info-industry'
  | 'personal-info-company'
  | 'personal-info-position'

// 业务组件类型(题目类型 + 非题目类型)
export type Material = SurveyComName | 'text-note';

// 编辑组件类型:集合了所有的编辑组件
export type EditComName =
| 'title-editor'
  | 'desc-editor'
  | 'position-editor'
  | 'size-editor'
  | 'weight-editor'
  | 'italic-editor'
  | 'text-input-type-editor'
  | 'text-type-editor'
  | 'pic-options-editor'
  | 'date-time-type-editor'
  | 'rate-text-editor'
  | 'options-editor'


// 所有的组件类型：业务组件类型 + 编辑组件类型
export type ComponentName = Material | EditComName;

export type ComponentMap = {
  [key in ComponentName]: VueComType;
};

export interface Actions {
  setTextStatus: (textProps: TextProps | OptionsProps, text: string) => void;
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
  setOptionsStatusByIndex: (optionProps: OptionsProps, payload: optionsStatusByIndexPayload) => void;
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
// 记录题目类型的数组
export const SurveyComNameArr = [
  'single-select',
  'multi-select',
  'option-select',
  'single-pic-select',
  'multi-pic-select',
  'text-input',
  'personal-info-name',
  'personal-info-id',
  'personal-info-tel',
  'personal-info-wechat',
  'personal-info-qq',
  'personal-info-email',
  'personal-info-address',
  'personal-info-gender',
  'personal-info-age',
  'personal-info-education',
  'personal-info-career',
  'rate-score',
  'date-time',
  'personal-info-birth',
  'personal-info-collage',
  'personal-info-major',
  'personal-info-industry',
  'personal-info-company',
  'personal-info-position',
];
// 判断传入的值是否为题目类型
export function isSurveyComName(value: string): value is SurveyComName {
  return SurveyComNameArr.includes(value as SurveyComName);
}
