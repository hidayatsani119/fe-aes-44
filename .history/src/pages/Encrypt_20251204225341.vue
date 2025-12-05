<script setup>
import { reactive, ref, watch, watchEffect } from "vue";
import { encrypt } from "../lib/api";
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
  console.log(responseBody);
}

const input1 = document.getElementById("input1")?.focus();
</script>

<template>
  <div class="hero grow flex flex-col justify-center items-center p-4">
    <div class="animate-fade-in w-full max-w-4xl">
      <fieldset class="fieldset bg-base-100 shadow-xl rounded-box p-10">
        <h1 class="text-3xl font-bold mb-6 text-center text-info">Encrypt</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- LEFT -->
          <form class="flex flex-col gap-3" v-on:submit.prevent="handleSubmit">
            <!-- INPUT -->
            <label class="label font-semibold">Plaintext</label>
            <textarea
              class="textarea textarea-info w-full h-32 bg-base-300"
              placeholder="Ciphertext Hex"
              v-model="input.plaintext"
            ></textarea>

            <!-- KEY -->
            <label class="label font-semibold">Key</label>
            <input
              id="input1"
              type="text"
              class="input input-info w-full bg-base-300"
              placeholder="Key"
              v-model="input.key"
              required
            />

            <button class="btn btn-primary mt-6 w-full" type="submit">Encrypt</button>
          </form>

          <!-- RIGHT -->
          <div class="flex flex-col gap-3">
            <label class="label font-semibold">Encrypted Result</label>
            <textarea
              class="textarea textarea-info w-full h-32 bg-base-300"
              v-model="encryptedResult"
              placeholder="Hasil Encrypt Muncul Disini..."
              readonly
            ></textarea>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</template>
