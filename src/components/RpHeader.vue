<template>
  <header class="rp-header">
    <RpContainer>
      <nav class="rp-header__nav">
        <a
          href="/"
          :class="[
            'rp-logo',
            'rp-anim',
            { 'rp-anim--slide-up-fade-in': isVisible },
          ]"
        >
          Your Site <span>Design</span>
        </a>
        <RpButton
          :class="[
            'rp-anim',
            {
              'rp-anim--slide-up-fade-in': isVisible,
              'rp-anim--delay-1': isVisible,
            },
          ]"
        >
          Log In
        </RpButton>
      </nav>
    </RpContainer>
  </header>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import RpContainer from "./RpContainer.vue";
import RpButton from "./RpButton.vue";

const isVisible = ref(false);

onMounted(() => {
  isVisible.value = true;
});
</script>
