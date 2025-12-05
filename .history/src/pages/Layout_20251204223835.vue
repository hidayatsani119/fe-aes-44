<script setup>
const year = new Date().getFullYear();

const isDark = ref(false);

onMounted(() => {
  const saved = localStorage.getItem("theme") || "light";

  isDark.value = saved !== "light"; // true kalau tema synthwave
  document.documentElement.setAttribute("data-theme", saved);
});

function toggleTheme() {
  const theme = isDark.value ? "synthwave" : "light";
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}
</script>

<template>
  <div id="hero" class="min-h-screen flex flex-col bg-base-200">
    <!-- NAVBAR -->
    <header class="navbar bg-base-100 shadow-sm px-6 sticky top-0 z-10">
      <div class="navbar-start">
        <a href="#hero" class="btn btn-ghost text-2xl font-bold text-info"> AES SBOX </a>
      </div>
      <div class="navbar-end">
        <label class="swap swap-rotate cursor-pointer">
          <!-- checkbox -->
          <input type="checkbox" v-model="isDark" @change="toggleTheme" />

          <!-- sun icon -->
          <svg class="swap-off h-8 w-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
            />
          </svg>

          <!-- moon icon -->
          <svg class="swap-on h-8 w-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
            />
          </svg>
        </label>
      </div>
    </header>

    <!-- HERO SECTION -->
    <section class="min-h-[95vh] flex items-center justify-center bg-base-200 px-6">
      <div class="max-w-4xl text-center animate-fade-in">
        <h1 class="text-5xl md:text-6xl font-extrabold mb-6">
          <span class="text-info">AES Encryption</span> S-Box Analyzer
        </h1>

        <p class="text-lg md:text-xl opacity-80 leading-relaxed max-w-3xl mx-auto">
          Advanced Encryption Standard (AES) adalah algoritma kriptografi simetris yang menggunakan
          <strong>S-Box</strong> untuk memberikan non-linearitas dan keamanan tingkat tinggi pada proses enkripsi.
        </p>

        <a href="#main-content" class="btn btn-primary btn-lg mt-5 px-10">Start now</a>
      </div>
    </section>

    <!-- INTRODUCTION SECTION -->
    <section class="py-20 bg-base-300 px-6 shadow-inner min-h-screen flex items-center">
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
    <main id="main-content" class="grow container mx-auto min-h-screen flex flex-col justify-center py-20 px-6">
      <div class="flex justify-center">
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
