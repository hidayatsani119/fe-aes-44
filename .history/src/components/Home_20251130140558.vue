<template>
  <div class="flex flex-col items-center text-center space-y-8">
    <h1 class="text-5xl font-extrabold text-indigo-600 animate-fade-in">AES SBOX Tool</h1>
    <p class="text-lg text-gray-700 max-w-2xl">
      Encrypt and decrypt text securely using AES SBOX. Start by choosing one of the options below.
    </p>
    <div class="flex gap-4">
      <RouterLink to="/encrypt" class="btn btn-primary btn-lg px-8 py-4 shadow-lg hover:shadow-xl transition"
        >Encrypt</RouterLink
      >
      <RouterLink to="/decrypt" class="btn btn-secondary btn-lg px-8 py-4 shadow-lg hover:shadow-xl transition"
        >Decrypt</RouterLink
      >
    </div>

    <!-- Features -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-4xl w-full">
      <div class="card bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition transform">
        <h2 class="text-2xl font-bold mb-2 text-indigo-600">AES Encryption</h2>
        <p class="text-gray-700">Encrypt your plain text safely, fast, and securely using AES SBOX algorithm.</p>
      </div>
      <div class="card bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition transform">
        <h2 class="text-2xl font-bold mb-2 text-indigo-600">AES Decryption</h2>
        <p class="text-gray-700">Decrypt your encrypted text back to plaintext easily with AES SBOX.</p>
      </div>
    </div>
  </div>
</template>
