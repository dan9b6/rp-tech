<template>
  <div class="rp-stepper">
    <div class="rp-stepper__steps">
      <button
        v-for="n in totalSteps"
        :key="n"
        type="button"
        class="rp-stepper__step"
        :class="{ active: n <= currentStep }"
        :aria-label="`Step ${n}`"
        :aria-current="n === currentStep ? 'step' : undefined"
      >
        {{ n }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  currentStep: number;
  totalSteps?: number;
}>(), {
  totalSteps: 2,
});
</script>
