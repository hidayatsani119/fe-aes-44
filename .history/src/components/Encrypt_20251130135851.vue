<script setup>
import { reactive, ref } from "vue";
import { encrypt } from "../../lib/api";

const input = reactive({
  plaintext: "",
  key: "",
});

const encryptedResult = ref("");

async function handleSubmit() {
  const response = await encrypt(input.plaintext, input.key);
  const responseBody = await response.json();
  encryptedResult.value = responseBody.ciphertext_hex;
}
</script>

<template>
  <div class="flex flex-col items-center animate-fade-in">
    <h1 class="text-3xl font-bold mb-5 text-center">Encrypt</h1>
    <form @submit.prevent="handleSubmit">
      <fieldset class="fieldset bg-secondary border-base-300 rounded-box w-xs border p-4">
        <legend class="fieldset-legend">Encrypt</legend>

        <label class="label">Plaintext</label>
        <input type="text" class="input" placeholder="Plaintext" v-model="input.plaintext" />

        <label class="label">Secret</label>
        <input type="text" class="input" placeholder="Secret Key" v-model="input.key" />

        <button type="submit" class="btn btn-primary mt-2">Encrypt</button>
      </fieldset>
    </form>

    <div v-if="encryptedResult" class="card card-border bg-base-200 mt-5">
      <div class="card-body">
        <h2 class="card-title">Encrypted Result</h2>
        <p>{{ encryptedResult }}</p>
      </div>
    </div>
  </div>
</template>
