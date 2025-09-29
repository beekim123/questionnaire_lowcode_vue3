import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// 引入 ElementPlus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// 中文化的支持
import zhCn from 'element-plus/es/locale/lang/zh-cn';

// 引入样式
import './assets/css/index.scss';

// 引入 Font Awesome 图标库
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

const app = createApp(App);

// 将所有 solid 图标添加到库中
library.add(fas);
// 注册一个fontawesome图标组件
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(createPinia());
app.use(router);
app.use(ElementPlus, {
  locale: zhCn,
});

app.mount('#app');
