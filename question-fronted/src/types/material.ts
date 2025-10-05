import type { VueComType } from './common'

// 标签页类型
export interface TabInfo {
  label: string
  name: string
  icon: VueComType
  view: VueComType
}

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
export type Material = SurveyComName | 'text-note'

// 编辑组件类型
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

export type componentName = Material | EditComName

export type ComponentMap = {
  [key in componentName]: VueComType
}

const SurveyComNameArr: SurveyComName[] = [
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
]

export function isSurveyComName(value: string): value is SurveyComName {
  return SurveyComNameArr.includes(value as SurveyComName)
}

const useForPDFComNameArr: Material[] = [
  'single-select',
  'multi-select',
  'single-pic-select',
  'multi-pic-select',
  'text-input',
  'text-note',
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
  'personal-info-collage',
  'personal-info-major',
  'personal-info-industry',
  'personal-info-company',
  'personal-info-position',
]

export function isUseForPDF(value: string): value is SurveyComName {
  return useForPDFComNameArr.includes(value as SurveyComName)
}
