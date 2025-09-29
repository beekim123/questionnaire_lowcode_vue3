<template>
  <ButtonGroup :title="`${configKey === 'titleColor' ? '标题' : '描述'}颜色`" :status="status">
    <el-color-picker v-model="text" @update:modelValue="inputHandle" />
  </ButtonGroup>
</template>

<script setup lang="ts">
import type { VueComType } from '@/types'
import { inject, ref } from 'vue'
import ButtonGroup from './ButtonGroup.vue'
// 定义类型
import type { UpdateStatusType } from '@/types'

// 定义 props
const props = defineProps<{
  status: string
  isShow: boolean
  configKey: string
  editCom: VueComType
}>()


// 注入 updateStatus
const updateStatus = inject<UpdateStatusType>('updateStatus')

// 定义响应式变量
const text = ref(props.status)

// 监听输入事件并更新状态
function inputHandle(newVal: string) {
  text.value = newVal // 更新绑定的值
  if (updateStatus) {
    updateStatus(props.configKey, newVal)
  }
}
</script>
