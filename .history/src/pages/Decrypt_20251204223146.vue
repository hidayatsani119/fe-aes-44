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
  <div class="hero grow flex flex-col justify-center items-center p-4">
    <div class="animate-fade-in w-full max-w-4xl">
      <fieldset class="fieldset bg-base-100 shadow-xl rounded-box p-10">
        <h1 class="text-3xl font-bold mb-6 text-center text-info">Decrypt</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- LEFT -->
          <form class="flex flex-col gap-3" v-on:submit.prevent="handleSubmit">
            <!-- INPUT -->
            <label class="label font-semibold">Ciphertext</label>
            <textarea
              class="textarea textarea-info w-full h-32 bg-base-300"
              placeholder="Ciphertext Hex"
              v-model="input.ciphertext_hex"
            ></textarea>

            <!-- KEY -->
            <label class="label font-semibold">{{ keyLabel }}</label>
            <input
              type="text"
              class="input input-info w-full bg-base-300"
              placeholder="Key"
              v-model="input.key"
              required
            />

            <button class="btn btn-primary mt-6 w-full" type="submit">Decrypt</button>
          </form>

          <!-- RIGHT -->
          <div class="flex flex-col gap-3">
            <label class="label font-semibold">{{ outputLabel }}</label>
            <textarea
              class="textarea textarea-info w-full h-32 bg-base-300"
              :value="output"
              :placeholder="outputPlaceholder"
              readonly
            ></textarea>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</template>
