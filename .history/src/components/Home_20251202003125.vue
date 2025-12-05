<script setup></script>

<template>
  <div class="grow justify-between">
    <!-- hero -->
    <div class="hero bg-base-200 min-h-screen">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Hello there</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
            deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>

    <!-- content -->
    <div class="px-30 mb-30">
      <div class="hero bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-5xl font-bold">Box Office News!</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
              deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div class="card lg:card-side bg-base-100 shadow-sm mb-30">
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
      <div class="mockup-window bg-base-100 border border-base-300 w-full mb-30">
        <div class="grid place-content-center border-t border-base-300 h-80">Hello!</div>
      </div>

      <div class="flex flex-row justify-between items-center">
        <div class="flex flex-col gap-5">
          <h1 class="text-3xl font-bold text-info">lorem 5</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nihil rem repudiandae temporibus accusamus
            saepe, eum odit quo quasi aut?
          </p>
        </div>

        <ul class="list bg-base-100 rounded-box shadow-md">
          <li class="list-row">
            <div><img class="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" /></div>
            <div>
              <div>Dio Lupa</div>
              <div class="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
            </div>
            <p class="list-col-wrap text-xs">
              "Remaining Reason" became an instant hit, praised for its haunting sound and emotional depth. A viral
              performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.
            </p>
          </li>

          <li class="list-row">
            <div><img class="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp" /></div>
            <div>
              <div>Ellie Beilish</div>
              <div class="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
            </div>
            <p class="list-col-wrap text-xs">
              "Bears of a Fever" captivated audiences with its intense energy and mysterious lyrics. Its popularity
              skyrocketed after fans shared it widely online, earning Ellie critical acclaim.
            </p>
          </li>

          <li class="list-row">
            <div><img class="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp" /></div>
            <div>
              <div>Sabrino Gardener</div>
              <div class="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
            </div>
            <p class="list-col-wrap text-xs">
              "Cappuccino" quickly gained attention for its smooth melody and relatable themes. The song’s success
              propelled Sabrino into the spotlight, solidifying their status as a rising star.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- <div class="justify-center items-center "></div> -->
</template>
