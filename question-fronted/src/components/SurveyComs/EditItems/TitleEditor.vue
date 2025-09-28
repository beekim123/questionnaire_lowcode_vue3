<template>
  <div key="id">
    <div class="mb-10">标题内容</div>
    <el-input placeholder="请输入题目标题" v-model="text" @update:modelValue="inputHandle" />
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
import type { VueComType } from '@/types';
const props = defineProps<{
  status: string;
  isShow: boolean;
  configKey: string;
  editCom: VueComType;
  id: string;
}>();

const text = ref(props.status);

type UpdateStatusType=(configKey: string, payload?: number | string | boolean | object | undefined)=>void
const updateStatus = inject<UpdateStatusType>('updateStatus');

function inputHandle(newVal: string) {
  if (updateStatus) {
    updateStatus(props.configKey, newVal);
  }
}
</script>
