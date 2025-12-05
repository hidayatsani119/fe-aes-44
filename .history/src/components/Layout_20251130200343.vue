<script setup></script>
<template>
  <div class="min-h-screen flex flex-col grow">
    <div class="navbar bg-neutral text-neutral-content shadow-sm p-3 sticky top-0 z-50">
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
            <li><RouterLink to="/encrypt" active-class="bg-base-200 text-neutral">Encrypt</RouterLink></li>
            <li><RouterLink to="/decrypt" active-class="bg-base-200 text-neutral">Decrypt</RouterLink></li>
          </ul>
        </div>
        <RouterLink to="/" class="btn btn-ghost text-xl text-info">AES SBOX</RouterLink>
      </div>
      <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal gap-1">
          <li><RouterLink to="/encrypt" active-class="bg-base-300 text-neutral">Encrypt</RouterLink></li>
          <li><RouterLink to="/decrypt" active-class="bg-base-300 text-neutral">Decrypt</RouterLink></li>
        </ul>
      </div>
    </div>

    <RouterView
      style="
        background-image: url(https://images.unsplash.com/photo-1631305337331-b9e5ae9532c0?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
      "
    />
  </div>
</template>
