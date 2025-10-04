// 组件市场里面所有组件状态的仓库
import { defineStore } from 'pinia';
import type {  Status,Material } from '@/types'
import { defaultStatusMap } from '@/configs/defaultStatus/defaultStatusMap';
import { setTextStatus, addOption, removeOption, setPosition, setSize, setItalic, setWeight, setColor, setPicLinkByIndex, setCurrentStatus,setOptionsStatusByIndex,setUse,setTextType } from './actions';
// 工具方法
import { updateInitStatusBeforeAdd } from '@/utils'

// 定义组件状态类型
type ComponentStatus = ReturnType<typeof defaultStatusMap[keyof typeof defaultStatusMap]>;

// 定义仓库状态类型
interface MaterialState {
  currentMaterialCom: string;
  coms: Record<string, ComponentStatus>;
}

// 部分状态需要提前初始化
const keysToInitialize = [
  'personal-info-tel',
  'personal-info-wechat',
  'personal-info-qq',
  'personal-info-email',
  'personal-info-address',
  'personal-info-name',
  'personal-info-id',
  'personal-info-gender',
  'personal-info-age',
  'personal-info-education',
  'personal-info-career',
  'personal-info-birth',
  'personal-info-collage',
  'personal-info-major',
  'personal-info-industry',
  'personal-info-company',
  'personal-info-position',
] as Material[]

const initializedStates: { [key: string]: Status } = {}

keysToInitialize.forEach((key) => {
  const defaultStatus = defaultStatusMap[key]()
  updateInitStatusBeforeAdd(defaultStatus, key)
  initializedStates[key] = defaultStatus
})
export const useMaterialStore = defineStore('materialStore', {
  state: (): MaterialState => ({
    currentMaterialCom: 'single-select',
    coms: {
      'single-select': defaultStatusMap['single-select'](),
      'single-pic-select': defaultStatusMap['single-pic-select'](),
      'text-note': defaultStatusMap['text-note'](),
      'multi-select': defaultStatusMap['multi-select'](),
      'option-select': defaultStatusMap['option-select'](),
      'multi-pic-select': defaultStatusMap['multi-pic-select'](),
      'text-input': defaultStatusMap['text-input'](),
      'rate-score': defaultStatusMap['rate-score'](),
      'date-time': defaultStatusMap['date-time'](),
        'personal-info-name': initializedStates['personal-info-name'],
      'personal-info-id': initializedStates['personal-info-id'],
      'personal-info-tel': initializedStates['personal-info-tel'],
      'personal-info-wechat': initializedStates['personal-info-wechat'],
      'personal-info-qq': initializedStates['personal-info-qq'],
      'personal-info-email': initializedStates['personal-info-email'],
      'personal-info-address': initializedStates['personal-info-address'],
      'personal-info-gender': initializedStates['personal-info-gender'],
      'personal-info-age': initializedStates['personal-info-age'],
      'personal-info-education': initializedStates['personal-info-education'],
      'personal-info-career': initializedStates['personal-info-career'],
      'personal-info-birth': initializedStates['personal-info-birth'],
      'personal-info-collage': initializedStates['personal-info-collage'],
      'personal-info-major': initializedStates['personal-info-major'],
      'personal-info-industry': initializedStates['personal-info-industry'],
      'personal-info-company': initializedStates['personal-info-company'],
      'personal-info-position': initializedStates['personal-info-position'],

    },
  }),
  actions: {
    setCurrentMaterialCom(comName: string) {
      this.currentMaterialCom = comName;
    },
    // 编辑器状态更新
    setTextStatus,
    addOption,
    removeOption,
    setPosition,
    setSize,
    setItalic,
    setWeight,
    setColor,
    setPicLinkByIndex,
    setCurrentStatus,
    setOptionsStatusByIndex,
    setUse,
    setTextType
  },
});

// 导出仓库类型
export type MaterialStore = ReturnType<typeof useMaterialStore>;