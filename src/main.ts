import { createApp } from 'vue';
import { Quasar } from 'quasar';
import App from './App.vue';
import router from './router';
import 'quasar/src/css/index.sass';

const app = createApp(App);

app.use(Quasar, {
  plugins: {},
});
app.use(router);

app.mount('#app');
