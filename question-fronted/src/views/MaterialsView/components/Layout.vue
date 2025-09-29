<template>
  <div class="layout-container flex">
    <!-- 选择具体的业务组件 -->
    <div class="left flex wrap space-between">
      <slot />
    </div>
    <!-- 显示对应的业务组件 -->
    <div class="center">
      <Router-View v-slot="{ Component }">
        <component :is="Component" :status="store.coms[store.currentMaterialCom].status" :serialNum="1" />
      </Router-View>
    </div>
    <!-- 编辑面板 -->
    <div class="right">
       <EditPannel :com="currentCom" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed,provide } from 'vue';
import { useMaterialStore } from '@/stores/useMaterial';
import EditPannel from '@/components/SurveyComs/EditItems/EditPannel.vue';
import { ElMessage } from 'element-plus';
import type { OptionsProps, PicLink } from '@/types/index';
import { isPicLink } from '@/types/index';

// 数据仓库
const store = useMaterialStore();


// 获取当前选中组件的状态数据
const currentCom  = computed(() => store.coms[store.currentMaterialCom as string]);

const updateStatus = (configKey: string, payload?: number | string | boolean | object | undefined) => {
  // 拿到新的状态数据之后，就应该去修改仓库里面的数据
  switch (configKey) {
    case 'title':
    case 'desc': {
      if (typeof payload !== 'string') {
        console.error('Invalid payload type for "title or desc". Expected string.');
      }
      console.log(currentCom.value.status);
      store.setTextStatus(currentCom.value.status[configKey], payload as string);
    }
    case 'options': {
      if (typeof payload === 'number') {
        console.log(typeof currentCom.value.status[configKey]);
        
        // 说明是删除选项
        const result = store.removeOption(currentCom.value.status[configKey] as OptionsProps, payload);
        if (result) ElMessage.success('删除成功');
        else ElMessage.error('至少保留两个选项');
      }else if (typeof payload === 'object' && isPicLink(payload)) {
        // 说明是在设置图片的链接
        store.setPicLinkByIndex(currentCom.value.status[configKey] as OptionsProps, payload);
      }
       else {
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
      store.setItalic(currentCom.value.status[configKey], payload)
      break
    case 'titleWeight':
    case 'descWeight':
      if (typeof payload !== 'number') {
        console.error('Invalid payload type for "type". Expected string.')
        return
      }
      store.setWeight(currentCom.value.status[configKey], payload)
      break
    case 'titleColor':
    case 'descColor':
      if (typeof payload !== 'string') {
        console.error('Invalid payload type for "type". Expected string.')
        return
      }
      store.setColor(currentCom.value.status[configKey], payload)
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
.layout-container {
  width: 100%;
  // Header组件高度50px，h1高度50px，上下margin 20px，最后20px是额外多减去一部分，避免贴底
  height: calc(100vh - 100px - 40px - 20px);
  align-items: flex-start;
  border: 1px solid var(--border-color);
  border-top-right-radius: var(--border-radius-lg);
  border-bottom-left-radius: var(--border-radius-lg);
  border-bottom-right-radius: var(--border-radius-lg);
}

.left {
  width: 180px;
  text-align: center;
  align-items: flex-start;
  padding: 20px;
}

.center {
  width: 550px;
  // 多减去的60px是上下的padding，，最后20px是额外多减去一部分，避免贴底
  height: calc(100vh - 100px - 40px - 60px - 20px);
  overflow-y: scroll;
  padding: 30px;
  border-left: 1px solid var(--border-color);
}

.right {
  width: 350px;
  height: calc(100vh - 100px - 40px - 20px);
  overflow-y: scroll;
  border-left: 1px solid var(--border-color);
}
</style>
