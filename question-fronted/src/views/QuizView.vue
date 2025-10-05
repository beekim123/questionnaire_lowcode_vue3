<template>
  <div v-if="quizData">
    <div class="quiz-container mc">
      <div class="mt-30 mb-20">题目数量：{{ quizData.surveyCount }}</div>
      <div class="content mb-10" v-for="(com, index) in quizData.coms" :key="index">
        <component
          :is="com.type"
          :status="com.status"
          :serialNum="serialNum[index]"
          @updateAnswer="updateAnswer(index, $event)"
        />
      </div>
      <div class="mt-20 mb-20 text-center">
        <el-button type="primary" @click="submitAnswers">提交答案</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue';
import { onMounted, ref, computed } from 'vue';
import { ElMessage } from 'element-plus';
import { useRoute } from 'vue-router';
const route = useRoute();

import type { QuizData } from '@/types';

import { restoreComponentStatus } from '@/utils';
// 组合式函数
import { useSurveyNo } from '@/utils/hooks';
// 获取题目编号
const serialNum = computed(() => useSurveyNo(quizData.value?.coms).value);

const quizData = ref<QuizData>({
  coms: [],
  surveyCount: 0,
});

onMounted(async () => {
  const quizId = route.params.id;
  // 从服务器获取试卷内容
  const response = await fetch(`/api/getQuiz/${quizId}`);
  const data = await response.json();
  data.coms = JSON.parse(data.coms);
  restoreComponentStatus(data.coms);
  quizData.value = data;
});

// 用来存储要发送服务器的答案
const answers: Ref<{ [key: number]: string | number | Date }> = ref({});

const updateAnswer = (index: number, answer: string | number) => {
  // console.log(index, answer);
  const serial = serialNum.value[index];
  if (serial !== null) {
    // 说明是题目组件
    answers.value[serial] = answer;
  }
  console.log(answers.value);
};

const submitAnswers = async () => {
  const quizId = route.params.id;
  await fetch(`/api/submitAnswers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      quizId,
      answers: answers.value,
    }),
  });
  ElMessage.success('提交成功！');
};
</script>

<style scoped lang="scss">
.quiz-container {
  width: 800px;
}
</style>
