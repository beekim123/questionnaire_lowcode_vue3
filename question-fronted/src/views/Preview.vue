<template>
  <div class="preview-container pb-40">
    <div class="center mc">
      <!-- 上面的按钮组 -->
      <div class="button-group flex space-between align-items-center">
        <!-- 左边按钮 -->
        <div class="flex space-between">
          <el-button type="danger" @click="gobackHandle">返回</el-button>
          <el-button type="success">生成在线问卷</el-button>
          <el-button type="warning">生成本地PDF</el-button>
        </div>
        <!-- 题目数量 -->
        <div class="mr-15">
          <el-text class="mx-1">题目数量：{{ store.surveyCount }}</el-text>
        </div>
      </div>
      <!-- 对应的问卷 -->
      <div class="content-group no-border">
        <div class="content mb-10" v-for="(com, index) in store.coms" :key="index">
          <component :is="com.type" :status="com.status" :serialNum="serialNum[index]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
import { getSurveyById } from '@/db/operation';
// 仓库
import { useEditorStore } from '@/stores/useEditor';
const store = useEditorStore();
// 工具方法
import { restoreComponentStatus } from '@/utils';
// 自定义Hook
import { useSurveyNo } from '@/utils/hooks';
// 获取序号
const serialNum = computed(() => useSurveyNo(store.coms).value);
// 获取路由参数
const id = Number(route.params.id);
// 接下来应该根据拿到的 id 去获取存储的问卷题目
if (id) {
  getSurveyById(id).then((res) => {
    if (res) {
      // 拿到数据后，组件部分需要重新还原
      restoreComponentStatus(res.coms);
      // 还原完成之后，将还原的数据设置为仓库里面的 coms 即可
      store.setStore(res);
    }
    console.log(res);
  });
}
// 返回按钮对应逻辑
const gobackHandle = () => {
  const path = history.state.from;
  if (path === 'home') {
    // 说明是从首页进来的
    router.back();
  } else {
    // 说明是从编辑页面进来的
    router.push(`/editor/${id}/survey-type`);
  }
};
</script>

<style scoped lang="scss">
.preview-container {
  width: 100vw;
  min-height: 100vh;
  background: url('@/assets/imgs/editor_background.png');
}
.center {
  width: 800px;
}
.button-group {
  width: 100%;
  height: 60px;
  top: 0;
  left: 0;
  background-color: var(--white);
  z-index: 100;
}
.content-group {
  padding: 20px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
  background: var(--white);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
</style>
