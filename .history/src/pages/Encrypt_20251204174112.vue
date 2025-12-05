<script setup>
import { reactive, ref, watch, watchEffect } from "vue";
import { encrypt } from "../../lib/api";
import Form from "../components/Form.vue";

const input = reactive({
  plaintext: "",
  key: "",
});

watchEffect(async () => {
  if (input.plaintext === "" || input.key === "") {
    isEncrypted.value = false;
    encryptedResult.value = "";
  }
});

const encryptedResult = ref("");
const isEncrypted = ref(false);

async function handleSubmit() {
  const response = await encrypt(input.plaintext, input.key);
  const responseBody = await response.json();
  encryptedResult.value = responseBody.ciphertext_hex;
  isEncrypted.value = true;
}
</script>

<template>
  <Form title="Encrypt" input-label="Plaintext" output-label="Ciphertext" />
</template>
