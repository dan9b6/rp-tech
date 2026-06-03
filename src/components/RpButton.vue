<template>
  <component
    :is="tag"
    v-bind="boundAttrs"
    :class="classes"
    @click="handleClick"
  >
    <span v-if="loading" class="rp-btn__spinner" aria-hidden="true" />
    <span :class="{ 'rp-btn__label--hidden': loading }">
      <slot />
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

type Variant = "primary" | "outline-primary";
type ButtonType = "button" | "submit" | "reset";
type ButtonSize = "sm";

const props = withDefaults(
  defineProps<{
    variant?: Variant;
    type?: ButtonType;
    href?: string;
    disabled?: boolean;
    loading?: boolean;
    ariaLabel?: string;
    size?: ButtonSize;
  }>(),
  {
    variant: "primary",
    type: "button",
    disabled: false,
    loading: false,
  },
);

const tag = computed(() => (props.href ? "a" : "button"));

const isDisabled = computed(() => props.disabled || props.loading);

const boundAttrs = computed(() => {
  const base: Record<string, unknown> = {};

  if (props.ariaLabel) base["aria-label"] = props.ariaLabel;
  if (props.loading) base["aria-busy"] = true;
  if (isDisabled.value) base["aria-disabled"] = true;

  if (tag.value === "button") {
    base.type = props.type;
    base.disabled = isDisabled.value || undefined;
  } else {
    base.href = isDisabled.value ? undefined : props.href;
    if (isDisabled.value) base.tabindex = -1;
  }

  return base;
});

const classes = computed(() => [
  "rp-btn",
  `rp-btn--${props.variant}`,
  props.size && `rp-btn--${props.size}`,
  { "rp-btn--loading": props.loading },
]);

function handleClick(e: MouseEvent) {
  if (tag.value === "a" && isDisabled.value) e.preventDefault();
}
</script>
