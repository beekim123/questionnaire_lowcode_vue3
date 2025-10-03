<template>
  <ButtonGroup title="文本类型" :status="status[currentStatus]">
    <el-button-group>
      <el-button
        :class="{
          select: currentStatus === 0,
        }"
        :icon="DocumentRemove"
        @click="changeType(0)"
      >
      </el-button>
      <el-button
        :class="{
          select: currentStatus === 1,
        }"
        :icon="Document"
        @click="changeType(1)"
      >
      </el-button>
    </el-button-group>
  </ButtonGroup>
</template>

<script setup lang="ts">
import { Document, DocumentRemove } from '@element-plus/icons-vue'
import type { VueComType, UpdateStatus } from '@/types'
import { inject } from 'vue'
import ButtonGroup from './ButtonGroup.vue'
const updateStatus = inject<UpdateStatus>('updateStatus')

const props = defineProps<{
  currentStatus: number
  status: string[]
  isShow: boolean
  configKey: string
  editCom: VueComType
}>()
function changeType(pos: number) {
  if (updateStatus) {
    updateStatus(props.configKey, pos)
  } else {
    console.warn('updateStatus is not provided')
  }
}
</script>

<style scoped></style>
