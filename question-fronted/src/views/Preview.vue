<template>
  <div class="preview-container pb-40">
    <div class="center mc">
      <!-- 上面的按钮组 -->
      <div class="button-group flex space-between align-items-center ">
        <!-- 左边按钮 -->
        <div class="flex space-between no-print">
          <el-button type="danger" @click="gobackHandle">返回</el-button>
          <el-button type="success" @click="genQuiz">生成在线问卷</el-button>
          <el-button type="warning" @click="genPDF">生成本地PDF</el-button>
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
     <el-dialog v-model="dialogVisible" title="在线问卷" width="500">
    分享链接: <a :href="quizLink" target="_blank">{{ quizLink }}</a>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="copyLink">复制链接</el-button>
      </div>
    </template>
  </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
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

import { canUsedForPDF } from '@/types';
import { ElMessage } from 'element-plus';
import { v4 as uuidv4 } from 'uuid';

// 控制弹出框是否显示
const dialogVisible = ref(false);
const quizLink = ref(''); // 存储生成的在线答题的链接

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


// 生成PDF
const genPDF = () => {
  // 1. 检查：检查当前的问卷是否存在不适合生成PDF的业务组件
  const result = store.coms.every((item) => canUsedForPDF(item.name));
  if (!result) {
    ElMessage.warning('当前问卷中存在不支持生成PDF的业务组件，请检查后再试！');
    return;
  }
  // 2. 开始生成PDF
  // 注意：关于生成PDF，解决方案非常的多，可以前端来生成PDF，也可以服务器端来生成PDF
  // 无论是前端还是后端，解决方案都不止一种
  // 因为我们这里生成PDF的需求很简单，所以我们选择使用浏览器的接口来生成PDF
  window.print();
};

// 生成在线问卷
const genQuiz = () => {
  // 1. 首先将问卷的数据传递到服务器端，服务器端存储到内存中
  const id = uuidv4();
  // 将问卷内容和id传递给服务器
  fetch('/api/saveQuiz', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      quizData: {
        coms: JSON.stringify(store.coms),
        surveyCount: store.surveyCount,
      },
    }),
  });
  // 2. 将弹出框显示出来
  quizLink.value = `${window.location.origin}/quiz/${id}`;
  dialogVisible.value = true;
};

// 复制在线答题的链接
const copyLink = () => {
  dialogVisible.value = false;
  navigator.clipboard.writeText(quizLink.value);
  ElMessage.success('在线答题的链接已复制');
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
// 这是一个媒体查询，表示在打印的时候，会应用 no-print 以及 no-border 类
@media print {
  .no-print {
    display: none;
  }
  .no-border {
    border: none;
    box-shadow: none;
  }
}
</style>
