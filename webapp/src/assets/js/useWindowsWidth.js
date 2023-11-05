import { computed, onMounted, onUnmounted, ref } from "vue";

export function useWindowsWidth() {
  let windowWidth = ref(window.innerWidth);

  const onWidthChange = () => (windowWidth.value = window.innerWidth);
  onMounted(() => window.addEventListener("resize", onWidthChange));
  onUnmounted(() => window.removeEventListener("resize", onWidthChange));

  const type = computed(() => {
    if (windowWidth.value < 992) return "mobile";
    if (windowWidth.value >= 992) return "desktop";
    return null; // This is an unreachable line, simply to keep eslint happy.
  });

  let width = computed(() => {
    return windowWidth.value;
  });
  return { width, type };
}
