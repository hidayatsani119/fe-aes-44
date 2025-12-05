<script setup></script>

<template>
  <div class="hero grow flex justify-between items-center px-50">
    <div class="hero-content text-neutral-content animate-fade-in">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Lorem, ipsum dolor.</h1>
        <p class="py-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quaerat dolore cum fugiat iste iusto doloremque
          quis nam rerum aspernatur?
        </p>
        <button class="btn btn-primary">Lorem.</button>
      </div>
    </div>
    <div class="mockup-phone scale-90">
      <div class="mockup-phone-camera"></div>
      <div class="mockup-phone-display">
        <img
          alt="wallpaper"
          src="https://images.unsplash.com/photo-1619777709778-f2629bc94a6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  </div>
  <div class="flex flex-col justify-center items-center px-50">
    <div class="card card-side bg-base-100 shadow-sm">
      <figure>
        <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" alt="Movie" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
    <div tabindex="0" class="collapse collapse-arrow bg-base-100 border-base-300 border">
      <div class="collapse-title font-semibold">How do I create an account?</div>
      <div class="collapse-content text-sm">
        Click the "Sign Up" button in the top right corner and follow the registration process.
      </div>
    </div>
  </div>
</template>
