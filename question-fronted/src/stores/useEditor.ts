// 该仓库用于存储画布的状态
import { defineStore } from 'pinia';
import type { Status } from '@/types';
import { isSurveyComName } from '@/types';
import {
  addOption,
  removeOption,
  setPosition,
  setSize,
  setWeight,
  setItalic,
  setColor,
  setTextType,
  setTextStatus,
  setUse,
  setOptionsStatusByIndex,
  setPicLinkByIndex,
  setCurrentStatus
} from '@/stores/actions'

export const useEditorStore = defineStore('editor', {
  state: () => ({
    currentComponentIndex: -1, // 当前选中的组件索引，一开始都没有选中，所以是-1
    surveyCount: 0, // 问卷题目的数量
    coms: [] as Status[], // 问卷题目的数组
  }),
   actions: {
    setCurrentComponentIndex(index: number) {
      this.currentComponentIndex = index
    },
    setCurrentStatus,
    // 新增一个业务组件
    addOption,
    removeOption,
    setPosition,
    setSize,
    setWeight,
    setItalic,
    setColor,
    setTextType,
    setTextStatus,
    setUse,
    setOptionsStatusByIndex,
    setPicLinkByIndex,
    // 新增题目的时候，也需要取消聚焦
    addCom(newCom: Status) {
      this.coms.push(newCom);
      this.currentComponentIndex = -1;
      if (isSurveyComName(newCom.name)) this.surveyCount++;
    },
   
  },
});
