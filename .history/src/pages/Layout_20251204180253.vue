<script setup>
const year = new Date().getFullYear();
</script>

<template>
  <div class="min-h-screen flex flex-col bg-base-200">
    <!-- NAVBAR -->
    <header class="navbar bg-base-100 shadow-sm px-6">
      <div class="navbar-start">
        <RouterLink to="/" class="btn btn-ghost text-2xl font-bold text-info"> AES SBOX </RouterLink>
      </div>
    </header>

    <!-- HERO SECTION -->
    <section class="min-h-[90vh] flex items-center justify-center bg-base-200 px-6">
      <div class="max-w-4xl text-center animate-fade-in">
        <h1 class="text-5xl md:text-6xl font-extrabold mb-6">
          <span class="text-info">AES Encryption</span> S-Box Analyzer
        </h1>

        <p class="text-lg md:text-xl opacity-80 leading-relaxed max-w-3xl mx-auto">
          Advanced Encryption Standard (AES) adalah algoritma kriptografi simetris yang menggunakan
          <strong>S-Box</strong> untuk memberikan non-linearitas dan keamanan tingkat tinggi pada proses enkripsi.
        </p>

        <RouterLink to="/decrypt" class="btn btn-primary btn-lg px-10">Start now</RouterLink>
      </div>
    </section>

    <!-- INTRODUCTION SECTION -->
    <section class="py-20 bg-base-100 px-6 shadow-inner min-h-screen flex items-center">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-center text-info">Understanding the AES Algorithm</h2>

        <p class="text-lg opacity-80 leading-relaxed mb-8">
          AES bekerja menggunakan blok 128-bit dengan variasi kunci 128, 192, dan 256 bit. Setiap putaran enkripsi
          terdiri dari beberapa operasi utama:
        </p>

        <ul class="space-y-4 text-lg opacity-90">
          <li class="flex gap-3">
            <span class="font-bold text-info">1.</span>
            <span><strong>SubBytes</strong> — mengganti setiap byte menggunakan S-Box.</span>
          </li>

          <li class="flex gap-3">
            <span class="font-bold text-info">2.</span>
            <span><strong>ShiftRows</strong> — pergeseran baris dalam matrix state.</span>
          </li>

          <li class="flex gap-3">
            <span class="font-bold text-info">3.</span>
            <span><strong>MixColumns</strong> — mengacak kolom menggunakan operasi Galois Field.</span>
          </li>

          <li class="flex gap-3">
            <span class="font-bold text-info">4.</span>
            <span><strong>AddRoundKey</strong> — XOR state dengan round key.</span>
          </li>
        </ul>

        <p class="text-lg opacity-80 mt-8">
          S-Box AES memberikan ketahanan terhadap serangan linear dan diferensial, menjadikannya salah satu komponen
          paling kritikal dalam keamanan cipher.
        </p>
      </div>
    </section>

    <!-- MAIN CONTENT -->
    <main id="main-content" class="grow container mx-auto px-4 py-8 min-h-screen flex flex-col justify-center">
      <div class="flex justify-center mb-2">
        <div role="tablist" class="tabs tabs-box w-fit bg-base-100 p-2 justify-center">
          <RouterLink to="/encrypt" role="tab" class="tab" active-class="bg-base-300">Encrypt</RouterLink>
          <RouterLink to="/decrypt" role="tab" class="tab" active-class="bg-base-300">Decrypt</RouterLink>
        </div>
      </div>

      <RouterView />
    </main>

    <!-- FOOTER -->
    <footer class="bg-base-100 py-8 shadow-inner mt-10">
      <div class="container mx-auto flex flex-col items-center gap-4">
        <nav class="flex flex-wrap gap-5 justify-center text-sm">
          <RouterLink class="link link-hover">About us</RouterLink>
          <RouterLink class="link link-hover">Contact</RouterLink>
          <RouterLink class="link link-hover">Jobs</RouterLink>
          <RouterLink class="link link-hover">Press kit</RouterLink>
        </nav>

        <p class="text-sm opacity-70">© {{ year }} — All rights reserved</p>
      </div>
    </footer>
  </div>
</template>
