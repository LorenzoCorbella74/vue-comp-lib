import { Vuepress } from '@vuepress/client/lib/components/Vuepress'
import pageRoutes0 from 'C:/Users/lcorbella/Desktop/test-vue/my-library/docs/.vuepress/.temp/internal/pageRoutes/v-5d7259d4.js'
import pageRoutes1 from 'C:/Users/lcorbella/Desktop/test-vue/my-library/docs/.vuepress/.temp/internal/pageRoutes/v-8daa1a0e.js'
import pageRoutes2 from 'C:/Users/lcorbella/Desktop/test-vue/my-library/docs/.vuepress/.temp/internal/pageRoutes/v-3706649a.js'

export const pagesRoutes = [
  ...pageRoutes0,
  ...pageRoutes1,
  ...pageRoutes2,
  {
    name: "404",
    path: "/:catchAll(.*)",
    component: Vuepress,
  },
]
