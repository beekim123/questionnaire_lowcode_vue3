<template>
  <ButtonGroup
    :title="`${configKey === 'titleItalic' ? '标题' : '描述'}倾斜`"
    :status="status[currentStatus]"
  >
    <el-button-group>
      <el-button
        :class="{
          select: currentStatus === 0,
        }"
        @click="changeFontItalic(0)"
      >
        <font-awesome-icon icon="italic" size="lg" />
      </el-button>
      <el-button
        :class="{
          select: currentStatus === 1,
        }"
        @click="changeFontItalic(1)"
      >
        <font-awesome-icon icon="italic" size="xs" />
      </el-button>
    </el-button-group>
  </ButtonGroup>
</template>

<script setup lang="ts">
import type { VueComType, UpdateStatusType } from '@/types'
import { inject } from 'vue'
import ButtonGroup from './ButtonGroup.vue'
const updateStatus = inject<UpdateStatusType>('updateStatus')
const props = defineProps<{
  currentStatus: number
  status: string[]
  isShow: boolean
  configKey: string
  editCom: VueComType
}>()
function changeFontItalic(pos: number) {
  if (updateStatus) {
    updateStatus(props.configKey, pos)
  } else {
    console.warn('updateStatus is not provided')
  }
}
</script>
