<template>
  <div class="right-side-container">
    <div
      v-if="store.currentComponentIndex === -1"
      class="content flex justify-content-center align-items-center"
    >
      点击题型进行编辑
    </div>
    <div v-else>
      <EditPannel :com="currentCom" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue';
// 仓库
import { useEditorStore } from '@/stores/useEditor';
import EditPannel from '@/components/SurveyComs/EditItems/EditPannel.vue';
import { ElMessage } from 'element-plus';
import type { PicLink, OptionsProps, EditorStore } from '@/types';
import { isPicLink, isOptionsStatusByIndexPayload,hasType } from '@/types';
import { setType } from '@/stores/useDispatch';

// import { changeEditorIsShowStatus } from '@/utils';

// 数据仓库
const store = useEditorStore() as unknown as EditorStore;

const currentCom = computed(() => store.coms[store.currentComponentIndex]);

const updateStatus = (configKey: string, payload: number | string | boolean|object, isShowChange: boolean = false) => {
  // 拿到新的状态数据之后，就应该去修改仓库里面的数据
  switch (configKey) {
    case 'type': {
       if ( hasType(currentCom.value.status)) {
        if (typeof payload === 'number') {
          // 说明是切换类型
          if (isShowChange) {
            setType(currentCom.value.status, payload)
          }
          store.setTextType(currentCom.value.status[configKey], payload)
          console.log(currentCom.value.status[configKey]);
          
        }
      }
      break;
    }
    case 'title':
    case 'desc': {
      if (typeof payload !== 'string') {
        console.error('Invalid payload type for "title or desc". Expected string.');
      }
      store.setTextStatus(currentCom.value.status[configKey], payload as string);
    }
    case 'options': {
      if (typeof payload === 'number') {
        console.log(typeof currentCom.value.status[configKey]);

        // 说明是删除选项
        const result = store.removeOption(currentCom.value.status[configKey] as OptionsProps, payload);
        if (result) ElMessage.success('删除成功');
        else ElMessage.error('至少保留两个选项');
      } else if (typeof payload === 'boolean') {
        store.setUse(currentCom.value.status[configKey] as OptionsProps, payload)
      }
      else if (typeof payload === 'object' && isOptionsStatusByIndexPayload(payload)) {


        store.setOptionsStatusByIndex(currentCom.value.status[configKey] as OptionsProps, payload)
      }
      else if (typeof payload === 'object' && isPicLink(payload)) {
        // 说明是在设置图片的链接
        store.setPicLinkByIndex(currentCom.value.status[configKey] as OptionsProps, payload);
      }
      else {
        console.log(99);

        // 说明是新增选项
        store.addOption(currentCom.value.status[configKey] as OptionsProps);
      }
    }
    case 'position': {
      console.log(payload);

      if (typeof payload !== 'number') {
        console.error('Invalid payload type for "position". Expected number.');
      }
      store.setPosition(currentCom.value.status[configKey] as OptionsProps, payload as number);
    }
    case 'titleSize':
    case 'descSize': {
      if (typeof payload !== 'number') {
        console.error('Invalid payload type for "titleSize or descSize". Expected number.');
      }
      store.setSize(currentCom.value.status[configKey] as OptionsProps, payload as number);
    }
    case 'titleSize':
    case 'descSize':
      if (typeof payload !== 'number') {
        console.error('Invalid payload type for "type". Expected string.')
        return
      }
      store.setSize(currentCom.value.status[configKey] as OptionsProps, payload as number);
      break
    case 'titleItalic':
    case 'descItalic':
      if (typeof payload !== 'number') {
        console.error('Invalid payload type for "type". Expected string.')
        return
      }
      store.setItalic(currentCom.value.status[configKey] as OptionsProps, payload as unknown as boolean)
      break
    case 'titleWeight':
    case 'descWeight':
      if (typeof payload !== 'number') {
        console.error('Invalid payload type for "type". Expected string.')
        return
      }
      store.setWeight(currentCom.value.status[configKey] as unknown as OptionsProps, payload as number)
      break
    case 'titleColor':
    case 'descColor':
      if (typeof payload !== 'string') {
        console.error('Invalid payload type for "type". Expected string.')
        return
      }
      store.setColor(currentCom.value.status[configKey] as unknown as OptionsProps, payload)
      break
  }
};

const getLink = (link: PicLink) => {
  updateStatus('options', link);
};

provide('updateStatus', updateStatus);
provide('getLink', getLink);
</script>

<style scoped lang="scss">
.right-side-container {
  width: 320px;
  height: calc(100vh - 50px - 40px);
  position: fixed;
  right: 20px;
  top: 70px;
  background-color: var(--white);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  overflow-y: scroll;
}
.content {
  height: 100%;
}
</style>
