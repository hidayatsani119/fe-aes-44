<script setup></script>

<template>
  <div class="grow justify-between animate-fade-in">
    <!-- hero -->
    <div class="hero min-h-screen" style="background-image: url()">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Hello there</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
            deleniti eaque aut repudiandae et a id nisi.
          </p>
          <div class="flex flex-row justify-center gap-1">
            <a href="#main-section" class="btn btn-info">Get Start! </a>
          </div>
        </div>
      </div>
    </div>

    <!-- content -->
    <div class="px-30 mb-30 flex flex-col justify-center items-center gap-5">
      <div role="tablist" class="tabs tabs-box text-center bg-base-100 shadow-lg">
        <RouterLink to="/encrypt" role="tab" class="tab bg-base-300" active-class="tab tab-active bg-info text-base-300"
          >Encrypt</RouterLink
        >
        <RouterLink to="/decrypt" role="tab" class="tab bg-base-300" active-class="tab tab-active bg-info text-base-300"
          >Decrypt</RouterLink
        >
      </div>
      <div id="main-section">
        <RouterView />
      </div>
    </div>
  </div>

  <!-- <div class="justify-center items-center "></div> -->
</template>
