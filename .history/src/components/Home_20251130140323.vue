<script setup></script>

<template>
  <div class="flex flex-col items-center justify-center">
    <!-- Hero Section -->
    <div class="text-center space-y-4">
      <h1 class="text-5xl font-bold text-secondary">Welcome to AES SBOX Tool</h1>
      <p class="text-lg text-base-content">
        This web application allows you to <span class="font-semibold">encrypt</span> and
        <span class="font-semibold">decrypt</span> text using the AES SBOX algorithm. Choose one of the options from the
        navbar to get started.
      </p>
      <div class="space-x-4 mt-6">
        <RouterLink to="/encrypt" class="btn btn-primary btn-lg">Encrypt</RouterLink>
        <RouterLink to="/decrypt" class="btn btn-secondary btn-lg">Decrypt</RouterLink>
      </div>
    </div>

    <!-- Optional Features Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-4xl w-full">
      <div class="card bg-base-100 shadow-md p-6">
        <h2 class="text-2xl font-bold mb-2">AES Encryption</h2>
        <p class="text-base-content">Encrypt your plain text using AES SBOX. Safe, fast, and secure.</p>
      </div>
      <div class="card bg-base-100 shadow-md p-6">
        <h2 class="text-2xl font-bold mb-2">AES Decryption</h2>
        <p class="text-base-content">Decrypt your AES encrypted text back to plain text quickly and easily.</p>
      </div>
    </div>
  </div>
</template>
