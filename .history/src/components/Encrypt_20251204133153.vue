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
  <div class="hero grow flex flex-col justify-center items-center">
    <div class="animate-fade-in">
      <form @submit.prevent="handleSubmit">
        <div class="flex flex-col justify-between gap-2">
          <textarea placeholder="Plaintext" class="textarea textarea-accent" v-model="input.plaintext"></textarea>
          <input type="text" placeholder="Key" class="input input-info" v-model="input.key" />
        </div>
      </form>
    </div>

    <div v-if="encryptedResult" class="card card-border bg-base-200 mt-5">
      <div class="card-body">
        <h2 class="card-title">Encrypted Result</h2>
        <p>{{ encryptedResult }}</p>
      </div>
    </div>
  </div>
</template>
