<template>
  <ButtonGroup title="日期类型" :status="status[currentStatus].status">
    <el-select @change="changeType" placeholder="日期类型" style="width: 100px"  v-model="value">
      <el-option
        v-for="item in status"
        :key="item.value"
        :label="item.status"
        :value="item.value"
      />
    </el-select>
  </ButtonGroup>
</template>

<script setup lang="ts">
import type { VueComType, UpdateStatus, ValueStatusArr } from '@/types'
import { inject ,ref} from 'vue'
import ButtonGroup from './ButtonGroup.vue'
const updateStatus = inject<UpdateStatus>('updateStatus')
const props = defineProps<{
  currentStatus: number
  status: ValueStatusArr
  isShow: boolean
  configKey: string
  editCom: VueComType
}>()
const value =ref('')
const typeArr = props.status.map((item) => item.value)
function changeType(newVal: string) {
  value.value = newVal
  if (updateStatus) {
    const payload = typeArr.indexOf(newVal)
    console.log(props.configKey, payload);
    
    updateStatus(props.configKey, payload)
  } else {
    console.warn('updateStatus is not provided')
  }
}
</script>
