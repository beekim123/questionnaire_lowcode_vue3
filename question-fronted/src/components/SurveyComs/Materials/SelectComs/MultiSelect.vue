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
    <el-checkbox-group v-model="checkboxValue" @click.stop @change="emitAnswer">
      <el-checkbox
        v-for="(item, index) in computedState.options"
        :value="item"
        :key="index"
        :label="item"
      />
    </el-checkbox-group>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  getTextStatus,
  getStringStatus,
  getStringStatusByCurrentStatus,
  getCurrentStatus,
} from '@/utils'
import MaterialsHeader from '@/components/SurveyComs/Common/MaterialsHeader.vue'
// 类型
import type { OptionsStatus } from '@/types'
const props = defineProps<{
  status: OptionsStatus
  serialNum: number
}>()
const emits = defineEmits(['updateAnswer'])
const checkboxValue = ref<string[]>([])
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
  emits('updateAnswer', checkboxValue.value)
}
</script>

<style scoped></style>
