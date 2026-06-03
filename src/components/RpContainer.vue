<template>
  <div :class="containerClasses">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    narrow?: boolean;
  }>(),
  {
    narrow: false,
  },
);

const containerClasses = computed<string[]>(() => {
  let cls = ["rp-container"];
  if (props.narrow) cls.push("rp-container--narrow");
  return cls;
});
</script>
