<template>
  <div>
    <div class="rp-quote__section-header">
      <h3>Contact details</h3>
      <p>Enter your details below</p>
    </div>
    <div class="rp-quote__inputs">
      <div class="rp-form__control">
        <label for="name" class="rp-form__label">
          Name <span class="rp-form__asterisk">*</span>
        </label>
        <input
          id="name"
          v-model="formData.name"
          type="text"
          placeholder="John Carter"
          autocomplete="name"
          :class="['rp-input__text', { 'rp-input__text--error': showError('name') }]"
          :aria-invalid="showError('name')"
          :aria-describedby="showError('name') ? 'name-error' : undefined"
          @blur="touch('name')"
        />
        <span v-if="showError('name')" id="name-error" class="rp-form__error" role="alert">
          Please enter a valid name
        </span>
      </div>
      <div class="rp-form__control">
        <label for="email" class="rp-form__label">
          Email <span class="rp-form__asterisk">*</span>
        </label>
        <input
          id="email"
          v-model="formData.email"
          type="email"
          placeholder="Email address"
          autocomplete="email"
          :class="['rp-input__text', { 'rp-input__text--error': showError('email') }]"
          :aria-invalid="showError('email')"
          :aria-describedby="showError('email') ? 'email-error' : undefined"
          @blur="touch('email')"
        />
        <span v-if="showError('email')" id="email-error" class="rp-form__error" role="alert">
          Please enter a valid email address
        </span>
      </div>
      <div class="rp-form__control">
        <label for="phone" class="rp-form__label">Phone Number</label>
        <input
          id="phone"
          v-model="formData.phone"
          type="tel"
          placeholder="07712345678"
          autocomplete="tel"
          :class="['rp-input__text', { 'rp-input__text--error': showError('phone') }]"
          :aria-invalid="showError('phone')"
          :aria-describedby="showError('phone') ? 'phone-error' : undefined"
          @blur="touch('phone')"
        />
        <span v-if="showError('phone')" id="phone-error" class="rp-form__error" role="alert">
          Please enter a valid phone number
        </span>
      </div>
      <div class="rp-form__control">
        <label for="company" class="rp-form__label">Company</label>
        <input
          id="company"
          v-model="formData.company"
          type="text"
          placeholder="Company name"
          autocomplete="organization"
          class="rp-input__text"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import type { QuoteFormData } from "../types/quote";
import { isValidName, isValidEmail, isValidPhone } from "../utils/validators";

const formData = defineModel<QuoteFormData>({ required: true });

const touched = reactive<Record<string, boolean>>({});

const validators: Record<string, (val: string) => boolean> = {
  name: isValidName,
  email: isValidEmail,
  phone: isValidPhone,
};

function touch(field: string) {
  touched[field] = true;
}

function showError(field: string): boolean {
  if (!touched[field]) return false;
  const value = formData.value?.[field as keyof QuoteFormData] ?? "";
  return !(validators[field]?.(value) ?? true);
}
</script>
