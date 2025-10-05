<template>
  <div @click.stop>
    <div class="container mb-10">
      <!-- 添加图片 -->
      <div class="top flex justify-content-center align-items-center">
        <el-upload
          class="avatar-uploader"
          action="/api/upload"
          name="image"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <div v-else>
            <el-icon><Upload /></el-icon>
            添加图片
          </div>
        </el-upload>
      </div>
      <!-- 图片标题和描述 -->
      <div
        class="bottom flex justify-content-center align-items-center flex-direction-column font-weight-500"
      >
        <div class="item">{{ picTitle }}</div>
        <div class="desc mt-5 mb-5">{{ picDesc }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, inject, watch } from 'vue';
import { Upload } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';
import type { UploadProps } from 'element-plus';

const props = defineProps({
  picTitle: {
    type: String,
    default: '',
  },
  picDesc: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: '',
  },
  index: {
    type: Number,
    default: 0,
  },
});
const getLink = inject<(link: { index: number; link: string }) => void>('getLink', () => {});
const imageUrl = ref('');

watch(
  () => props.value,
  async (newVal) => {
    if (newVal) {
      // 说明value里面是有链接的，发送服务器请求获取图片
      const response = await fetch(newVal);
      const blob = await response.blob();
      // 使用 blob 来创建 File 对象
      const file = new File([blob], 'image.jpg', { type: blob.type });
      imageUrl.value = URL.createObjectURL(file);
    } else {
      imageUrl.value = '';
    }
  },
  {
    immediate: true,
  },
);

// 上传成功的回调
const handleAvatarSuccess: UploadProps['onSuccess'] = async (response) => {
  // console.log(response, 'response');
  // imageUrl.value = URL.createObjectURL(uploadFile.raw!);
  if (getLink) {
    getLink({
      index: props.index,
      link: response.imageUrl,
    });
  }
};
// 上传之前的回调
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('图片大小不要超过2MB!');
    return false;
  }
  return true;
};
</script>

<style scoped lang="scss">
.container {
  width: 200px;
  height: 300px;
  border: 1px solid var(--font-color-lightest);
  border-radius: var(--border-radius-md);
  color: var(--font-color-light);
  > .top {
    width: 100%;
    height: 200px;
    background-color: var(--font-color-lightest);
  }
  > .bottom {
    height: 100px;
    font-size: var(--font-size-lg);
    > .desc {
      font-size: var(--font-size-base);
      color: var(--font-color-light);
    }
  }
}
.avatar {
  width: 200px;
  height: 200px;
  object-fit: contain;
}
</style>
