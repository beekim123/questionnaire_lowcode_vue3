<template>
  <div class="right-side-container">
    <div
      v-if="store.currentComponentIndex === -1"
      class="content flex justify-content-center align-items-center"
    >
      点击题型进行编辑
    </div>
    <div v-else>
      <EditPannel :com="currentCom" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
// 仓库
import { useEditorStore } from '@/stores/useEditor';
import EditPannel from '@/components/SurveyComs/EditItems/EditPannel.vue';
import type {  EditorStore } from '@/types';
// import { changeEditorIsShowStatus } from '@/utils';

// 数据仓库
const store = useEditorStore() as unknown as EditorStore;

const currentCom = computed(() => store.coms[store.currentComponentIndex]);


</script>

<style scoped lang="scss">
.right-side-container {
  width: 320px;
  height: calc(100vh - 50px - 40px);
  position: fixed;
  right: 20px;
  top: 70px;
  background-color: var(--white);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  overflow-y: scroll;
}
.content {
  height: 100%;
}
</style>
