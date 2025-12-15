import './style.css';

const app = document.querySelector('#app');

app.innerHTML = `
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="navbar bg-base-200 px-4">
      <div class="flex-1">
        <span class="text-xl font-bold">Matrix Tiny UI</span>
      </div>
      <div class="flex-none flex items-center gap-2">
        <label class="label cursor-pointer gap-2">
          <span class="label-text">Theme</span>
          <select id="theme-select" class="select select-bordered select-sm">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
      </div>
    </header>

    <!-- Main content -->
    <main class="flex-1 p-4 bg-base-100">
      <div class="grid gap-4 md:grid-cols-2">
        <!-- Card 1 -->
        <div class="card bg-base-200 shadow-md">
          <div class="card-body">
            <h2 class="card-title">Status Overview</h2>
            <p>This is a simple example card using DaisyUI styles.</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Primary action</button>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="card bg-base-200 shadow-md">
          <div class="card-body">
            <h2 class="card-title">Another Card</h2>
            <p>Everything here is styled with Tailwind + DaisyUI, not custom CSS.</p>
            <div class="flex gap-2">
              <span class="badge badge-success">OK</span>
              <span class="badge badge-warning">Warning</span>
              <span class="badge badge-error">Error</span>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="footer footer-center p-4 bg-base-200 text-base-content">
      <aside>
        <p>Matrix TSL UI Template • Tiny Demo</p>
      </aside>
    </footer>
  </div>
`;

// Simple theme switcher (Light / Dark)
const html = document.documentElement;
const themeSelect = document.getElementById('theme-select');

// Load saved theme if it exists
const savedTheme = localStorage.getItem('matrix-theme');
if (savedTheme === 'light' || savedTheme === 'dark') {
  html.setAttribute('data-theme', savedTheme);
  themeSelect.value = savedTheme;
}

// When user changes theme
themeSelect.addEventListener('change', () => {
  const newTheme = themeSelect.value;
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('matrix-theme', newTheme);
});
