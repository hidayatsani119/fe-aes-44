<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-b from-gray-100 to-gray-200">
    <!-- Navbar -->
    <nav class="navbar bg-white shadow-md p-4 fixed top-0 left-0 right-0 z-50">
      <div class="navbar-start">
        <a class="btn btn-ghost normal-case text-xl font-bold text-indigo-600">AES SBOX</a>
      </div>

      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal gap-4">
          <li>
            <RouterLink to="/encrypt" class="hover:text-indigo-600" active-class="font-semibold text-indigo-600"
              >Encrypt</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/decrypt" class="hover:text-indigo-600" active-class="font-semibold text-indigo-600"
              >Decrypt</RouterLink
            >
          </li>
        </ul>
      </div>

      <div class="navbar-end lg:hidden">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
            <li><RouterLink to="/encrypt" active-class="font-semibold text-indigo-600">Encrypt</RouterLink></li>
            <li><RouterLink to="/decrypt" active-class="font-semibold text-indigo-600">Decrypt</RouterLink></li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Content -->
    <main class="flex-1 pt-28 px-4">
      <RouterView />
    </main>
  </div>
</template>
