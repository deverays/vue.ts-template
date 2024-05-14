/**Vue */
import { defineComponent, ref, onMounted, onUnmounted, h } from "vue";

/**Images */
import Logo from "../assets/images/logo.png";

/**Lib */
import { cn } from "../lib/utilts";

const AppHeader = defineComponent({
  setup() {
    const showHeader = ref(true);
    const beforeY = ref(0);

    const handleScroll = () => {
      if (window.scrollY < 40) return;
      const currentScrollY = window.scrollY;
      showHeader.value = beforeY.value > currentScrollY;
      beforeY.value = currentScrollY;
    };

    onMounted(() => {
      document.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      document.removeEventListener("scroll", handleScroll);
    });

    return { showHeader };
  },
  render() {
    return h(
      <div
        class={cn(
          "transition-all fixed top-0 max-lg:h-16 lg:h-20 flex items-center justify-between lg:justify-around w-full max-lg:pl-[2%] max-lg:pr-[2%] z-[998]",
          this.showHeader ? "translate-y-0" : "-translate-y-full",
          "bg-light-200 dark:bg-dark-100 duration-500"
        )}
      >
        <router-link to="/" class="flex items-center gap-x-4 group relative">
          <img
            v-lazy={Logo}
            class="transition-all w-8 group-hover:-rotate-12"
            alt="P4B"
          />
          <span class="transition-all text-2xl font-poppins-bold opacity-90 gropu-hover:opacity-100 text-dark-100 dark:text-gray-100">
            <div class="absolute ml-3 bg-gray-100 w-6 h-6 blur-2xl"></div>
            {import.meta.env.VITE_PROJECT_TITLE}
          </span>
        </router-link>
      </div>
    );
  },
});

export { AppHeader };
