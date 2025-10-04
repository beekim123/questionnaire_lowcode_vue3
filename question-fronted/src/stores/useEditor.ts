// 该仓库用于存储画布的状态

import { defineStore } from 'pinia';
import type { Status } from '@/types';
import { isSurveyComName } from '@/types';
import {
  setTextStatus,
  addOption,
  removeOption,
  setPosition,
  setCurrentStatus,
  setPicLinkByIndex,
} from './actions';

export const useEditorStore = defineStore('editor', {
  state: () => ({
    currentComponentIndex: -1, // 当前选中的组件索引，一开始都没有选中，所以是-1
    surveyCount: 0, // 问卷题目的数量
    coms: [] as Status[], // 问卷题目的数组
  }),
  actions: {
    setTextStatus,
    addOption,
    removeOption,
    setPosition,
    setCurrentStatus,
    setPicLinkByIndex,
    addCom(newCom: Status) {
      this.coms.push(newCom);
      this.currentComponentIndex = -1;
      if (isSurveyComName(newCom.name)) this.surveyCount++;
    },
  },
});
