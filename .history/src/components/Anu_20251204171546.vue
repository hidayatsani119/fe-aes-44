<script setup></script>

<template>
  <div class="hero grow flex flex-col justify-center items-center">
    <div class="animate-fade-in">
      <fieldset class="fieldset bg-base-100 shadow-lg rounded-box w-xs md:w-md lg:w-lg p-4">
        <h1 class="text-3xl font-bold mb-5 text-center text-info">Encrypt</h1>
        <label class="label">Plaintext</label>
        <textarea
          placeholder="Plaintext"
          class="textarea textarea-info w-full h-32 bg-base-300"
          v-model="input.plaintext"
        ></textarea>
        <label class="label">Secret</label>
        <input
          type="text"
          class="input input-info w-full bg-base-300"
          placeholder="Secret Key"
          required
          v-model="input.key"
        />

        <button type="submit" class="btn btn-primary mt-2">Encrypt</button>
      </fieldset>
    </div>
  </div>
</template>
