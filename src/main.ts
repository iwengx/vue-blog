import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router/index';
import { createPinia } from 'pinia';
import { VueShowdownPlugin } from 'vue-showdown';
const app = createApp(App);

app.use(VueShowdownPlugin, {
   // 在这里设置插件选项
   flavor: 'github',
   tag: 'span',
   options: {
      emoji: true,
   },
});

app.use(createPinia());
app.use(router);
app.mount('#app');
