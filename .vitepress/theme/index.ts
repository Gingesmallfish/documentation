// index.JS
import mediumZoom from "medium-zoom";
import "medium-zoom/dist/style.css";
import type { Theme } from "vitepress";
import { useRoute } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import { onMounted, watch, nextTick } from "vue";
import  {ZommeOptions} from "../Types/sidebarNavTypes";
import "./tailwind.css";

export default {
  extends: DefaultTheme, 
  Layout: () => {
    return h(DefaultTheme.Layout, null, {});
  },
  enhanceApp({ app, router, siteData }) {
      // TODO 
    },
  setup() {
    //  添加以下代码 --》
    const route = useRoute();
    const options: ZommeOptions = {
        background: "var(--vp-c-bg)",
        container: document.body,
        zIndex: 9999
    }

    onMounted(() => {
      mediumZoom(".content-container p img", options);
    });
    watch(
      () => route.path,
      () => nextTick(() => mediumZoom(".content-container p img", options))
    );
    //  《--- 结束
  },
} satisfies Theme ;



