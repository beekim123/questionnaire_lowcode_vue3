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
    <el-input
      v-if="computedState.type === 0"
      v-model="inputValue"
      @click.stop
      @input="emitAnswer"
    />
    <el-input
      v-else
      :rows="5"
      type="textarea"
      v-model="inputValue"
      @click.stop
      @input="emitAnswer"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { getTextStatus, getStringStatusByCurrentStatus, getCurrentStatus } from '@/utils'
import MaterialsHeader from '@/components/SurveyComs/Common/MaterialsHeader.vue'
// 类型
import type { TypeStatus } from '@/types'
const props = defineProps<{
  status: TypeStatus
  serialNum: number
}>()
const emits = defineEmits(['updateAnswer'])
const inputValue = ref<string>('')

const computedState = computed(() => ({
  type: getCurrentStatus(props.status.type),
  title: getTextStatus(props.status.title),
  desc: getTextStatus(props.status.desc),
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
  emits('updateAnswer', inputValue.value)
}
</script>
