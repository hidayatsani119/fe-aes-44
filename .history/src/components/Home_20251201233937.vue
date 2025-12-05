<script setup></script>

<template>
  <div class="hero min-h-screen px-8 py-20">
    <div class="flex flex-col-reverse lg:flex-row gap-12 items-center justify-between w-full">
      <!-- Text Section -->
      <div class="hero-content text-neutral-content animate-fade-in lg:max-w-lg text-center lg:text-left">
        <h1 class="text-4xl lg:text-5xl font-bold">Lorem, ipsum dolor.</h1>

        <p class="py-6 text-base lg:text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quaerat dolore cum fugiat iste iusto doloremque
          quis nam rerum aspernatur?
        </p>

        <button class="btn btn-primary">Lorem.</button>
      </div>

      <!-- Mockup Phone -->
      <div class="mockup-phone scale-75 lg:scale-90">
        <div class="mockup-phone-camera"></div>
        <div class="mockup-phone-display">
          <img alt="wallpaper" src="https://img.daisyui.com/images/stock/453966.webp" />
        </div>
      </div>
    </div>
  </div>
</template>
