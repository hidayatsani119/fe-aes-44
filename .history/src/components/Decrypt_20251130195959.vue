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
  <div class="hero grow flex flex-col justify-center items-center">
    <div>
      <form @submit.prevent="handleSubmit">
        <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4">
          <h1 class="text-3xl font-bold mb-5 text-center text-neutral-content">Decrypt</h1>
          <label class="label">Ciphertext Hex</label>
          <input
            type="text"
            class="input input-info w-full bg-transparent text-info"
            placeholder="Plaintext"
            v-model="input.ciphertext_hex"
          />

          <label class="label">Secret</label>
          <input
            type="text"
            class="input input-info w-full bg-transparent text-info"
            placeholder="Secret Key"
            v-model="input.key"
          />

          <button type="submit" class="btn btn-primary mt-2">Decrypt</button>
        </fieldset>
      </form>
    </div>

    <div v-if="showDecrypted" class="card card-border bg-base-200 mt-5">
      <div class="card-body">
        <h2 class="card-title">Decrypted Result</h2>
        <p>{{ decryptedResult }}</p>
      </div>
    </div>
  </div>
</template>
