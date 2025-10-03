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
    <div class="flex wrap">
      <el-checkbox-group v-model="checkboxValue" class="flex wrap" @click.stop @change="emitAnswer">
        <el-checkbox
          v-for="(item, index) in computedState.options"
          class="picOption flex mb-15"
          :value="item.picTitle"
          :key="index"
        >
          <PicItem :key="index" v-bind="{ ...item, index }" />
        </el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  getTextStatus,
  getValueStatus,
  getStringStatusByCurrentStatus,
  getCurrentStatus,
} from '@/utils'
import MaterialsHeader from '@/components/SurveyComs/Common/MaterialsHeader.vue'
import PicItem from '@/components/SurveyComs/Common/PicItem.vue'
// 类型
import type { OptionsStatus, PicTitleDescStatusArr } from '@/types'
const props = defineProps<{
  status: OptionsStatus
  serialNum: number
}>()
const emits = defineEmits(['updateAnswer'])
const checkboxValue = ref<string[]>([])
const computedState = computed(() => ({
  title: getTextStatus(props.status.title),
  desc: getTextStatus(props.status.desc),
  options: getValueStatus(props.status.options) as PicTitleDescStatusArr,
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

<style scoped>
.picOption {
  height: auto;
  flex-direction: column-reverse;
}
</style>
