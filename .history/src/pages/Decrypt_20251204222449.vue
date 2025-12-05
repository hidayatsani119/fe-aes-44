<script setup>
import { reactive, ref } from "vue";
import { decrypt } from "../lib/api";
import Form from "../components/Form.vue";

const input = reactive({
  ciphertext_hex: "",
  key: "",
});
const decryptedResult = ref("");

async function handleSubmit() {
  console.log("input cipher" + input.ciphertext_hex);
  const response = await decrypt(input.ciphertext_hex, input.key);
  const responseBody = await response.json();
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
  <Form
    title="Decrypt"
    inputLabel="Ciphertext"
    outputLabel="Plaintext"
    v-model:input="input.ciphertext_hex"
    v-model:key="input.key"
    v-model:output="decryptedResult"
    inputPlaceholder="Masukkan ciphertext..."
    outputPlaceholder="Plaintext muncul di sini..."
    keyPlaceholder="Masukkan secret key"
    button-label="Decrypt"
    :submit="handleSubmit"
  />
  <div>
    <h1 class="text-5xl text-white">{{ input.ciphertext_hex }} {{ input.key }}</h1>
  </div>
</template>
