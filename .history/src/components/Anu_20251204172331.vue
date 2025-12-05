<script setup></script>

<template>
  <div class="hero grow flex flex-col justify-center items-center p-4">
    <div class="animate-fade-in w-full max-w-4xl">
      <fieldset class="fieldset bg-base-100 shadow-xl rounded-box p-10">
        <h1 class="text-3xl font-bold mb-6 text-center text-info">Encrypt</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="flex flex-col gap-3">
            <label class="label font-semibold">Plaintext</label>
            <textarea placeholder="Enter plaintext" class="textarea textarea-info w-full h-32 bg-base-300"></textarea>

            <label class="label font-semibold">Secret Key</label>
            <input type="text" placeholder="Secret Key" class="input input-info w-full bg-base-300" required />
          </div>

          <div class="flex flex-col gap-3">
            <label class="label font-semibold">Ciphertext</label>
            <textarea
              placeholder="Encrypted output"
              class="textarea textarea-info w-full h-32 bg-base-300"
              readonly
            ></textarea>
          </div>
        </div>

        <button type="submit" class="btn btn-primary mt-6 w-full">Encrypt</button>
      </fieldset>
    </div>
  </div>
</template>
