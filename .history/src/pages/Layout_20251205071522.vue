<script setup>
const year = new Date().getFullYear();
</script>

<template>
  <div id="hero" class="min-h-screen flex flex-col bg-base-200">
    <!-- NAVBAR -->
    <header class="navbar bg-base-100 shadow-sm px-6 sticky top-0 z-10">
      <div class="navbar-start">
        <a href="#hero" class="btn btn-ghost text-2xl font-bold text-info"> AES SBOX </a>
      </div>
    </header>

    <!-- HERO SECTION -->
    <section class="min-h-[95vh] flex items-center justify-center bg-base-200 px-6">
      <div class="max-w-4xl text-center animate-fade-in">
        <h1 class="text-5xl md:text-6xl font-extrabold mb-6">
          <span class="text-info">AES Encryption</span> S-Box Analyzer
        </h1>

        <p class="text-lg md:text-xl opacity-80 leading-relaxed max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, suscipit.
          <strong>S-Box</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, unde.
        </p>

        <a href="#main-content" class="btn btn-primary btn-lg mt-5 px-10">Start now</a>
      </div>
    </section>

    <!-- INTRODUCTION SECTION -->
    <section class="py-20 bg-base-300 px-6 shadow-inner min-h-screen flex items-center">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-center">
          Understanding the <span class="text-info">AES</span> Algorithm
        </h2>

        <p class="text-lg opacity-80 leading-relaxed mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem esse accusamus commodi, nisi blanditiis illum
          obcaecati in nam iusto vel.
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo fugiat in voluptatum nihil provident magnam
          ea sapiente distinctio voluptates nisi facere nam quos, eos commodi reprehenderit iusto aliquid culpa!
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
