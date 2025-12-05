<script setup>
import { reactive, ref, watch, watchEffect } from "vue";
import { encrypt } from "../../lib/api";
import Form from "../components/Form.vue";

const input = reactive({
  plaintext: "",
  key: "",
});

const encryptedResult = ref("");

async function handleSubmit() {
  const response = await encrypt(input.plaintext, input.key);
  const responseBody = await response.json();
  encryptedResult.value = responseBody.ciphertext_hex;
  isEncrypted.value = true;
}
</script>

<template>
  <Form
    title="Encrypt"
    inputLabel="Plaintext"
    outputLabel="Ciphertext"
    v-model:input="input.plaintext"
    v-model:key="input.key"
    v-model:output="encryptedResult"
    inputPlaceholder="Masukkan plaintext..."
    outputPlaceholder="Ciphertext muncul di sini..."
    keyPlaceholder="Masukkan secret key"
    button-label="Encrypt"
    submit="handleSubmit"
  />
</template>
