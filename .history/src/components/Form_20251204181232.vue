<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  title: { type: String, default: "Title" },

  inputLabel: { type: String, default: "Input" },
  outputLabel: { type: String, default: "Output" },

  inputPlaceholder: { type: String, default: "Enter input..." },
  outputPlaceholder: { type: String, default: "Output will appear here..." },

  keyLabel: { type: String, default: "Key" },
  keyPlaceholder: { type: String, default: "Enter key" },

  buttonLabel: { type: String, default: "Submit" },

  // v-model
  input: { type: String, default: "" },
  key: { type: String, default: "" },
  output: { type: String, default: "" },

  submit: { type: Function, default: () => {} },
});

const emit = defineEmits(["update:input", "update:key", "update:output"]);
</script>

<template>
  <div class="hero grow flex flex-col justify-center items-center p-4">
    <div class="animate-fade-in w-full max-w-4xl">
      <fieldset class="fieldset bg-base-100 shadow-xl rounded-box p-10">
        <h1 class="text-3xl font-bold mb-6 text-center text-info">{{ title }}</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- LEFT SIDE FORM -->
          <form class="flex flex-col gap-3" @submit.prevent="submit">
            <label class="label font-semibold">{{ inputLabel }}</label>
            <textarea
              :placeholder="inputPlaceholder"
              class="textarea textarea-info w-full h-32 bg-base-300"
              v-model="input"
            ></textarea>

            <label class="label font-semibold">{{ keyLabel }}</label>
            <input
              type="text"
              :placeholder="keyPlaceholder"
              class="input input-info w-full bg-base-300"
              :value="key"
              @input="emit('update:key', $event.target.value)"
              required
            />

            <button type="submit" class="btn btn-primary mt-6 w-full">
              {{ buttonLabel }}
            </button>
          </form>

          <!-- RIGHT SIDE OUTPUT -->
          <div class="flex flex-col gap-3">
            <label class="label font-semibold">{{ outputLabel }}</label>
            <textarea
              :placeholder="outputPlaceholder"
              class="textarea textarea-info w-full h-32 bg-base-300"
              :value="output"
              @input="emit('update:output', $event.target.value)"
              readonly
            ></textarea>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</template>
