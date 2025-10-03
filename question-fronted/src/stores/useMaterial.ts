// 组件市场里面所有组件状态的仓库
import { defineStore } from 'pinia';
import { defaultStatusMap } from '@/configs/defaultStatus/defaultStatusMap';
import { setTextStatus, addOption, removeOption, setPosition, setSize, setItalic, setWeight, setColor, setPicLinkByIndex, setCurrentStatus } from './actions';

// 定义组件状态类型
type ComponentStatus = ReturnType<typeof defaultStatusMap[keyof typeof defaultStatusMap]>;

// 定义仓库状态类型
interface MaterialState {
  currentMaterialCom: string;
  coms: Record<string, ComponentStatus>;
}

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
    setCurrentStatus
  },
});

// 导出仓库类型
export type MaterialStore = ReturnType<typeof useMaterialStore>;