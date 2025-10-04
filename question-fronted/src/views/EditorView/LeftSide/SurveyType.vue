<template>
  <div class="survey-type-container">
    <SurveyComGroup v-for="(group, index) in SurveyComsList" :key="index" v-bind="group as any" />
  </div>
</template>

<script setup lang="ts">
import SurveyComGroup from '@/components/Editor/SurveyComGroup.vue';
import SurveyComsList from '@/configs/SurveyGroupConfig';
</script>

<style scoped lang="scss">
.survey-type-container {
  height: calc(100vh - 50px - 40px);
  overflow: hidden;
}
</style>
