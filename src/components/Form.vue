<script setup>
const props = defineProps({
  title: String,

  input: String,
  key: String,
  output: String,

  inputLabel: String,
  outputLabel: String,
  inputPlaceholder: String,
  outputPlaceholder: String,
  keyLabel: String,
  keyPlaceholder: String,

  buttonLabel: String,
  submit: Function,
});

const emit = defineEmits(["update:input", "update:key", "update:output"]);
</script>

<template>
  <div class="hero grow flex flex-col justify-center items-center p-4">
    <div class="animate-fade-in w-full max-w-4xl">
      <fieldset class="fieldset bg-base-100 shadow-xl rounded-box p-10">
        <h1 class="text-3xl font-bold mb-6 text-center text-info">{{ title }}</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- LEFT -->
          <form class="flex flex-col gap-3" @submit.prevent="submit">
            <!-- INPUT -->
            <label class="label font-semibold">{{ inputLabel }}</label>
            <textarea
              class="textarea textarea-info w-full h-32 bg-base-300"
              :placeholder="inputPlaceholder"
              :value="input"
              @input="emit('update:input', $event.target.value)"
            ></textarea>

            <!-- KEY -->
            <label class="label font-semibold">{{ keyLabel }}</label>
            <input
              type="text"
              class="input input-info w-full bg-base-300"
              :placeholder="keyPlaceholder"
              :value="key"
              @input="emit('update:key', $event.target.value)"
              required
            />

            <button class="btn btn-primary mt-6 w-full" type="submit">
              {{ buttonLabel }}
            </button>
          </form>

          <!-- RIGHT -->
          <div class="flex flex-col gap-3">
            <label class="label font-semibold">{{ outputLabel }}</label>
            <textarea
              class="textarea textarea-info w-full h-32 bg-base-300"
              :value="output"
              :placeholder="outputPlaceholder"
              readonly
            ></textarea>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</template>
