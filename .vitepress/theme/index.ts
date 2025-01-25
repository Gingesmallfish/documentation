import mediumZoom from "medium-zoom";
import "medium-zoom/dist/style.css";
import type { Theme } from "vitepress";
import { inBrowser, useRoute, useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Timeline from "./componets/Timeline.vue";
import { h, onMounted, watch, nextTick, provide } from "vue";
import { ZommeOptions } from "../Types/sidebarNavTypes";
import "./tailwind.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'sidebar-bottom': () => h(Timeline),
    });
  },
  enhanceApp({ app, router, siteData }) {},
  setup() {
    const route = useRoute();
    const { isDark } = useData();
    const options: ZommeOptions = {
      background: "var(--vp-c-bg)",
      container: document.body,
      zIndex: 9999
    };

    const enableTransitions = () =>
      'startViewTransition' in document &&
      window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

    provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
      if (!enableTransitions()) {
        isDark.value = !isDark.value;
        return;
      }

      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${Math.hypot(
          Math.max(x, innerWidth - x),
          Math.max(y, innerHeight - y)
        )}px at ${x}px ${y}px)`
      ];

      await document.startViewTransition(async () => {
        isDark.value = !isDark.value;
        await nextTick();
      }).ready;

      document.documentElement.animate(
        { clipPath: isDark.value ? clipPath.reverse() : clipPath },
        {
          duration: 300,
          easing: 'ease-in',
          pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`
        }
      );
    });

    onMounted(() => {
      mediumZoom(".content-container p img", options);
    });

    watch(
      () => route.path,
      () => nextTick(() => mediumZoom(".content-container p img", options))
    );

    // 监听暗黑模式切换
    if (inBrowser) {
      const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const applyTransition = () => {
        document.body.classList.add("transition-colors", "duration-500");
        setTimeout(() => {
          document.body.classList.remove("transition-colors", "duration-500");
        }, 500);
      };

      darkModeMediaQuery.addEventListener("change", applyTransition);

      // 手动切换模式时也应用过渡效果
      const observer = new MutationObserver(applyTransition);
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"]
      });
    }
  },
} satisfies Theme;
