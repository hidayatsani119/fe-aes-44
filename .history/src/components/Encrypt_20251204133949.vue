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
  <div class="hero grow">
    <div class="animate-fade-in">
      <form @submit.prevent="handleSubmit">
        <div class="flex flex-col gap-5 p-5 bg-base-100 rounded-lg shadow-md max-w-500">
          <div class="flex flex-row justify-between gap-10">
            <div class="flex flex-col gap-2">
              <textarea
                placeholder="Plaintext"
                class="textarea textarea-accent w-100 h-50"
                v-model="input.plaintext"
              ></textarea>
              <input type="text" placeholder="Key" class="input input-info w-100" v-model="input.key" />
            </div>
            <textarea placeholder="Result" class="textarea textarea-accent w-100" v-model="encryptedResult"></textarea>
          </div>
          <div class="flex justify-center">
            <button class="btn btn-info">Encrypt</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
