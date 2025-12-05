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
  <div class="flex justify-center mt-40 animate-fade-in">
    <div class="flex flex-col items-center">
      <h1 class="text-3xl font-bold mb-5 text-center">Decrypt</h1>
      <form @submit.prevent="handleSubmit">
        <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend class="fieldset-legend">Decrypt</legend>

          <label class="label">Plaintext</label>
          <input type="text" class="input" placeholder="Plaintext" v-model="input.ciphertext_hex" />

          <label class="label">Secret</label>
          <input type="text" class="input" placeholder="Secret Key" v-model="input.key" />

          <button type="submit" class="btn btn-primary mt-2">Decrypt</button>
        </fieldset>
      </form>

      <div class="card card-border bg-base-200 mt-5">
        <div v-if="showDecrypted" class="card-body">
          <h2 class="card-title">Decrypted Result</h2>
          <p>{{ decryptedResult }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
