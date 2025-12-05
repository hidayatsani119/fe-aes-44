<script setup></script>

<template>
  <div class="grow justify-between animate-fade-in">
    <!-- hero -->
    <div class="hero bg-base-200 min-h-screen">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Hello there</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
            deleniti eaque aut repudiandae et a id nisi.
          </p>
          <div class="flex flex-row justify-center gap-1">
            <RouterLink to="/encrypt" class="btn btn-info"> Encrypt</RouterLink>
            <RouterLink to="/decrypt" class="btn btn-error"> Decrypt</RouterLink>
          </div>
        </div>
      </div>
    </div>

    <!-- content -->
    <div class="px-30 mb-30">
      <div role="tablist" class="tabs tabs-box justify-center">
        <a role="tab" class="tab">Tab 1</a>
        <a role="tab" class="tab">Tab 2</a>
      </div>
      <RouterView />
    </div>
  </div>

  <!-- <div class="justify-center items-center "></div> -->
</template>
