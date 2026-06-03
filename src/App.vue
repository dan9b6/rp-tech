<template>
  <RpHeader />
  <main>
    <RpContainer :narrow="true">
      <RpQuote />
    </RpContainer>
  </main>
  <RpFooter />
</template>

<script setup lang="ts">
import RpContainer from "./components/RpContainer.vue";
import RpFooter from "./components/RpFooter.vue";
import RpHeader from "./components/RpHeader.vue";
import RpQuote from "./components/RpQuote.vue";
</script>
