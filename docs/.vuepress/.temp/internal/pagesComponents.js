import { defineAsyncComponent } from 'vue'

export const pagesComponents = {
  "/guide.html": defineAsyncComponent(() => import(/* webpackChunkName: "v-5d7259d4" */"C:/Users/lcorbella/Desktop/test-vue/my-library/docs/.vuepress/.temp/pages/guide.html.vue")),
  "/": defineAsyncComponent(() => import(/* webpackChunkName: "v-8daa1a0e" */"C:/Users/lcorbella/Desktop/test-vue/my-library/docs/.vuepress/.temp/pages/index.html.vue")),
  "/404.html": defineAsyncComponent(() => import(/* webpackChunkName: "v-3706649a" */"C:/Users/lcorbella/Desktop/test-vue/my-library/docs/.vuepress/.temp/pages/404.html.vue")),
}
