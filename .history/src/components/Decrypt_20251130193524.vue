<script setup>
import { reactive, ref } from "vue";
import { decrypt, encrypt } from "../../lib/api";

const input = reactive({
  ciphertext_hex: "",
  key: "",
});

const showDecrypted = ref(false);
const decryptedResult = ref("");

async function handleSubmit() {
  const response = await decrypt(input.ciphertext_hex, input.key);
  const responseBody = await response.json();
  showDecrypted.value = true;
  if (response.status === 200) {
    decryptedResult.value = responseBody.plaintext;
  } else if (!responseBody.plaintext) {
    decryptedResult.value = "Wrong key";
  } else {
    decryptedResult.value = "Wrong key";
  }
}
</script>

<template>
  <div class="hero grow flex flex-col justify-center animate-fade-in items-center">
    <h1 class="text-3xl font-bold mb-5 text-center text-neutral-content">Encrypt</h1>
    <form @submit.prevent="handleSubmit">
      <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
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
