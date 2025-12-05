<script setup>
import { reactive, ref } from "vue";
import { decrypt } from "../../lib/api";

import Form from "../components/Form.vue";
const input = reactive({
  ciphertext_hex: "",
  key: "",
});
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
  <form action="">Form</form>
</template>
