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

    <!-- card -->
    <div class="card lg:card-side shadow-sm px-30 mb-30">
      <figure>
        <img
          src="data:image/jpeg;base64,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"
          alt="Album"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Crott!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>

    <!-- content -->
    <div class="px-30 mb-30 flex flex-col justify-center items-center gap-5">
      <div role="tablist" class="tabs tabs-box text-center bg-base-100 border border-info">
        <RouterLink to="/encrypt" role="tab" class="tab bg-base-300" active-class="tab tab-active bg-info"
          >Encrypt</RouterLink
        >
        <RouterLink to="/decrypt" role="tab" class="tab bg-base-300" active-class="tab tab-active bg-info"
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
