<template>
  <div
    :class="{
      'text-center': computedState.position,
    }"
  >
    <MaterialsHeader
      :serialNum="serialNum"
      :title="computedState.title"
      :titleSize="computedState.titleSize"
      :titleWeight="computedState.titleWeight"
      :titleItalic="computedState.titleItalic"
      :titleColor="computedState.titleColor"
      :desc="computedState.desc"
      :descSize="computedState.descSize"
      :descWeight="computedState.descWeight"
      :descItalic="computedState.descItalic"
      :descColor="computedState.descColor"
    />
    <el-rate
      v-model="rateValue"
      :texts="computedState.options"
      :show-text="status?.options?.isUse"
      size="large"
      allow-half
      clearable
      @click.stop
      @change="emitAnswer"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  getTextStatus,
  getStringStatusByCurrentStatus,
  getCurrentStatus,
  getStringStatus,
} from '@/utils'
import MaterialsHeader from '@/components/SurveyComs/Common/MaterialsHeader.vue'
// 类型
import type { OptionsStatus } from '@/types'
const props = defineProps<{
  status: OptionsStatus
  serialNum: number
}>()
const emits = defineEmits(['updateAnswer'])
const rateValue = ref<number>(3)

const computedState = computed(() => ({
  title: getTextStatus(props.status.title),
  desc: getTextStatus(props.status.desc),
  options: getStringStatus(props.status.options),
  position: getCurrentStatus(props.status.position),
  titleSize: getStringStatusByCurrentStatus(props.status.titleSize),
  descSize: getStringStatusByCurrentStatus(props.status.descSize),
  titleWeight: getCurrentStatus(props.status.titleWeight),
  descWeight: getCurrentStatus(props.status.descWeight),
  titleItalic: getCurrentStatus(props.status.titleItalic),
  descItalic: getCurrentStatus(props.status.descItalic),
  titleColor: getTextStatus(props.status.titleColor),
  descColor: getTextStatus(props.status.descColor),
}))
const emitAnswer = () => {
  emits('updateAnswer', rateValue.value)
}
</script>

<style scoped lang="scss"></style>
