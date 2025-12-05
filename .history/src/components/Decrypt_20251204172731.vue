<script setup>
import { reactive, ref, watchEffect } from "vue";
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

watchEffect(() => {
  if (input.ciphertext_hex === "" || input.key === "") {
    showDecrypted.value = false;
    decryptedResult.value = "";
  }
});
</script>

<template></template>
