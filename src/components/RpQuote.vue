<template>
  <form
    novalidate
    @submit.prevent="handleSubmit"
    :class="[
      'rp-quote',
      'rp-anim',
      { 'rp-anim--fade-zoom-in': isVisible, 'rp-anim--delay-2': isVisible },
    ]"
  >
    <Transition name="rp-fade" mode="out-in">
      <header v-if="!submitted" :key="step" class="rp-quote__header">
        <h1 class="h2">
          {{ step === 1 ? "Get a project quote" : "Complete your quote" }}
        </h1>
        <p>
          {{
            step === 1
              ? "Please fill in the form below to receive a quote for your project. Click next step to continue."
              : "Please check your details below and submit your quote."
          }}
        </p>
      </header>
      <header v-else key="success" class="rp-quote__header">
        <h1 class="h2">Quote submitted</h1>
        <p>Thanks for getting in touch. We'll be in contact shortly.</p>
      </header>
    </Transition>
    <RpCard v-if="!submitted">
      <RpStepper :current-step="step" />
      <Transition name="rp-fade" mode="out-in">
        <RpQuoteStep1 v-if="step === 1" :key="1" v-model="formData" />
        <RpQuoteStep2
          v-else
          :key="2"
          :form-data="formData"
          v-model:confirmed="confirmed"
        />
      </Transition>
    </RpCard>
    <footer v-if="!submitted" class="rp-quote__footer">
      <RpButton
        variant="outline-primary"
        :class="step === 1 && 'rp-invisible'"
        @click="prevStep"
      >
        Previous step
      </RpButton>
      <RpButton v-if="step < 2" :disabled="!isStep1Valid" @click="nextStep"
        >Next step</RpButton
      >
      <RpButton v-else type="submit" :disabled="!confirmed">Submit</RpButton>
    </footer>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from "vue";
import { isValidName, isValidEmail } from "../utils/validators";
import type { QuoteFormData } from "../types/quote";
import RpButton from "./RpButton.vue";
import RpCard from "./RpCard.vue";
import RpStepper from "./RpStepper.vue";
import RpQuoteStep1 from "./RpQuoteStep1.vue";
import RpQuoteStep2 from "./RpQuoteStep2.vue";

const step = ref(1);
const confirmed = ref(false);
const submitted = ref(false);
const isVisible = ref(false);

const formData = reactive<QuoteFormData>({
  name: "",
  email: "",
  phone: "",
  company: "",
});

const isStep1Valid = computed(
  () => isValidName(formData.name) && isValidEmail(formData.email),
);

onMounted(() => {
  isVisible.value = true;
});

function nextStep() {
  step.value++;
}

function prevStep() {
  step.value--;
}

function handleSubmit() {
  if (step.value === 1) {
    if (isStep1Valid.value) nextStep();
    return;
  }
  if (!confirmed.value) return;
  submitted.value = true;

  console.log("Form Submission Complete");
}
</script>
