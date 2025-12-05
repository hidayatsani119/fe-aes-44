<script setup></script>

<template>
  <div class="hero grow flex flex-col justify-center items-center p-6">
    <div class="animate-fade-in w-full max-w-3xl">
      <fieldset class="fieldset bg-base-100 shadow-2xl rounded-box p-10">
        <h1 class="text-4xl font-bold mb-10 text-center text-info">Encrypt</h1>

        <!-- Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <!-- Left Side -->
          <div class="flex flex-col gap-4">
            <label class="label font-semibold text-lg">Plaintext</label>
            <textarea
              placeholder="Enter plaintext..."
              class="textarea textarea-info w-full h-40 bg-base-300 text-lg"
            ></textarea>

            <label class="label font-semibold text-lg">Secret Key</label>
            <input
              type="text"
              placeholder="Secret Key"
              class="input input-info w-full bg-base-300 text-lg h-14"
              required
            />
          </div>

          <!-- Right Side -->
          <div class="flex flex-col gap-4">
            <label class="label font-semibold text-lg">Ciphertext</label>
            <textarea
              placeholder="Encrypted output..."
              class="textarea textarea-info w-full h-40 bg-base-300 text-lg"
              readonly
            ></textarea>
          </div>
        </div>

        <!-- Button -->
        <button type="submit" class="btn btn-primary btn-lg mt-10 w-full text-lg">Encrypt</button>
      </fieldset>
    </div>
  </div>
</template>
