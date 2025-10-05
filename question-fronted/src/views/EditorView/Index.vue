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
import { computed } from 'vue';
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
const route = useRoute();
const store = useEditorStore();
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
