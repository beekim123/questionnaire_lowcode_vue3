<template>
  <div key="id">
    <div class="mb-10">描述内容</div>
    <el-input
      :rows="5"
      type="textarea"
      placeholder="请输入题目标题"
      v-model="text"
      @update:modelValue="inputHandle"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
import type { VueComType, UpdateStatusType } from '@/types';
const props = defineProps<{
  status: string;
  isShow: boolean;
  configKey: string;
  editCom: VueComType;
  id: string;
}>();

const text = ref(props.status);
const updateStatus = inject<UpdateStatusType>('updateStatus');

function inputHandle(newVal: string) {
  if (updateStatus) {
    updateStatus(props.configKey, newVal);
  }
}
</script>
