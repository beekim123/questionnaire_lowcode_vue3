<template>
  <div>
    <div class="header">
      <Header :isEditor="true" :id="id" />
    </div>
    <!-- 编辑器主体区域 -->
    <div class="container">
      <LeftSide />
      <RightSide />
    </div>
    <div>
      <Center />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue';
import Header from '@/components/Common/Header.vue';
import LeftSide from '@/views/EditorView/LeftSide/Index.vue';
import Center from '@/views/EditorView/Center.vue';
import RightSide from '@/views/EditorView/RightSide.vue';
// 仓库
import { useEditorStore } from '@/stores/useEditor';
import { getSurveyById } from '@/db/operation';
import { restoreComponentStatus } from '@/utils';
// 路由
import { useRoute } from 'vue-router';
import { ElMessage } from 'element-plus';
import type { PicLink, OptionsProps,EditorStore } from '@/types';
import { isPicLink, isOptionsStatusByIndexPayload,hasType } from '@/types';
import { setType } from '@/stores/useDispatch';
const route = useRoute();
const store = useEditorStore() as unknown as EditorStore;
store.resetComs();

const id = computed(() => (route.params.id ? String(route.params.id) : ''));
if (id.value) {
  getSurveyById(Number(id.value)).then((res) => {
    if (res) {
      restoreComponentStatus(res.coms);
      store.setStore(res);
    }
  });
}


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
          if(store.currentComponentIndex == -1){
            console.error('请先选择一个组件');
            return
          }
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
      store.setColor(currentCom.value.status[configKey], payload as string)
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
.header {
  width: 100%;
  background-color: var(--white);
  position: fixed;
  top: 0;
  z-index: 10;
}
.container {
  width: calc(100vw - 40px);
  padding: 20px;
  // Header的高度50px，上下padding 20px
  height: calc(100vh - 50px - 40px);
  background: url('@/assets/imgs/editor_background.png');
  position: fixed;
  top: 50px;
}
</style>
