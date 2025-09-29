<template>
  <div key="id">
    <div class="flex align-items-center mb-10">
      <div class="mr-10">选项</div>
      <el-button size="small" circle :icon="Plus" @click="addOptionHandle" />
    </div>
    <div v-for="(item, index) in status" :key="index" class="flex align-items-center">
      <el-input placeholder="选项" class="mt-5 mb-5" v-model="textArr[index]" />
      <el-button
        type="danger"
        class="ml-10"
        size="small"
        :icon="Minus"
        circle
        @click="removeOption(index)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
import { Plus, Minus } from '@element-plus/icons-vue';
import type { VueComType, UpdateStatusType } from '@/types';
const props = defineProps<{
  status: string[];
  isShow: boolean;
  configKey: string;
  editCom: VueComType;
  id: string;
}>();

const textArr = ref(props.status);
const updateStatus = inject<UpdateStatusType>('updateStatus');

const addOptionHandle = () => {
  if (updateStatus) {
    updateStatus(props.configKey);
  }
};

const removeOption = (index: number) => {
  if (updateStatus) {
    updateStatus(props.configKey, index);
  }
};
</script>

<style scoped></style>
