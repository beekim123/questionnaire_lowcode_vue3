<template>
  <Layout>
    <Router-link class="link-item mb-15" exact-active-class="link-item-active" to="/single-select">单选题</Router-link>
    <Router-link class="link-item mb-15" exact-active-class="link-item-active" to="/multi-select">多选题</Router-link>
    <Router-link class="link-item mb-15" exact-active-class="link-item-active" to="/option-select">下拉选择</Router-link>
    <Router-link class="link-item mb-15" exact-active-class="link-item-active"
      to="/single-pic-select">图片单选题</Router-link>
    <Router-link class="link-item mb-15" exact-active-class="link-item-active"
      to="/multi-pic-select">图片多选题</Router-link>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/views/MaterialsView/components/Layout.vue';
</script>

<style scoped></style>
