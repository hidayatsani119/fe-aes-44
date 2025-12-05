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
  <div class="hero min-h-screen flex items-center justify-center bg-base-200 p-5">
    <div class="animate-fade-in w-full max-w-4xl">
      <form @submit.prevent="handleSubmit" class="bg-base-100 rounded-lg shadow-md p-6">
        <div class="flex flex-col md:flex-row gap-6">
          <!-- Input Section -->
          <div class="flex-1 flex flex-col gap-4">
            <textarea
              placeholder="Plaintext"
              class="textarea textarea-accent w-full min-h-[150px] resize-none"
              v-model="input.plaintext"
            ></textarea>
            <input type="text" placeholder="Key" class="input input-info w-full" v-model="input.key" />
          </div>

          <!-- Result Section -->
          <div class="flex-1 flex flex-col gap-4">
            <textarea
              placeholder="Result"
              class="textarea textarea-accent w-full min-h-[150px] resize-none"
              v-model="encryptedResult"
              readonly
            ></textarea>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="flex justify-center mt-6">
          <button class="btn btn-info px-8">Encrypt</button>
        </div>
      </form>
    </div>
  </div>
</template>
