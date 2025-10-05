<template>
  <div ref="centerContainer" class="center-container">
    <draggable v-model="store.coms" item-key="index" @start="dragstart">
      <template #item="{ element, index }">
        <div
          class="content mb-10 relative"
          :class="{
            active: store.currentComponentIndex === index,
          }"
          @click="clickHandle(index)"
          :key="element.id"
          :ref="(el) => (componentsRefs[index] = el)"
        >
          <component :is="element.type" :status="element.status" :serialNum="serialNum[index]" />
          <!-- 删除按钮 -->
          <div class="absolute delete-btn" v-show="store.currentComponentIndex === index">
            <el-button
              type="danger"
              class="ml-10"
              size="small"
              :icon="Close"
              circle
              @click.stop="removeCom(index)"
            />
          </div>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref,computed,type ComponentPublicInstance } from 'vue';
import { useEditorStore } from '@/stores/useEditor';
import { ElMessage, ElMessageBox } from 'element-plus';
import { Close } from '@element-plus/icons-vue';
import type { EventBusType, EditorStore } from '@/types';
// 拖动组件
import draggable from 'vuedraggable';
// 事件总监
import EventBus from '@/utils/eventBus';
// 组合式函数
import { useSurveyNo } from '@/utils/hooks';

// 获取题目编号
const serialNum = computed(() => useSurveyNo(store.coms).value);

const store = useEditorStore() as unknown as EditorStore;
const centerContainer = ref<HTMLElement | null>(null);
const componentsRefs = ref<(Element | ComponentPublicInstance | null)[]>([]);

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

const scrollToCenter = (index: number) => {
  nextTick(() => {
    const element = componentsRefs.value[index]; // 获取当前题目的dom元素
    // 判断当前元素是否是HTMLElement
    if (element instanceof HTMLElement) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  });
};
// 通过事件总线提供滚动方法给外部调用
(EventBus as EventBusType).on('scrollToBottom', scrollToBottom);
(EventBus as EventBusType).on('scrollToCenter',  scrollToCenter);

// 通过事件总线提供滚动方法给外部调用
(EventBus as EventBusType).on('scrollToBottom', scrollToBottom);
const clickHandle = (index: number) => {
  if (store.currentComponentIndex === index) {
    store.setCurrentComponentIndex(-1);
  } else {
    store.setCurrentComponentIndex(index);
  }
};

const dragstart = () => {
  store.setCurrentComponentIndex(-1);
};
// 删除选中的组件
const removeCom = (index: number) => {
  ElMessageBox.confirm('确定删除该组件吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(() => {
      store.removeCom(index);
      store.setCurrentComponentIndex(-1);
      ElMessage.success('删除成功');
    })
    .catch(() => {
      ElMessage.info('已取消删除');
    });
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
