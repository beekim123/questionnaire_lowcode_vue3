<template>
  <div>
    <div
      class="survey-com-item-container pointer flex justify-content-center align-items-center self-center pl-10 pr-10 mb-10"
      @click="addSurveyCom"
    >
      {{ item.comName }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { defaultStatusMap } from '@/configs/defaultStatus/defaultStatusMap';
import { updateInitStatusBeforeAdd } from '@/utils';
import type { Material, Status } from '@/types';
import { useEditorStore } from '@/stores/useEditor';
const store = useEditorStore();
// 事件总线
import EventBus from '@/utils/eventBus';

const props = defineProps(['item']);
const addSurveyCom = () => {
  const newSurveyComName = props.item.materialName as Material;
  if (!newSurveyComName) {
    console.warn('请先选择题型');
    return;
  }
  const newSurveyComStatus = defaultStatusMap[newSurveyComName]() as Status;
  updateInitStatusBeforeAdd(newSurveyComStatus, newSurveyComName);
  store.addCom(newSurveyComStatus);
  // 每次添加了新的组件，都要滚动到底部
  EventBus.emit('scrollToBottom');
};
</script>

<style scoped lang="scss">
.survey-com-item-container {
  width: 60px;
  height: 30px;
  background-color: var(--background-color);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
  color: var(--font-color-light);
  user-select: none;
}
.survey-com-item-container:hover {
  background-color: var(--font-color-lightest);
}
</style>
