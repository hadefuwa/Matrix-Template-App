import './style.css';
import {
  Chart,
  LineController,
  BarController,
  DoughnutController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

// Register Chart.js components
Chart.register(
  LineController,
  BarController,
  DoughnutController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler
);

// ================================================================
// SIMPLE TEMPLATE SYSTEM (PHASE 1)
// ================================================================
// - All "pages" are plain functions that return HTML strings.
// - Navigation swaps the innerHTML of the <main> element.
// - No router library, no complex state – good for a beginner.
// - In Phase 2 we can:
//   - Move these templates into separate files (e.g. templates/home.js).
//   - Replace the manual navigation with a tiny router (page.js / navigo).

// ================================================================
// HOME TEMPLATES (Home Template 1 / 2 / 3)
// ================================================================

function renderHomeTemplate1() {
  return `
    <!-- Home Template 1 – Simple dashboard -->
    <section class="grid gap-4 md:grid-cols-3">
      <div class="card bg-base-200 shadow">
        <div class="card-body">
          <h2 class="card-title">System Status</h2>
          <p>All core services are running normally.</p>
          <div class="card-actions justify-end">
            <div class="badge badge-success">OK</div>
          </div>
        </div>
      </div>

      <div class="card bg-base-200 shadow">
        <div class="card-body">
          <h2 class="card-title">Active Devices</h2>
          <p>3 devices connected.</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary btn-sm">View devices</button>
          </div>
        </div>
      </div>

      <div class="card bg-base-200 shadow">
        <div class="card-body">
          <h2 class="card-title">Recent Alerts</h2>
          <p>No critical alerts in the last 24 hours.</p>
          <div class="card-actions justify-end">
            <div class="badge badge-info">0 alerts</div>
          </div>
        </div>
      </div>
    </section>

    <section class="grid gap-4 lg:grid-cols-3">
      <div class="card bg-base-200 shadow lg:col-span-2">
        <div class="card-body">
          <h2 class="card-title">Devices</h2>
          <div class="overflow-x-auto">
            <table class="table table-zebra">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Mode</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Device A</td>
                  <td><span class="badge badge-success">Online</span></td>
                  <td>Auto</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Device B</td>
                  <td><span class="badge badge-error">Offline</span></td>
                  <td>Manual</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Device C</td>
                  <td><span class="badge badge-warning">Warning</span></td>
                  <td>Auto</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="card bg-base-200 shadow">
        <div class="card-body">
          <h2 class="card-title">Quick Config</h2>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Device name</span>
            </label>
            <input type="text" placeholder="Enter device name" class="input input-bordered" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Mode</span>
            </label>
            <select class="select select-bordered">
              <option>Auto</option>
              <option>Manual</option>
            </select>
          </div>
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">Enable logging</span>
              <input type="checkbox" class="toggle toggle-primary" checked />
            </label>
          </div>
          <div class="card-actions justify-end">
            <button class="btn btn-primary btn-sm">Apply</button>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderHomeTemplate2() {
  return `
    <!-- Home Template 2 – Data-focused -->
    <section class="grid gap-4 md:grid-cols-3">
      <div class="card bg-base-200 shadow md:col-span-2">
        <div class="card-body">
          <h2 class="card-title">Main Data Table</h2>
          <div class="overflow-x-auto">
            <table class="table table-zebra">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Mode</th>
                  <th>Updated</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Device A</td>
                  <td><span class="badge badge-success">Online</span></td>
                  <td>Auto</td>
                  <td>Just now</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Device B</td>
                  <td><span class="badge badge-error">Offline</span></td>
                  <td>Manual</td>
                  <td>5 min ago</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Device C</td>
                  <td><span class="badge badge-warning">Warning</span></td>
                  <td>Auto</td>
                  <td>2 min ago</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="card bg-base-200 shadow">
        <div class="card-body">
          <h2 class="card-title">Recent Events</h2>
          <ul class="timeline timeline-vertical timeline-compact">
            <li>
              <div class="timeline-middle">
                <div class="badge badge-success"></div>
              </div>
              <div class="timeline-end timeline-box">Device A connected</div>
              <div class="timeline-start text-xs opacity-60">12:00</div>
            </li>
            <li>
              <hr/>
              <div class="timeline-middle">
                <div class="badge badge-warning"></div>
              </div>
              <div class="timeline-end timeline-box">Device C warning</div>
              <div class="timeline-start text-xs opacity-60">12:05</div>
            </li>
            <li>
              <hr/>
              <div class="timeline-middle">
                <div class="badge badge-error"></div>
              </div>
              <div class="timeline-end timeline-box">Device B offline</div>
              <div class="timeline-start text-xs opacity-60">12:10</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  `;
}

function renderHomeTemplate3() {
  return `
    <!-- Home Template 3 – Card-focused -->
    <section class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      ${['Zone A', 'Zone B', 'Zone C', 'Zone D', 'Zone E', 'Zone F']
        .map(
          (zone) => `
        <div class="card bg-base-200 shadow">
          <div class="card-body">
            <h2 class="card-title">${zone}</h2>
            <p>Brief description of this zone or module.</p>
            <div class="flex justify-between items-center">
              <div class="badge badge-success">Running</div>
              <button class="btn btn-sm btn-outline">Open</button>
            </div>
          </div>
        </div>
      `
        )
        .join('')}
    </section>
  `;
}

// ================================================================
// HMI (HUMAN-MACHINE INTERFACE) TEMPLATES
// ================================================================
// Rich, data-dense industrial control interfaces with:
// - Real-time charts and graphs
// - Gauges and meters
// - Sliders and interactive controls
// - Product imagery and branding
// - High information density

function renderHMIDashboard() {
  return `
    <!-- HMI Dashboard – Industrial Control Interface -->

    <!-- Top Status Bar with Key Metrics -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
      <div class="stat bg-gradient-to-br from-primary to-primary-focus text-primary-content shadow-lg rounded-lg">
        <div class="stat-title text-primary-content opacity-80">System Status</div>
        <div class="stat-value text-2xl flex items-center gap-2">
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
          </span>
          RUNNING
        </div>
        <div class="stat-desc text-primary-content opacity-70">All systems nominal</div>
      </div>

      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">Temperature</div>
        <div class="stat-value text-3xl text-warning">23.5°C</div>
        <div class="stat-desc flex items-center gap-1">
          <span class="text-success">↗︎ 0.3°C</span> from setpoint
        </div>
      </div>

      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">Pressure</div>
        <div class="stat-value text-3xl text-info">101.3 kPa</div>
        <div class="stat-desc">Normal range</div>
      </div>

      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">Flow Rate</div>
        <div class="stat-value text-3xl text-accent">45.2 L/min</div>
        <div class="stat-desc flex items-center gap-1">
          <span class="text-error">↘︎ 2.1%</span> vs target
        </div>
      </div>
    </div>

    <!-- Main Control Area -->
    <div class="grid gap-4 lg:grid-cols-3">

      <!-- Left: Charts Section -->
      <div class="lg:col-span-2 space-y-4">

        <!-- Real-time Temperature Chart -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title flex items-center gap-2">
              <svg class="w-5 h-5 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
              </svg>
              Temperature Trends (Real-time)
              <span class="badge badge-sm badge-success ml-auto">LIVE</span>
            </h2>
            <div class="h-64">
              <canvas id="tempChart"></canvas>
            </div>
          </div>
        </div>

        <!-- System Performance Chart -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">System Performance Overview</h2>
            <div class="h-48">
              <canvas id="performanceChart"></canvas>
            </div>
          </div>
        </div>

      </div>

      <!-- Right: Controls & Gauges -->
      <div class="space-y-4">

        <!-- Main Control Panel -->
        <div class="card bg-gradient-to-br from-base-200 to-base-300 shadow-xl border-2 border-primary">
          <div class="card-body">
            <h2 class="card-title text-primary">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
              </svg>
              Main Controls
            </h2>

            <!-- Big Start/Stop Buttons -->
            <div class="flex gap-2">
              <button class="btn btn-success flex-1 btn-lg">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
                </svg>
                START
              </button>
              <button class="btn btn-error flex-1 btn-lg">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"/>
                </svg>
                STOP
              </button>
            </div>

            <!-- Mode Selector -->
            <div class="form-control mt-3">
              <label class="label">
                <span class="label-text font-bold">Operation Mode</span>
              </label>
              <div class="join w-full">
                <button class="btn join-item flex-1 btn-sm btn-active btn-primary">AUTO</button>
                <button class="btn join-item flex-1 btn-sm">MANUAL</button>
                <button class="btn join-item flex-1 btn-sm">TEST</button>
              </div>
            </div>

            <!-- Temperature Setpoint Slider -->
            <div class="form-control mt-4">
              <label class="label">
                <span class="label-text font-bold">Temperature Setpoint</span>
                <span class="label-text-alt badge badge-lg badge-primary">23.0°C</span>
              </label>
              <input type="range" min="15" max="35" value="23" class="range range-primary range-lg" step="0.5" />
              <div class="flex w-full justify-between text-xs px-2 mt-1">
                <span>15°C</span>
                <span>|</span>
                <span>25°C</span>
                <span>|</span>
                <span>35°C</span>
              </div>
            </div>

            <!-- Speed Control -->
            <div class="form-control mt-4">
              <label class="label">
                <span class="label-text font-bold">Fan Speed</span>
                <span class="label-text-alt badge badge-lg badge-accent">75%</span>
              </label>
              <input type="range" min="0" max="100" value="75" class="range range-accent range-lg" step="5" />
            </div>

            <!-- Emergency Stop -->
            <button class="btn btn-outline btn-error w-full mt-4 btn-lg">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
              </svg>
              EMERGENCY STOP
            </button>
          </div>
        </div>

        <!-- System Gauges -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-sm">System Load</h2>
            <div class="flex justify-around items-center">
              <div class="radial-progress text-primary" style="--value:70; --size:5rem;" role="progressbar">70%</div>
              <div class="radial-progress text-secondary" style="--value:85; --size:5rem;" role="progressbar">85%</div>
              <div class="radial-progress text-accent" style="--value:42; --size:5rem;" role="progressbar">42%</div>
            </div>
            <div class="flex justify-around text-xs mt-2">
              <span>CPU</span>
              <span>Memory</span>
              <span>I/O</span>
            </div>
          </div>
        </div>

        <!-- Active Alarms -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-sm">Active Alarms</h2>
            <div class="space-y-2">
              <div class="alert alert-warning py-2">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"/>
                </svg>
                <span class="text-xs">Temp approaching limit</span>
              </div>
              <div class="alert alert-info py-2">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"/>
                </svg>
                <span class="text-xs">Maintenance due: 48h</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Bottom: Process Flow Visualization -->
    <div class="card bg-base-200 shadow-xl mt-4">
      <div class="card-body">
        <h2 class="card-title">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"/>
          </svg>
          Process Flow Diagram
        </h2>

        <!-- Simplified Process Flow -->
        <div class="flex items-center justify-around p-6">
          <div class="flex flex-col items-center">
            <div class="w-20 h-20 bg-primary rounded-lg flex items-center justify-center text-primary-content font-bold shadow-lg">
              INLET
            </div>
            <div class="badge badge-success mt-2">ACTIVE</div>
            <div class="text-xs mt-1">45.2 L/min</div>
          </div>

          <svg class="w-16 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>

          <div class="flex flex-col items-center">
            <div class="w-20 h-20 bg-accent rounded-lg flex items-center justify-center text-accent-content font-bold shadow-lg animate-pulse">
              PROCESS
            </div>
            <div class="badge badge-warning mt-2">HEATING</div>
            <div class="text-xs mt-1">23.5°C</div>
          </div>

          <svg class="w-16 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>

          <div class="flex flex-col items-center">
            <div class="w-20 h-20 bg-secondary rounded-lg flex items-center justify-center text-secondary-content font-bold shadow-lg">
              OUTLET
            </div>
            <div class="badge badge-success mt-2">ACTIVE</div>
            <div class="text-xs mt-1">44.8 L/min</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ================================================================
// ADMIN PANEL TEMPLATES (Admin Panel 1 / 2 / 3)
// ================================================================

function renderAdminPanel1() {
  return `
    <!-- Admin Panel 1 – Simple table + detail -->
    <section class="grid gap-4 lg:grid-cols-3">
      <div class="card bg-base-200 shadow lg:col-span-2">
        <div class="card-body">
          <h2 class="card-title">Items</h2>
          <div class="flex gap-2 mb-2">
            <input class="input input-bordered input-sm flex-1" placeholder="Search..." />
            <select class="select select-bordered select-sm w-32">
              <option>All</option>
              <option>Active</option>
              <option>Disabled</option>
            </select>
          </div>
          <div class="overflow-x-auto">
            <table class="table table-zebra">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>User A</td>
                  <td><span class="badge badge-success">Active</span></td>
                  <td class="flex gap-1">
                    <button class="btn btn-xs btn-outline">Edit</button>
                    <button class="btn btn-xs btn-outline btn-error">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>User B</td>
                  <td><span class="badge badge-warning">Pending</span></td>
                  <td class="flex gap-1">
                    <button class="btn btn-xs btn-outline">Edit</button>
                    <button class="btn btn-xs btn-outline btn-error">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="card bg-base-200 shadow">
        <div class="card-body">
          <h2 class="card-title">Selected Item</h2>
          <p>Details about the currently selected item will appear here.</p>
          <ul class="list-disc list-inside text-sm space-y-1">
            <li>Name: User A</li>
            <li>Role: Administrator</li>
            <li>Status: Active</li>
          </ul>
        </div>
      </div>
    </section>
  `;
}

function renderAdminPanel2() {
  return `
    <!-- Admin Panel 2 – Master/detail with tabs -->
    <section class="grid gap-4 lg:grid-cols-3">
      <!-- Master list -->
      <div class="card bg-base-200 shadow">
        <div class="card-body">
          <h2 class="card-title">Items</h2>
          <ul class="menu bg-base-100 rounded-box mt-2">
            <li><a class="active">Device A</a></li>
            <li><a>Device B</a></li>
            <li><a>Device C</a></li>
            <li><a>Device D</a></li>
          </ul>
        </div>
      </div>

      <!-- Detail with tabs -->
      <div class="card bg-base-200 shadow lg:col-span-2">
        <div class="card-body">
          <h2 class="card-title mb-2">Device A</h2>
          <div role="tablist" class="tabs tabs-bordered">
            <input type="radio" name="admin2-tabs" role="tab" class="tab" aria-label="Overview" defaultChecked />
            <div role="tabpanel" class="tab-content p-4">
              <p class="text-sm">Overview information about the selected device.</p>
              <ul class="list-disc list-inside text-sm space-y-1 mt-2">
                <li>Status: <span class="badge badge-success">Online</span></li>
                <li>Mode: Auto</li>
                <li>Location: Lab 1</li>
              </ul>
            </div>

            <input type="radio" name="admin2-tabs" role="tab" class="tab" aria-label="Settings" />
            <div role="tabpanel" class="tab-content p-4">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Target value</span>
                </label>
                <input type="number" class="input input-bordered" placeholder="42" />
              </div>
              <div class="form-control mt-2">
                <label class="label cursor-pointer">
                  <span class="label-text">Enable advanced mode</span>
                  <input type="checkbox" class="toggle toggle-primary" />
                </label>
              </div>
              <div class="card-actions justify-end mt-3">
                <button class="btn btn-primary btn-sm">Save settings</button>
              </div>
            </div>

            <input type="radio" name="admin2-tabs" role="tab" class="tab" aria-label="Logs" />
            <div role="tabpanel" class="tab-content p-4">
              <div class="overflow-x-auto">
                <table class="table table-zebra text-sm">
                  <thead>
                    <tr>
                      <th>Time</th>
                      <th>Level</th>
                      <th>Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>12:00</td>
                      <td><span class="badge badge-success">Info</span></td>
                      <td>Device started.</td>
                    </tr>
                    <tr>
                      <td>12:05</td>
                      <td><span class="badge badge-warning">Warn</span></td>
                      <td>Temperature high.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderAdminPanel3() {
  return `
    <!-- Admin Panel 3 – Settings-driven -->
    <section class="grid gap-4 lg:grid-cols-2">
      <div class="card bg-base-200 shadow">
        <div class="card-body">
          <h2 class="card-title">General Settings</h2>
          <div class="collapse collapse-arrow bg-base-100 mt-2">
            <input type="checkbox" />
            <div class="collapse-title text-md font-medium">
              Display
            </div>
            <div class="collapse-content">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Theme</span>
                </label>
                <select class="select select-bordered select-sm">
                  <option>Light</option>
                  <option>Dark</option>
                </select>
              </div>
              <div class="form-control mt-2">
                <label class="label cursor-pointer">
                  <span class="label-text">High contrast mode</span>
                  <input type="checkbox" class="toggle toggle-primary" />
                </label>
              </div>
            </div>
          </div>

          <div class="collapse collapse-arrow bg-base-100 mt-2">
            <input type="checkbox" />
            <div class="collapse-title text-md font-medium">
              Security
            </div>
            <div class="collapse-content space-y-2">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Idle timeout (minutes)</span>
                </label>
                <input type="number" class="input input-bordered input-sm" placeholder="15" />
              </div>
              <div class="form-control">
                <label class="label cursor-pointer">
                  <span class="label-text">Require PIN on startup</span>
                  <input type="checkbox" class="toggle toggle-primary" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card bg-base-200 shadow">
        <div class="card-body">
          <h2 class="card-title">Preview</h2>
          <p class="text-sm opacity-80">
            This panel shows a summary of key settings so engineers can see the effect of changes.
          </p>
          <ul class="menu bg-base-100 rounded-box mt-3">
            <li class="menu-title">Current configuration</li>
            <li><span>Theme: Light</span></li>
            <li><span>High contrast: Off</span></li>
            <li><span>Idle timeout: 15 minutes</span></li>
            <li><span>Require PIN: Off</span></li>
          </ul>
        </div>
      </div>
    </section>
  `;
}

// ================================================================
// CONTROL / I/O / FAULTS / TASKS TEMPLATES
// ================================================================

function renderControlTemplate1() {
  return `
    <!-- Control Template 1 – Simple controls -->
    <section class="grid gap-4 lg:grid-cols-3">
      <div class="card bg-base-200 shadow lg:col-span-2">
        <div class="card-body">
          <h2 class="card-title">Main Controls</h2>
          <div class="flex flex-wrap gap-2 mt-2">
            <button class="btn btn-success">Start</button>
            <button class="btn btn-error">Stop</button>
            <button class="btn btn-warning">Pause</button>
            <button class="btn btn-outline">Reset</button>
          </div>
          <div class="form-control mt-4">
            <label class="label">
              <span class="label-text">Mode</span>
            </label>
            <div class="join">
              <button class="btn join-item btn-sm btn-primary">Auto</button>
              <button class="btn join-item btn-sm btn-ghost">Manual</button>
            </div>
          </div>
          <div class="mt-4">
            <span class="text-sm opacity-70">Progress</span>
            <progress class="progress progress-primary w-full" value="40" max="100"></progress>
          </div>
        </div>
      </div>

      <div class="card bg-base-200 shadow">
        <div class="card-body">
          <h2 class="card-title">Status</h2>
          <div class="flex flex-col gap-2">
            <div class="stat bg-base-100 rounded-box">
              <div class="stat-title">Current state</div>
              <div class="stat-value text-sm">Running</div>
              <div class="stat-desc">00:10 elapsed</div>
            </div>
            <div class="stat bg-base-100 rounded-box">
              <div class="stat-title">Setpoint</div>
              <div class="stat-value text-sm">42.0</div>
              <div class="stat-desc">Units: °C</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderIoTemplate1() {
  return `
    <!-- I/O Template 1 – Simple list -->
    <section class="grid gap-4 lg:grid-cols-2">
      <div class="card bg-base-200 shadow">
        <div class="card-body">
          <h2 class="card-title">Digital Inputs</h2>
          <div class="overflow-x-auto">
            <table class="table table-zebra text-sm">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>State</th>
                  <th>Group</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>DI1</td>
                  <td><span class="badge badge-success">High</span></td>
                  <td>A</td>
                </tr>
                <tr>
                  <td>DI2</td>
                  <td><span class="badge badge-error">Low</span></td>
                  <td>A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="card bg-base-200 shadow">
        <div class="card-body">
          <h2 class="card-title">Digital Outputs</h2>
          <div class="overflow-x-auto">
            <table class="table table-zebra text-sm">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>State</th>
                  <th>Control</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>DO1</td>
                  <td><span class="badge badge-success">On</span></td>
                  <td><input type="checkbox" class="toggle toggle-sm toggle-primary" checked /></td>
                </tr>
                <tr>
                  <td>DO2</td>
                  <td><span class="badge badge-error">Off</span></td>
                  <td><input type="checkbox" class="toggle toggle-sm toggle-primary" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderFaultsTemplate1() {
  return `
    <!-- Faults Template 1 – Fault list -->
    <section class="grid gap-4 lg:grid-cols-3">
      <div class="card bg-base-200 shadow">
        <div class="card-body">
          <h2 class="card-title">Status Overview</h2>
          <div class="stats stats-vertical shadow bg-base-100">
            <div class="stat">
              <div class="stat-title">Active faults</div>
              <div class="stat-value text-error">1</div>
            </div>
            <div class="stat">
              <div class="stat-title">Warnings</div>
              <div class="stat-value text-warning">2</div>
            </div>
            <div class="stat">
              <div class="stat-title">Infos</div>
              <div class="stat-value text-success">5</div>
            </div>
          </div>
        </div>
      </div>

      <div class="card bg-base-200 shadow lg:col-span-2">
        <div class="card-body">
          <h2 class="card-title">Faults</h2>
          <div class="overflow-x-auto">
            <table class="table table-zebra text-sm">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Severity</th>
                  <th>Source</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12:10</td>
                  <td><span class="badge badge-error">Error</span></td>
                  <td>Device B</td>
                  <td>Communication lost.</td>
                </tr>
                <tr>
                  <td>12:05</td>
                  <td><span class="badge badge-warning">Warning</span></td>
                  <td>Device C</td>
                  <td>High temperature.</td>
                </tr>
                <tr>
                  <td>12:00</td>
                  <td><span class="badge badge-info">Info</span></td>
                  <td>System</td>
                  <td>Startup complete.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderTasksTemplate1() {
  return `
    <!-- Tasks Template 1 – Simple list -->
    <section class="grid gap-4 lg:grid-cols-3">
      <div class="card bg-base-200 shadow lg:col-span-2">
        <div class="card-body">
          <h2 class="card-title">Worksheet – Basic Procedure</h2>
          <ul class="space-y-2">
            <li class="flex items-start gap-2">
              <input type="checkbox" class="checkbox checkbox-sm mt-1" />
              <div>
                <div class="font-medium text-sm">Step 1 – Power on system</div>
                <div class="text-xs opacity-70">Verify all indicators are in a safe state.</div>
              </div>
            </li>
            <li class="flex items-start gap-2">
              <input type="checkbox" class="checkbox checkbox-sm mt-1" />
              <div>
                <div class="font-medium text-sm">Step 2 – Connect device</div>
                <div class="text-xs opacity-70">Check that the device appears in the Devices table.</div>
              </div>
            </li>
            <li class="flex items-start gap-2">
              <input type="checkbox" class="checkbox checkbox-sm mt-1" />
              <div>
                <div class="font-medium text-sm">Step 3 – Run test</div>
                <div class="text-xs opacity-70">Record results in the fields to the right.</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="card bg-base-200 shadow">
        <div class="card-body">
          <h2 class="card-title">Results</h2>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Voltage (V)</span>
            </label>
            <input type="number" class="input input-bordered input-sm" placeholder="0.0" />
          </div>
          <div class="form-control mt-2">
            <label class="label">
              <span class="label-text">Current (A)</span>
            </label>
            <input type="number" class="input input-bordered input-sm" placeholder="0.0" />
          </div>
          <div class="form-control mt-2">
            <label class="label">
              <span class="label-text">Comments</span>
            </label>
            <textarea class="textarea textarea-bordered textarea-sm" rows="3" placeholder="Notes about the test..."></textarea>
          </div>
          <div class="card-actions justify-end mt-3">
            <button class="btn btn-primary btn-sm">Save worksheet</button>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ================================================================
// COMPONENT GALLERY / SETTINGS / ABOUT
// ================================================================

function renderComponentGallery() {
  return `
    <!-- Component Gallery – show a variety of DaisyUI components -->
    <section class="space-y-4">
      <div class="card bg-base-200 shadow">
        <div class="card-body">
          <h2 class="card-title">Buttons & Badges</h2>
          <div class="flex flex-wrap gap-2 mb-2">
            <button class="btn btn-primary btn-sm">Primary</button>
            <button class="btn btn-secondary btn-sm">Secondary</button>
            <button class="btn btn-accent btn-sm">Accent</button>
            <button class="btn btn-outline btn-sm">Outline</button>
            <button class="btn btn-ghost btn-sm">Ghost</button>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="badge badge-success">Success</span>
            <span class="badge badge-warning">Warning</span>
            <span class="badge badge-error">Error</span>
            <span class="badge badge-info">Info</span>
            <span class="badge badge-neutral">Neutral</span>
          </div>
        </div>
      </div>

      <div class="card bg-base-200 shadow">
        <div class="card-body">
          <h2 class="card-title">Forms</h2>
          <div class="grid gap-4 md:grid-cols-2">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Text input</span>
              </label>
              <input class="input input-bordered" placeholder="Type here" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Select</span>
              </label>
              <select class="select select-bordered">
                <option>Option A</option>
                <option>Option B</option>
              </select>
            </div>
            <div class="form-control">
              <label class="label cursor-pointer">
                <span class="label-text">Checkbox</span>
                <input type="checkbox" class="checkbox" />
              </label>
            </div>
            <div class="form-control">
              <label class="label cursor-pointer">
                <span class="label-text">Toggle</span>
                <input type="checkbox" class="toggle toggle-primary" checked />
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="card bg-base-200 shadow">
        <div class="card-body">
          <h2 class="card-title">Feedback & Layout</h2>
          <div class="alert alert-success">
            <span>Example success alert message.</span>
          </div>
          <div class="alert alert-warning mt-2">
            <span>Example warning alert message.</span>
          </div>
          <div class="mt-4">
            <div class="collapse bg-base-100">
              <input type="checkbox" />
              <div class="collapse-title text-md font-medium">
                Accordion example
              </div>
              <div class="collapse-content">
                <p class="text-sm">This is an accordion/collapse component using DaisyUI.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderSettingsPage() {
  return `
    <!-- Settings Page -->
    <section class="grid gap-4 lg:grid-cols-2">
      <div class="card bg-base-200 shadow">
        <div class="card-body">
          <h2 class="card-title">App Settings</h2>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Theme</span>
            </label>
            <select class="select select-bordered select-sm">
              <option>Follow global (header)</option>
              <option>Light</option>
              <option>Dark</option>
            </select>
          </div>
          <div class="form-control mt-2">
            <label class="label">
              <span class="label-text">Language</span>
            </label>
            <select class="select select-bordered select-sm">
              <option>English</option>
              <option>Other (placeholder)</option>
            </select>
          </div>
          <div class="card-actions justify-end mt-3">
            <button class="btn btn-primary btn-sm">Save</button>
          </div>
        </div>
      </div>

      <div class="card bg-base-200 shadow">
        <div class="card-body">
          <h2 class="card-title">Connection Settings</h2>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Mode</span>
            </label>
            <select class="select select-bordered select-sm">
              <option>Simulated</option>
              <option>Local</option>
              <option>Remote</option>
            </select>
          </div>
          <div class="form-control mt-2">
            <label class="label">
              <span class="label-text">API base URL</span>
            </label>
            <input class="input input-bordered input-sm" placeholder="http://localhost:8080" />
          </div>
          <div class="card-actions justify-end mt-3">
            <button class="btn btn-outline btn-sm">Test connection</button>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderAboutPage() {
  return `
    <!-- About / Help Page -->
    <section class="space-y-4">
      <div class="card bg-base-200 shadow">
        <div class="card-body">
          <h2 class="card-title">About Matrix Template UI</h2>
          <p class="text-sm">
            This template provides a consistent set of UI patterns for Matrix TSL apps, built with
            Tailwind CSS and DaisyUI. It showcases common layouts and components engineers can reuse.
          </p>
          <p class="text-xs opacity-70 mt-2">
            Version: 0.1.0 (template only, no backend or hardware integration).
          </p>
        </div>
      </div>

      <div class="card bg-base-200 shadow">
        <div class="card-body">
          <h2 class="card-title">Help & Documentation</h2>
          <ul class="list-disc list-inside text-sm space-y-1">
            <li>Architecture overview in <code>docs/MATRIX-UI-Architecture.md</code></li>
            <li>Theming and design system in <code>docs/MATRIX-UI-Design-and-Theming.md</code></li>
            <li>Pages & templates todo in <code>docs/Matrix-Template-UI-Pages-Todo.md</code></li>
          </ul>
        </div>
      </div>
    </section>
  `;
}

// ================================================================
// GENERIC PLACEHOLDER
// ================================================================

function renderPlaceholder(title) {
  return `
    <div class="card bg-base-200 shadow">
      <div class="card-body">
        <h2 class="card-title">${title}</h2>
        <p>This template is planned but not fully implemented yet.</p>
        <p class="text-sm opacity-70">You can extend this section later with more detailed UI.</p>
      </div>
    </div>
  `;
}

// ================================================================
// PAGE REGISTRY
// ================================================================
// Simple map from page keys (used by data-page attributes) to
// template functions. Later, this can be replaced or extended
// by a proper router if we need deep links or browser history.

const PAGES = {
  'hmi-dashboard': renderHMIDashboard,
  'home-1': renderHomeTemplate1,
  'home-2': renderHomeTemplate2,
  'home-3': renderHomeTemplate3,
  'admin-1': renderAdminPanel1,
  'admin-2': renderAdminPanel2,
  'admin-3': renderAdminPanel3,
  'control-1': renderControlTemplate1,
  'io-1': renderIoTemplate1,
  'faults-1': renderFaultsTemplate1,
  'tasks-1': renderTasksTemplate1,
  'components': renderComponentGallery,
  'settings': renderSettingsPage,
  'about': renderAboutPage
};

// ================================================================
// APP SHELL (header, sidebar, main content, footer)
// ================================================================

const app = document.querySelector('#app');

app.innerHTML = `
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="navbar bg-base-200 px-4">
      <div class="flex-1">
        <span class="text-xl font-bold">Matrix Template UI</span>
      </div>
      <div class="flex-none flex items-center gap-4">
        <div class="form-control">
          <label class="label cursor-pointer gap-2">
            <span class="label-text">Theme</span>
            <select id="theme-select" class="select select-bordered select-sm">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </label>
        </div>
        <button class="btn btn-outline btn-sm">Help</button>
      </div>
    </header>

    <!-- Body with sidebar + main content -->
    <div class="flex flex-1 bg-base-100">
      <!-- Sidebar -->
      <aside class="w-72 border-r border-base-300 bg-base-200 hidden md:block">
        <ul class="menu p-4 gap-1" id="sidebar-menu">
          <li class="menu-title">
            <span class="flex items-center gap-2">
              <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
              HMI Dashboards
            </span>
          </li>
          <li><a href="#" data-page="hmi-dashboard" class="active bg-primary text-primary-content font-bold">Matrix HMI Dashboard ⭐</a></li>

          <li class="menu-title mt-4">Home Templates</li>
          <li><a href="#" data-page="home-1">Home Template 1</a></li>
          <li><a href="#" data-page="home-2">Home Template 2</a></li>
          <li><a href="#" data-page="home-3">Home Template 3</a></li>

          <li class="menu-title mt-4">Admin Panels</li>
          <li><a href="#" data-page="admin-1">Admin Panel 1</a></li>
          <li><a href="#" data-page="admin-2">Admin Panel 2</a></li>
          <li><a href="#" data-page="admin-3">Admin Panel 3</a></li>

          <li class="menu-title mt-4">Control & I/O</li>
          <li><a href="#" data-page="control-1">Control</a></li>
          <li><a href="#" data-page="io-1">I/O / Signals</a></li>
          <li><a href="#" data-page="faults-1">Faults / Status</a></li>
          <li><a href="#" data-page="tasks-1">Tasks / Worksheets</a></li>

          <li class="menu-title mt-4">Other</li>
          <li><a href="#" data-page="components">Component Gallery</a></li>
          <li><a href="#" data-page="settings">Settings</a></li>
          <li><a href="#" data-page="about">About / Help</a></li>
        </ul>
      </aside>

      <!-- Main content -->
      <main id="main-content" class="flex-1 p-4 space-y-4">
        <!-- Content will be inserted here based on selected page -->
      </main>
    </div>

    <!-- Footer -->
    <footer class="footer footer-center p-4 bg-base-200 text-base-content">
      <aside>
        <p>Matrix TSL UI Template • DaisyUI Component Gallery</p>
      </aside>
    </footer>

    <!-- Modal using native <dialog> + DaisyUI styles -->
    <dialog id="deviceResetModal" class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Reset device?</h3>
        <p class="py-2 text-sm">
          This is just a demo modal. In a real app, this would send a reset command to the selected device.
        </p>
        <div class="modal-action">
          <form method="dialog" class="flex gap-2">
            <button class="btn btn-outline btn-sm">Cancel</button>
            <button class="btn btn-error btn-sm">Confirm reset</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
`;

// ================================================================
// RENDERING & NAVIGATION
// ================================================================

// Store chart instances to clean them up when switching pages
let activeCharts = [];

// Simple function to render the requested page into the main content area.
function renderPage(pageKey) {
  // Clean up existing charts
  activeCharts.forEach(chart => chart.destroy());
  activeCharts = [];

  const mainContent = document.getElementById('main-content');
  const templateFn = PAGES[pageKey];
  if (!templateFn) {
    mainContent.innerHTML = renderPlaceholder('Page not found');
    return;
  }
  mainContent.innerHTML = templateFn();

  // Initialize charts if this is the HMI dashboard
  if (pageKey === 'hmi-dashboard') {
    initializeHMICharts();
  }
}

// ================================================================
// HMI CHART INITIALIZATION
// ================================================================
function initializeHMICharts() {
  // Wait for next tick to ensure canvas elements are in DOM
  setTimeout(() => {
    // Temperature Chart
    const tempCanvas = document.getElementById('tempChart');
    if (tempCanvas) {
      const tempCtx = tempCanvas.getContext('2d');
      const tempChart = new Chart(tempCtx, {
        type: 'line',
        data: {
          labels: ['00:00', '00:05', '00:10', '00:15', '00:20', '00:25', '00:30'],
          datasets: [
            {
              label: 'Temperature (°C)',
              data: [22.1, 22.5, 23.0, 23.5, 23.2, 23.5, 23.5],
              borderColor: 'rgb(251, 146, 60)',
              backgroundColor: 'rgba(251, 146, 60, 0.1)',
              fill: true,
              tension: 0.4,
              pointRadius: 4,
              pointHoverRadius: 6
            },
            {
              label: 'Setpoint (°C)',
              data: [23, 23, 23, 23, 23, 23, 23],
              borderColor: 'rgb(59, 130, 246)',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              borderDash: [5, 5],
              fill: false,
              tension: 0
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: 'top'
            },
            tooltip: {
              mode: 'index',
              intersect: false
            }
          },
          scales: {
            y: {
              beginAtZero: false,
              min: 20,
              max: 26,
              title: {
                display: true,
                text: 'Temperature (°C)'
              }
            },
            x: {
              title: {
                display: true,
                text: 'Time'
              }
            }
          }
        }
      });
      activeCharts.push(tempChart);
    }

    // Performance Chart
    const perfCanvas = document.getElementById('performanceChart');
    if (perfCanvas) {
      const perfCtx = perfCanvas.getContext('2d');
      const perfChart = new Chart(perfCtx, {
        type: 'bar',
        data: {
          labels: ['CPU Usage', 'Memory', 'I/O Load', 'Network', 'Disk'],
          datasets: [{
            label: 'System Load (%)',
            data: [70, 85, 42, 35, 58],
            backgroundColor: [
              'rgba(59, 130, 246, 0.8)',
              'rgba(139, 92, 246, 0.8)',
              'rgba(236, 72, 153, 0.8)',
              'rgba(34, 197, 94, 0.8)',
              'rgba(251, 146, 60, 0.8)'
            ],
            borderColor: [
              'rgb(59, 130, 246)',
              'rgb(139, 92, 246)',
              'rgb(236, 72, 153)',
              'rgb(34, 197, 94)',
              'rgb(251, 146, 60)'
            ],
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              title: {
                display: true,
                text: 'Load (%)'
              }
            }
          }
        }
      });
      activeCharts.push(perfChart);
    }
  }, 10);
}

// Sidebar navigation click handling.
const sidebarMenu = document.getElementById('sidebar-menu');
sidebarMenu.addEventListener('click', (event) => {
  const link = event.target.closest('a[data-page]');
  if (!link) return;
  event.preventDefault();

  const pageKey = link.getAttribute('data-page');

  // Update active class.
  sidebarMenu.querySelectorAll('a[data-page]').forEach((a) => {
    a.classList.toggle('active', a === link);
  });

  renderPage(pageKey);
});

// ================================================================
// THEME SWITCHER (Light / Dark)
// ================================================================

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

// Initial page: HMI Dashboard (the star of the show!)
renderPage('hmi-dashboard');
