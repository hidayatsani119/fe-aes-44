<script setup></script>

<template>
  <div class="grow px-8 lg:px-30">
    <!-- HERO SECTION -->
    <div class="hero flex flex-col lg:flex-row justify-between items-center gap-12 py-20">
      <!-- Left text -->
      <div class="hero-content text-neutral-content animate-fade-in max-w-lg text-center lg:text-left">
        <h1 class="text-4xl lg:text-5xl font-bold">Lorem, ipsum dolor.</h1>
        <p class="py-6 text-base leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quaerat dolore cum fugiat iste iusto doloremque
          quis nam rerum aspernatur?
        </p>
        <button class="btn btn-primary">Lorem.</button>
      </div>

      <!-- Phone mockup -->
      <div class="mockup-phone scale-[0.60] lg:scale-75">
        <div class="mockup-phone-camera"></div>
        <div class="mockup-phone-display">
          <img
            alt="wallpaper"
            class="object-cover"
            src="https://images.unsplash.com/photo-1619777709778-f2629bc94a6c?q=80&w=2070&auto=format&fit=crop"
          />
        </div>
      </div>
    </div>
    <!-- END HERO -->

    <!-- CARD SECTION -->
    <div class="card bg-base shadow-sm lg:card-side mb-20 overflow-hidden">
      <figure class="max-h-72 lg:max-h-none">
        <img
          class="object-cover w-full h-full"
          src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
          alt="Album"
        />
      </figure>

      <div class="card-body">
        <h2 class="card-title text-2xl font-bold">What is AES SBOX?</h2>
        <p class="leading-relaxed text-sm lg:text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus natus omnis similique placeat et impedit.
          <br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minima. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptatum, quis.
        </p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">View article</button>
        </div>
      </div>
    </div>
    <!-- END CARD -->

    <!-- LIST SECTION -->
    <div class="flex flex-col lg:flex-row gap-14 lg:gap-20 mb-30 items-start">
      <!-- Left title -->
      <div class="flex flex-col max-w-xl">
        <h1 class="text-3xl text-info font-bold mb-5">Lorem, ipsum dolor.</h1>
        <p class="leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eaque fugit quod earum ab pariatur, culpa
          suscipit debitis voluptas aspernatur quia adipisci odio. Quis vel quae ab possimus corporis unde.
        </p>
      </div>

      <!-- Right list -->
      <ul class="list bg-base-100 rounded-box shadow-md w-full max-w-lg">
        <li class="p-4 pb-2 text-xs opacity-60 tracking-wide border-b">Most played songs this week</li>

        <!-- List Item Reusable Layout -->
        <li class="list-row border-b py-3">
          <div><img class="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" /></div>
          <div>
            <div class="font-semibold">Dio Lupa</div>
            <div class="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
          </div>
          <p class="list-col-wrap text-xs leading-relaxed">
            "Remaining Reason" became an instant hit, praised for its haunting sound and emotional depth.
          </p>
          <button class="btn btn-square btn-ghost">
            <svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-width="2" fill="none" d="M6 3L20 12 6 21V3z" />
            </svg>
          </button>
          <button class="btn btn-square btn-ghost">
            <svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7z"
              />
            </svg>
          </button>
        </li>

        <!-- Item 2 -->
        <li class="list-row border-b py-3">
          <div><img class="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp" /></div>
          <div>
            <div class="font-semibold">Ellie Beilish</div>
            <div class="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
          </div>
          <p class="list-col-wrap text-xs leading-relaxed">
            "Bears of a Fever" captivated audiences with its intense energy and mysterious lyrics.
          </p>
          <button class="btn btn-square btn-ghost">
            <svg class="size-5" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-width="2" fill="none" d="M6 3L20 12 6 21V3z" />
            </svg>
          </button>
          <button class="btn btn-square btn-ghost">
            <svg class="size-5" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7z"
              />
            </svg>
          </button>
        </li>

        <!-- Item 3 -->
        <li class="list-row py-3">
          <div><img class="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp" /></div>
          <div>
            <div class="font-semibold">Sabrino Gardener</div>
            <div class="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
          </div>
          <p class="list-col-wrap text-xs leading-relaxed">
            "Cappuccino" quickly gained attention for its smooth melody and relatable themes.
          </p>
          <button class="btn btn-square btn-ghost">
            <svg class="size-5" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-width="2" fill="none" d="M6 3L20 12 6 21V3z" />
            </svg>
          </button>
          <button class="btn btn-square btn-ghost">
            <svg class="size-5" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7z"
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
    <!-- END LIST -->
  </div>
</template>
