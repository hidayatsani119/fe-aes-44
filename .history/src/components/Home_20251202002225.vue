<script setup></script>

<template>
  <div class="grow">
    <!-- hero -->
    <div
      class="hero min-h-screen"
      style="background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)"
    >
      <div class="hero-overlay"></div>
      <div class="hero-content text-neutral-content text-center">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
          <p class="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
            deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>

    <!-- content -->
    <div class="flex flex-row justify-between items-center px-30">
      <div class="card lg:card-side bg-base-100 shadow-sm">
        <figure>
          <img src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp" alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="justify-center items-center "></div> -->
</template>
