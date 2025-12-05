<script setup></script>
<template>
  <div class="min-h-screen flex grow">
    <div class="navbar bg-base-100 shadow-sm p-3 sticky top-0 z-50">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabindex="-1"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 gap-1 shadow"
          >
            <li><RouterLink to="/encrypt" active-class="bg-base-300">Encrypt</RouterLink></li>
            <li><RouterLink to="/decrypt" active-class="bg-base-300">Decrypt</RouterLink></li>
          </ul>
        </div>
        <a class="btn btn-ghost text-xl">AES SBOX</a>
      </div>
      <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal gap-1">
          <li><RouterLink to="/encrypt" active-class="bg-base-300">Encrypt</RouterLink></li>
          <li><RouterLink to="/decrypt" active-class="bg-base-300">Decrypt</RouterLink></li>
        </ul>
      </div>
    </div>
    <RouterView />
  </div>
</template>
