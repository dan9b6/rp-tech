<template>
  <footer
    :class="[
      'rp-footer',
      'rp-anim',
      { 'rp-anim--slide-up-fade-in': isVisible, 'rp-anim--delay-3': isVisible },
    ]"
  >
    <RpContainer>
      <div class="rp-footer__nav">
        <div>
          <a href="#" class="rp-logo"> Your Site <span>Design</span> </a>
          <small class="rp-footer__copyright"
            >Copyright © {{ copyrightYear }} All Rights Reserved</small
          >
        </div>
        <div class="rp-footer__subscribe">
          <label for="subscribe" class="rp-hidden">Email</label>
          <input
            type="email"
            id="subscribe"
            placeholder="Enter your email"
            class="rp-input__text"
          />
          <RpButton size="sm">Subscribe</RpButton>
        </div>
      </div>
    </RpContainer>
  </footer>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import RpButton from "./RpButton.vue";
import RpContainer from "./RpContainer.vue";

const isVisible = ref(false);
const copyrightYear = new Date().getFullYear();

onMounted(() => {
  isVisible.value = true;
});
</script>
