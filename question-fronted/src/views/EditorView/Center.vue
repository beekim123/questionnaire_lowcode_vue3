<template>
  <div ref="centerContainer" class="center-container">
    <div v-for="(item, index) in store.coms" :key="index" class="content mb-10 relative" :class="{
      active: store.currentComponentIndex === index,
    }" @click="clickHandle(index)">
      <component :is="item.type" :status="item.status" :serialNum="1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue';
import { useEditorStore } from '@/stores/useEditor';
import type { EventBusType, EditorStore } from '@/types';
// 事件总监
import EventBus from '@/utils/eventBus';

const store = useEditorStore() as unknown as EditorStore;
const centerContainer = ref<HTMLElement | null>(null);

const scrollToBottom = () => {
  nextTick(() => {
    const container = centerContainer.value; // 获取容器的dom元素
    if (container) {
      window.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth',
      });
    }
  });
};
// 通过事件总线提供滚动方法给外部调用
(EventBus as EventBusType).on('scrollToBottom', scrollToBottom);
const clickHandle = (index: number) => {
  if (store.currentComponentIndex === index) {
    store.setCurrentComponentIndex(-1);
  } else {
    store.setCurrentComponentIndex(index);
  }
};
</script>

<style scoped>
.center-container {
  width: 50%;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  margin: 70px auto;
  padding: 20px;
  background: var(--white);
  position: relative;

  .content {
    cursor: pointer;
    padding: 10px;
    background-color: var(--white);
    border-radius: var(--border-radius-sm);

    &:hover {
      transform: scale(1.01);
      transition: 0.5s;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  }
}

.active {
  transform: scale(1.01);
  transition: 0.5s;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.delete-btn {
  right: -5px;
  top: -10px;
}
</style>
