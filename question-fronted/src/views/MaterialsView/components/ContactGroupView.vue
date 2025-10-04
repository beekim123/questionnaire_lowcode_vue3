<template>
  <Layout>
    <Router-Link
      to="/personal-info-tel"
      class="link-item mb-15"
      exact-active-class="link-item-active"
      >手机</Router-Link
    >
    <Router-Link
      to="/personal-info-wechat"
      class="link-item mb-15"
      exact-active-class="link-item-active"
      >微信号</Router-Link
    >
    <Router-Link
      to="/personal-info-qq"
      class="link-item mb-15"
      exact-active-class="link-item-active"
      >QQ号</Router-Link
    >
    <Router-Link
      to="/personal-info-email"
      class="link-item mb-15"
      exact-active-class="link-item-active"
      >邮箱</Router-Link
    >
    <Router-Link
      to="/personal-info-address"
      class="link-item mb-15"
      exact-active-class="link-item-active"
      >地址</Router-Link
    >
  </Layout>
</template>

<script setup lang="ts">
import Layout from './Layout.vue'
</script>
