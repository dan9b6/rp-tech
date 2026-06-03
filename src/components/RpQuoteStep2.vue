<template>
  <div>
    <div class="rp-quote__section-header">
      <h3>Confirm your details</h3>
    </div>
    <div class="rp-quote__inputs">
      <div class="rp-form__control">
        <span class="rp-form__label">Name</span>
        <span class="rp-form__value">{{ formData.name || "—" }}</span>
      </div>
      <div class="rp-form__control">
        <span class="rp-form__label">Email</span>
        <span class="rp-form__value">{{ formData.email || "—" }}</span>
      </div>
      <div class="rp-form__control">
        <span class="rp-form__label">Phone Number</span>
        <span class="rp-form__value">{{ formData.phone || "—" }}</span>
      </div>
      <div class="rp-form__control">
        <span class="rp-form__label">Company</span>
        <span class="rp-form__value">{{ formData.company || "—" }}</span>
      </div>
      <label class="rp-input__confirm">
        <input type="checkbox" class="rp-input__checkbox" v-model="confirmed" />
        <span class="rp-form__label">
          I confirm that the above details are both up to date and correct.
        </span>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { QuoteFormData } from "../types/quote";

defineProps<{
  formData: QuoteFormData;
}>();

const confirmed = defineModel<boolean>("confirmed", { required: true });
</script>
