document.addEventListener('DOMContentLoaded', () => {
  const mountPoint = document.getElementById('site-header');

  if (!mountPoint) return;

  mountPoint.innerHTML = `
    <header class="bg-white px-6 py-4 flex items-center justify-between shadow-sm sticky top-0 z-10" data-purpose="top-nav-bar">
      <div class="flex items-center gap-3">
        <div aria-hidden="true" class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl">
          <i class="fa-solid fa-owl"></i>
        </div>
        <h1 class="text-xl font-bold tracking-tight">LingoGuru</h1>
      </div>

      <nav aria-label="Main Navigation">
        <ul class="flex items-center gap-6 text-gray-600 text-xl">
          <li>
            <a aria-label="Help" class="hover:text-blue-600 transition-colors focus-ring rounded-full p-1 block" href="#">
              <i class="fa-regular fa-circle-question"></i>
            </a>
          </li>
          <li>
            <a aria-label="Home" class="hover:text-blue-600 transition-colors focus-ring rounded-full p-1 block" href="Modulos.html">
              <i class="fa-solid fa-house"></i>
            </a>
          </li>
          <li>
            <a aria-label="Settings" class="hover:text-blue-600 transition-colors focus-ring rounded-full p-1 block" href="#">
              <i class="fa-solid fa-gear"></i>
            </a>
          </li>
          <li>
            <a aria-label="User Profile" class="hover:text-blue-600 transition-colors focus-ring rounded-full p-1 block" href="Perfi.html">
              <i class="fa-regular fa-circle-user"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  `;
});
