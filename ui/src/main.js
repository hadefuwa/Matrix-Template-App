import './style.css';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
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

function renderHMIDashboard1() {
  return `
    <!-- Electrical Machines – Industrial Control Interface -->

    <!-- ── Top Status Bar ──────────────────────────────────── -->
    <div class="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">

      <!-- System state — big, colour-coded per design philosophy -->
      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">System State</div>
        <div class="stat-value text-2xl font-mono font-bold text-success">RUNNING</div>
        <div class="stat-desc">All systems nominal</div>
      </div>

      <!-- E-Stop + Comms LEDs -->
      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">Safety / Comms</div>
        <div class="flex flex-col gap-2 mt-1">
          <span class="badge badge-neutral badge-sm font-mono">E-STOP SAFE</span>
          <div class="flex gap-1 flex-wrap">
            <span class="badge badge-success badge-xs font-mono">POWER</span>
            <span class="badge badge-success badge-xs font-mono">COMMS</span>
            <span class="badge badge-neutral badge-xs font-mono">MOTOR IN</span>
          </div>
        </div>
      </div>

      <!-- Active mode: MANUAL=amber, PRESET=neutral, REMOTE=blue -->
      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">Active Mode</div>
        <div class="mt-1">
          <div class="join">
            <button class="btn join-item btn-xs btn-warning font-mono">MANUAL</button>
            <button class="btn join-item btn-xs font-mono">PRESET</button>
            <button class="btn join-item btn-xs font-mono">REMOTE</button>
          </div>
        </div>
        <div class="stat-desc mt-1">Manual control active</div>
      </div>

      <!-- Data logging -->
      <div class="stat bg-base-200 shadow-lg rounded-lg md:col-span-2">
        <div class="stat-title">Data Logging</div>
        <div class="flex items-center gap-2 mt-1">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
          </span>
          <span class="badge badge-success badge-sm font-mono">ON</span>
          <span class="font-mono text-xs truncate">run_20260212_143021.csv</span>
        </div>
        <div class="stat-desc">Elapsed: 00:14:22 · 865 rows</div>
      </div>

    </div>

    <!-- ── Control Actions — always first, always visible ───────── -->
    <div class="flex flex-wrap items-center justify-between gap-4 mb-4 p-4 bg-base-200 rounded-xl shadow-xl">
      <div class="flex gap-3 flex-wrap">
        <button class="btn btn-success btn-lg font-mono">START</button>
        <button class="btn btn-error btn-lg font-mono">STOP</button>
        <button class="btn btn-error btn-outline btn-lg font-mono">E-STOP</button>
        <button class="btn btn-warning btn-lg font-mono">RESET FAULT</button>
      </div>
      <div class="flex items-center gap-4 flex-wrap">
        <label class="flex items-start gap-2 cursor-pointer">
          <input type="checkbox" class="toggle toggle-warning toggle-sm mt-0.5" checked />
          <div>
            <div class="text-sm font-mono font-bold">Safe changes</div>
            <div class="text-xs">Slider / input changes stage until APPLY</div>
          </div>
        </label>
        <button class="btn btn-primary btn-lg font-mono">APPLY</button>
      </div>
    </div>

    <!-- ── Main Body: 3 equal columns ─────────────────────────── -->
    <div class="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">

      <!-- ── Column 1: Load / Dynamometer ──────────────────────── -->
      <div class="space-y-4 min-w-0">

        <!-- RPM and Torque -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-sm font-mono">RPM / Torque</h2>
            <div class="flex items-center justify-around py-2">
              <div class="flex flex-col items-center gap-1">
                <div class="radial-progress text-base-content font-bold"
                  style="--value:51; --size:7rem; --thickness:10px;" role="progressbar">
                  <div class="text-center leading-tight">
                    <div class="text-xl font-bold font-mono">1530</div>
                    <div class="text-xs">rpm</div>
                  </div>
                </div>
                <span class="text-xs">0 – 3000 rpm</span>
              </div>
              <div class="flex flex-col items-center gap-1">
                <div class="radial-progress text-base-content font-bold"
                  style="--value:34; --size:5rem; --thickness:8px;" role="progressbar">
                  <div class="text-center leading-tight">
                    <div class="text-base font-bold font-mono">3.4</div>
                    <div class="text-xs">N·m</div>
                  </div>
                </div>
                <span class="text-xs">0 – 10 N·m</span>
              </div>
            </div>
            <!-- RPM sparkline -->
            <div class="h-16 mt-1">
              <canvas id="rpmSparkline"></canvas>
            </div>
          </div>
        </div>

        <!-- Load control -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-sm font-mono">Load Control</h2>
            <div class="form-control min-w-0">
              <label class="label gap-2">
                <span class="label-text font-bold">Load</span>
                <span class="label-text-alt font-mono">60%</span>
              </label>
              <input type="range" min="0" max="100" value="60" class="range range-sm w-full" step="1" />
              <div class="grid w-full grid-cols-5 text-[10px] sm:text-xs px-1 mt-1">
                <span class="text-left">0%</span>
                <span class="text-center invisible sm:visible">25%</span>
                <span class="text-center">50%</span>
                <span class="text-center invisible sm:visible">75%</span>
                <span class="text-right">100%</span>
              </div>
            </div>
            <div class="flex items-center gap-1 mt-3 flex-wrap">
              <span class="text-xs font-mono mr-1">Step:</span>
              <button class="btn btn-outline btn-xs font-mono">−5%</button>
              <button class="btn btn-outline btn-xs font-mono">−1%</button>
              <button class="btn btn-outline btn-xs font-mono">+1%</button>
              <button class="btn btn-outline btn-xs font-mono">+5%</button>
            </div>
            <div class="grid grid-cols-2 gap-3 mt-3">
              <div class="form-control">
                <label class="label py-0"><span class="label-text text-xs">Load limit (%)</span></label>
                <input type="number" class="input input-bordered input-sm font-mono" min="0" max="100" value="90" />
              </div>
              <div class="form-control">
                <label class="label py-0"><span class="label-text text-xs">Ramp rate (%/s)</span></label>
                <input type="number" class="input input-bordered input-sm font-mono" min="0" max="50" value="5" />
              </div>
            </div>
          </div>
        </div>

        <!-- Load electrical -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-sm font-mono">Load Electrical</h2>
            <div class="grid grid-cols-3 gap-2 mt-2">
              <div class="text-center bg-base-300 rounded p-2">
                <div class="text-2xl font-mono font-bold">4.2</div>
                <div class="text-xs">A (jack A)</div>
              </div>
              <div class="text-center bg-base-300 rounded p-2">
                <div class="text-2xl font-mono font-bold">4.1</div>
                <div class="text-xs">A (jack B)</div>
              </div>
              <div class="text-center bg-base-300 rounded p-2">
                <div class="text-2xl font-mono font-bold">48.5</div>
                <div class="text-xs">V</div>
              </div>
            </div>
            <div class="form-control mt-3">
              <label class="label py-0"><span class="label-text text-xs">Measurement range</span></label>
              <select class="select select-bordered select-sm font-mono">
                <option>0 – 5 A</option>
                <option>0 – 10 A</option>
                <option>0 – 20 A</option>
              </select>
            </div>
          </div>
        </div>

      </div>

      <!-- ── Column 2: DC PSU 1, DC PSU 2, DC Routing ──────────── -->
      <div class="space-y-4 min-w-0">

        <!-- DC PSU 1 -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <div class="flex items-center justify-between mb-2">
              <h2 class="card-title text-sm font-mono">DC PSU 1</h2>
              <label class="flex items-center gap-2 cursor-pointer">
                <span class="text-xs font-mono">Output</span>
                <input type="checkbox" class="toggle toggle-success toggle-sm" checked />
                <span class="text-xs font-mono text-success font-bold">ON</span>
              </label>
            </div>
            <div class="form-control min-w-0">
              <label class="label py-0 gap-2">
                <span class="label-text text-xs font-bold">Voltage set (V)</span>
                <span class="label-text-alt font-mono text-xs">24.0 V</span>
              </label>
              <input type="range" min="0" max="60" value="24" class="range range-sm w-full" step="0.5" />
            </div>
            <div class="form-control mt-2 min-w-0">
              <label class="label py-0 gap-2">
                <span class="label-text text-xs font-bold">Current limit (A)</span>
                <span class="label-text-alt font-mono text-xs">5.0 A</span>
              </label>
              <input type="range" min="0" max="10" value="5" class="range range-sm w-full" step="0.1" />
            </div>
            <div class="grid grid-cols-3 gap-2 mt-3">
              <div class="text-center bg-base-300 rounded p-2">
                <div class="text-xl font-mono font-bold">23.8</div>
                <div class="text-xs">V</div>
              </div>
              <div class="text-center bg-base-300 rounded p-2">
                <div class="text-xl font-mono font-bold">2.3</div>
                <div class="text-xs">A</div>
              </div>
              <div class="text-center bg-base-300 rounded p-2">
                <div class="text-xl font-mono font-bold">54.7</div>
                <div class="text-xs">W</div>
              </div>
            </div>
            <!-- Protection indicators: active mode = amber, tripped = red, idle = ghost -->
            <div class="flex gap-1 mt-3 flex-wrap">
              <span class="badge badge-ghost badge-sm font-mono">CV</span>
              <span class="badge badge-warning badge-sm font-mono">CC</span>
              <span class="badge badge-ghost badge-sm font-mono">OVP</span>
              <span class="badge badge-ghost badge-sm font-mono">OCP</span>
            </div>
          </div>
        </div>

        <!-- DC PSU 2 — identical layout to PSU 1 -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <div class="flex items-center justify-between mb-2">
              <h2 class="card-title text-sm font-mono">DC PSU 2</h2>
              <label class="flex items-center gap-2 cursor-pointer">
                <span class="text-xs font-mono">Output</span>
                <input type="checkbox" class="toggle toggle-success toggle-sm" />
                <span class="text-xs font-mono">OFF</span>
              </label>
            </div>
            <div class="form-control min-w-0">
              <label class="label py-0 gap-2">
                <span class="label-text text-xs font-bold">Voltage set (V)</span>
                <span class="label-text-alt font-mono text-xs">12.0 V</span>
              </label>
              <input type="range" min="0" max="60" value="12" class="range range-sm w-full" step="0.5" />
            </div>
            <div class="form-control mt-2 min-w-0">
              <label class="label py-0 gap-2">
                <span class="label-text text-xs font-bold">Current limit (A)</span>
                <span class="label-text-alt font-mono text-xs">3.0 A</span>
              </label>
              <input type="range" min="0" max="10" value="3" class="range range-sm w-full" step="0.1" />
            </div>
            <div class="grid grid-cols-3 gap-2 mt-3">
              <div class="text-center bg-base-300 rounded p-2">
                <div class="text-xl font-mono font-bold">0.0</div>
                <div class="text-xs">V</div>
              </div>
              <div class="text-center bg-base-300 rounded p-2">
                <div class="text-xl font-mono font-bold">0.0</div>
                <div class="text-xs">A</div>
              </div>
              <div class="text-center bg-base-300 rounded p-2">
                <div class="text-xl font-mono font-bold">0.0</div>
                <div class="text-xs">W</div>
              </div>
            </div>
            <div class="flex gap-1 mt-3 flex-wrap">
              <span class="badge badge-ghost badge-sm font-mono">CV</span>
              <span class="badge badge-ghost badge-sm font-mono">CC</span>
              <span class="badge badge-ghost badge-sm font-mono">OVP</span>
              <span class="badge badge-ghost badge-sm font-mono">OCP</span>
            </div>
          </div>
        </div>

        <!-- DC output routing -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-sm font-mono">DC Output Routing</h2>
            <div class="grid grid-cols-2 gap-3 mt-1">
              <div class="form-control">
                <label class="label py-0"><span class="label-text text-xs">DC Output 1</span></label>
                <select class="select select-bordered select-sm font-mono">
                  <option>PSU 1</option>
                  <option>PSU 2</option>
                  <option>Off</option>
                </select>
              </div>
              <div class="form-control">
                <label class="label py-0"><span class="label-text text-xs">DC Output 2</span></label>
                <select class="select select-bordered select-sm font-mono">
                  <option>PSU 2</option>
                  <option>PSU 1</option>
                  <option>Off</option>
                </select>
              </div>
            </div>
            <label class="flex items-start gap-2 cursor-pointer mt-3">
              <input type="checkbox" class="checkbox checkbox-sm mt-0.5" checked />
              <span class="text-xs">Interlock — prevent both outputs routing from the same PSU</span>
            </label>
          </div>
        </div>

      </div>

      <!-- ── Column 3: AC PSU + Brushless + Capacitor Bank ──────── -->
      <div class="space-y-4 min-w-0">

        <!-- AC PSU -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <div class="flex items-center justify-between mb-2">
              <h2 class="card-title text-sm font-mono">AC PSU</h2>
              <label class="flex items-center gap-2 cursor-pointer">
                <span class="text-xs font-mono">Output</span>
                <input type="checkbox" class="toggle toggle-success toggle-sm" checked />
                <span class="text-xs font-mono text-success font-bold">ON</span>
              </label>
            </div>
            <!-- Phase mode -->
            <div class="join w-full mb-3">
              <button class="btn join-item btn-sm flex-1 btn-active font-mono">1-Phase</button>
              <button class="btn join-item btn-sm flex-1 font-mono">3-Phase</button>
            </div>
            <div class="form-control min-w-0">
              <label class="label py-0 gap-2">
                <span class="label-text text-xs font-bold">Frequency (Hz)</span>
                <span class="label-text-alt font-mono text-xs">50.0 Hz</span>
              </label>
              <input type="range" min="0" max="100" value="50" class="range range-sm w-full" step="0.5" />
              <div class="grid w-full grid-cols-5 text-[10px] sm:text-xs px-1 mt-1">
                <span class="text-left">0</span>
                <span class="text-center invisible sm:visible">25</span>
                <span class="text-center">50</span>
                <span class="text-center invisible sm:visible">75</span>
                <span class="text-right">100 Hz</span>
              </div>
            </div>
            <div class="form-control mt-2 min-w-0">
              <label class="label py-0 gap-2">
                <span class="label-text text-xs font-bold">Voltage set (V)</span>
                <span class="label-text-alt font-mono text-xs">230 V</span>
              </label>
              <input type="range" min="0" max="240" value="230" class="range range-sm w-full" step="1" />
            </div>
            <div class="grid grid-cols-3 gap-2 mt-3">
              <div class="text-center bg-base-300 rounded p-2">
                <div class="text-xl font-mono font-bold">228</div>
                <div class="text-xs">Vac</div>
              </div>
              <div class="text-center bg-base-300 rounded p-2">
                <div class="text-xl font-mono font-bold">1.8</div>
                <div class="text-xs">Iac (A)</div>
              </div>
              <div class="text-center bg-base-300 rounded p-2">
                <div class="text-xl font-mono font-bold">50.0</div>
                <div class="text-xs">Hz</div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-3 mt-3">
              <div class="form-control">
                <label class="label py-0"><span class="label-text text-xs">Soft-start (s)</span></label>
                <input type="number" class="input input-bordered input-sm font-mono" min="0" max="30" value="2" />
              </div>
              <div class="form-control">
                <label class="label py-0"><span class="label-text text-xs">Freq ramp (Hz/s)</span></label>
                <input type="number" class="input input-bordered input-sm font-mono" min="0" max="50" value="5" />
              </div>
            </div>
          </div>
        </div>

        <!-- Brushless feedback -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-sm font-mono">Brushless Feedback</h2>
            <div class="grid grid-cols-2 gap-2 mt-1">
              <div class="text-center bg-base-300 rounded p-3">
                <div class="text-2xl font-mono font-bold">1528</div>
                <div class="text-xs mt-1">Speed feedback (rpm)</div>
              </div>
              <div class="text-center bg-base-300 rounded p-3">
                <div class="text-2xl font-mono font-bold">48.2</div>
                <div class="text-xs mt-1">DC bus (V)</div>
              </div>
            </div>
            <div class="space-y-2 mt-3">
              <div class="flex items-center justify-between text-xs">
                <span>Commutation</span>
                <span class="badge badge-success badge-sm font-mono">LOCK</span>
              </div>
              <div class="flex items-center justify-between text-xs">
                <span>Hall sensors</span>
                <span class="badge badge-success badge-sm font-mono">OK</span>
              </div>
              <div class="flex items-center justify-between text-xs">
                <span>Encoder</span>
                <span class="badge badge-neutral badge-sm font-mono">N/A</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Capacitor bank -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-sm font-mono">Capacitor Bank</h2>
            <div class="grid grid-cols-2 gap-2 mt-1">
              <div class="text-center bg-base-300 rounded p-3">
                <div class="text-2xl font-mono font-bold">47.8</div>
                <div class="text-xs mt-1">Bank voltage (V)</div>
              </div>
              <div class="flex flex-col items-center justify-center gap-1">
                <span class="badge badge-neutral font-mono">IDLE</span>
                <span class="text-xs">Charge state</span>
              </div>
            </div>
            <!-- Discharge = destructive but reversible → outlined red -->
            <button class="btn btn-error btn-outline btn-sm w-full mt-3 font-mono">DISCHARGE</button>
          </div>
        </div>

      </div>
    </div>

  `;
}

function renderHMIDashboard2() {
  return `
    <!-- Wind Tunnel – Open Circuit Sub-Sonic, Bench-Top Training System -->

    <!-- System Title (structural: neutral only) -->
    <div class="mb-4 p-3 bg-base-200 rounded-lg border-l-4 border-base-300">
      <h1 class="text-xl font-bold text-base-content">Open Circuit Sub-Sonic Wind Tunnel</h1>
      <p class="text-sm text-base-content mt-1">125 mm transparent test section · 9.2:1 contraction · Computer controlled fan · LED flow visualisation</p>
    </div>

    <!-- Top Status Bar: normal data = grey; colour only for state (running = green) -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title text-base-content">Tunnel Status</div>
        <div class="stat-value text-2xl flex items-center gap-2">
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
          </span>
          <span class="text-success font-bold">ACTIVE</span>
        </div>
        <div class="stat-desc text-base-content">Bench-top · Teaching mode</div>
      </div>

      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title text-base-content">Test Section Speed</div>
        <div class="stat-value text-3xl text-base-content">28.4 m/s</div>
        <div class="stat-desc text-base-content">from setpoint · max 35 m/s</div>
      </div>

      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title text-base-content">Contraction Ratio</div>
        <div class="stat-value text-3xl text-base-content">9.2:1</div>
        <div class="stat-desc text-base-content">Honeycomb · uniform flow</div>
      </div>

      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title text-base-content">Fan Power</div>
        <div class="stat-value text-3xl text-base-content">81%</div>
        <div class="stat-desc text-base-content">variable speed</div>
      </div>
    </div>

    <!-- Main Layout -->
    <div class="grid gap-4 lg:grid-cols-3">
      
      <!-- Left: Main Charts and Visualization -->
      <div class="lg:col-span-2 space-y-4">
        
        <!-- Air Speed Chart (normal operation: no decorative colour) -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <div class="flex items-center justify-between mb-2">
              <h2 class="card-title text-base-content">
                <svg class="w-5 h-5 text-base-content" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                Test Section Air Speed
              </h2>
              <div class="badge badge-ghost gap-2 text-base-content">
                DATA ACQUISITION
              </div>
            </div>
            <p class="text-xs text-base-content mb-2">125 mm transparent test section · range 0–35+ m/s</p>
            <div class="h-64">
              <canvas id="airSpeedChart"></canvas>
            </div>
          </div>
        </div>

        <!-- Pressure Distribution Chart -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-base-content">Pressure Distribution</h2>
            <div class="h-48">
              <canvas id="pressureChart2"></canvas>
            </div>
          </div>
        </div>

        <!-- Flow Path (structural: neutral; OK = grey; running = green only on active section) -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-base-content">Flow Path</h2>
            <p class="text-xs text-base-content mb-2">Contraction nozzle (9.2:1 honeycomb) → 125 mm test section → variable speed fan</p>
            <div class="grid grid-cols-5 gap-2 mt-4">
              <div class="flex flex-col items-center">
                <div class="w-16 h-16 bg-base-300 rounded-lg flex items-center justify-center text-base-content font-bold text-xs shadow">
                  INLET
                </div>
                <div class="badge badge-ghost badge-sm mt-2 text-base-content">OK</div>
                <div class="text-xs mt-1 text-base-content">9.2:1 honeycomb</div>
              </div>
              <svg class="w-8 h-16 text-base-content self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
              <div class="flex flex-col items-center">
                <div class="w-16 h-16 bg-base-300 rounded-lg flex items-center justify-center text-base-content font-bold text-xs shadow border-2 border-success">
                  125 mm
                </div>
                <div class="badge badge-success badge-sm mt-2">ACTIVE</div>
                <div class="text-xs mt-1 text-base-content">28.4 m/s</div>
              </div>
              <svg class="w-8 h-16 text-base-content self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
              <div class="flex flex-col items-center">
                <div class="w-16 h-16 bg-base-300 rounded-lg flex items-center justify-center text-base-content font-bold text-xs shadow">
                  FAN
                </div>
                <div class="badge badge-ghost badge-sm mt-2 text-base-content">OK</div>
                <div class="text-xs mt-1 text-base-content">81% · finger guard</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Controls and Gauges -->
      <div class="space-y-4">
        
        <!-- Main Control Panel (structural: neutral; action colours per philosophy) -->
        <div class="card bg-base-200 shadow-xl border border-base-300">
          <div class="card-body">
            <h2 class="card-title text-base-content">
              <svg class="w-5 h-5 text-base-content" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
              </svg>
              Tunnel Controls
            </h2>

            <!-- Start/Stop (green = RUN, red = STOP per action colours) -->
            <div class="flex gap-2 mb-4">
              <button class="btn btn-success flex-1 btn-lg">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
                </svg>
                START
              </button>
              <button class="btn btn-error flex-1 btn-lg">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"/>
                </svg>
                STOP
              </button>
            </div>

            <!-- Test Mode Selector (neutral: no colour for structure) -->
            <div class="form-control mb-3">
              <label class="label">
                <span class="label-text font-bold text-base-content">Test Mode</span>
              </label>
              <div class="join w-full">
                <button class="btn join-item flex-1 btn-sm btn-active">CONST</button>
                <button class="btn join-item flex-1 btn-sm">RAMP</button>
                <button class="btn join-item flex-1 btn-sm">SINE</button>
              </div>
            </div>

            <!-- Air Speed Setpoint (values = grey) -->
            <div class="form-control mb-3">
              <label class="label">
                <span class="label-text font-bold text-base-content">Target Air Speed</span>
                <span class="label-text-alt text-base-content">28.0 m/s</span>
              </label>
              <input type="range" min="0" max="35" value="28" class="range range-lg" step="0.5" />
              <div class="flex w-full justify-between text-xs px-2 mt-1 text-base-content">
                <span>0 m/s</span>
                <span>|</span>
                <span>17.5 m/s</span>
                <span>|</span>
                <span>35+ m/s</span>
              </div>
            </div>

            <!-- Fan Power (value = grey) -->
            <div class="form-control mb-3">
              <label class="label">
                <span class="label-text font-bold text-base-content">Fan Power</span>
                <span class="label-text-alt text-base-content">81%</span>
              </label>
              <input type="range" min="0" max="100" value="81" class="range range-lg" step="1" />
            </div>

            <!-- Toggle Switches (settings: neutral) -->
            <div class="space-y-2">
              <div class="form-control">
                <label class="label cursor-pointer">
                  <span class="label-text font-bold text-base-content">LED Flow Visualisation</span>
                  <input type="checkbox" class="toggle toggle-md" checked />
                </label>
              </div>
              <div class="form-control">
                <label class="label cursor-pointer">
                  <span class="label-text font-bold text-base-content">Data Acquisition</span>
                  <input type="checkbox" class="toggle toggle-md" checked />
                </label>
              </div>
              <div class="form-control">
                <label class="label cursor-pointer">
                  <span class="label-text font-bold text-base-content">Safety Interlock</span>
                  <input type="checkbox" class="toggle toggle-md" checked />
                </label>
              </div>
            </div>

            <!-- Emergency Stop (outlined red per philosophy) -->
            <button class="btn btn-outline btn-error w-full mt-4 btn-lg">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
              </svg>
              EMERGENCY STOP
            </button>
          </div>
        </div>

        <!-- Gauges (normal readings = no colour) -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-sm text-base-content">System Gauges</h2>
            <div class="grid grid-cols-2 gap-4 mt-2">
              <div class="flex flex-col items-center">
                <div class="radial-progress text-base-content" style="--value:81; --size:4rem;" role="progressbar">81%</div>
                <div class="text-xs mt-2 text-center text-base-content">Fan Power</div>
              </div>
              <div class="flex flex-col items-center">
                <div class="radial-progress text-base-content" style="--value:81; --size:4rem;" role="progressbar">81%</div>
                <div class="text-xs mt-2 text-center text-base-content">Speed vs max 35 m/s</div>
              </div>
              <div class="flex flex-col items-center">
                <div class="radial-progress text-base-content" style="--value:100; --size:4rem;" role="progressbar">100%</div>
                <div class="text-xs mt-2 text-center text-base-content">Flow uniformity</div>
              </div>
              <div class="flex flex-col items-center">
                <div class="radial-progress text-base-content" style="--value:100; --size:4rem;" role="progressbar">100%</div>
                <div class="text-xs mt-2 text-center text-base-content">LED visualisation</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Alarms (info = blue; nominal = grey, not success) -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-sm text-base-content">System Alarms</h2>
            <div class="space-y-2 mt-2">
              <div class="alert alert-info py-2">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"/>
                </svg>
                <span class="text-xs">Aerodynamics teaching run in progress</span>
              </div>
              <div class="bg-base-300 rounded-lg px-4 py-2">
                <span class="text-xs text-base-content">125 mm test section · honeycomb uniform flow OK</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Experiments & Progress (no opacity; hierarchy by size) -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-sm text-base-content">Experiments & Progress</h2>
            <div class="text-xs text-base-content mb-2">14+ experiments · 2 force component unit · 3D print (M3) compatible</div>
            <div class="mt-2">
              <div class="flex justify-between text-xs mb-1 text-base-content">
                <span>Current run</span>
                <span>65%</span>
              </div>
              <progress class="progress w-full" value="65" max="100"></progress>
              <div class="text-xs mt-2 text-base-content">Teaching mode · Touch screen interface</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderHMIDashboard3() {
  return `
    <!-- Process Control Temperature – PID Controller Tuning System -->

    <!-- Top Status Bar: normal data = grey; colour only for state (running = green, AUTO = green) -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title text-base-content">Controller Status</div>
        <div class="stat-value text-2xl flex items-center gap-2">
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
          </span>
          <span class="text-success font-bold">ACTIVE</span>
        </div>
        <div class="stat-desc text-base-content">PID Mode: <span class="text-success font-medium">AUTO</span></div>
      </div>

      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title text-base-content">Setpoint</div>
        <div class="stat-value text-3xl text-base-content">50.0°C</div>
        <div class="stat-desc text-base-content">Target value</div>
      </div>

      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title text-base-content">Process Value</div>
        <div class="stat-value text-3xl text-base-content">49.8°C</div>
        <div class="stat-desc text-base-content">0.2°C error</div>
      </div>

      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title text-base-content">Output</div>
        <div class="stat-value text-3xl text-base-content">62%</div>
        <div class="stat-desc text-base-content">Control signal</div>
      </div>
    </div>

    <!-- Main Layout -->
    <div class="grid gap-4 lg:grid-cols-3">
      
      <!-- Left: Response Charts -->
      <div class="lg:col-span-2 space-y-4">
        
        <!-- Step Response Chart (structural: neutral; RUNNING = green) -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <div class="flex items-center justify-between mb-2">
              <h2 class="card-title text-base-content">
                <svg class="w-5 h-5 text-base-content" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
                Step Response Analysis
              </h2>
              <div class="badge badge-success gap-2">
                <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                </span>
                RUNNING
              </div>
            </div>
            <div class="h-80">
              <canvas id="stepResponseChart"></canvas>
            </div>
          </div>
        </div>

        <!-- Performance Metrics (normal readings = no colour) -->
        <div class="grid gap-4 md:grid-cols-3">
          <div class="card bg-base-200 shadow-xl">
            <div class="card-body">
              <h2 class="card-title text-sm text-base-content">Rise Time</h2>
              <div class="stat-value text-2xl text-base-content">2.4s</div>
              <div class="stat-desc text-xs text-base-content">Target: &lt; 3.0s</div>
              <progress class="progress w-full mt-2" value="80" max="100"></progress>
            </div>
          </div>

          <div class="card bg-base-200 shadow-xl">
            <div class="card-body">
              <h2 class="card-title text-sm text-base-content">Overshoot</h2>
              <div class="stat-value text-2xl text-base-content">4.2%</div>
              <div class="stat-desc text-xs text-base-content">Target: &lt; 5.0%</div>
              <progress class="progress w-full mt-2" value="84" max="100"></progress>
            </div>
          </div>

          <div class="card bg-base-200 shadow-xl">
            <div class="card-body">
              <h2 class="card-title text-sm text-base-content">Settling Time</h2>
              <div class="stat-value text-2xl text-base-content">8.5s</div>
              <div class="stat-desc text-xs text-base-content">Target: &lt; 10.0s</div>
              <progress class="progress w-full mt-2" value="85" max="100"></progress>
            </div>
          </div>
        </div>

        <!-- Test Functions centered under response metrics -->
        <div class="mx-auto w-full max-w-md">
          <div class="card bg-base-200 shadow-xl">
            <div class="card-body">
              <h2 class="card-title text-sm text-base-content">Test Functions</h2>
              <div class="space-y-2">
                <button class="btn btn-primary btn-sm w-full">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
                  </svg>
                  Step Test
                </button>
                <button class="btn btn-outline btn-sm w-full">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
                  </svg>
                  Ramp Test
                </button>
                <button class="btn btn-outline btn-sm w-full">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                  Sine Wave Test
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: PID Parameters and Controls -->
      <div class="space-y-4">
        
        <!-- PID Parameters (structural: neutral; values = grey; Apply = primary) -->
        <div class="card bg-base-200 shadow-xl border border-base-300">
          <div class="card-body">
            <h2 class="card-title text-base-content">
              <svg class="w-5 h-5 text-base-content" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
              </svg>
              PID Parameters
            </h2>

            <!-- Proportional Gain -->
            <div class="form-control mb-3">
              <label class="label">
                <span class="label-text font-bold text-base-content">Proportional (Kp)</span>
                <span class="label-text-alt text-base-content">2.5</span>
              </label>
              <input type="range" min="0" max="10" value="2.5" class="range range-lg" step="0.1" />
              <div class="flex w-full justify-between text-xs px-2 mt-1 text-base-content">
                <span>0.0</span>
                <span>|</span>
                <span>5.0</span>
                <span>|</span>
                <span>10.0</span>
              </div>
              <input type="number" class="input input-bordered input-sm mt-2" value="2.5" step="0.1" min="0" max="10" />
            </div>

            <!-- Integral Gain -->
            <div class="form-control mb-3">
              <label class="label">
                <span class="label-text font-bold text-base-content">Integral (Ki)</span>
                <span class="label-text-alt text-base-content">0.8</span>
              </label>
              <input type="range" min="0" max="5" value="0.8" class="range range-lg" step="0.1" />
              <div class="flex w-full justify-between text-xs px-2 mt-1 text-base-content">
                <span>0.0</span>
                <span>|</span>
                <span>2.5</span>
                <span>|</span>
                <span>5.0</span>
              </div>
              <input type="number" class="input input-bordered input-sm mt-2" value="0.8" step="0.1" min="0" max="5" />
            </div>

            <!-- Derivative Gain -->
            <div class="form-control mb-3">
              <label class="label">
                <span class="label-text font-bold text-base-content">Derivative (Kd)</span>
                <span class="label-text-alt text-base-content">0.3</span>
              </label>
              <input type="range" min="0" max="2" value="0.3" class="range range-lg" step="0.05" />
              <div class="flex w-full justify-between text-xs px-2 mt-1 text-base-content">
                <span>0.0</span>
                <span>|</span>
                <span>1.0</span>
                <span>|</span>
                <span>2.0</span>
              </div>
              <input type="number" class="input input-bordered input-sm mt-2" value="0.3" step="0.05" min="0" max="2" />
            </div>

            <div class="divider"></div>

            <!-- Setpoint Control -->
            <div class="form-control mb-3">
              <label class="label">
                <span class="label-text font-bold text-base-content">Setpoint</span>
                <span class="label-text-alt text-base-content">50.0°C</span>
              </label>
              <input type="range" min="0" max="100" value="50" class="range range-lg" step="0.5" />
              <input type="number" class="input input-bordered input-sm mt-2" value="50.0" step="0.5" min="0" max="100" />
            </div>

            <!-- Action Buttons (Apply = primary, Reset = outline) -->
            <div class="flex gap-2">
              <button class="btn btn-primary flex-1 btn-sm">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
                </svg>
                Apply
              </button>
              <button class="btn btn-outline flex-1 btn-sm">Reset</button>
            </div>
          </div>
        </div>

        <!-- Tuning Presets (neutral: outline only) -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-sm text-base-content">Tuning Presets</h2>
            <div class="space-y-2">
              <button class="btn btn-outline btn-sm w-full justify-start">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"/>
                </svg>
                Aggressive
              </button>
              <button class="btn btn-outline btn-sm w-full justify-start">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                Balanced
              </button>
              <button class="btn btn-outline btn-sm w-full justify-start">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"/>
                </svg>
                Conservative
              </button>
            </div>
          </div>
        </div>

        <!-- Performance (normal readings = no colour) -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-sm text-base-content">Performance</h2>
            <div class="space-y-3">
              <div>
                <div class="flex justify-between text-xs mb-1 text-base-content">
                  <span>Stability</span>
                  <span>92%</span>
                </div>
                <progress class="progress w-full" value="92" max="100"></progress>
              </div>
              <div>
                <div class="flex justify-between text-xs mb-1 text-base-content">
                  <span>Response Speed</span>
                  <span>78%</span>
                </div>
                <progress class="progress w-full" value="78" max="100"></progress>
              </div>
              <div>
                <div class="flex justify-between text-xs mb-1 text-base-content">
                  <span>Steady State Error</span>
                  <span>0.4%</span>
                </div>
                <progress class="progress w-full" value="96" max="100"></progress>
              </div>
            </div>
          </div>
        </div>

        <!-- Configuration (Save/Load = ghost/outline, muted) -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-sm text-base-content">Configuration</h2>
            <div class="flex gap-2">
              <button class="btn btn-outline btn-sm flex-1">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"/>
                </svg>
                Save
              </button>
              <button class="btn btn-outline btn-sm flex-1">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"/>
                </svg>
                Load
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderHMIDashboard4() {
  return `
    <!-- HMI Dashboard 4 – Matrix Fundamental Fluids -->

    <!-- Top Status Bar -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">Recording Status</div>
        <div class="stat-value text-2xl flex items-center gap-2">
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
          </span>
          RECORDING
        </div>
        <div class="stat-desc">142 data points</div>
      </div>

      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">Active Worksheet</div>
        <div class="stat-value text-xl">WS6</div>
        <div class="stat-desc">Bernoulli's Principle</div>
      </div>

      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">USB Sensors</div>
        <div class="stat-value text-3xl">2 / 2</div>
        <div class="stat-desc">Connected</div>
      </div>

      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">Flow Rate</div>
        <div class="stat-value text-3xl">26.4 L/min</div>
        <div class="stat-desc">Pressure diff: 41.4 kPa</div>
      </div>
    </div>

    <!-- Main Layout -->
    <div class="grid gap-4 lg:grid-cols-3">

      <!-- Left: Actuators + Charts + Worksheets (priority order) -->
      <div class="lg:col-span-2 space-y-4">

        <!-- Pump Speed Control — ACTUATORS FIRST -->
        <div class="card bg-base-200 shadow-xl border-2 border-primary">
          <div class="card-body">
            <h2 class="card-title text-primary text-sm font-mono tracking-widest uppercase">Pump Speed Control</h2>
            <div class="flex justify-around items-start gap-8 py-4">

              <!-- Pump 1 -->
              <div class="flex flex-col items-center gap-3">
                <div class="text-sm font-bold font-mono tracking-wider">PUMP 1</div>
                <div class="text-3xl font-mono font-bold" id="pump1-val">60%</div>
                <div id="pump1-slider" style="height:220px;"></div>
                <div class="flex gap-1 mt-1">
                  <button class="btn btn-outline btn-xs font-mono" onclick="setFluidPump('pump1',0)">0</button>
                  <button class="btn btn-outline btn-xs font-mono" onclick="setFluidPump('pump1',25)">25</button>
                  <button class="btn btn-outline btn-xs font-mono" onclick="setFluidPump('pump1',50)">50</button>
                  <button class="btn btn-outline btn-xs font-mono" onclick="setFluidPump('pump1',75)">75</button>
                  <button class="btn btn-outline btn-xs font-mono" onclick="setFluidPump('pump1',100)">100</button>
                </div>
              </div>

              <div class="divider divider-horizontal"></div>

              <!-- Pump 2 -->
              <div class="flex flex-col items-center gap-3">
                <div class="text-sm font-bold font-mono tracking-wider">PUMP 2</div>
                <div class="text-3xl font-mono font-bold" id="pump2-val">45%</div>
                <div id="pump2-slider" style="height:220px;"></div>
                <div class="flex gap-1 mt-1">
                  <button class="btn btn-outline btn-xs font-mono" onclick="setFluidPump('pump2',0)">0</button>
                  <button class="btn btn-outline btn-xs font-mono" onclick="setFluidPump('pump2',25)">25</button>
                  <button class="btn btn-outline btn-xs font-mono" onclick="setFluidPump('pump2',50)">50</button>
                  <button class="btn btn-outline btn-xs font-mono" onclick="setFluidPump('pump2',75)">75</button>
                  <button class="btn btn-outline btn-xs font-mono" onclick="setFluidPump('pump2',100)">100</button>
                </div>
              </div>

            </div>
          </div>
        </div>


        <!-- Bernoulli Pressure Profile Chart -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <div class="flex items-center justify-between mb-2">
              <h2 class="card-title">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
                Pressure Profile — Venturi Tube (WS6)
              </h2>
              <div class="badge badge-primary gap-2">
                <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                LIVE
              </div>
            </div>
            <div class="h-64">
              <canvas id="bernoulliChart"></canvas>
            </div>
          </div>
        </div>

        <!-- Flow Rate Over Time -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
              </svg>
              Flow Rate (Real-time)
            </h2>
            <div class="h-44">
              <canvas id="flowTimeChart"></canvas>
            </div>
          </div>
        </div>

        <!-- Flow vs Pressure -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
              </svg>
              Flow vs Differential Pressure
            </h2>
            <div class="h-52">
              <canvas id="flowPressureChart"></canvas>
            </div>
          </div>
        </div>

        <!-- Worksheet Selector — LOWEST PRIORITY, bottom of left column -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-sm">Experiments — Matrix Fundamental Fluids</h2>
            <div class="grid grid-cols-3 gap-2 mt-1">

              <div class="card bg-base-300 cursor-pointer hover:bg-base-100 border border-base-content/10 transition-colors">
                <div class="card-body p-3">
                  <div class="flex justify-between items-start"><span class="text-xs font-bold">WS1</span><span class="badge badge-neutral badge-xs">MANUAL</span></div>
                  <div class="text-xs font-semibold mt-1 leading-tight">Viscosity Matters</div>
                </div>
              </div>

              <div class="card bg-base-300 cursor-pointer hover:bg-base-100 border border-base-content/10 transition-colors">
                <div class="card-body p-3">
                  <div class="flex justify-between items-start"><span class="text-xs font-bold">WS2</span><span class="badge badge-neutral badge-xs">MANUAL</span></div>
                  <div class="text-xs font-semibold mt-1 leading-tight">Calibrating Pressure Gauge</div>
                </div>
              </div>

              <div class="card bg-base-300 cursor-pointer hover:bg-base-100 border border-base-content/10 transition-colors">
                <div class="card-body p-3">
                  <div class="flex justify-between items-start"><span class="text-xs font-bold">WS3</span><span class="badge badge-ghost badge-xs">USB</span></div>
                  <div class="text-xs font-semibold mt-1 leading-tight">Liquid Manometers</div>
                </div>
              </div>

              <div class="card bg-base-300 cursor-pointer hover:bg-base-100 border border-base-content/10 transition-colors">
                <div class="card-body p-3">
                  <div class="flex justify-between items-start"><span class="text-xs font-bold">WS4</span><span class="badge badge-ghost badge-xs">USB</span></div>
                  <div class="text-xs font-semibold mt-1 leading-tight">Inclined Manometers</div>
                </div>
              </div>

              <div class="card bg-base-300 cursor-pointer hover:bg-base-100 border border-base-content/10 transition-colors">
                <div class="card-body p-3">
                  <div class="flex justify-between items-start"><span class="text-xs font-bold">WS5</span><span class="badge badge-neutral badge-xs">MANUAL</span></div>
                  <div class="text-xs font-semibold mt-1 leading-tight">Centre of Pressure</div>
                </div>
              </div>

              <!-- WS6 ACTIVE -->
              <div class="card bg-primary/10 cursor-pointer border-2 border-primary transition-colors">
                <div class="card-body p-3">
                  <div class="flex justify-between items-start"><span class="text-xs font-bold text-primary">WS6</span><span class="badge badge-ghost badge-xs">USB</span></div>
                  <div class="text-xs font-bold mt-1 leading-tight text-primary">Bernoulli's Principle</div>
                </div>
              </div>

              <div class="card bg-base-300 cursor-pointer hover:bg-base-100 border border-base-content/10 transition-colors">
                <div class="card-body p-3">
                  <div class="flex justify-between items-start"><span class="text-xs font-bold">WS7</span><span class="badge badge-ghost badge-xs">USB</span></div>
                  <div class="text-xs font-semibold mt-1 leading-tight">Minor Losses in Bends</div>
                </div>
              </div>

              <div class="card bg-base-300 cursor-pointer hover:bg-base-100 border border-base-content/10 transition-colors">
                <div class="card-body p-3">
                  <div class="flex justify-between items-start"><span class="text-xs font-bold">WS8</span><span class="badge badge-ghost badge-xs">USB</span></div>
                  <div class="text-xs font-semibold mt-1 leading-tight">Centrifugal Pump</div>
                </div>
              </div>

              <div class="card bg-base-300 cursor-pointer hover:bg-base-100 border border-base-content/10 transition-colors">
                <div class="card-body p-3">
                  <div class="flex justify-between items-start"><span class="text-xs font-bold">WS9</span><span class="badge badge-ghost badge-xs">USB</span></div>
                  <div class="text-xs font-semibold mt-1 leading-tight">Pumps in Series / Parallel</div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      <!-- Right: Sensors + Live Data + USB Status + Recording (priority order) -->
      <div class="space-y-4">

        <!-- Pressure Gauges — SENSORS FIRST -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-sm">Pressure Gauges (0 – 1000 psi)</h2>
            <div class="flex justify-around items-center py-3">

              <div class="flex flex-col items-center gap-2">
                <div class="radial-progress text-base-content font-bold"
                  style="--value: 65; --size: 5.5rem; --thickness: 8px;" role="progressbar">
                  <div class="text-center leading-tight">
                    <div class="text-sm font-bold">650</div>
                    <div class="text-xs">psi</div>
                  </div>
                </div>
                <span class="text-xs font-bold">Gauge 1</span>
              </div>

              <div class="flex flex-col items-center gap-2">
                <div class="radial-progress text-base-content font-bold"
                  style="--value: 42; --size: 5.5rem; --thickness: 8px;" role="progressbar">
                  <div class="text-center leading-tight">
                    <div class="text-sm font-bold">420</div>
                    <div class="text-xs">psi</div>
                  </div>
                </div>
                <span class="text-xs font-bold">Gauge 2</span>
              </div>

            </div>
          </div>
        </div>

        <!-- Live Sensor Readings -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-sm">Live Readings — Venturi Tappings</h2>
            <div class="space-y-2 mt-1">
              <div class="flex justify-between items-center text-sm">
                <span class="font-mono">P1 Inlet</span>
                <span class="font-mono font-bold">118.2 kPa</span>
              </div>
              <div class="flex justify-between items-center text-sm">
                <span class="font-mono">P2 Converge</span>
                <span class="font-mono font-bold">105.4 kPa</span>
              </div>
              <div class="flex justify-between items-center text-sm border-l-2 border-base-content/30 pl-2">
                <span class="font-mono">P3 Throat ↓ min</span>
                <span class="font-mono font-bold">76.8 kPa</span>
              </div>
              <div class="flex justify-between items-center text-sm">
                <span class="font-mono">P4 Diverge</span>
                <span class="font-mono font-bold">93.1 kPa</span>
              </div>
              <div class="flex justify-between items-center text-sm">
                <span class="font-mono">P5 Outlet</span>
                <span class="font-mono font-bold">108.6 kPa</span>
              </div>
              <div class="divider my-1"></div>
              <div class="flex justify-between items-center text-sm">
                <span class="font-mono">Flow Rate</span>
                <span class="font-mono font-bold">26.4 L/min</span>
              </div>
            </div>
          </div>
        </div>

        <!-- USB Sensor Connection -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-sm">USB Sensors</h2>
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-sm">Pressure Sensor</span>
                <span class="badge badge-neutral badge-sm">Connected</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sm">Flow Sensor</span>
                <span class="badge badge-neutral badge-sm">Connected</span>
              </div>
              <div class="flex items-center justify-between text-xs mt-1">
                <span>Sample rate</span>
                <span>10 Hz</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Data Recording — lower priority -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-sm">Data Recording</h2>

            <div class="flex gap-2">
              <button class="btn btn-success flex-1 btn-lg">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
                </svg>
                RECORD
              </button>
              <button class="btn btn-error flex-1 btn-lg">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"/>
                </svg>
                STOP
              </button>
            </div>

            <div class="form-control mt-3">
              <label class="label pb-1">
                <span class="label-text font-bold text-xs">Data Entry Mode</span>
              </label>
              <div class="join w-full">
                <button class="btn join-item flex-1 btn-sm btn-active btn-success">USB AUTO</button>
                <button class="btn join-item flex-1 btn-sm btn-outline">MANUAL</button>
              </div>
            </div>

            <div class="mt-3 text-xs flex justify-between">
              <span>Run duration</span><span>00:02:22</span>
            </div>
            <div class="text-xs flex justify-between">
              <span>Data points</span><span>142</span>
            </div>
          </div>
        </div>

        <!-- Export / Print — lowest priority -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-sm">Run Data</h2>
            <div class="flex gap-2">
              <button class="btn btn-ghost btn-sm flex-1">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"/>
                </svg>
                Export
              </button>
              <button class="btn btn-ghost btn-sm flex-1">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z"/>
                </svg>
                Print
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Bottom: Venturi Tube Schematic -->
    <div class="card bg-base-200 shadow-xl mt-4">
      <div class="card-body">
        <h2 class="card-title text-sm">Venturi Tube — Pressure Tapping Positions (WS6: Bernoulli's Principle)</h2>
        <div class="flex items-end justify-center gap-1 py-4 px-2">

          <!-- Flow direction label -->
          <div class="flex flex-col items-center mr-3">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
            <span class="text-xs mt-1">Flow</span>
          </div>

          <!-- P1 Inlet (tallest - widest section) -->
          <div class="flex flex-col items-center">
            <div class="text-xs font-mono font-bold mb-1">P1</div>
            <div class="w-14 h-16 bg-base-300 border-2 border-base-content/20 rounded flex items-center justify-center">
              <span class="text-xs font-mono text-center leading-tight">118.2<br/>kPa</span>
            </div>
            <div class="text-xs mt-1">Inlet</div>
          </div>

          <!-- Converging taper -->
          <div class="flex items-end mb-1">
            <div class="w-4 h-12 bg-base-300/50 border-t-2 border-b-2 border-base-content/10" style="clip-path: polygon(0 0, 100% 15%, 100% 85%, 0 100%)"></div>
          </div>

          <!-- P2 Converging -->
          <div class="flex flex-col items-center">
            <div class="text-xs font-mono font-bold mb-1">P2</div>
            <div class="w-12 h-12 bg-base-300 border-2 border-base-content/20 rounded flex items-center justify-center">
              <span class="text-xs font-mono text-center leading-tight">105.4<br/>kPa</span>
            </div>
            <div class="text-xs mt-1">Converge</div>
          </div>

          <!-- Throat taper -->
          <div class="flex items-end mb-1">
            <div class="w-3 h-8 bg-base-300/50 border-t-2 border-b-2 border-base-content/10" style="clip-path: polygon(0 0, 100% 20%, 100% 80%, 0 100%)"></div>
          </div>

          <!-- P3 Throat (shortest - narrowest section) -->
          <div class="flex flex-col items-center">
            <div class="text-xs font-mono font-bold mb-1">P3</div>
            <div class="w-10 h-8 bg-base-300 border-2 border-base-content/20 rounded flex items-center justify-center">
              <span class="text-xs font-mono text-center leading-tight">76.8<br/>kPa</span>
            </div>
            <div class="text-xs mt-1">Throat</div>
          </div>

          <!-- Diverging taper -->
          <div class="flex items-end mb-1">
            <div class="w-3 h-8 bg-base-300/50 border-t-2 border-b-2 border-base-content/10" style="clip-path: polygon(0 20%, 100% 0, 100% 100%, 0 80%)"></div>
          </div>

          <!-- P4 Diverging -->
          <div class="flex flex-col items-center">
            <div class="text-xs font-mono font-bold mb-1">P4</div>
            <div class="w-12 h-12 bg-base-300 border-2 border-base-content/20 rounded flex items-center justify-center">
              <span class="text-xs font-mono text-center leading-tight">93.1<br/>kPa</span>
            </div>
            <div class="text-xs mt-1">Diverge</div>
          </div>

          <!-- Expanding taper -->
          <div class="flex items-end mb-1">
            <div class="w-4 h-12 bg-base-300/50 border-t-2 border-b-2 border-base-content/10" style="clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 85%)"></div>
          </div>

          <!-- P5 Outlet (tallest again) -->
          <div class="flex flex-col items-center">
            <div class="text-xs font-mono font-bold mb-1">P5</div>
            <div class="w-14 h-16 bg-base-300 border-2 border-base-content/20 rounded flex items-center justify-center">
              <span class="text-xs font-mono text-center leading-tight">108.6<br/>kPa</span>
            </div>
            <div class="text-xs mt-1">Outlet</div>
          </div>

        </div>
        <p class="text-xs text-center">Pressure drops at the throat (P3) as velocity increases — Bernoulli's principle. Note partial pressure recovery in diverging section due to friction losses.</p>
      </div>
    </div>
  `;
}

// ================================================================
// ADMIN PANEL TEMPLATES (Admin Panel 1 / 2 / 3)
// ================================================================

function renderAdminPanel1() {
  return `
    <!-- Admin Panel 1 – Enhanced with many components -->
    
    <!-- Top Stats Bar -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">Total Users</div>
        <div class="stat-value text-3xl text-primary">247</div>
        <div class="stat-desc">↗︎ 12 new this month</div>
      </div>
      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">Active Sessions</div>
        <div class="stat-value text-3xl text-success">42</div>
        <div class="stat-desc">↗︎ 5 active now</div>
      </div>
      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">Pending Actions</div>
        <div class="stat-value text-3xl text-warning">8</div>
        <div class="stat-desc">Requires attention</div>
      </div>
      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">System Health</div>
        <div class="stat-value text-3xl text-info">98%</div>
        <div class="stat-desc">All systems operational</div>
      </div>
    </div>

    <section class="grid gap-4 lg:grid-cols-3">
      <!-- Main Content Area -->
      <div class="lg:col-span-2 space-y-4">
        
        <!-- Search and Filters -->
        <div class="card bg-base-200 shadow">
          <div class="card-body">
            <h2 class="card-title">User Management</h2>
            <div class="flex flex-wrap gap-2 mb-4">
              <input class="input input-bordered input-sm flex-1 min-w-[200px]" placeholder="Search users..." />
              <select class="select select-bordered select-sm">
                <option>All Roles</option>
                <option>Administrator</option>
                <option>Operator</option>
                <option>Viewer</option>
              </select>
              <select class="select select-bordered select-sm">
                <option>All Status</option>
                <option>Active</option>
                <option>Pending</option>
                <option>Disabled</option>
              </select>
              <button class="btn btn-primary btn-sm">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"/>
                </svg>
                Search
              </button>
              <button class="btn btn-outline btn-sm">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 3a1 1 0 000 2v11a2 2 0 002 2h11a1 1 0 100-2H5V5a1 1 0 00-1-1z"/>
                </svg>
                Reset
              </button>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap gap-2 mb-4">
              <button class="btn btn-success btn-sm">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"/>
                </svg>
                Add User
              </button>
              <button class="btn btn-info btn-sm">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"/>
                </svg>
                Export
              </button>
              <button class="btn btn-warning btn-sm">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"/>
                </svg>
                Import
              </button>
              <button class="btn btn-error btn-sm">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"/>
                </svg>
                Bulk Delete
              </button>
            </div>

            <!-- Enhanced Table -->
            <div class="overflow-x-auto">
              <table class="table table-zebra table-hover">
                <thead>
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" class="checkbox checkbox-sm" />
                      </label>
                    </th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Last Login</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" class="checkbox checkbox-sm" />
                      </label>
                    </th>
                    <td>1</td>
                    <td>
                      <div class="flex items-center gap-3">
                        <div class="avatar placeholder">
                          <div class="bg-primary text-primary-content rounded-full w-8">
                            <span>JA</span>
                          </div>
                        </div>
                        <div>
                          <div class="font-bold">John Admin</div>
                          <div class="text-sm opacity-50">Administrator</div>
                        </div>
                      </div>
                    </td>
                    <td>john.admin@matrix.com</td>
                    <td><span class="badge badge-primary">Admin</span></td>
                    <td>
                      <span class="badge badge-success gap-2">
                        <span class="relative flex h-2 w-2">
                          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                          <span class="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                        </span>
                        Active
                      </span>
                    </td>
                    <td>2 hours ago</td>
                    <td>
                      <div class="flex gap-1">
                        <button class="btn btn-xs btn-primary">Edit</button>
                        <button class="btn btn-xs btn-info">View</button>
                        <button class="btn btn-xs btn-error">Delete</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" class="checkbox checkbox-sm" />
                      </label>
                    </th>
                    <td>2</td>
                    <td>
                      <div class="flex items-center gap-3">
                        <div class="avatar placeholder">
                          <div class="bg-secondary text-secondary-content rounded-full w-8">
                            <span>SO</span>
                          </div>
                        </div>
                        <div>
                          <div class="font-bold">Sarah Operator</div>
                          <div class="text-sm opacity-50">Operator</div>
                        </div>
                      </div>
                    </td>
                    <td>sarah.op@matrix.com</td>
                    <td><span class="badge badge-secondary">Operator</span></td>
                    <td><span class="badge badge-warning">Pending</span></td>
                    <td>Never</td>
                    <td>
                      <div class="flex gap-1">
                        <button class="btn btn-xs btn-primary">Edit</button>
                        <button class="btn btn-xs btn-info">View</button>
                        <button class="btn btn-xs btn-error">Delete</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" class="checkbox checkbox-sm" />
                      </label>
                    </th>
                    <td>3</td>
                    <td>
                      <div class="flex items-center gap-3">
                        <div class="avatar placeholder">
                          <div class="bg-accent text-accent-content rounded-full w-8">
                            <span>MV</span>
                          </div>
                        </div>
                        <div>
                          <div class="font-bold">Mike Viewer</div>
                          <div class="text-sm opacity-50">Viewer</div>
                        </div>
                      </div>
                    </td>
                    <td>mike.view@matrix.com</td>
                    <td><span class="badge badge-accent">Viewer</span></td>
                    <td><span class="badge badge-success">Active</span></td>
                    <td>1 day ago</td>
                    <td>
                      <div class="flex gap-1">
                        <button class="btn btn-xs btn-primary">Edit</button>
                        <button class="btn btn-xs btn-info">View</button>
                        <button class="btn btn-xs btn-error">Delete</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Pagination -->
            <div class="flex justify-center mt-4">
              <div class="join">
                <button class="join-item btn btn-sm">«</button>
                <button class="join-item btn btn-sm btn-active">1</button>
                <button class="join-item btn btn-sm">2</button>
                <button class="join-item btn btn-sm">3</button>
                <button class="join-item btn btn-sm">4</button>
                <button class="join-item btn btn-sm">»</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Alerts Section -->
        <div class="card bg-base-200 shadow">
          <div class="card-body">
            <h2 class="card-title">System Alerts</h2>
            <div class="space-y-2">
              <div class="alert alert-success">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span>All systems operational. No issues detected.</span>
              </div>
              <div class="alert alert-warning">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"/>
                </svg>
                <span>3 users pending approval. Review required.</span>
              </div>
              <div class="alert alert-info">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"/>
                </svg>
                <span>System maintenance scheduled for next week.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="space-y-4">
        <!-- Selected User Details -->
        <div class="card bg-base-200 shadow">
          <div class="card-body">
            <h2 class="card-title">Selected User</h2>
            <div class="flex flex-col items-center mb-4">
              <div class="avatar placeholder">
                <div class="bg-primary text-primary-content rounded-full w-20">
                  <span class="text-2xl">JA</span>
                </div>
              </div>
              <div class="text-center mt-2">
                <div class="font-bold text-lg">John Admin</div>
                <div class="text-sm opacity-70">john.admin@matrix.com</div>
              </div>
            </div>
            
            <div class="stats stats-vertical shadow bg-base-100">
              <div class="stat py-2">
                <div class="stat-title text-xs">Role</div>
                <div class="stat-value text-sm">Administrator</div>
              </div>
              <div class="stat py-2">
                <div class="stat-title text-xs">Status</div>
                <div class="stat-value text-sm">
                  <span class="badge badge-success">Active</span>
                </div>
              </div>
              <div class="stat py-2">
                <div class="stat-title text-xs">Last Login</div>
                <div class="stat-value text-sm">2 hours ago</div>
              </div>
            </div>

            <div class="divider"></div>

            <!-- Quick Actions -->
            <div class="space-y-2">
              <button class="btn btn-primary btn-sm w-full">Edit User</button>
              <button class="btn btn-secondary btn-sm w-full">Reset Password</button>
              <button class="btn btn-warning btn-sm w-full">Suspend User</button>
              <button class="btn btn-error btn-sm w-full">Delete User</button>
            </div>
          </div>
        </div>

        <!-- Progress Indicators -->
        <div class="card bg-base-200 shadow">
          <div class="card-body">
            <h2 class="card-title">System Metrics</h2>
            <div class="space-y-3">
              <div>
                <div class="flex justify-between text-xs mb-1">
                  <span>User Capacity</span>
                  <span>82%</span>
                </div>
                <progress class="progress progress-primary w-full" value="82" max="100"></progress>
              </div>
              <div>
                <div class="flex justify-between text-xs mb-1">
                  <span>Active Sessions</span>
                  <span>65%</span>
                </div>
                <progress class="progress progress-success w-full" value="65" max="100"></progress>
              </div>
              <div>
                <div class="flex justify-between text-xs mb-1">
                  <span>Storage Used</span>
                  <span>45%</span>
                </div>
                <progress class="progress progress-info w-full" value="45" max="100"></progress>
              </div>
            </div>
          </div>
        </div>

        <!-- Radial Progress Gauges -->
        <div class="card bg-base-200 shadow">
          <div class="card-body">
            <h2 class="card-title">Performance</h2>
            <div class="grid grid-cols-2 gap-4">
              <div class="flex flex-col items-center">
                <div class="radial-progress text-primary" style="--value:85; --size:4rem;" role="progressbar">85%</div>
                <div class="text-xs mt-2">CPU</div>
              </div>
              <div class="flex flex-col items-center">
                <div class="radial-progress text-secondary" style="--value:72; --size:4rem;" role="progressbar">72%</div>
                <div class="text-xs mt-2">Memory</div>
              </div>
              <div class="flex flex-col items-center">
                <div class="radial-progress text-accent" style="--value:58; --size:4rem;" role="progressbar">58%</div>
                <div class="text-xs mt-2">Network</div>
              </div>
              <div class="flex flex-col items-center">
                <div class="radial-progress text-warning" style="--value:91; --size:4rem;" role="progressbar">91%</div>
                <div class="text-xs mt-2">Storage</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Rating Component -->
        <div class="card bg-base-200 shadow">
          <div class="card-body">
            <h2 class="card-title">User Rating</h2>
            <div class="rating rating-lg">
              <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400" checked />
              <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400" />
            </div>
            <p class="text-xs opacity-70 mt-2">4.2 out of 5 stars</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderAdminPanel2() {
  return `
    <!-- Admin Panel 2 – Enhanced Master/detail with many components -->
    
    <!-- Top Stats -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">Total Devices</div>
        <div class="stat-value text-2xl text-primary">24</div>
        <div class="stat-desc">12 online, 8 offline, 4 maintenance</div>
      </div>
      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">Active Alarms</div>
        <div class="stat-value text-2xl text-error">3</div>
        <div class="stat-desc">Requires immediate attention</div>
      </div>
      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">Data Points</div>
        <div class="stat-value text-2xl text-info">1,247</div>
        <div class="stat-desc">↗︎ 23 new today</div>
      </div>
      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">Uptime</div>
        <div class="stat-value text-2xl text-success">99.8%</div>
        <div class="stat-desc">Last 30 days</div>
      </div>
    </div>

    <section class="grid gap-4 lg:grid-cols-3">
      <!-- Master list with enhanced features -->
      <div class="space-y-4">
        <div class="card bg-base-200 shadow">
          <div class="card-body">
            <h2 class="card-title">Devices</h2>
            <div class="form-control mb-2">
              <input class="input input-bordered input-sm" placeholder="Filter devices..." />
            </div>
            <ul class="menu bg-base-100 rounded-box">
              <li>
                <a class="active">
                  <div class="flex items-center justify-between w-full">
                    <div class="flex items-center gap-2">
                      <span class="relative flex h-2 w-2">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                      </span>
                      Device A
                    </div>
                    <span class="badge badge-success badge-sm">Online</span>
                  </div>
                </a>
              </li>
              <li>
                <a>
                  <div class="flex items-center justify-between w-full">
                    <div class="flex items-center gap-2">
                      <span class="relative flex h-2 w-2">
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-error"></span>
                      </span>
                      Device B
                    </div>
                    <span class="badge badge-error badge-sm">Offline</span>
                  </div>
                </a>
              </li>
              <li>
                <a>
                  <div class="flex items-center justify-between w-full">
                    <div class="flex items-center gap-2">
                      <span class="relative flex h-2 w-2">
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-warning"></span>
                      </span>
                      Device C
                    </div>
                    <span class="badge badge-warning badge-sm">Warning</span>
                  </div>
                </a>
              </li>
              <li>
                <a>
                  <div class="flex items-center justify-between w-full">
                    <div class="flex items-center gap-2">
                      <span class="relative flex h-2 w-2">
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-info"></span>
                      </span>
                      Device D
                    </div>
                    <span class="badge badge-info badge-sm">Maintenance</span>
                  </div>
                </a>
              </li>
            </ul>
            <div class="divider"></div>
            <button class="btn btn-primary btn-sm w-full">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"/>
              </svg>
              Add Device
            </button>
          </div>
        </div>

        <!-- Quick Stats -->
        <div class="card bg-base-200 shadow">
          <div class="card-body">
            <h2 class="card-title text-sm">Quick Stats</h2>
            <div class="stats stats-vertical shadow bg-base-100">
              <div class="stat py-2">
                <div class="stat-title text-xs">Online</div>
                <div class="stat-value text-lg text-success">12</div>
              </div>
              <div class="stat py-2">
                <div class="stat-title text-xs">Offline</div>
                <div class="stat-value text-lg text-error">8</div>
              </div>
              <div class="stat py-2">
                <div class="stat-title text-xs">Maintenance</div>
                <div class="stat-value text-lg text-warning">4</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Detail with enhanced tabs -->
      <div class="card bg-base-200 shadow lg:col-span-2">
        <div class="card-body">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h2 class="card-title">Device A - Production Line 1</h2>
              <p class="text-sm opacity-70">Serial: MAT-2024-001 | Location: Lab 1</p>
            </div>
            <div class="flex gap-2">
              <button class="btn btn-sm btn-primary">Edit</button>
              <button class="btn btn-sm btn-outline">Export</button>
            </div>
          </div>

          <div role="tablist" class="tabs tabs-bordered tabs-lg">
            <input type="radio" name="admin2-tabs" role="tab" class="tab" aria-label="Overview" defaultChecked />
            <div role="tabpanel" class="tab-content p-4">
              <!-- Overview Tab with many components -->
              <div class="grid gap-4 md:grid-cols-2">
                <div class="card bg-base-100 shadow">
                  <div class="card-body">
                    <h3 class="card-title text-sm">Status</h3>
                    <div class="space-y-2">
                      <div class="flex justify-between">
                        <span class="text-sm">Connection</span>
                        <span class="badge badge-success">Online</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-sm">Mode</span>
                        <span class="badge badge-primary">Auto</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-sm">Health</span>
                        <div class="rating rating-sm">
                          <input type="radio" name="health" class="mask mask-star-2 bg-green-400" />
                          <input type="radio" name="health" class="mask mask-star-2 bg-green-400" />
                          <input type="radio" name="health" class="mask mask-star-2 bg-green-400" />
                          <input type="radio" name="health" class="mask mask-star-2 bg-green-400" checked />
                          <input type="radio" name="health" class="mask mask-star-2 bg-green-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card bg-base-100 shadow">
                  <div class="card-body">
                    <h3 class="card-title text-sm">Performance</h3>
                    <div class="space-y-2">
                      <div>
                        <div class="flex justify-between text-xs mb-1">
                          <span>CPU Usage</span>
                          <span>65%</span>
                        </div>
                        <progress class="progress progress-primary w-full" value="65" max="100"></progress>
                      </div>
                      <div>
                        <div class="flex justify-between text-xs mb-1">
                          <span>Memory</span>
                          <span>78%</span>
                        </div>
                        <progress class="progress progress-secondary w-full" value="78" max="100"></progress>
                      </div>
                      <div>
                        <div class="flex justify-between text-xs mb-1">
                          <span>Network</span>
                          <span>42%</span>
                        </div>
                        <progress class="progress progress-accent w-full" value="42" max="100"></progress>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Alerts in Overview -->
              <div class="mt-4 space-y-2">
                <div class="alert alert-success">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                  <span>Device operating normally. All systems nominal.</span>
                </div>
              </div>
            </div>

            <input type="radio" name="admin2-tabs" role="tab" class="tab" aria-label="Settings" />
            <div role="tabpanel" class="tab-content p-4">
              <!-- Enhanced Settings Tab -->
              <div class="space-y-4">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text font-bold">Device Name</span>
                  </label>
                  <input type="text" class="input input-bordered" value="Device A" />
                </div>

                <div class="form-control">
                  <label class="label">
                    <span class="label-text font-bold">Target Value</span>
                  </label>
                  <input type="number" class="input input-bordered" placeholder="42" value="42" />
                </div>

                <div class="form-control">
                  <label class="label">
                    <span class="label-text font-bold">Operation Mode</span>
                  </label>
                  <select class="select select-bordered">
                    <option>Auto</option>
                    <option>Manual</option>
                    <option>Test</option>
                    <option>Maintenance</option>
                  </select>
                </div>

                <div class="form-control">
                  <label class="label">
                    <span class="label-text font-bold">Temperature Setpoint</span>
                    <span class="label-text-alt badge badge-lg badge-warning">23.0°C</span>
                  </label>
                  <input type="range" min="15" max="35" value="23" class="range range-warning" step="0.5" />
                  <div class="flex w-full justify-between text-xs px-2 mt-1">
                    <span>15°C</span>
                    <span>25°C</span>
                    <span>35°C</span>
                  </div>
                </div>

                <div class="form-control">
                  <label class="label">
                    <span class="label-text font-bold">Enable Features</span>
                  </label>
                  <div class="space-y-2">
                    <label class="label cursor-pointer">
                      <span class="label-text">Advanced mode</span>
                      <input type="checkbox" class="toggle toggle-primary" />
                    </label>
                    <label class="label cursor-pointer">
                      <span class="label-text">Data logging</span>
                      <input type="checkbox" class="toggle toggle-success" checked />
                    </label>
                    <label class="label cursor-pointer">
                      <span class="label-text">Remote access</span>
                      <input type="checkbox" class="toggle toggle-warning" />
                    </label>
                    <label class="label cursor-pointer">
                      <span class="label-text">Notifications</span>
                      <input type="checkbox" class="toggle toggle-info" checked />
                    </label>
                  </div>
                </div>

                <div class="form-control">
                  <label class="label">
                    <span class="label-text font-bold">Priority Level</span>
                  </label>
                  <div class="flex gap-2">
                    <input type="radio" name="priority" class="radio radio-primary" checked />
                    <span class="label-text">Low</span>
                    <input type="radio" name="priority" class="radio radio-secondary" />
                    <span class="label-text">Medium</span>
                    <input type="radio" name="priority" class="radio radio-accent" />
                    <span class="label-text">High</span>
                  </div>
                </div>

                <div class="form-control">
                  <label class="label">
                    <span class="label-text font-bold">Notes</span>
                  </label>
                  <textarea class="textarea textarea-bordered" rows="3" placeholder="Additional notes...">Device operating normally. Scheduled maintenance next month.</textarea>
                </div>

                <div class="card-actions justify-end mt-4">
                  <button class="btn btn-outline btn-sm">Cancel</button>
                  <button class="btn btn-primary btn-sm">Save Settings</button>
                </div>
              </div>
            </div>

            <input type="radio" name="admin2-tabs" role="tab" class="tab" aria-label="Logs" />
            <div role="tabpanel" class="tab-content p-4">
              <!-- Enhanced Logs Tab -->
              <div class="flex gap-2 mb-4">
                <select class="select select-bordered select-sm">
                  <option>All Levels</option>
                  <option>Error</option>
                  <option>Warning</option>
                  <option>Info</option>
                  <option>Debug</option>
                </select>
                <input type="date" class="input input-bordered input-sm" />
                <button class="btn btn-sm btn-outline">Filter</button>
                <button class="btn btn-sm btn-primary">Export Logs</button>
              </div>
              <div class="overflow-x-auto">
                <table class="table table-zebra table-hover text-sm">
                  <thead>
                    <tr>
                      <th>Time</th>
                      <th>Level</th>
                      <th>Source</th>
                      <th>Message</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>12:00:15</td>
                      <td><span class="badge badge-success">Info</span></td>
                      <td>System</td>
                      <td>Device started successfully.</td>
                      <td><button class="btn btn-xs btn-ghost">View</button></td>
                    </tr>
                    <tr>
                      <td>12:05:32</td>
                      <td><span class="badge badge-warning">Warn</span></td>
                      <td>Temperature</td>
                      <td>Temperature approaching upper limit.</td>
                      <td><button class="btn btn-xs btn-ghost">View</button></td>
                    </tr>
                    <tr>
                      <td>12:10:48</td>
                      <td><span class="badge badge-error">Error</span></td>
                      <td>Network</td>
                      <td>Connection timeout detected.</td>
                      <td><button class="btn btn-xs btn-ghost">View</button></td>
                    </tr>
                    <tr>
                      <td>12:15:12</td>
                      <td><span class="badge badge-info">Info</span></td>
                      <td>System</td>
                      <td>Configuration updated.</td>
                      <td><button class="btn btn-xs btn-ghost">View</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="flex justify-center mt-4">
                <div class="join">
                  <button class="join-item btn btn-sm">«</button>
                  <button class="join-item btn btn-sm btn-active">1</button>
                  <button class="join-item btn btn-sm">2</button>
                  <button class="join-item btn btn-sm">3</button>
                  <button class="join-item btn btn-sm">»</button>
                </div>
              </div>
            </div>

            <input type="radio" name="admin2-tabs" role="tab" class="tab" aria-label="Charts" />
            <div role="tabpanel" class="tab-content p-4">
              <div class="card bg-base-100 shadow">
                <div class="card-body">
                  <h3 class="card-title text-sm">Performance Metrics</h3>
                  <div class="grid grid-cols-2 gap-4">
                    <div class="flex flex-col items-center">
                      <div class="radial-progress text-primary" style="--value:65; --size:5rem;" role="progressbar">65%</div>
                      <div class="text-xs mt-2">CPU Usage</div>
                    </div>
                    <div class="flex flex-col items-center">
                      <div class="radial-progress text-secondary" style="--value:78; --size:5rem;" role="progressbar">78%</div>
                      <div class="text-xs mt-2">Memory</div>
                    </div>
                    <div class="flex flex-col items-center">
                      <div class="radial-progress text-accent" style="--value:42; --size:5rem;" role="progressbar">42%</div>
                      <div class="text-xs mt-2">Network</div>
                    </div>
                    <div class="flex flex-col items-center">
                      <div class="radial-progress text-warning" style="--value:88; --size:5rem;" role="progressbar">88%</div>
                      <div class="text-xs mt-2">Storage</div>
                    </div>
                  </div>
                </div>
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
    <!-- Admin Panel 3 – Enhanced Settings-driven with many components -->
    
    <!-- Top Stats -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">Settings Groups</div>
        <div class="stat-value text-2xl text-primary">12</div>
        <div class="stat-desc">8 active, 4 disabled</div>
      </div>
      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">Pending Changes</div>
        <div class="stat-value text-2xl text-warning">3</div>
        <div class="stat-desc">Requires restart</div>
      </div>
      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">Backups</div>
        <div class="stat-value text-2xl text-info">24</div>
        <div class="stat-desc">Last: 2 hours ago</div>
      </div>
      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">Config Version</div>
        <div class="stat-value text-2xl text-success">v2.4.1</div>
        <div class="stat-desc">Latest stable</div>
      </div>
    </div>

    <section class="grid gap-4 lg:grid-cols-3">
      <!-- Left: Settings Categories -->
      <div class="lg:col-span-2 space-y-4">
        
        <!-- Display Settings -->
        <div class="card bg-base-200 shadow">
          <div class="card-body">
            <h2 class="card-title">Display Settings</h2>
            <div class="collapse collapse-arrow bg-base-100 mt-2">
              <input type="checkbox" checked />
              <div class="collapse-title text-md font-medium">
                Theme & Appearance
              </div>
              <div class="collapse-content">
                <div class="space-y-3">
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text font-bold">Theme</span>
                    </label>
                    <select class="select select-bordered">
                      <option>Light</option>
                      <option>Dark</option>
                      <option>Auto (System)</option>
                    </select>
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text font-bold">Color Scheme</span>
                    </label>
                    <div class="flex gap-2">
                      <button class="btn btn-sm btn-primary">Primary</button>
                      <button class="btn btn-sm btn-secondary">Secondary</button>
                      <button class="btn btn-sm btn-accent">Accent</button>
                    </div>
                  </div>
                  <div class="form-control">
                    <label class="label cursor-pointer">
                      <span class="label-text font-bold">High contrast mode</span>
                      <input type="checkbox" class="toggle toggle-primary" />
                    </label>
                  </div>
                  <div class="form-control">
                    <label class="label cursor-pointer">
                      <span class="label-text font-bold">Reduce animations</span>
                      <input type="checkbox" class="toggle toggle-secondary" />
                    </label>
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text font-bold">Font Size</span>
                      <span class="label-text-alt badge badge-lg">Medium</span>
                    </label>
                    <input type="range" min="0" max="2" value="1" class="range range-primary" step="1" />
                    <div class="flex w-full justify-between text-xs px-2 mt-1">
                      <span>Small</span>
                      <span>Medium</span>
                      <span>Large</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="collapse collapse-arrow bg-base-100 mt-2">
              <input type="checkbox" />
              <div class="collapse-title text-md font-medium">
                Layout & Navigation
              </div>
              <div class="collapse-content">
                <div class="space-y-3">
                  <div class="form-control">
                    <label class="label cursor-pointer">
                      <span class="label-text font-bold">Compact sidebar</span>
                      <input type="checkbox" class="toggle toggle-primary" />
                    </label>
                  </div>
                  <div class="form-control">
                    <label class="label cursor-pointer">
                      <span class="label-text font-bold">Show breadcrumbs</span>
                      <input type="checkbox" class="toggle toggle-success" checked />
                    </label>
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text font-bold">Items per page</span>
                    </label>
                    <select class="select select-bordered">
                      <option>10</option>
                      <option>25</option>
                      <option selected>50</option>
                      <option>100</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Security Settings -->
        <div class="card bg-base-200 shadow">
          <div class="card-body">
            <h2 class="card-title">Security Settings</h2>
            <div class="collapse collapse-arrow bg-base-100 mt-2">
              <input type="checkbox" checked />
              <div class="collapse-title text-md font-medium">
                Authentication
              </div>
              <div class="collapse-content space-y-3">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text font-bold">Idle timeout (minutes)</span>
                  </label>
                  <input type="number" class="input input-bordered" placeholder="15" value="15" min="5" max="60" />
                </div>
                <div class="form-control">
                  <label class="label cursor-pointer">
                    <span class="label-text font-bold">Require PIN on startup</span>
                    <input type="checkbox" class="toggle toggle-primary" />
                  </label>
                </div>
                <div class="form-control">
                  <label class="label cursor-pointer">
                    <span class="label-text font-bold">Two-factor authentication</span>
                    <input type="checkbox" class="toggle toggle-success" />
                  </label>
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text font-bold">Password complexity</span>
                  </label>
                  <div class="flex gap-2">
                    <input type="radio" name="pwd-complexity" class="radio radio-primary" />
                    <span class="label-text">Low</span>
                    <input type="radio" name="pwd-complexity" class="radio radio-secondary" checked />
                    <span class="label-text">Medium</span>
                    <input type="radio" name="pwd-complexity" class="radio radio-accent" />
                    <span class="label-text">High</span>
                  </div>
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text font-bold">Session timeout</span>
                    <span class="label-text-alt badge badge-lg badge-warning">30 min</span>
                  </label>
                  <input type="range" min="5" max="120" value="30" class="range range-warning" step="5" />
                  <div class="flex w-full justify-between text-xs px-2 mt-1">
                    <span>5 min</span>
                    <span>60 min</span>
                    <span>120 min</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="collapse collapse-arrow bg-base-100 mt-2">
              <input type="checkbox" />
              <div class="collapse-title text-md font-medium">
                Access Control
              </div>
              <div class="collapse-content space-y-3">
                <div class="form-control">
                  <label class="label cursor-pointer">
                    <span class="label-text font-bold">IP whitelist enabled</span>
                    <input type="checkbox" class="toggle toggle-info" />
                  </label>
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text font-bold">Allowed IPs</span>
                  </label>
                  <textarea class="textarea textarea-bordered" rows="3" placeholder="192.168.1.1&#10;10.0.0.0/8"></textarea>
                </div>
                <div class="form-control">
                  <label class="label cursor-pointer">
                    <span class="label-text font-bold">Block failed login attempts</span>
                    <input type="checkbox" class="toggle toggle-warning" checked />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- System Settings -->
        <div class="card bg-base-200 shadow">
          <div class="card-body">
            <h2 class="card-title">System Settings</h2>
            <div class="collapse collapse-arrow bg-base-100 mt-2">
              <input type="checkbox" />
              <div class="collapse-title text-md font-medium">
                Data & Storage
              </div>
              <div class="collapse-content space-y-3">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text font-bold">Data retention (days)</span>
                  </label>
                  <input type="number" class="input input-bordered" value="90" min="7" max="365" />
                </div>
                <div class="form-control">
                  <label class="label cursor-pointer">
                    <span class="label-text font-bold">Auto backup enabled</span>
                    <input type="checkbox" class="toggle toggle-success" checked />
                  </label>
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text font-bold">Backup frequency</span>
                  </label>
                  <select class="select select-bordered">
                    <option>Hourly</option>
                    <option>Daily</option>
                    <option selected>Weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text font-bold">Storage location</span>
                  </label>
                  <div class="flex gap-2">
                    <input type="text" class="input input-bordered flex-1" value="/data/backups" />
                    <button class="btn btn-sm btn-outline">Browse</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="collapse collapse-arrow bg-base-100 mt-2">
              <input type="checkbox" />
              <div class="collapse-title text-md font-medium">
                Notifications
              </div>
              <div class="collapse-content space-y-3">
                <div class="form-control">
                  <label class="label cursor-pointer">
                    <span class="label-text font-bold">Email notifications</span>
                    <input type="checkbox" class="toggle toggle-primary" checked />
                  </label>
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text font-bold">Notification level</span>
                  </label>
                  <select class="select select-bordered">
                    <option>All</option>
                    <option selected>Errors & Warnings</option>
                    <option>Errors Only</option>
                    <option>None</option>
                  </select>
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text font-bold">Email recipients</span>
                  </label>
                  <input type="email" class="input input-bordered" placeholder="admin@matrix.com" multiple />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="card bg-base-200 shadow">
          <div class="card-body">
            <div class="flex gap-2">
              <button class="btn btn-primary flex-1">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                Save All Settings
              </button>
              <button class="btn btn-outline">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"/>
                </svg>
                Reset
              </button>
              <button class="btn btn-outline">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"/>
                </svg>
                Export Config
              </button>
              <button class="btn btn-outline">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"/>
                </svg>
                Import Config
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Preview & Status -->
      <div class="space-y-4">
        <!-- Preview Card -->
        <div class="card bg-base-200 shadow">
          <div class="card-body">
            <h2 class="card-title">Settings Preview</h2>
            <p class="text-sm opacity-80 mb-4">
              Summary of current configuration
            </p>
            <div class="space-y-3">
              <div class="stats stats-vertical shadow bg-base-100">
                <div class="stat py-2">
                  <div class="stat-title text-xs">Theme</div>
                  <div class="stat-value text-sm">Light</div>
                </div>
                <div class="stat py-2">
                  <div class="stat-title text-xs">High Contrast</div>
                  <div class="stat-value text-sm">
                    <span class="badge badge-error badge-sm">Off</span>
                  </div>
                </div>
                <div class="stat py-2">
                  <div class="stat-title text-xs">Idle Timeout</div>
                  <div class="stat-value text-sm">15 min</div>
                </div>
                <div class="stat py-2">
                  <div class="stat-title text-xs">PIN Required</div>
                  <div class="stat-value text-sm">
                    <span class="badge badge-error badge-sm">Off</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- System Status -->
        <div class="card bg-base-200 shadow">
          <div class="card-body">
            <h2 class="card-title">System Status</h2>
            <div class="space-y-3">
              <div class="alert alert-success">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span class="text-sm">All settings saved successfully</span>
              </div>
              <div>
                <div class="flex justify-between text-xs mb-1">
                  <span>Config Health</span>
                  <span>95%</span>
                </div>
                <progress class="progress progress-success w-full" value="95" max="100"></progress>
              </div>
              <div>
                <div class="flex justify-between text-xs mb-1">
                  <span>Backup Status</span>
                  <span>Good</span>
                </div>
                <progress class="progress progress-info w-full" value="100" max="100"></progress>
              </div>
            </div>
          </div>
        </div>

        <!-- Recent Changes -->
        <div class="card bg-base-200 shadow">
          <div class="card-body">
            <h2 class="card-title">Recent Changes</h2>
            <ul class="timeline timeline-vertical timeline-compact">
              <li>
                <div class="timeline-middle">
                  <div class="badge badge-success"></div>
                </div>
                <div class="timeline-end timeline-box">Theme changed to Light</div>
                <div class="timeline-start text-xs opacity-60">2 hours ago</div>
              </li>
              <li>
                <hr/>
                <div class="timeline-middle">
                  <div class="badge badge-info"></div>
                </div>
                <div class="timeline-end timeline-box">Idle timeout updated</div>
                <div class="timeline-start text-xs opacity-60">1 day ago</div>
              </li>
              <li>
                <hr/>
                <div class="timeline-middle">
                  <div class="badge badge-warning"></div>
                </div>
                <div class="timeline-end timeline-box">Security settings modified</div>
                <div class="timeline-start text-xs opacity-60">3 days ago</div>
              </li>
            </ul>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="card bg-base-200 shadow">
          <div class="card-body">
            <h2 class="card-title">Quick Actions</h2>
            <div class="space-y-2">
              <button class="btn btn-sm btn-outline w-full justify-start">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"/>
                </svg>
                Create Backup
              </button>
              <button class="btn btn-sm btn-outline w-full justify-start">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"/>
                </svg>
                Restore Defaults
              </button>
              <button class="btn btn-sm btn-outline w-full justify-start">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"/>
                </svg>
                View Logs
              </button>
            </div>
          </div>
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
    <!-- Control Template 1 – Enhanced Control System -->
    
    <!-- Top Status Bar -->
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
        <div class="stat-desc text-primary-content opacity-70">Mode: Auto</div>
      </div>

      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">Elapsed Time</div>
        <div class="stat-value text-3xl text-info">00:10:45</div>
        <div class="stat-desc">hh:mm:ss</div>
      </div>

      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">Process Value</div>
        <div class="stat-value text-3xl text-success">42.3°C</div>
        <div class="stat-desc">Target: 42.0°C</div>
      </div>

      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">Control Output</div>
        <div class="stat-value text-3xl text-warning">65%</div>
        <div class="stat-desc">PID active</div>
      </div>
    </div>

    <section class="grid gap-4 lg:grid-cols-3">
      <!-- Main Control Area -->
      <div class="lg:col-span-2 space-y-4">
        
        <!-- Primary Control Panel -->
        <div class="card bg-gradient-to-br from-base-200 to-base-300 shadow-xl border-2 border-primary">
          <div class="card-body">
            <h2 class="card-title text-primary">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
              </svg>
              Main Control Panel
            </h2>
            
            <!-- Control Buttons -->
            <div class="grid grid-cols-2 gap-3 mb-4">
              <button class="btn btn-success btn-lg">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
                </svg>
                START
              </button>
              <button class="btn btn-error btn-lg">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"/>
                </svg>
                STOP
              </button>
              <button class="btn btn-warning btn-lg">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"/>
                </svg>
                PAUSE
              </button>
              <button class="btn btn-outline btn-lg">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"/>
                </svg>
                RESET
              </button>
            </div>

            <div class="divider"></div>

            <!-- Operation Mode -->
            <div class="form-control mb-4">
              <label class="label">
                <span class="label-text font-bold">Operation Mode</span>
              </label>
              <div class="join w-full">
                <button class="btn join-item flex-1 btn-active btn-primary">AUTO</button>
                <button class="btn join-item flex-1">MANUAL</button>
                <button class="btn join-item flex-1">TEST</button>
                <button class="btn join-item flex-1">MAINT</button>
              </div>
            </div>

            <!-- Setpoint Control -->
            <div class="form-control mb-4">
              <label class="label">
                <span class="label-text font-bold">Temperature Setpoint</span>
                <span class="label-text-alt badge badge-lg badge-warning">42.0°C</span>
              </label>
              <input type="range" min="20" max="60" value="42" class="range range-warning range-lg" step="0.5" />
              <div class="flex w-full justify-between text-xs px-2 mt-1">
                <span>20°C</span>
                <span>|</span>
                <span>40°C</span>
                <span>|</span>
                <span>60°C</span>
              </div>
              <input type="number" class="input input-bordered input-sm mt-2" value="42.0" step="0.5" min="20" max="60" />
            </div>

            <!-- Speed Control -->
            <div class="form-control mb-4">
              <label class="label">
                <span class="label-text font-bold">Fan Speed</span>
                <span class="label-text-alt badge badge-lg badge-accent">75%</span>
              </label>
              <input type="range" min="0" max="100" value="75" class="range range-accent range-lg" step="5" />
            </div>

            <!-- Feature Toggles -->
            <div class="space-y-2 mb-4">
              <label class="label cursor-pointer">
                <span class="label-text font-bold">Enable PID Control</span>
                <input type="checkbox" class="toggle toggle-primary" checked />
              </label>
              <label class="label cursor-pointer">
                <span class="label-text font-bold">Data Logging</span>
                <input type="checkbox" class="toggle toggle-success" checked />
              </label>
              <label class="label cursor-pointer">
                <span class="label-text font-bold">Alarm Enabled</span>
                <input type="checkbox" class="toggle toggle-warning" checked />
              </label>
              <label class="label cursor-pointer">
                <span class="label-text font-bold">Remote Control</span>
                <input type="checkbox" class="toggle toggle-info" />
              </label>
            </div>

            <!-- Emergency Stop -->
            <button class="btn btn-outline btn-error w-full btn-lg">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
              </svg>
              EMERGENCY STOP
            </button>
          </div>
        </div>

        <!-- Progress and Status -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Process Progress</h2>
            <div class="space-y-3">
              <div>
                <div class="flex justify-between text-sm mb-1">
                  <span>Overall Progress</span>
                  <span>40%</span>
                </div>
                <progress class="progress progress-primary w-full" value="40" max="100"></progress>
              </div>
              <div>
                <div class="flex justify-between text-sm mb-1">
                  <span>Heating Phase</span>
                  <span>65%</span>
                </div>
                <progress class="progress progress-warning w-full" value="65" max="100"></progress>
              </div>
              <div>
                <div class="flex justify-between text-sm mb-1">
                  <span>Stabilization</span>
                  <span>25%</span>
                </div>
                <progress class="progress progress-info w-full" value="25" max="100"></progress>
              </div>
            </div>
          </div>
        </div>

        <!-- Alerts -->
        <div class="space-y-2">
          <div class="alert alert-success">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
            </svg>
            <span>System operating normally. All parameters within limits.</span>
          </div>
          <div class="alert alert-info">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"/>
            </svg>
            <span>Process will complete in approximately 15 minutes.</span>
          </div>
        </div>
      </div>

      <!-- Right Sidebar -->
      <div class="space-y-4">
        
        <!-- Status Cards -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">System Status</h2>
            <div class="space-y-3">
              <div class="stat bg-base-100 rounded-box shadow">
                <div class="stat-title">Current State</div>
                <div class="stat-value text-lg text-success">Running</div>
                <div class="stat-desc">00:10:45 elapsed</div>
              </div>
              <div class="stat bg-base-100 rounded-box shadow">
                <div class="stat-title">Setpoint</div>
                <div class="stat-value text-lg text-primary">42.0°C</div>
                <div class="stat-desc">Target temperature</div>
              </div>
              <div class="stat bg-base-100 rounded-box shadow">
                <div class="stat-title">Process Value</div>
                <div class="stat-value text-lg text-info">42.3°C</div>
                <div class="stat-desc">↗︎ 0.3°C from setpoint</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Performance Gauges -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Performance Metrics</h2>
            <div class="grid grid-cols-2 gap-4">
              <div class="flex flex-col items-center">
                <div class="radial-progress text-primary" style="--value:65; --size:4rem;" role="progressbar">65%</div>
                <div class="text-xs mt-2 text-center">Control Output</div>
              </div>
              <div class="flex flex-col items-center">
                <div class="radial-progress text-success" style="--value:95; --size:4rem;" role="progressbar">95%</div>
                <div class="text-xs mt-2 text-center">Efficiency</div>
              </div>
              <div class="flex flex-col items-center">
                <div class="radial-progress text-warning" style="--value:78; --size:4rem;" role="progressbar">78%</div>
                <div class="text-xs mt-2 text-center">Stability</div>
              </div>
              <div class="flex flex-col items-center">
                <div class="radial-progress text-info" style="--value:88; --size:4rem;" role="progressbar">88%</div>
                <div class="text-xs mt-2 text-center">Quality</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Quick Actions</h2>
            <div class="space-y-2">
              <button class="btn btn-sm btn-outline w-full justify-start">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                </svg>
                View Alarms
              </button>
              <button class="btn btn-sm btn-outline w-full justify-start">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"/>
                </svg>
                Configure
              </button>
              <button class="btn btn-sm btn-outline w-full justify-start">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z"/>
                  <path fill-rule="evenodd" d="M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
                Export Data
              </button>
              <button class="btn btn-sm btn-outline w-full justify-start">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"/>
                </svg>
                Reset Process
              </button>
            </div>
          </div>
        </div>

        <!-- System Health Rating -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">System Health</h2>
            <div class="rating rating-lg">
              <input type="radio" name="health-rating" class="mask mask-star-2 bg-green-400" />
              <input type="radio" name="health-rating" class="mask mask-star-2 bg-green-400" />
              <input type="radio" name="health-rating" class="mask mask-star-2 bg-green-400" />
              <input type="radio" name="health-rating" class="mask mask-star-2 bg-green-400" checked />
              <input type="radio" name="health-rating" class="mask mask-star-2 bg-green-400" />
            </div>
            <p class="text-xs opacity-70 mt-2">4.0 out of 5 - Excellent</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderIoTemplate1() {
  return `
    <!-- I/O Template 1 – Enhanced I/O Monitoring & Control -->
    
    <!-- Top Stats -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">Total I/O Points</div>
        <div class="stat-value text-2xl text-primary">48</div>
        <div class="stat-desc">24 inputs, 24 outputs</div>
      </div>
      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">Active Inputs</div>
        <div class="stat-value text-2xl text-success">18</div>
        <div class="stat-desc">75% active</div>
      </div>
      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">Active Outputs</div>
        <div class="stat-value text-2xl text-info">12</div>
        <div class="stat-desc">50% active</div>
      </div>
      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">I/O Health</div>
        <div class="stat-value text-2xl text-warning">98%</div>
        <div class="stat-desc">1 fault detected</div>
      </div>
    </div>

    <section class="grid gap-4 lg:grid-cols-3">
      <!-- Left: Digital Inputs -->
      <div class="space-y-4">
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <div class="flex items-center justify-between mb-4">
              <h2 class="card-title">Digital Inputs</h2>
              <div class="badge badge-success gap-2">
                <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                </span>
                LIVE
              </div>
            </div>
            
            <!-- Filter Controls -->
            <div class="flex gap-2 mb-4">
              <select class="select select-bordered select-sm flex-1">
                <option>All Groups</option>
                <option>Group A</option>
                <option>Group B</option>
                <option>Group C</option>
              </select>
              <button class="btn btn-sm btn-outline">Filter</button>
            </div>

            <div class="overflow-x-auto">
              <table class="table table-zebra table-hover">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>State</th>
                    <th>Group</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="font-bold">DI1</td>
                    <td>
                      <span class="badge badge-success gap-2">
                        <span class="relative flex h-2 w-2">
                          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                          <span class="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                        </span>
                        High
                      </span>
                    </td>
                    <td><span class="badge badge-primary">A</span></td>
                    <td>
                      <div class="rating rating-sm">
                        <input type="radio" name="di1" class="mask mask-star-2 bg-green-400" checked />
                        <input type="radio" name="di1" class="mask mask-star-2 bg-green-400" />
                        <input type="radio" name="di1" class="mask mask-star-2 bg-green-400" />
                        <input type="radio" name="di1" class="mask mask-star-2 bg-green-400" />
                        <input type="radio" name="di1" class="mask mask-star-2 bg-green-400" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="font-bold">DI2</td>
                    <td><span class="badge badge-error">Low</span></td>
                    <td><span class="badge badge-primary">A</span></td>
                    <td>
                      <div class="rating rating-sm">
                        <input type="radio" name="di2" class="mask mask-star-2 bg-red-400" />
                        <input type="radio" name="di2" class="mask mask-star-2 bg-red-400" checked />
                        <input type="radio" name="di2" class="mask mask-star-2 bg-red-400" />
                        <input type="radio" name="di2" class="mask mask-star-2 bg-red-400" />
                        <input type="radio" name="di2" class="mask mask-star-2 bg-red-400" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="font-bold">DI3</td>
                    <td>
                      <span class="badge badge-success gap-2">
                        <span class="relative flex h-2 w-2">
                          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                          <span class="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                        </span>
                        High
                      </span>
                    </td>
                    <td><span class="badge badge-secondary">B</span></td>
                    <td>
                      <div class="rating rating-sm">
                        <input type="radio" name="di3" class="mask mask-star-2 bg-green-400" />
                        <input type="radio" name="di3" class="mask mask-star-2 bg-green-400" />
                        <input type="radio" name="di3" class="mask mask-star-2 bg-green-400" checked />
                        <input type="radio" name="di3" class="mask mask-star-2 bg-green-400" />
                        <input type="radio" name="di3" class="mask mask-star-2 bg-green-400" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="font-bold">DI4</td>
                    <td><span class="badge badge-warning">Fault</span></td>
                    <td><span class="badge badge-secondary">B</span></td>
                    <td>
                      <div class="rating rating-sm">
                        <input type="radio" name="di4" class="mask mask-star-2 bg-yellow-400" />
                        <input type="radio" name="di4" class="mask mask-star-2 bg-yellow-400" />
                        <input type="radio" name="di4" class="mask mask-star-2 bg-yellow-400" />
                        <input type="radio" name="di4" class="mask mask-star-2 bg-yellow-400" checked />
                        <input type="radio" name="di4" class="mask mask-star-2 bg-yellow-400" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="font-bold">DI5</td>
                    <td>
                      <span class="badge badge-success gap-2">
                        <span class="relative flex h-2 w-2">
                          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                          <span class="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                        </span>
                        High
                      </span>
                    </td>
                    <td><span class="badge badge-accent">C</span></td>
                    <td>
                      <div class="rating rating-sm">
                        <input type="radio" name="di5" class="mask mask-star-2 bg-green-400" />
                        <input type="radio" name="di5" class="mask mask-star-2 bg-green-400" />
                        <input type="radio" name="di5" class="mask mask-star-2 bg-green-400" />
                        <input type="radio" name="di5" class="mask mask-star-2 bg-green-400" />
                        <input type="radio" name="di5" class="mask mask-star-2 bg-green-400" checked />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Input Statistics -->
            <div class="divider"></div>
            <div class="stats stats-vertical shadow bg-base-100">
              <div class="stat py-2">
                <div class="stat-title text-xs">Active</div>
                <div class="stat-value text-lg text-success">18</div>
              </div>
              <div class="stat py-2">
                <div class="stat-title text-xs">Inactive</div>
                <div class="stat-value text-lg text-error">6</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Analog Inputs -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Analog Inputs</h2>
            <div class="space-y-3">
              <div class="form-control">
                <label class="label">
                  <span class="label-text font-bold">AI1 - Temperature</span>
                  <span class="label-text-alt badge badge-lg badge-warning">23.5°C</span>
                </label>
                <progress class="progress progress-warning w-full" value="75" max="100"></progress>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text font-bold">AI2 - Pressure</span>
                  <span class="label-text-alt badge badge-lg badge-info">101.3 kPa</span>
                </label>
                <progress class="progress progress-info w-full" value="85" max="100"></progress>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text font-bold">AI3 - Flow Rate</span>
                  <span class="label-text-alt badge badge-lg badge-accent">45.2 L/min</span>
                </label>
                <progress class="progress progress-accent w-full" value="60" max="100"></progress>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Center: Digital Outputs -->
      <div class="space-y-4">
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <div class="flex items-center justify-between mb-4">
              <h2 class="card-title">Digital Outputs</h2>
              <div class="flex gap-2">
                <button class="btn btn-xs btn-success">All On</button>
                <button class="btn btn-xs btn-error">All Off</button>
              </div>
            </div>

            <div class="overflow-x-auto">
              <table class="table table-zebra table-hover">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>State</th>
                    <th>Control</th>
                    <th>Priority</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="font-bold">DO1 - Pump</td>
                    <td>
                      <span class="badge badge-success gap-2">
                        <span class="relative flex h-2 w-2">
                          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                          <span class="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                        </span>
                        On
                      </span>
                    </td>
                    <td>
                      <input type="checkbox" class="toggle toggle-success toggle-lg" checked />
                    </td>
                    <td>
                      <div class="flex gap-1">
                        <input type="radio" name="do1-priority" class="radio radio-primary radio-xs" />
                        <input type="radio" name="do1-priority" class="radio radio-secondary radio-xs" checked />
                        <input type="radio" name="do1-priority" class="radio radio-accent radio-xs" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="font-bold">DO2 - Valve</td>
                    <td><span class="badge badge-error">Off</span></td>
                    <td>
                      <input type="checkbox" class="toggle toggle-error toggle-lg" />
                    </td>
                    <td>
                      <div class="flex gap-1">
                        <input type="radio" name="do2-priority" class="radio radio-primary radio-xs" checked />
                        <input type="radio" name="do2-priority" class="radio radio-secondary radio-xs" />
                        <input type="radio" name="do2-priority" class="radio radio-accent radio-xs" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="font-bold">DO3 - Heater</td>
                    <td>
                      <span class="badge badge-warning gap-2">
                        <span class="relative flex h-2 w-2">
                          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-warning opacity-75"></span>
                          <span class="relative inline-flex rounded-full h-2 w-2 bg-warning"></span>
                        </span>
                        Warming
                      </span>
                    </td>
                    <td>
                      <input type="checkbox" class="toggle toggle-warning toggle-lg" checked />
                    </td>
                    <td>
                      <div class="flex gap-1">
                        <input type="radio" name="do3-priority" class="radio radio-primary radio-xs" />
                        <input type="radio" name="do3-priority" class="radio radio-secondary radio-xs" />
                        <input type="radio" name="do3-priority" class="radio radio-accent radio-xs" checked />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="font-bold">DO4 - Fan</td>
                    <td>
                      <span class="badge badge-success gap-2">
                        <span class="relative flex h-2 w-2">
                          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                          <span class="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                        </span>
                        On
                      </span>
                    </td>
                    <td>
                      <input type="checkbox" class="toggle toggle-info toggle-lg" checked />
                    </td>
                    <td>
                      <div class="flex gap-1">
                        <input type="radio" name="do4-priority" class="radio radio-primary radio-xs" />
                        <input type="radio" name="do4-priority" class="radio radio-secondary radio-xs" checked />
                        <input type="radio" name="do4-priority" class="radio radio-accent radio-xs" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="font-bold">DO5 - Alarm</td>
                    <td><span class="badge badge-error">Off</span></td>
                    <td>
                      <input type="checkbox" class="toggle toggle-error toggle-lg" />
                    </td>
                    <td>
                      <div class="flex gap-1">
                        <input type="radio" name="do5-priority" class="radio radio-primary radio-xs" checked />
                        <input type="radio" name="do5-priority" class="radio radio-secondary radio-xs" />
                        <input type="radio" name="do5-priority" class="radio radio-accent radio-xs" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Output Statistics -->
            <div class="divider"></div>
            <div class="stats stats-vertical shadow bg-base-100">
              <div class="stat py-2">
                <div class="stat-title text-xs">Active</div>
                <div class="stat-value text-lg text-success">12</div>
              </div>
              <div class="stat py-2">
                <div class="stat-title text-xs">Inactive</div>
                <div class="stat-value text-lg text-error">12</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Analog Outputs -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Analog Outputs</h2>
            <div class="space-y-4">
              <div class="form-control">
                <label class="label">
                  <span class="label-text font-bold">AO1 - Speed Control</span>
                  <span class="label-text-alt badge badge-lg badge-primary">75%</span>
                </label>
                <input type="range" min="0" max="100" value="75" class="range range-primary" step="1" />
                <input type="number" class="input input-bordered input-sm mt-2" value="75" min="0" max="100" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text font-bold">AO2 - Position</span>
                  <span class="label-text-alt badge badge-lg badge-secondary">45%</span>
                </label>
                <input type="range" min="0" max="100" value="45" class="range range-secondary" step="1" />
                <input type="number" class="input input-bordered input-sm mt-2" value="45" min="0" max="100" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text font-bold">AO3 - Power</span>
                  <span class="label-text-alt badge badge-lg badge-accent">88%</span>
                </label>
                <input type="range" min="0" max="100" value="88" class="range range-accent" step="1" />
                <input type="number" class="input input-bordered input-sm mt-2" value="88" min="0" max="100" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: I/O Status & Actions -->
      <div class="space-y-4">
        
        <!-- I/O Health Status -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">I/O Health Status</h2>
            <div class="space-y-3">
              <div>
                <div class="flex justify-between text-sm mb-1">
                  <span>Overall Health</span>
                  <span>98%</span>
                </div>
                <progress class="progress progress-success w-full" value="98" max="100"></progress>
              </div>
              <div>
                <div class="flex justify-between text-sm mb-1">
                  <span>Input Reliability</span>
                  <span>99%</span>
                </div>
                <progress class="progress progress-info w-full" value="99" max="100"></progress>
              </div>
              <div>
                <div class="flex justify-between text-sm mb-1">
                  <span>Output Reliability</span>
                  <span>97%</span>
                </div>
                <progress class="progress progress-warning w-full" value="97" max="100"></progress>
              </div>
            </div>
          </div>
        </div>

        <!-- I/O Gauges -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">I/O Utilization</h2>
            <div class="grid grid-cols-2 gap-4">
              <div class="flex flex-col items-center">
                <div class="radial-progress text-primary" style="--value:75; --size:4rem;" role="progressbar">75%</div>
                <div class="text-xs mt-2 text-center">Inputs</div>
              </div>
              <div class="flex flex-col items-center">
                <div class="radial-progress text-secondary" style="--value:50; --size:4rem;" role="progressbar">50%</div>
                <div class="text-xs mt-2 text-center">Outputs</div>
              </div>
              <div class="flex flex-col items-center">
                <div class="radial-progress text-accent" style="--value:88; --size:4rem;" role="progressbar">88%</div>
                <div class="text-xs mt-2 text-center">Analog</div>
              </div>
              <div class="flex flex-col items-center">
                <div class="radial-progress text-warning" style="--value:62; --size:4rem;" role="progressbar">62%</div>
                <div class="text-xs mt-2 text-center">Digital</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Quick Actions</h2>
            <div class="space-y-2">
              <button class="btn btn-sm btn-primary w-full">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"/>
                </svg>
                Refresh All
              </button>
              <button class="btn btn-sm btn-success w-full">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                </svg>
                Test All I/O
              </button>
              <button class="btn btn-sm btn-warning w-full">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"/>
                </svg>
                Search I/O
              </button>
              <button class="btn btn-sm btn-outline w-full">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"/>
                </svg>
                Export Config
              </button>
            </div>
          </div>
        </div>

        <!-- Alerts -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">I/O Alerts</h2>
            <div class="space-y-2">
              <div class="alert alert-success">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span class="text-xs">All critical I/O points operational</span>
              </div>
              <div class="alert alert-warning">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"/>
                </svg>
                <span class="text-xs">DI4 showing intermittent fault</span>
              </div>
            </div>
          </div>
        </div>

        <!-- I/O Groups -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">I/O Groups</h2>
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-sm">Group A</span>
                <span class="badge badge-primary">8 points</span>
              </div>
              <progress class="progress progress-primary w-full" value="87" max="100"></progress>
              
              <div class="flex items-center justify-between mt-3">
                <span class="text-sm">Group B</span>
                <span class="badge badge-secondary">12 points</span>
              </div>
              <progress class="progress progress-secondary w-full" value="75" max="100"></progress>
              
              <div class="flex items-center justify-between mt-3">
                <span class="text-sm">Group C</span>
                <span class="badge badge-accent">6 points</span>
              </div>
              <progress class="progress progress-accent w-full" value="100" max="100"></progress>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderFaultsTemplate1() {
  return `
    <!-- Faults Template 1 – Enhanced Fault Monitoring & Management -->
    
    <!-- Top Status Bar -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
      <div class="stat bg-gradient-to-br from-error to-error-focus text-error-content shadow-lg rounded-lg">
        <div class="stat-title text-error-content opacity-80">Critical Faults</div>
        <div class="stat-value text-3xl">1</div>
        <div class="stat-desc text-error-content opacity-70">Requires immediate action</div>
      </div>

      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">Warnings</div>
        <div class="stat-value text-3xl text-warning">3</div>
        <div class="stat-desc">Monitor closely</div>
      </div>

      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">Infos</div>
        <div class="stat-value text-3xl text-info">8</div>
        <div class="stat-desc">Informational only</div>
      </div>

      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">System Health</div>
        <div class="stat-value text-3xl text-success">92%</div>
        <div class="stat-desc">Overall status</div>
      </div>
    </div>

    <section class="grid gap-4 lg:grid-cols-3">
      <!-- Left: Status & Filters -->
      <div class="space-y-4">
        
        <!-- Status Overview -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Fault Status</h2>
            <div class="stats stats-vertical shadow bg-base-100">
              <div class="stat py-2">
                <div class="stat-title text-xs">Active Faults</div>
                <div class="stat-value text-2xl text-error">1</div>
                <div class="stat-desc text-xs">Critical</div>
              </div>
              <div class="stat py-2">
                <div class="stat-title text-xs">Warnings</div>
                <div class="stat-value text-2xl text-warning">3</div>
                <div class="stat-desc text-xs">Non-critical</div>
              </div>
              <div class="stat py-2">
                <div class="stat-title text-xs">Infos</div>
                <div class="stat-value text-2xl text-info">8</div>
                <div class="stat-desc text-xs">Normal</div>
              </div>
              <div class="stat py-2">
                <div class="stat-title text-xs">Resolved (24h)</div>
                <div class="stat-value text-2xl text-success">24</div>
                <div class="stat-desc text-xs">Today</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Filters -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Filters</h2>
            <div class="space-y-3">
              <div class="form-control">
                <label class="label">
                  <span class="label-text font-bold">Severity</span>
                </label>
                <select class="select select-bordered select-sm">
                  <option>All</option>
                  <option>Critical</option>
                  <option>Warning</option>
                  <option>Info</option>
                </select>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text font-bold">Source</span>
                </label>
                <select class="select select-bordered select-sm">
                  <option>All Sources</option>
                  <option>Device A</option>
                  <option>Device B</option>
                  <option>Device C</option>
                  <option>System</option>
                </select>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text font-bold">Time Range</span>
                </label>
                <select class="select select-bordered select-sm">
                  <option>Last Hour</option>
                  <option>Last 24 Hours</option>
                  <option selected>Last 7 Days</option>
                  <option>Last 30 Days</option>
                </select>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text font-bold">Status</span>
                </label>
                <div class="space-y-1">
                  <label class="label cursor-pointer">
                    <span class="label-text text-xs">Active Only</span>
                    <input type="checkbox" class="checkbox checkbox-sm checkbox-primary" checked />
                  </label>
                  <label class="label cursor-pointer">
                    <span class="label-text text-xs">Acknowledged</span>
                    <input type="checkbox" class="checkbox checkbox-sm checkbox-secondary" />
                  </label>
                  <label class="label cursor-pointer">
                    <span class="label-text text-xs">Resolved</span>
                    <input type="checkbox" class="checkbox checkbox-sm checkbox-accent" />
                  </label>
                </div>
              </div>
              <button class="btn btn-primary btn-sm w-full">Apply Filters</button>
              <button class="btn btn-outline btn-sm w-full">Reset</button>
            </div>
          </div>
        </div>

        <!-- System Health -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">System Health</h2>
            <div class="space-y-3">
              <div>
                <div class="flex justify-between text-xs mb-1">
                  <span>Overall Health</span>
                  <span>92%</span>
                </div>
                <progress class="progress progress-success w-full" value="92" max="100"></progress>
              </div>
              <div>
                <div class="flex justify-between text-xs mb-1">
                  <span>Reliability</span>
                  <span>95%</span>
                </div>
                <progress class="progress progress-info w-full" value="95" max="100"></progress>
              </div>
              <div>
                <div class="flex justify-between text-xs mb-1">
                  <span>Availability</span>
                  <span>98%</span>
                </div>
                <progress class="progress progress-warning w-full" value="98" max="100"></progress>
              </div>
            </div>
          </div>
        </div>

        <!-- Health Rating -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Health Rating</h2>
            <div class="rating rating-lg">
              <input type="radio" name="health-rating" class="mask mask-star-2 bg-green-400" />
              <input type="radio" name="health-rating" class="mask mask-star-2 bg-green-400" />
              <input type="radio" name="health-rating" class="mask mask-star-2 bg-green-400" />
              <input type="radio" name="health-rating" class="mask mask-star-2 bg-green-400" checked />
              <input type="radio" name="health-rating" class="mask mask-star-2 bg-green-400" />
            </div>
            <p class="text-xs opacity-70 mt-2">4.0 out of 5 - Good</p>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Quick Actions</h2>
            <div class="space-y-2">
              <button class="btn btn-sm btn-success w-full">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                Acknowledge All
              </button>
              <button class="btn btn-sm btn-warning w-full">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"/>
                </svg>
                Clear Resolved
              </button>
              <button class="btn btn-sm btn-info w-full">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"/>
                </svg>
                Export Logs
              </button>
              <button class="btn btn-sm btn-outline w-full">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"/>
                </svg>
                Refresh
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Fault List -->
      <div class="card bg-base-200 shadow-xl lg:col-span-2">
        <div class="card-body">
          <div class="flex items-center justify-between mb-4">
            <h2 class="card-title">Fault Log</h2>
            <div class="flex gap-2">
              <input class="input input-bordered input-sm" placeholder="Search faults..." />
              <button class="btn btn-sm btn-outline">Search</button>
            </div>
          </div>

          <!-- Active Alerts -->
          <div class="space-y-2 mb-4">
            <div class="alert alert-error">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"/>
              </svg>
              <div class="flex-1">
                <h3 class="font-bold">CRITICAL: Device B Communication Lost</h3>
                <div class="text-xs">Time: 12:10:23 | Source: Device B | ID: FAULT-2024-001</div>
              </div>
              <div class="flex gap-2">
                <button class="btn btn-xs btn-success">Acknowledge</button>
                <button class="btn btn-xs btn-outline">Details</button>
              </div>
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="table table-zebra table-hover">
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" class="checkbox checkbox-sm" />
                    </label>
                  </th>
                  <th>Time</th>
                  <th>Severity</th>
                  <th>Source</th>
                  <th>Message</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" class="checkbox checkbox-sm" />
                    </label>
                  </th>
                  <td>
                    <div class="flex flex-col">
                      <span class="font-bold">12:10:23</span>
                      <span class="text-xs opacity-70">2024-01-15</span>
                    </div>
                  </td>
                  <td>
                    <span class="badge badge-error gap-2">
                      <span class="relative flex h-2 w-2">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-error"></span>
                      </span>
                      Critical
                    </span>
                  </td>
                  <td>
                    <div class="flex items-center gap-2">
                      <div class="avatar placeholder">
                        <div class="bg-error text-error-content rounded-full w-6">
                          <span class="text-xs">B</span>
                        </div>
                      </div>
                      <span class="font-bold">Device B</span>
                    </div>
                  </td>
                  <td>
                    <div class="flex flex-col">
                      <span class="font-medium">Communication lost. No response for 30 seconds.</span>
                      <span class="text-xs opacity-70">Fault ID: FAULT-2024-001</span>
                    </div>
                  </td>
                  <td>
                    <span class="badge badge-warning">Active</span>
                  </td>
                  <td>
                    <div class="flex gap-1">
                      <button class="btn btn-xs btn-success">Ack</button>
                      <button class="btn btn-xs btn-info">View</button>
                      <button class="btn btn-xs btn-error">Clear</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" class="checkbox checkbox-sm" />
                    </label>
                  </th>
                  <td>
                    <div class="flex flex-col">
                      <span class="font-bold">12:05:15</span>
                      <span class="text-xs opacity-70">2024-01-15</span>
                    </div>
                  </td>
                  <td>
                    <span class="badge badge-warning">Warning</span>
                  </td>
                  <td>
                    <div class="flex items-center gap-2">
                      <div class="avatar placeholder">
                        <div class="bg-warning text-warning-content rounded-full w-6">
                          <span class="text-xs">C</span>
                        </div>
                      </div>
                      <span class="font-bold">Device C</span>
                    </div>
                  </td>
                  <td>
                    <div class="flex flex-col">
                      <span class="font-medium">High temperature detected. Approaching limit.</span>
                      <span class="text-xs opacity-70">Fault ID: FAULT-2024-002</span>
                    </div>
                  </td>
                  <td>
                    <span class="badge badge-success">Acknowledged</span>
                  </td>
                  <td>
                    <div class="flex gap-1">
                      <button class="btn btn-xs btn-info">View</button>
                      <button class="btn btn-xs btn-error">Clear</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" class="checkbox checkbox-sm" />
                    </label>
                  </th>
                  <td>
                    <div class="flex flex-col">
                      <span class="font-bold">12:03:42</span>
                      <span class="text-xs opacity-70">2024-01-15</span>
                    </div>
                  </td>
                  <td>
                    <span class="badge badge-warning">Warning</span>
                  </td>
                  <td>
                    <div class="flex items-center gap-2">
                      <div class="avatar placeholder">
                        <div class="bg-warning text-warning-content rounded-full w-6">
                          <span class="text-xs">A</span>
                        </div>
                      </div>
                      <span class="font-bold">Device A</span>
                    </div>
                  </td>
                  <td>
                    <div class="flex flex-col">
                      <span class="font-medium">Pressure reading outside normal range.</span>
                      <span class="text-xs opacity-70">Fault ID: FAULT-2024-003</span>
                    </div>
                  </td>
                  <td>
                    <span class="badge badge-warning">Active</span>
                  </td>
                  <td>
                    <div class="flex gap-1">
                      <button class="btn btn-xs btn-success">Ack</button>
                      <button class="btn btn-xs btn-info">View</button>
                      <button class="btn btn-xs btn-error">Clear</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" class="checkbox checkbox-sm" />
                    </label>
                  </th>
                  <td>
                    <div class="flex flex-col">
                      <span class="font-bold">12:00:00</span>
                      <span class="text-xs opacity-70">2024-01-15</span>
                    </div>
                  </td>
                  <td>
                    <span class="badge badge-info">Info</span>
                  </td>
                  <td>
                    <div class="flex items-center gap-2">
                      <div class="avatar placeholder">
                        <div class="bg-info text-info-content rounded-full w-6">
                          <span class="text-xs">S</span>
                        </div>
                      </div>
                      <span class="font-bold">System</span>
                    </div>
                  </td>
                  <td>
                    <div class="flex flex-col">
                      <span class="font-medium">System startup complete. All modules initialized.</span>
                      <span class="text-xs opacity-70">Fault ID: INFO-2024-001</span>
                    </div>
                  </td>
                  <td>
                    <span class="badge badge-success">Resolved</span>
                  </td>
                  <td>
                    <div class="flex gap-1">
                      <button class="btn btn-xs btn-info">View</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" class="checkbox checkbox-sm" />
                    </label>
                  </th>
                  <td>
                    <div class="flex flex-col">
                      <span class="font-bold">11:58:12</span>
                      <span class="text-xs opacity-70">2024-01-15</span>
                    </div>
                  </td>
                  <td>
                    <span class="badge badge-info">Info</span>
                  </td>
                  <td>
                    <div class="flex items-center gap-2">
                      <div class="avatar placeholder">
                        <div class="bg-info text-info-content rounded-full w-6">
                          <span class="text-xs">S</span>
                        </div>
                      </div>
                      <span class="font-bold">System</span>
                    </div>
                  </td>
                  <td>
                    <div class="flex flex-col">
                      <span class="font-medium">Configuration updated successfully.</span>
                      <span class="text-xs opacity-70">Fault ID: INFO-2024-002</span>
                    </div>
                  </td>
                  <td>
                    <span class="badge badge-success">Resolved</span>
                  </td>
                  <td>
                    <div class="flex gap-1">
                      <button class="btn btn-xs btn-info">View</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Pagination -->
          <div class="flex justify-center mt-4">
            <div class="join">
              <button class="join-item btn btn-sm">«</button>
              <button class="join-item btn btn-sm btn-active">1</button>
              <button class="join-item btn btn-sm">2</button>
              <button class="join-item btn btn-sm">3</button>
              <button class="join-item btn btn-sm">4</button>
              <button class="join-item btn btn-sm">»</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderTasksTemplate1() {
  return `
    <!-- Tasks Template 1 – Enhanced Worksheet & Task Management -->
    
    <!-- Top Stats -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">Total Tasks</div>
        <div class="stat-value text-2xl text-primary">12</div>
        <div class="stat-desc">3 completed, 9 pending</div>
      </div>
      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">Progress</div>
        <div class="stat-value text-2xl text-success">25%</div>
        <div class="stat-desc">3 of 12 completed</div>
      </div>
      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">Active Worksheets</div>
        <div class="stat-value text-2xl text-info">2</div>
        <div class="stat-desc">In progress</div>
      </div>
      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">Completion Rate</div>
        <div class="stat-value text-2xl text-warning">87%</div>
        <div class="stat-desc">Last 30 days</div>
      </div>
    </div>

    <section class="grid gap-4 lg:grid-cols-3">
      <!-- Left: Task List -->
      <div class="lg:col-span-2 space-y-4">
        
        <!-- Worksheet Selection -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <div class="flex items-center justify-between mb-4">
              <h2 class="card-title">Active Worksheets</h2>
              <div class="flex gap-2">
                <select class="select select-bordered select-sm">
                  <option selected>Basic Procedure</option>
                  <option>Advanced Test</option>
                  <option>Maintenance Checklist</option>
                  <option>Calibration Procedure</option>
                </select>
                <button class="btn btn-sm btn-primary">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"/>
                  </svg>
                  New
                </button>
              </div>
            </div>

            <!-- Overall Progress -->
            <div class="mb-4">
              <div class="flex justify-between text-sm mb-1">
                <span class="font-bold">Overall Progress</span>
                <span>25% (3/12)</span>
              </div>
              <progress class="progress progress-primary w-full" value="25" max="100"></progress>
            </div>

            <!-- Task List with Enhanced Components -->
            <div class="space-y-3">
              <!-- Task 1 - Completed -->
              <div class="card bg-base-100 shadow">
                <div class="card-body p-4">
                  <div class="flex items-start gap-3">
                    <input type="checkbox" class="checkbox checkbox-primary checkbox-lg mt-1" checked />
                    <div class="flex-1">
                      <div class="flex items-center justify-between mb-1">
                        <h3 class="font-bold text-sm">Step 1 – Power on system</h3>
                        <span class="badge badge-success gap-2">
                          <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                          </svg>
                          Completed
                        </span>
                      </div>
                      <p class="text-xs opacity-70 mb-2">Verify all indicators are in a safe state before proceeding.</p>
                      <div class="flex items-center gap-2">
                        <span class="text-xs opacity-60">Completed: 12:00:15</span>
                        <div class="rating rating-xs">
                          <input type="radio" name="task1-rating" class="mask mask-star-2 bg-green-400" />
                          <input type="radio" name="task1-rating" class="mask mask-star-2 bg-green-400" />
                          <input type="radio" name="task1-rating" class="mask mask-star-2 bg-green-400" />
                          <input type="radio" name="task1-rating" class="mask mask-star-2 bg-green-400" checked />
                          <input type="radio" name="task1-rating" class="mask mask-star-2 bg-green-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Task 2 - Completed -->
              <div class="card bg-base-100 shadow">
                <div class="card-body p-4">
                  <div class="flex items-start gap-3">
                    <input type="checkbox" class="checkbox checkbox-primary checkbox-lg mt-1" checked />
                    <div class="flex-1">
                      <div class="flex items-center justify-between mb-1">
                        <h3 class="font-bold text-sm">Step 2 – Connect device</h3>
                        <span class="badge badge-success gap-2">
                          <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                          </svg>
                          Completed
                        </span>
                      </div>
                      <p class="text-xs opacity-70 mb-2">Check that the device appears in the Devices table with correct status.</p>
                      <div class="flex items-center gap-2">
                        <span class="text-xs opacity-60">Completed: 12:05:32</span>
                        <div class="rating rating-xs">
                          <input type="radio" name="task2-rating" class="mask mask-star-2 bg-green-400" />
                          <input type="radio" name="task2-rating" class="mask mask-star-2 bg-green-400" />
                          <input type="radio" name="task2-rating" class="mask mask-star-2 bg-green-400" />
                          <input type="radio" name="task2-rating" class="mask mask-star-2 bg-green-400" />
                          <input type="radio" name="task2-rating" class="mask mask-star-2 bg-green-400" checked />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Task 3 - Completed -->
              <div class="card bg-base-100 shadow">
                <div class="card-body p-4">
                  <div class="flex items-start gap-3">
                    <input type="checkbox" class="checkbox checkbox-primary checkbox-lg mt-1" checked />
                    <div class="flex-1">
                      <div class="flex items-center justify-between mb-1">
                        <h3 class="font-bold text-sm">Step 3 – Run test</h3>
                        <span class="badge badge-success gap-2">
                          <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                          </svg>
                          Completed
                        </span>
                      </div>
                      <p class="text-xs opacity-70 mb-2">Record results in the fields to the right. Verify all readings are within acceptable range.</p>
                      <div class="flex items-center gap-2">
                        <span class="text-xs opacity-60">Completed: 12:10:48</span>
                        <div class="rating rating-xs">
                          <input type="radio" name="task3-rating" class="mask mask-star-2 bg-green-400" />
                          <input type="radio" name="task3-rating" class="mask mask-star-2 bg-green-400" />
                          <input type="radio" name="task3-rating" class="mask mask-star-2 bg-green-400" checked />
                          <input type="radio" name="task3-rating" class="mask mask-star-2 bg-green-400" />
                          <input type="radio" name="task3-rating" class="mask mask-star-2 bg-green-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Task 4 - Active -->
              <div class="card bg-gradient-to-br from-base-100 to-primary/10 shadow-lg border-2 border-primary">
                <div class="card-body p-4">
                  <div class="flex items-start gap-3">
                    <input type="checkbox" class="checkbox checkbox-primary checkbox-lg mt-1" />
                    <div class="flex-1">
                      <div class="flex items-center justify-between mb-1">
                        <h3 class="font-bold text-sm">Step 4 – Verify readings</h3>
                        <span class="badge badge-primary gap-2">
                          <span class="relative flex h-2 w-2">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                          </span>
                          Active
                        </span>
                      </div>
                      <p class="text-xs opacity-70 mb-2">Compare measured values with expected values. Document any discrepancies.</p>
                      <div class="flex items-center gap-2 mt-2">
                        <span class="text-xs opacity-60">Started: 12:12:00</span>
                        <div class="badge badge-warning">In Progress</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Task 5 - Pending -->
              <div class="card bg-base-100 shadow">
                <div class="card-body p-4">
                  <div class="flex items-start gap-3">
                    <input type="checkbox" class="checkbox checkbox-lg mt-1" />
                    <div class="flex-1">
                      <div class="flex items-center justify-between mb-1">
                        <h3 class="font-bold text-sm">Step 5 – Calibration check</h3>
                        <span class="badge badge-ghost">Pending</span>
                      </div>
                      <p class="text-xs opacity-70 mb-2">Perform calibration verification using standard reference values.</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Task 6 - Pending -->
              <div class="card bg-base-100 shadow">
                <div class="card-body p-4">
                  <div class="flex items-start gap-3">
                    <input type="checkbox" class="checkbox checkbox-lg mt-1" />
                    <div class="flex-1">
                      <div class="flex items-center justify-between mb-1">
                        <h3 class="font-bold text-sm">Step 6 – Safety inspection</h3>
                        <span class="badge badge-ghost">Pending</span>
                      </div>
                      <p class="text-xs opacity-70 mb-2">Verify all safety interlocks and emergency stops are functional.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Task Actions -->
            <div class="divider"></div>
            <div class="flex gap-2">
              <button class="btn btn-sm btn-success">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                Mark All Complete
              </button>
              <button class="btn btn-sm btn-outline">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"/>
                </svg>
                Reset
              </button>
              <button class="btn btn-sm btn-outline">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"/>
                </svg>
                Export
              </button>
            </div>
          </div>
        </div>

        <!-- Task Timeline -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Task Timeline</h2>
            <ul class="timeline timeline-vertical timeline-compact">
              <li>
                <div class="timeline-middle">
                  <div class="badge badge-success"></div>
                </div>
                <div class="timeline-end timeline-box">Step 1 completed</div>
                <div class="timeline-start text-xs opacity-60">12:00:15</div>
              </li>
              <li>
                <hr/>
                <div class="timeline-middle">
                  <div class="badge badge-success"></div>
                </div>
                <div class="timeline-end timeline-box">Step 2 completed</div>
                <div class="timeline-start text-xs opacity-60">12:05:32</div>
              </li>
              <li>
                <hr/>
                <div class="timeline-middle">
                  <div class="badge badge-success"></div>
                </div>
                <div class="timeline-end timeline-box">Step 3 completed</div>
                <div class="timeline-start text-xs opacity-60">12:10:48</div>
              </li>
              <li>
                <hr/>
                <div class="timeline-middle">
                  <div class="badge badge-primary"></div>
                </div>
                <div class="timeline-end timeline-box">Step 4 in progress</div>
                <div class="timeline-start text-xs opacity-60">12:12:00</div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Right: Results & Data Entry -->
      <div class="space-y-4">
        
        <!-- Results Entry -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Test Results</h2>
            <div class="space-y-3">
              <div class="form-control">
                <label class="label">
                  <span class="label-text font-bold">Voltage (V)</span>
                  <span class="label-text-alt badge badge-lg badge-primary">24.5</span>
                </label>
                <input type="number" class="input input-bordered" placeholder="0.0" value="24.5" step="0.1" />
                <div class="flex items-center gap-2 mt-1">
                  <input type="range" min="0" max="50" value="24" class="range range-primary range-sm flex-1" step="0.1" />
                  <span class="text-xs opacity-70">0-50V</span>
                </div>
              </div>

              <div class="form-control">
                <label class="label">
                  <span class="label-text font-bold">Current (A)</span>
                  <span class="label-text-alt badge badge-lg badge-secondary">2.3</span>
                </label>
                <input type="number" class="input input-bordered" placeholder="0.0" value="2.3" step="0.1" />
                <div class="flex items-center gap-2 mt-1">
                  <input type="range" min="0" max="10" value="2" class="range range-secondary range-sm flex-1" step="0.1" />
                  <span class="text-xs opacity-70">0-10A</span>
                </div>
              </div>

              <div class="form-control">
                <label class="label">
                  <span class="label-text font-bold">Power (W)</span>
                  <span class="label-text-alt badge badge-lg badge-accent">56.4</span>
                </label>
                <input type="number" class="input input-bordered" placeholder="0.0" value="56.4" step="0.1" />
              </div>

              <div class="form-control">
                <label class="label">
                  <span class="label-text font-bold">Temperature (°C)</span>
                  <span class="label-text-alt badge badge-lg badge-warning">23.5</span>
                </label>
                <input type="number" class="input input-bordered" placeholder="0.0" value="23.5" step="0.1" />
              </div>

              <div class="form-control">
                <label class="label">
                  <span class="label-text font-bold">Test Status</span>
                </label>
                <select class="select select-bordered">
                  <option>Pass</option>
                  <option>Fail</option>
                  <option>Warning</option>
                  <option>Pending Review</option>
                </select>
              </div>

              <div class="form-control">
                <label class="label">
                  <span class="label-text font-bold">Comments & Notes</span>
                </label>
                <textarea class="textarea textarea-bordered" rows="4" placeholder="Enter detailed notes about the test results, observations, and any issues encountered...">All readings within acceptable range. System operating normally.</textarea>
              </div>

              <div class="form-control">
                <label class="label">
                  <span class="label-text font-bold">Quality Rating</span>
                </label>
                <div class="rating rating-lg">
                  <input type="radio" name="quality-rating" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="quality-rating" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="quality-rating" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="quality-rating" class="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="quality-rating" class="mask mask-star-2 bg-orange-400" />
                </div>
                <p class="text-xs opacity-70 mt-1">4.0 out of 5 - Good</p>
              </div>

              <div class="card-actions justify-end mt-4">
                <button class="btn btn-outline btn-sm">Cancel</button>
                <button class="btn btn-primary btn-sm">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"/>
                  </svg>
                  Save Worksheet
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Worksheet Stats -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Worksheet Statistics</h2>
            <div class="stats stats-vertical shadow bg-base-100">
              <div class="stat py-2">
                <div class="stat-title text-xs">Completed</div>
                <div class="stat-value text-lg text-success">3</div>
                <div class="stat-desc text-xs">25%</div>
              </div>
              <div class="stat py-2">
                <div class="stat-title text-xs">In Progress</div>
                <div class="stat-value text-lg text-primary">1</div>
                <div class="stat-desc text-xs">8%</div>
              </div>
              <div class="stat py-2">
                <div class="stat-title text-xs">Pending</div>
                <div class="stat-value text-lg text-warning">8</div>
                <div class="stat-desc text-xs">67%</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Progress Indicators -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Progress Metrics</h2>
            <div class="space-y-3">
              <div>
                <div class="flex justify-between text-xs mb-1">
                  <span>Overall Progress</span>
                  <span>25%</span>
                </div>
                <progress class="progress progress-primary w-full" value="25" max="100"></progress>
              </div>
              <div>
                <div class="flex justify-between text-xs mb-1">
                  <span>Data Quality</span>
                  <span>95%</span>
                </div>
                <progress class="progress progress-success w-full" value="95" max="100"></progress>
              </div>
              <div>
                <div class="flex justify-between text-xs mb-1">
                  <span>Time Efficiency</span>
                  <span>78%</span>
                </div>
                <progress class="progress progress-info w-full" value="78" max="100"></progress>
              </div>
            </div>
          </div>
        </div>

        <!-- Alerts -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Worksheet Alerts</h2>
            <div class="space-y-2">
              <div class="alert alert-info">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"/>
                </svg>
                <span class="text-xs">Step 4 is currently in progress</span>
              </div>
              <div class="alert alert-success">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span class="text-xs">All completed steps passed quality check</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Quick Actions</h2>
            <div class="space-y-2">
              <button class="btn btn-sm btn-outline w-full justify-start">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"/>
                </svg>
                Save Progress
              </button>
              <button class="btn btn-sm btn-outline w-full justify-start">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"/>
                </svg>
                Export Results
              </button>
              <button class="btn btn-sm btn-outline w-full justify-start">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"/>
                </svg>
                Print Worksheet
              </button>
            </div>
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
    <!-- Component Gallery - broad DaisyUI component coverage -->
    <section class="space-y-4">
      <div class="card bg-base-200 shadow">
        <div class="card-body">
          <h2 class="card-title">DaisyUI Component Index</h2>
          <p class="text-sm">
            This gallery includes examples for all component names shown on DaisyUI components docs.
            Some V5 names are aliases of older V4 classes (for example: Accordion/Collapse, Dock/btm-nav, Pagination/Join).
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="badge badge-outline">Accordion</span>
            <span class="badge badge-outline">Alert</span>
            <span class="badge badge-outline">Artboard</span>
            <span class="badge badge-outline">Avatar</span>
            <span class="badge badge-outline">Badge</span>
            <span class="badge badge-outline">Breadcrumbs</span>
            <span class="badge badge-outline">Button</span>
            <span class="badge badge-outline">Button Group</span>
            <span class="badge badge-outline">Calendar</span>
            <span class="badge badge-outline">Card</span>
            <span class="badge badge-outline">Carousel</span>
            <span class="badge badge-outline">Chat</span>
            <span class="badge badge-outline">Checkbox</span>
            <span class="badge badge-outline">Collapse</span>
            <span class="badge badge-outline">Countdown</span>
            <span class="badge badge-outline">Diff</span>
            <span class="badge badge-outline">Divider</span>
            <span class="badge badge-outline">Dock</span>
            <span class="badge badge-outline">Drawer</span>
            <span class="badge badge-outline">Dropdown</span>
            <span class="badge badge-outline">File Input</span>
            <span class="badge badge-outline">Filter</span>
            <span class="badge badge-outline">Footer</span>
            <span class="badge badge-outline">Hero</span>
            <span class="badge badge-outline">Indicator</span>
            <span class="badge badge-outline">Input</span>
            <span class="badge badge-outline">Join</span>
            <span class="badge badge-outline">Kbd</span>
            <span class="badge badge-outline">Label</span>
            <span class="badge badge-outline">Link</span>
            <span class="badge badge-outline">List</span>
            <span class="badge badge-outline">Loading</span>
            <span class="badge badge-outline">Mask</span>
            <span class="badge badge-outline">Menu</span>
            <span class="badge badge-outline">Mockup Browser</span>
            <span class="badge badge-outline">Mockup Code</span>
            <span class="badge badge-outline">Mockup Phone</span>
            <span class="badge badge-outline">Mockup Window</span>
            <span class="badge badge-outline">Modal</span>
            <span class="badge badge-outline">Navbar</span>
            <span class="badge badge-outline">Pagination</span>
            <span class="badge badge-outline">Progress</span>
            <span class="badge badge-outline">Radio</span>
            <span class="badge badge-outline">Radial Progress</span>
            <span class="badge badge-outline">Range</span>
            <span class="badge badge-outline">Rating</span>
            <span class="badge badge-outline">Select</span>
            <span class="badge badge-outline">Skeleton</span>
            <span class="badge badge-outline">Stack</span>
            <span class="badge badge-outline">Stat</span>
            <span class="badge badge-outline">Status</span>
            <span class="badge badge-outline">Steps</span>
            <span class="badge badge-outline">Swap</span>
            <span class="badge badge-outline">Tab</span>
            <span class="badge badge-outline">Table</span>
            <span class="badge badge-outline">Textarea</span>
            <span class="badge badge-outline">Theme Controller</span>
            <span class="badge badge-outline">Timeline</span>
            <span class="badge badge-outline">Toast</span>
            <span class="badge badge-outline">Toggle</span>
            <span class="badge badge-outline">Tooltip</span>
            <span class="badge badge-outline">Validator</span>
          </div>
        </div>
      </div>

      <div class="card bg-base-200 shadow">
        <div class="card-body gap-4">
          <h2 class="card-title">Navigation and Layout</h2>

          <div class="navbar bg-base-100 rounded-box">
            <div class="flex-1">
              <a class="btn btn-ghost text-lg">Navbar</a>
            </div>
            <div class="flex-none">
              <ul class="menu menu-horizontal px-1">
                <li><a>Overview</a></li>
                <li><a>Reports</a></li>
                <li><a>Settings</a></li>
              </ul>
            </div>
          </div>

          <div class="breadcrumbs text-sm">
            <ul>
              <li><a>Home</a></li>
              <li><a>Components</a></li>
              <li>Gallery</li>
            </ul>
          </div>

          <div class="tabs tabs-boxed bg-base-100 w-fit">
            <a class="tab tab-active">Tab</a>
            <a class="tab">Tab</a>
            <a class="tab">Tab</a>
          </div>

          <ul class="steps w-full">
            <li class="step step-primary">Start</li>
            <li class="step step-primary">Configure</li>
            <li class="step">Validate</li>
            <li class="step">Deploy</li>
          </ul>

          <div class="drawer lg:drawer-open border border-base-300 rounded-box">
            <input id="gallery-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content p-3">
              <label for="gallery-drawer" class="btn btn-sm drawer-button lg:hidden">Open drawer</label>
              <p class="text-sm">Drawer content area</p>
            </div>
            <div class="drawer-side">
              <label for="gallery-drawer" class="drawer-overlay"></label>
              <ul class="menu p-4 w-52 min-h-full bg-base-100">
                <li><a class="active">Menu</a></li>
                <li><a>List</a></li>
                <li><a>Links</a></li>
              </ul>
            </div>
          </div>

          <div class="btm-nav relative rounded-box">
            <button class="active"><span class="btm-nav-label">Dock</span></button>
            <button><span class="btm-nav-label">Item</span></button>
            <button><span class="btm-nav-label">Item</span></button>
          </div>

          <div class="hero bg-base-100 rounded-box py-8">
            <div class="hero-content text-center">
              <div class="max-w-md">
                <h3 class="text-2xl font-bold">Hero</h3>
                <p class="py-2 text-sm">Large highlight section for important content.</p>
                <button class="btn btn-primary btn-sm">Action</button>
              </div>
            </div>
          </div>

          <div class="footer bg-base-100 p-4 rounded-box text-sm">
            <aside>
              <p>Footer component sample</p>
            </aside>
            <nav>
              <a class="link link-hover">Docs</a>
              <a class="link link-hover">Status</a>
            </nav>
          </div>
        </div>
      </div>

      <div class="card bg-base-200 shadow">
        <div class="card-body gap-4">
          <h2 class="card-title">Actions and Data Entry</h2>

          <div class="flex flex-wrap gap-2">
            <button class="btn btn-primary">Button</button>
            <button class="btn btn-secondary">Button</button>
            <button class="btn btn-outline">Button</button>
            <button class="btn btn-ghost">Button</button>
            <div class="join">
              <button class="btn join-item">Button Group</button>
              <button class="btn join-item">Button Group</button>
            </div>
          </div>

          <div class="form-control">
            <label class="label"><span class="label-text">Input + Label + Validator</span></label>
            <input class="input input-bordered validator" required placeholder="Type here" minlength="3" />
            <label class="label"><span class="label-text-alt">Minimum 3 characters</span></label>
          </div>

          <div class="grid gap-3 md:grid-cols-2">
            <select class="select select-bordered w-full">
              <option disabled selected>Select component</option>
              <option>Select</option>
              <option>Option</option>
            </select>
            <input type="file" class="file-input file-input-bordered w-full" />
            <textarea class="textarea textarea-bordered" placeholder="Textarea"></textarea>
            <input type="date" class="input input-bordered" />
          </div>

          <div class="grid gap-3 md:grid-cols-2">
            <label class="label cursor-pointer justify-start gap-3">
              <input type="checkbox" class="checkbox" checked />
              <span class="label-text">Checkbox</span>
            </label>
            <label class="label cursor-pointer justify-start gap-3">
              <input type="checkbox" class="toggle toggle-primary" checked />
              <span class="label-text">Toggle</span>
            </label>
            <label class="label cursor-pointer justify-start gap-3">
              <input type="radio" name="gallery-radio" class="radio radio-primary" checked />
              <span class="label-text">Radio</span>
            </label>
            <div class="rating">
              <input type="radio" name="gallery-rating" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="gallery-rating" class="mask mask-star-2 bg-orange-400" checked />
              <input type="radio" name="gallery-rating" class="mask mask-star-2 bg-orange-400" />
            </div>
          </div>

          <div class="space-y-3">
            <input type="range" min="0" max="100" value="40" class="range range-primary" />
            <progress class="progress progress-primary w-full" value="32" max="100"></progress>
            <div class="radial-progress text-primary" style="--value:70;" role="progressbar">70%</div>
          </div>

          <div class="join">
            <button class="btn join-item">Pagination</button>
            <button class="btn join-item btn-active">2</button>
            <button class="btn join-item">3</button>
          </div>

          <div class="w-full max-w-md">
            <div class="calendar border border-base-300 rounded-box p-2 text-xs">
              <p class="font-semibold mb-1">Calendar</p>
              <p>Fallback sample (use date picker/calendar integration as needed).</p>
            </div>
          </div>
        </div>
      </div>

      <div class="card bg-base-200 shadow">
        <div class="card-body gap-4">
          <h2 class="card-title">Feedback and States</h2>

          <div class="alert alert-success"><span>Alert: operation succeeded.</span></div>
          <div class="alert alert-warning"><span>Alert: review required.</span></div>

          <div class="flex items-center gap-2 flex-wrap">
            <span class="badge badge-primary">Badge</span>
            <span class="badge badge-secondary">Badge</span>
            <span class="badge badge-outline">Badge</span>
            <span class="loading loading-spinner loading-md"></span>
            <span class="status status-success"></span><span class="text-sm">Status</span>
          </div>

          <div class="skeleton h-4 w-full"></div>
          <div class="skeleton h-4 w-2/3"></div>

          <div class="tooltip" data-tip="Tooltip text">
            <button class="btn btn-sm">Tooltip</button>
          </div>

          <div class="swap">
            <input type="checkbox" />
            <div class="swap-on badge badge-success">Swap ON</div>
            <div class="swap-off badge">Swap OFF</div>
          </div>

          <div class="toast toast-end static">
            <div class="alert alert-info"><span>Toast</span></div>
          </div>
        </div>
      </div>

      <div class="card bg-base-200 shadow">
        <div class="card-body gap-4">
          <h2 class="card-title">Containers and Display</h2>

          <div class="grid gap-4 md:grid-cols-2">
            <div class="card bg-base-100 shadow">
              <div class="card-body">
                <h3 class="card-title">Card</h3>
                <p class="text-sm">Core content container.</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary btn-sm">Action</button>
                </div>
              </div>
            </div>

            <div class="stats shadow bg-base-100">
              <div class="stat">
                <div class="stat-title">Stat</div>
                <div class="stat-value text-primary">89%</div>
                <div class="stat-desc">Availability</div>
              </div>
            </div>
          </div>

          <div class="indicator">
            <span class="indicator-item badge badge-secondary">New</span>
            <button class="btn">Indicator</button>
          </div>

          <div class="stack">
            <div class="bg-primary text-primary-content grid w-24 h-24 place-content-center rounded-box">1</div>
            <div class="bg-accent text-accent-content grid w-24 h-24 place-content-center rounded-box">2</div>
            <div class="bg-secondary text-secondary-content grid w-24 h-24 place-content-center rounded-box">3</div>
          </div>

          <div class="divider">Divider</div>

          <div class="overflow-x-auto">
            <table class="table table-zebra">
              <thead>
                <tr><th>Table</th><th>Value</th></tr>
              </thead>
              <tbody>
                <tr><td>Row A</td><td>42</td></tr>
                <tr><td>Row B</td><td>17</td></tr>
              </tbody>
            </table>
          </div>

          <div class="list bg-base-100 rounded-box border border-base-300">
            <li class="list-row">List item 1</li>
            <li class="list-row">List item 2</li>
          </div>

          <div class="overflow-x-auto whitespace-nowrap rounded-box border border-base-300 p-2">
            <div class="carousel w-80">
              <div id="c1" class="carousel-item w-full"><div class="w-full h-24 bg-primary/20 flex items-center justify-center">Carousel 1</div></div>
              <div id="c2" class="carousel-item w-full"><div class="w-full h-24 bg-secondary/20 flex items-center justify-center">Carousel 2</div></div>
              <div id="c3" class="carousel-item w-full"><div class="w-full h-24 bg-accent/20 flex items-center justify-center">Carousel 3</div></div>
            </div>
          </div>

          <div class="chat chat-start">
            <div class="chat-bubble">Chat component message</div>
          </div>

          <div class="timeline timeline-vertical">
            <li>
              <div class="timeline-start">Start</div>
              <div class="timeline-middle">-</div>
              <div class="timeline-end timeline-box">Timeline event</div>
            </li>
          </div>

          <div class="mockup-window border bg-base-300">
            <div class="bg-base-200 p-4">Mockup Window</div>
          </div>

          <div class="mockup-browser border border-base-300">
            <div class="mockup-browser-toolbar"><div class="input">https://matrix.local</div></div>
            <div class="p-4 bg-base-200">Mockup Browser</div>
          </div>

          <div class="mockup-code w-full">
            <pre data-prefix="$"><code>npm run dev</code></pre>
            <pre data-prefix=">"><code>ready</code></pre>
          </div>

          <div class="mockup-phone border-primary">
            <div class="camera"></div>
            <div class="display">
              <div class="artboard artboard-demo phone-1">Artboard + Phone</div>
            </div>
          </div>
        </div>
      </div>

      <div class="card bg-base-200 shadow">
        <div class="card-body gap-4">
          <h2 class="card-title">Overlays and Interaction</h2>

          <div class="dropdown">
            <label tabindex="0" class="btn m-1">Dropdown</label>
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>

          <button class="btn btn-sm" onclick="document.getElementById('gallery-modal').showModal()">Open Modal</button>
          <dialog id="gallery-modal" class="modal">
            <div class="modal-box">
              <h3 class="font-bold text-lg">Modal</h3>
              <p class="py-2">DaisyUI modal example.</p>
              <div class="modal-action">
                <form method="dialog"><button class="btn">Close</button></form>
              </div>
            </div>
          </dialog>

          <div class="collapse collapse-arrow bg-base-100">
            <input type="checkbox" />
            <div class="collapse-title font-medium">Accordion / Collapse</div>
            <div class="collapse-content"><p class="text-sm">Expandable content</p></div>
          </div>

          <div class="diff aspect-[16/9] max-w-sm">
            <div class="diff-item-1">
              <div class="bg-primary/30 grid place-content-center h-full">Before</div>
            </div>
            <div class="diff-item-2">
              <div class="bg-success/30 grid place-content-center h-full">After</div>
            </div>
            <div class="diff-resizer"></div>
          </div>
        </div>
      </div>

      <div class="card bg-base-200 shadow">
        <div class="card-body gap-4">
          <h2 class="card-title">Typography and Utility Components</h2>
          <p class="text-sm">
            Press <kbd class="kbd kbd-sm">Ctrl</kbd> + <kbd class="kbd kbd-sm">K</kbd> to open search.
            <a class="link link-primary ml-2">Link</a>
          </p>
          <div class="flex flex-wrap gap-2">
            <div class="avatar">
              <div class="w-12 rounded-full">
                <img alt="Avatar" src="https://picsum.photos/80" />
              </div>
            </div>
            <div class="mask mask-hexagon bg-primary text-primary-content w-12 h-12 grid place-content-center">M</div>
            <div class="glass rounded-box p-3 text-sm">Glass</div>
            <div class="countdown font-mono text-2xl">
              <span style="--value:1;"></span>:
              <span style="--value:2;"></span>:
              <span style="--value:3;"></span>
            </div>
            <div class="join">
              <input class="join-item btn" type="radio" name="filter-sample" aria-label="All" checked />
              <input class="join-item btn" type="radio" name="filter-sample" aria-label="Open" />
              <input class="join-item btn" type="radio" name="filter-sample" aria-label="Closed" />
            </div>
            <label class="label cursor-pointer gap-2">
              <span class="label-text">Theme Controller</span>
              <input type="checkbox" value="dark" class="toggle theme-controller" />
            </label>
          </div>
        </div>
      </div>

      <!-- noUiSlider vertical range examples -->
      <div class="card bg-base-200 shadow">
        <div class="card-body">
          <h2 class="card-title">Vertical Sliders (noUiSlider)</h2>
          <p class="text-sm mb-4">Five noUiSlider presets for process setpoint style controls.</p>
          <div class="flex justify-around items-start gap-8 py-4 overflow-x-auto">
            <div class="flex flex-col items-center gap-2 shrink-0">
              <div id="gallery-slider-1" style="height:200px;"></div>
              <div class="badge badge-neutral font-mono text-sm" id="gal1-val">60%</div>
              <div class="text-xs font-mono font-bold text-center mt-1">Minimal</div>
            </div>
            <div class="flex flex-col items-center gap-2 shrink-0">
              <div id="gallery-slider-2" style="height:200px;"></div>
              <div class="badge badge-neutral font-mono text-sm" id="gal2-val">60%</div>
              <div class="text-xs font-mono font-bold text-center mt-1">Fill bar</div>
            </div>
            <div class="flex flex-col items-center gap-2 shrink-0">
              <div id="gallery-slider-3" style="height:200px;"></div>
              <div class="badge badge-neutral font-mono text-sm" id="gal3-val">60%</div>
              <div class="text-xs font-mono font-bold text-center mt-1">Pips + Fill</div>
            </div>
            <div class="flex flex-col items-center gap-2 shrink-0">
              <div id="gallery-slider-4" style="height:200px;"></div>
              <div class="badge badge-neutral font-mono text-sm" id="gal4-val">50%</div>
              <div class="text-xs font-mono font-bold text-center mt-1">Stepped</div>
            </div>
            <div class="flex flex-col items-center gap-2 shrink-0">
              <div id="gallery-slider-5" style="height:200px;"></div>
              <div class="badge badge-neutral font-mono text-sm" id="gal5-val">60%</div>
              <div class="text-xs font-mono font-bold text-center mt-1">Tooltip</div>
            </div>
          </div>
          <div class="text-xs mt-2 font-mono bg-base-300 p-3 rounded">
            Usage: create a target div then call <code>noUiSlider.create(el, config)</code>. See <code>initializeComponentGallerySliders()</code>.
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
    <!-- About / Help Page – Comprehensive Information -->
    
    <!-- Application Information Stats -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
      <div class="stat bg-gradient-to-br from-primary to-primary-focus text-primary-content shadow-lg rounded-lg">
        <div class="stat-title text-primary-content opacity-80">Version</div>
        <div class="stat-value text-2xl">1.2.6</div>
        <div class="stat-desc text-primary-content opacity-70">Current Release</div>
      </div>
      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">Last Updated</div>
        <div class="stat-value text-2xl text-info">16/09/2025</div>
        <div class="stat-desc">Recent update</div>
      </div>
      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">Build</div>
        <div class="stat-value text-2xl text-success">Production</div>
        <div class="stat-desc">Release Build</div>
      </div>
      <div class="stat bg-base-200 shadow-lg rounded-lg">
        <div class="stat-title">Status</div>
        <div class="stat-value text-2xl text-warning">Active</div>
        <div class="stat-desc">In Development</div>
      </div>
    </div>

    <section class="space-y-4">
      
      <!-- Product Information - IM0004 -->
      <div class="card bg-base-200 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">
            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
            </svg>
            Product Information - IM0004
          </h2>
          
          <div class="divider"></div>

          <!-- Product Overview -->
          <div class="collapse collapse-arrow bg-base-100 mt-2">
            <input type="checkbox" checked />
            <div class="collapse-title text-lg font-bold">
              Product Overview
            </div>
            <div class="collapse-content">
              <div class="space-y-3">
                <div class="stats stats-horizontal shadow bg-base-200">
                  <div class="stat">
                    <div class="stat-title">Model</div>
                    <div class="stat-value text-lg text-primary">IM0004</div>
                    <div class="stat-desc">Industrial Maintenance</div>
                  </div>
                  <div class="stat">
                    <div class="stat-title">Product Range</div>
                    <div class="stat-value text-lg text-secondary">Industrial</div>
                    <div class="stat-desc">Maintenance</div>
                  </div>
                  <div class="stat">
                    <div class="stat-title">Power Supply</div>
                    <div class="stat-value text-lg text-accent">24V DC</div>
                    <div class="stat-desc">Safe Operation</div>
                  </div>
                </div>
                <div class="alert alert-info">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"/>
                  </svg>
                  <div>
                    <h3 class="font-bold">Industrial Maintenance Closed Loop PID Control System</h3>
                    <div class="text-xs mt-1">Curriculum Codes: CP0539 & CP6773</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Core Components -->
          <div class="collapse collapse-arrow bg-base-100 mt-2">
            <input type="checkbox" />
            <div class="collapse-title text-lg font-bold">
              Core Components
            </div>
            <div class="collapse-content">
              <div class="grid gap-2 md:grid-cols-2">
                <div class="flex items-center gap-2">
                  <span class="badge badge-primary">PLC</span>
                  <span class="text-sm">Siemens S7-1200 PLC</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="badge badge-secondary">HMI</span>
                  <span class="text-sm">Unified Basic HMI</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="badge badge-accent">Sensor</span>
                  <span class="text-sm">Turbine Flow Sensor</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="badge badge-warning">Valve</span>
                  <span class="text-sm">Proportional Control Valve</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="badge badge-info">Sensor</span>
                  <span class="text-sm">IFM Temperature Sensor</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="badge badge-success">Switch</span>
                  <span class="text-sm">Float Switches</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="badge badge-error">Sensor</span>
                  <span class="text-sm">Proximity Sensor</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="badge badge-primary">Pump</span>
                  <span class="text-sm">Immersion Pump</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Educational Focus -->
          <div class="collapse collapse-arrow bg-base-100 mt-2">
            <input type="checkbox" />
            <div class="collapse-title text-lg font-bold">
              Educational Focus
            </div>
            <div class="collapse-content">
              <div class="alert alert-success">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
                <div>
                  <h3 class="font-bold">Designed for Engineering Education</h3>
                  <div class="text-sm mt-1">
                    <p>Target Audience: 16-18 year old engineering students and apprentices in further education</p>
                    <p class="mt-2">Aligned with UK T-Level & BTEC qualifications in:</p>
                    <ul class="list-disc list-inside mt-1">
                      <li>Maintenance</li>
                      <li>Installation & Repair</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Hands-on Training -->
          <div class="collapse collapse-arrow bg-base-100 mt-2">
            <input type="checkbox" />
            <div class="collapse-title text-lg font-bold">
              Hands-on Training
            </div>
            <div class="collapse-content">
              <div class="stat bg-base-200 rounded-box shadow">
                <div class="stat-title">Guided Worksheets</div>
                <div class="stat-value text-3xl text-primary">13+</div>
                <div class="stat-desc">Comprehensive training materials</div>
              </div>
              <div class="mt-3 space-y-2">
                <div class="flex items-center gap-2">
                  <span class="badge badge-primary">Theory</span>
                  <span class="text-sm">Closed-loop control theory</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="badge badge-secondary">Diagnostics</span>
                  <span class="text-sm">Component diagnostics</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="badge badge-accent">Faults</span>
                  <span class="text-sm">Fault scenarios</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="badge badge-warning">Troubleshooting</span>
                  <span class="text-sm">Real-world troubleshooting simulations</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Fault Simulation -->
          <div class="collapse collapse-arrow bg-base-100 mt-2">
            <input type="checkbox" />
            <div class="collapse-title text-lg font-bold">
              Fault Simulation
            </div>
            <div class="collapse-content">
              <div class="grid gap-2">
                <div class="alert alert-warning">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"/>
                  </svg>
                  <div>
                    <h3 class="font-bold">Built-in Fault Simulation</h3>
                    <p class="text-sm">Software-based faults and hardware fault simulation via removable wiring</p>
                  </div>
                </div>
                <div class="space-y-2">
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="checkbox checkbox-error checkbox-sm" checked disabled />
                    <span class="text-sm">Emergency stops</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="checkbox checkbox-warning checkbox-sm" checked disabled />
                    <span class="text-sm">PID setpoint issues</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="checkbox checkbox-info checkbox-sm" checked disabled />
                    <span class="text-sm">Temperature errors</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="checkbox checkbox-accent checkbox-sm" checked disabled />
                    <span class="text-sm">Safety interlocks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Safety & Standards -->
          <div class="collapse collapse-arrow bg-base-100 mt-2">
            <input type="checkbox" />
            <div class="collapse-title text-lg font-bold">
              Safety & Standards
            </div>
            <div class="collapse-content">
              <div class="space-y-3">
                <div class="flex items-center gap-2">
                  <span class="badge badge-success badge-lg">CE/UL</span>
                  <span class="text-sm font-bold">Compliant Components</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="badge badge-primary badge-lg">24V DC</span>
                  <span class="text-sm font-bold">Safe Operation Voltage</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="badge badge-info badge-lg">Standards</span>
                  <span class="text-sm font-bold">Educational Equipment Compliance</span>
                </div>
                <div class="alert alert-success">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                  <span class="text-sm">Comprehensive safety measures implemented throughout the system</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Technical Specifications -->
      <div class="card bg-base-200 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">
            <svg class="w-6 h-6 text-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            Technical Specifications
          </h2>

          <div class="divider"></div>

          <!-- Physical Dimensions -->
          <div class="collapse collapse-arrow bg-base-100 mt-2">
            <input type="checkbox" checked />
            <div class="collapse-title text-lg font-bold">
              Physical Dimensions
            </div>
            <div class="collapse-content">
              <div class="stats stats-horizontal shadow bg-base-200">
                <div class="stat">
                  <div class="stat-title">Length</div>
                  <div class="stat-value text-lg text-primary">52cm</div>
                </div>
                <div class="stat">
                  <div class="stat-title">Width</div>
                  <div class="stat-value text-lg text-secondary">43.5cm</div>
                </div>
                <div class="stat">
                  <div class="stat-title">Height</div>
                  <div class="stat-value text-lg text-accent">46.1cm</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Power & Control -->
          <div class="collapse collapse-arrow bg-base-100 mt-2">
            <input type="checkbox" />
            <div class="collapse-title text-lg font-bold">
              Power & Control
            </div>
            <div class="collapse-content">
              <div class="overflow-x-auto">
                <table class="table table-zebra">
                  <thead>
                    <tr>
                      <th>Component</th>
                      <th>Specification</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="font-bold">Power Supply</td>
                      <td>24V DC</td>
                      <td><span class="badge badge-success">Standard</span></td>
                    </tr>
                    <tr>
                      <td class="font-bold">Digital Inputs</td>
                      <td>14 Inputs</td>
                      <td><span class="badge badge-primary">Available</span></td>
                    </tr>
                    <tr>
                      <td class="font-bold">Digital Outputs</td>
                      <td>10 Outputs</td>
                      <td><span class="badge badge-primary">Available</span></td>
                    </tr>
                    <tr>
                      <td class="font-bold">Analog Inputs</td>
                      <td>2 Inputs (0-10V)</td>
                      <td><span class="badge badge-info">Available</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- HMI Interface -->
          <div class="collapse collapse-arrow bg-base-100 mt-2">
            <input type="checkbox" />
            <div class="collapse-title text-lg font-bold">
              HMI Interface
            </div>
            <div class="collapse-content">
              <div class="card bg-base-200 shadow">
                <div class="card-body">
                  <div class="flex items-center justify-between">
                    <div>
                      <h3 class="font-bold">Siemens Unified Basic Panel</h3>
                      <p class="text-sm opacity-70">Model: MTP700</p>
                    </div>
                    <span class="badge badge-lg badge-primary">7" Touchscreen</span>
                  </div>
                  <div class="divider"></div>
                  <div class="space-y-2">
                    <div class="flex items-center gap-2">
                      <span class="badge badge-success">Display</span>
                      <span class="text-sm">7" Capacitive Touchscreen</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="badge badge-info">Features</span>
                      <span class="text-sm">Real-time monitoring & diagnostics</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- System Capacity -->
          <div class="collapse collapse-arrow bg-base-100 mt-2">
            <input type="checkbox" />
            <div class="collapse-title text-lg font-bold">
              System Capacity
            </div>
            <div class="collapse-content">
              <div class="stats stats-horizontal shadow bg-base-200">
                <div class="stat">
                  <div class="stat-title">Tank Capacity</div>
                  <div class="stat-value text-lg text-primary">3.5-4.5L</div>
                  <div class="stat-desc">Litres</div>
                </div>
                <div class="stat">
                  <div class="stat-title">Fluid Type</div>
                  <div class="stat-value text-lg text-info">Water</div>
                  <div class="stat-desc">Clean only</div>
                </div>
                <div class="stat">
                  <div class="stat-title">Operation</div>
                  <div class="stat-value text-lg text-success">Closed-loop</div>
                  <div class="stat-desc">Circuit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- About Matrix TSL -->
      <div class="card bg-base-200 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">
            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
            About Matrix Technology Solutions Ltd
          </h2>

          <div class="divider"></div>

          <div class="alert alert-info">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"/>
            </svg>
            <div>
              <h3 class="font-bold">Global Provider of Engineering Education Solutions</h3>
              <p class="text-sm mt-1">We develop, create and manufacture innovative hardware and software designed to support the teaching of multiple engineering disciplines.</p>
            </div>
          </div>

          <!-- Vision & Mission -->
          <div class="grid gap-4 md:grid-cols-2 mt-4">
            <div class="card bg-gradient-to-br from-primary to-primary-focus text-primary-content shadow-lg">
              <div class="card-body">
                <h3 class="card-title text-primary-content">Our Vision</h3>
                <p class="text-sm text-primary-content opacity-90">
                  Inspiring the next generation of engineers through practical, hands-on learning that transforms classroom theory and prepares young people for the careers of tomorrow.
                </p>
              </div>
            </div>

            <div class="card bg-gradient-to-br from-secondary to-secondary-focus text-secondary-content shadow-lg">
              <div class="card-body">
                <h3 class="card-title text-secondary-content">Our Mission</h3>
                <p class="text-sm text-secondary-content opacity-90">
                  Transform engineering teaching by developing innovative, hands-on solutions that make complex concepts accessible, engaging, and applicable to real-world scenarios with proven results.
                </p>
              </div>
            </div>
          </div>

          <!-- Who We Are -->
          <div class="collapse collapse-arrow bg-base-100 mt-4">
            <input type="checkbox" />
            <div class="collapse-title text-lg font-bold">
              Who Are We?
            </div>
            <div class="collapse-content">
              <p class="text-sm">
                We are committed to empowering educators with the resources and support they need to inspire the next generation of engineers and technicians. Through practical hardware, intuitive software, and comprehensive learning materials, we help bridge the gap between theory and practice — ensuring that learners at every level develop the skills and confidence they need to succeed in modern engineering and technology industries.
              </p>
            </div>
          </div>

          <!-- Our Solutions -->
          <div class="collapse collapse-arrow bg-base-100 mt-2">
            <input type="checkbox" checked />
            <div class="collapse-title text-lg font-bold">
              Our Solutions
            </div>
            <div class="collapse-content">
              <div class="grid gap-2 md:grid-cols-2">
                <div class="flex items-center gap-2">
                  <span class="badge badge-primary badge-lg">Training</span>
                  <span class="text-sm">Hands-on Engineering Education Training</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="badge badge-secondary badge-lg">Development</span>
                  <span class="text-sm">Innovative Hardware and Software Development</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="badge badge-accent badge-lg">Support</span>
                  <span class="text-sm">Multiple Engineering Disciplines Support</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="badge badge-warning badge-lg">Skills</span>
                  <span class="text-sm">Practical Skills Development</span>
                </div>
                <div class="flex items-center gap-2 md:col-span-2">
                  <span class="badge badge-info badge-lg">Industry</span>
                  <span class="text-sm">Industry-Relevant Training Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- About Halifax -->
      <div class="card bg-base-200 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">
            <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            About Halifax
          </h2>

          <div class="divider"></div>

          <div class="alert alert-success">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
            </svg>
            <div>
              <h3 class="font-bold">Historic Market Town in West Yorkshire</h3>
              <p class="text-sm mt-1">Halifax is known for its rich industrial heritage and vibrant community. Located in the heart of Yorkshire, Halifax has been a center of commerce and industry for centuries.</p>
            </div>
          </div>

          <div class="grid gap-4 md:grid-cols-2 mt-4">
            <div class="card bg-base-100 shadow">
              <div class="card-body">
                <h3 class="card-title text-sm">Location & Heritage</h3>
                <p class="text-xs">
                  Halifax is situated in the Calder Valley, surrounded by the beautiful Pennine hills. The town has a proud history of textile manufacturing, engineering, and innovation, making it an ideal location for educational technology companies like Matrix TSL.
                </p>
              </div>
            </div>

            <div class="card bg-base-100 shadow">
              <div class="card-body">
                <h3 class="card-title text-sm">Modern Halifax</h3>
                <p class="text-xs">
                  Today, Halifax continues to be a thriving town with a mix of traditional industries and modern businesses. It serves as an important regional center for education, commerce, and culture in West Yorkshire.
                </p>
              </div>
            </div>
          </div>

          <div class="mt-4">
            <h3 class="font-bold mb-2">Key Features</h3>
            <div class="flex flex-wrap gap-2">
              <span class="badge badge-primary">Historic Market Town</span>
              <span class="badge badge-secondary">Industrial Heritage</span>
              <span class="badge badge-accent">Educational Excellence</span>
              <span class="badge badge-info">Transportation Hub</span>
              <span class="badge badge-success">Cultural Center</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Information -->
      <div class="card bg-base-200 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">
            <svg class="w-6 h-6 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Contact Information
          </h2>

          <div class="divider"></div>

          <div class="grid gap-4 md:grid-cols-2">
            <!-- Contact Details -->
            <div class="space-y-3">
              <div class="stat bg-base-100 rounded-box shadow">
                <div class="stat-title">Website</div>
                <div class="stat-value text-lg">
                  <a href="https://www.matrixtsl.com" class="link link-primary">www.matrixtsl.com</a>
                </div>
              </div>

              <div class="stat bg-base-100 rounded-box shadow">
                <div class="stat-title">Email</div>
                <div class="stat-value text-lg">
                  <a href="mailto:info@matrixtsl.com" class="link link-secondary">info@matrixtsl.com</a>
                </div>
              </div>

              <div class="stat bg-base-100 rounded-box shadow">
                <div class="stat-title">Phone</div>
                <div class="stat-value text-lg text-info">+44 (0) 1422 252380</div>
                <div class="stat-desc">01422 252380</div>
              </div>

              <div class="stat bg-base-100 rounded-box shadow">
                <div class="stat-title">Address</div>
                <div class="stat-value text-sm text-accent">33 Gibbet St</div>
                <div class="stat-desc">Halifax HX1 5BA, England</div>
              </div>

              <div class="stat bg-base-100 rounded-box shadow">
                <div class="stat-title">Location</div>
                <div class="stat-value text-sm text-warning">Halifax</div>
                <div class="stat-desc">West Yorkshire, England</div>
              </div>
            </div>

            <!-- Contact Actions -->
            <div class="space-y-4">
              <div class="card bg-gradient-to-br from-primary to-primary-focus text-primary-content shadow-lg">
                <div class="card-body">
                  <h3 class="card-title text-primary-content">Ready to Get Started?</h3>
                  <p class="text-sm text-primary-content opacity-90">
                    Our sales team is here to help you find the perfect training solution for your needs.
                  </p>
                  <div class="card-actions justify-end mt-4">
                    <button class="btn btn-sm bg-primary-content text-primary">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                      Email Us Now
                    </button>
                  </div>
                </div>
              </div>

              <div class="card bg-base-100 shadow">
                <div class="card-body">
                  <h3 class="card-title text-sm">Quick Contact</h3>
                  <div class="space-y-2">
                    <button class="btn btn-sm btn-primary w-full">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                      Send Email
                    </button>
                    <button class="btn btn-sm btn-secondary w-full">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                      </svg>
                      Call Us
                    </button>
                    <button class="btn btn-sm btn-accent w-full">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/>
                      </svg>
                      Visit Website
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Help & Documentation -->
      <div class="card bg-base-200 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">
            <svg class="w-6 h-6 text-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>
            Help & Documentation
          </h2>
          <div class="divider"></div>
          <ul class="menu bg-base-100 rounded-box">
            <li>
              <a>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"/>
                </svg>
                Architecture overview in <code class="text-xs">docs/MATRIX-UI-Architecture.md</code>
              </a>
            </li>
            <li>
              <a>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"/>
                </svg>
                Theming and design system in <code class="text-xs">docs/MATRIX-UI-Design-and-Theming.md</code>
              </a>
            </li>
            <li>
              <a>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"/>
                </svg>
                Pages & templates todo in <code class="text-xs">docs/Matrix-Template-UI-Pages-Todo.md</code>
              </a>
            </li>
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
  'hmi-dashboard-1': renderHMIDashboard1,
  'hmi-dashboard-2': renderHMIDashboard2,
  'hmi-dashboard-3': renderHMIDashboard3,
  'hmi-dashboard-4': renderHMIDashboard4,
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
      <!-- Left: Menu Toggle + Matrix Logo -->
      <div class="flex-none flex items-center gap-2">
        <button id="sidebar-toggle" class="btn btn-ghost btn-sm btn-square">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <img src="/matrix.png" alt="Matrix Logo" class="h-8 w-auto" />
      </div>
      <!-- Center: Title -->
      <div class="flex-1 flex justify-center">
        <span class="text-xl font-bold">Matrix Template UI</span>
      </div>
      <!-- Right: Theme and Help -->
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
        <button class="btn btn-outline btn-sm" id="admin-button" data-page="admin-1">Admin</button>
      </div>
    </header>

    <!-- Connection Status Bar -->
    <div id="connection-status-bar" class="bg-base-300 border-b-2 border-base-content/10 px-4 py-2 min-h-[40px] flex items-center justify-center shadow-sm">
      <div class="flex items-center gap-2">
        <span class="text-sm font-medium">Connection Status:</span>
        <div id="connection-status" class="flex items-center gap-2">
          <span id="connection-indicator" class="flex h-3 w-3 rounded-full bg-success animate-pulse"></span>
          <span id="connection-text" class="text-sm font-semibold text-success">Connected</span>
        </div>
        <span class="text-xs text-base-content/60 ml-2">•</span>
        <span id="connection-time" class="text-xs text-base-content/60">Last connected: Just now</span>
      </div>
    </div>

    <!-- Body with sidebar + main content -->
    <div class="flex flex-1 bg-base-100 relative">
      <!-- Mobile backdrop overlay -->
      <div id="sidebar-backdrop" class="fixed inset-0 bg-black/50 z-40 hidden transition-opacity duration-300 md:hidden"></div>
      
      <!-- Sidebar -->
      <aside id="sidebar" class="fixed md:static inset-y-0 left-0 z-50 w-72 border-r border-base-300 bg-base-200 transition-all duration-300 ease-in-out transform -translate-x-full md:translate-x-0 md:block flex flex-col overflow-hidden">
        <!-- Close button for mobile -->
        <div class="flex justify-end p-4 md:hidden border-b border-base-300 flex-shrink-0">
          <button id="sidebar-close" class="btn btn-ghost btn-sm btn-square">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <!-- Scrollable menu container -->
        <div class="flex-1 overflow-y-auto overscroll-contain">
          <ul class="menu p-4 gap-1" id="sidebar-menu">
          <li class="menu-title">
            <span class="flex items-center gap-2">
              <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
              HMI Dashboards
            </span>
          </li>
          <li><a href="#" data-page="hmi-dashboard-1">Electrical Machines</a></li>
          <li><a href="#" data-page="hmi-dashboard-2">Wind Tunnel</a></li>
          <li><a href="#" data-page="hmi-dashboard-3">Process Control Temperature</a></li>
          <li><a href="#" data-page="hmi-dashboard-4">Fluid Mechanics</a></li>

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
        </div>
      </aside>

      <!-- Main content -->
      <main id="main-content" class="flex-1 p-4 space-y-4">
        <!-- Content will be inserted here based on selected page -->
      </main>
    </div>

    <!-- Footer -->
    <footer class="footer footer-center p-4 bg-base-200 text-base-content">
      <aside>
        <p>Matrix TSL ${new Date().getFullYear()}</p>
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

    <!-- Admin Password Modal -->
    <dialog id="adminPasswordModal" class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Admin Access</h3>
        <p class="py-2 text-sm">Please enter the password to access the Admin Panel.</p>
        <div class="form-control mt-4">
          <input type="password" id="admin-password-input" class="input input-bordered" placeholder="Enter password" />
          <label class="label" id="admin-password-error" style="display: none;">
            <span class="label-text-alt text-error">Incorrect password. Please try again.</span>
          </label>
        </div>
        <div class="modal-action">
          <form method="dialog" class="flex gap-2">
            <button type="button" class="btn btn-outline btn-sm" id="admin-password-cancel">Cancel</button>
            <button type="button" class="btn btn-primary btn-sm" id="admin-password-submit">Submit</button>
          </form>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
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

  // Update active class in sidebar
  const sidebarMenu = document.getElementById('sidebar-menu');
  if (sidebarMenu) {
    sidebarMenu.querySelectorAll('a[data-page]').forEach((a) => {
      a.classList.toggle('active', a.getAttribute('data-page') === pageKey);
    });
  }

  // Initialize charts if this is an HMI dashboard
  if (pageKey === 'hmi-dashboard-1') {
    initializeHMICharts1();
  } else if (pageKey === 'hmi-dashboard-2') {
    initializeHMICharts2();
  } else if (pageKey === 'hmi-dashboard-3') {
    initializeHMICharts3();
  } else if (pageKey === 'hmi-dashboard-4') {
    initializeHMICharts4();
  } else if (pageKey === 'components') {
    initializeComponentGallerySliders();
  }
}

// ================================================================
// HMI CHART INITIALIZATION
// ================================================================
function initializeHMICharts1() {
  setTimeout(() => {
    // RPM sparkline — small trend, no axes, neutral colour
    const rpmCanvas = document.getElementById('rpmSparkline');
    if (rpmCanvas) {
      const ctx = rpmCanvas.getContext('2d');
      const chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: Array.from({ length: 20 }, (_, i) => i),
          datasets: [{
            data: [1200, 1260, 1320, 1370, 1410, 1440, 1465, 1488, 1500, 1510,
                   1516, 1521, 1525, 1527, 1529, 1530, 1530, 1530, 1530, 1530],
            borderColor: 'rgb(148, 163, 184)',
            backgroundColor: 'rgba(148, 163, 184, 0.1)',
            fill: true,
            tension: 0.4,
            pointRadius: 0,
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { enabled: false } },
          scales: {
            x: { display: false },
            y: { display: false, min: 0, max: 3000 }
          }
        }
      });
      activeCharts.push(chart);
    }
  }, 10);
}

function initializeHMICharts2() {
  setTimeout(() => {
    // Air Speed Chart
    const airSpeedCanvas = document.getElementById('airSpeedChart');
    if (airSpeedCanvas) {
      const airSpeedCtx = airSpeedCanvas.getContext('2d');
      const airSpeedChart = new Chart(airSpeedCtx, {
        type: 'line',
        data: {
          labels: ['00:00', '00:10', '00:20', '00:30', '00:40', '00:50', '01:00'],
          datasets: [
            {
              label: 'Air Speed (m/s)',
              data: [26.5, 27.2, 27.8, 28.2, 28.4, 28.4, 28.4],
              borderColor: 'rgb(59, 130, 246)',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              fill: true,
              tension: 0.4,
              pointRadius: 4,
              pointHoverRadius: 6
            },
            {
              label: 'Setpoint (m/s)',
              data: [28, 28, 28, 28, 28, 28, 28],
              borderColor: 'rgb(251, 146, 60)',
              backgroundColor: 'rgba(251, 146, 60, 0.1)',
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
              beginAtZero: true,
              min: 0,
              max: 35,
              title: {
                display: true,
                text: 'Air Speed (m/s) · 125 mm test section'
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
      activeCharts.push(airSpeedChart);
    }

    // Pressure Distribution Chart
    const pressureCanvas = document.getElementById('pressureChart2');
    if (pressureCanvas) {
      const pressureCtx = pressureCanvas.getContext('2d');
      const pressureChart = new Chart(pressureCtx, {
        type: 'bar',
        data: {
          labels: ['Inlet', 'Test 1', 'Test 2', 'Test 3', 'Diffuser'],
          datasets: [{
            label: 'Static Pressure (kPa)',
            data: [101.3, 100.8, 100.5, 100.2, 100.9],
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
              beginAtZero: false,
              min: 99,
              max: 102,
              title: {
                display: true,
                text: 'Pressure (kPa)'
              }
            }
          }
        }
      });
      activeCharts.push(pressureChart);
    }
  }, 10);
}

function initializeHMICharts3() {
  setTimeout(() => {
    // Step Response Chart
    const stepResponseCanvas = document.getElementById('stepResponseChart');
    if (stepResponseCanvas) {
      const stepResponseCtx = stepResponseCanvas.getContext('2d');
      const stepResponseChart = new Chart(stepResponseCtx, {
        type: 'line',
        data: {
          labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
          datasets: [
            {
              label: 'Process Value (°C)',
              data: [25, 25, 25, 30, 38, 44, 48, 50.5, 51.2, 50.8, 50.2, 50.0, 49.9, 50.0, 50.0, 50.0],
              borderColor: 'rgb(59, 130, 246)',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              fill: true,
              tension: 0.4,
              pointRadius: 3,
              pointHoverRadius: 5
            },
            {
              label: 'Setpoint (°C)',
              data: [25, 25, 25, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
              borderColor: 'rgb(251, 146, 60)',
              backgroundColor: 'rgba(251, 146, 60, 0.1)',
              borderDash: [5, 5],
              fill: false,
              tension: 0,
              pointRadius: 0
            },
            {
              label: 'Control Output (%)',
              data: [50, 50, 50, 80, 75, 70, 65, 62, 60, 61, 62, 62, 62, 62, 62, 62],
              borderColor: 'rgb(34, 197, 94)',
              backgroundColor: 'rgba(34, 197, 94, 0.1)',
              fill: false,
              tension: 0.3,
              pointRadius: 2,
              yAxisID: 'y1'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: {
            mode: 'index',
            intersect: false
          },
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
              type: 'linear',
              display: true,
              position: 'left',
              min: 0,
              max: 60,
              title: {
                display: true,
                text: 'Temperature (°C)'
              }
            },
            y1: {
              type: 'linear',
              display: true,
              position: 'right',
              min: 0,
              max: 100,
              title: {
                display: true,
                text: 'Control Output (%)'
              },
              grid: {
                drawOnChartArea: false
              }
            },
            x: {
              title: {
                display: true,
                text: 'Time (seconds)'
              }
            }
          }
        }
      });
      activeCharts.push(stepResponseChart);
    }
  }, 10);
}

function initializeComponentGallerySliders() {
  const base = {
    orientation: 'vertical',
    direction: 'rtl',
    range: { min: 0, max: 100 },
    format: { to: v => Math.round(v), from: v => parseInt(v) }
  };
  function make(id, config, valId) {
    const el = document.getElementById(id);
    if (!el || el.noUiSlider) return;
    noUiSlider.create(el, config);
    el.noUiSlider.on('update', (v) => {
      const d = document.getElementById(valId);
      if (d) d.textContent = v[0] + '%';
    });
  }
  make('gallery-slider-1', { ...base, start: 60 }, 'gal1-val');
  make('gallery-slider-2', { ...base, start: 60, connect: 'lower' }, 'gal2-val');
  make('gallery-slider-3', { ...base, start: 60, connect: 'lower',
    pips: { mode: 'values', values: [0, 25, 50, 75, 100], density: 5 }
  }, 'gal3-val');
  make('gallery-slider-4', { ...base, start: 50, step: 25, connect: 'lower',
    pips: { mode: 'steps', density: 100 }
  }, 'gal4-val');
  make('gallery-slider-5', { ...base, start: 60, connect: 'lower',
    tooltips: { to: v => Math.round(v) + '%' }
  }, 'gal5-val');
}

function initializeHMICharts4() {
  // Shared noUiSlider config — vertical, 0 at bottom, 100 at top
  const sliderBase = {
    orientation: 'vertical',
    direction: 'rtl',
    range: { min: 0, max: 100 },
    format: { to: v => Math.round(v), from: v => parseInt(v) }
  };

  // Helper — creates a noUiSlider only if not already initialised
  function createSlider(id, config, onUpdate) {
    const el = document.getElementById(id);
    if (!el || el.noUiSlider) return;
    noUiSlider.create(el, config);
    if (onUpdate) el.noUiSlider.on('update', onUpdate);
  }

  // Pump 1 & 2 — using Style 3 (Pips + Fill) until user picks a preference
  createSlider('pump1-slider', { ...sliderBase, start: 60, connect: 'lower',
    pips: { mode: 'values', values: [0, 25, 50, 75, 100], density: 5 }
  }, (v) => { const d = document.getElementById('pump1-val'); if (d) d.textContent = v[0] + '%'; });

  createSlider('pump2-slider', { ...sliderBase, start: 45, connect: 'lower',
    pips: { mode: 'values', values: [0, 25, 50, 75, 100], density: 5 }
  }, (v) => { const d = document.getElementById('pump2-val'); if (d) d.textContent = v[0] + '%'; });

  // Preset button handler
  window.setFluidPump = function(pumpId, value) {
    const el = document.getElementById(pumpId + '-slider');
    if (el && el.noUiSlider) el.noUiSlider.set(value);
  };


  setTimeout(() => {
    // Bernoulli Pressure Profile — measured vs theoretical
    const bernoulliCanvas = document.getElementById('bernoulliChart');
    if (bernoulliCanvas) {
      const ctx = bernoulliCanvas.getContext('2d');
      const chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['P1 Inlet', 'P2 Converge', 'P3 Throat', 'P4 Diverge', 'P5 Outlet'],
          datasets: [
            {
              label: 'Measured (kPa)',
              data: [118.2, 105.4, 76.8, 93.1, 108.6],
              backgroundColor: 'rgba(148, 163, 184, 0.7)',
              borderColor: 'rgb(148, 163, 184)',
              borderWidth: 2
            },
            {
              label: 'Theoretical (kPa)',
              data: [118.2, 104.8, 75.2, 91.8, 107.4],
              backgroundColor: 'rgba(251, 146, 60, 0.15)',
              borderColor: 'rgb(251, 146, 60)',
              borderWidth: 2,
              type: 'line',
              tension: 0.4,
              pointRadius: 4,
              fill: false
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { mode: 'index', intersect: false },
          plugins: { legend: { display: true, position: 'top' } },
          scales: {
            y: {
              min: 60,
              max: 130,
              title: { display: true, text: 'Pressure (kPa)' }
            },
            x: {
              title: { display: true, text: 'Tapping Position' }
            }
          }
        }
      });
      activeCharts.push(chart);
    }

    // Flow Rate over time
    const flowTimeCanvas = document.getElementById('flowTimeChart');
    if (flowTimeCanvas) {
      const ctx2 = flowTimeCanvas.getContext('2d');
      const chart2 = new Chart(ctx2, {
        type: 'line',
        data: {
          labels: ['0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70'],
          datasets: [
            {
              label: 'Flow Rate (L/min)',
              data: [0, 10.2, 18.6, 22.9, 24.8, 25.8, 26.2, 26.4, 26.3, 26.4, 26.5, 26.4, 26.4, 26.3, 26.4],
              borderColor: 'rgb(59, 130, 246)',
              backgroundColor: 'rgba(59, 130, 246, 0.08)',
              fill: true,
              tension: 0.4,
              pointRadius: 2,
              pointHoverRadius: 4
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: {
              min: 0,
              max: 35,
              title: { display: true, text: 'L/min' }
            },
            x: {
              title: { display: true, text: 'Time (seconds)' }
            }
          }
        }
      });
      activeCharts.push(chart2);
    }

    // Flow vs Differential Pressure (system curve + measured points)
    const flowPressureCanvas = document.getElementById('flowPressureChart');
    if (flowPressureCanvas) {
      const ctx3 = flowPressureCanvas.getContext('2d');
      const chart3 = new Chart(ctx3, {
        type: 'line',
        data: {
          datasets: [
            {
              label: 'Measured (kPa)',
              data: [
                {x: 5,    y: 1.8},
                {x: 10,   y: 5.9},
                {x: 15,   y: 11.2},
                {x: 20,   y: 18.8},
                {x: 25,   y: 28.6},
                {x: 26.4, y: 31.8},
                {x: 30,   y: 38.2},
                {x: 35,   y: 50.4}
              ],
              borderColor: 'rgb(148, 163, 184)',
              backgroundColor: 'rgba(148, 163, 184, 0.8)',
              pointRadius: 5,
              pointHoverRadius: 7,
              showLine: true,
              tension: 0.3
            },
            {
              label: 'Theoretical — Darcy-Weisbach (kPa)',
              data: [
                {x: 0,  y: 0},
                {x: 5,  y: 1.5},
                {x: 10, y: 5.9},
                {x: 15, y: 13.3},
                {x: 20, y: 23.7},
                {x: 25, y: 37.1},
                {x: 30, y: 53.4},
                {x: 35, y: 72.7}
              ],
              borderColor: 'rgb(251, 146, 60)',
              backgroundColor: 'transparent',
              borderDash: [5, 5],
              pointRadius: 0,
              showLine: true,
              tension: 0.4
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { mode: 'nearest', intersect: false },
          plugins: { legend: { display: true, position: 'top' } },
          scales: {
            x: {
              type: 'linear',
              min: 0,
              max: 40,
              title: { display: true, text: 'Flow Rate (L/min)' }
            },
            y: {
              min: 0,
              max: 80,
              title: { display: true, text: 'Differential Pressure (kPa)' }
            }
          }
        }
      });
      activeCharts.push(chart3);
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

// Admin button click handling (in header) - set up after DOM is created
setTimeout(() => {
  const adminButton = document.getElementById('admin-button');
  const adminPasswordModal = document.getElementById('adminPasswordModal');
  const adminPasswordInput = document.getElementById('admin-password-input');
  const adminPasswordSubmit = document.getElementById('admin-password-submit');
  const adminPasswordCancel = document.getElementById('admin-password-cancel');
  const adminPasswordError = document.getElementById('admin-password-error');
  const ADMIN_PASSWORD = 'matrix123';

  if (adminButton && adminPasswordModal) {
    // Open password modal when Admin button is clicked
    adminButton.addEventListener('click', () => {
      adminPasswordModal.showModal();
      adminPasswordInput.value = '';
      adminPasswordError.style.display = 'none';
      adminPasswordInput.focus();
    });

    // Handle password submission
    if (adminPasswordSubmit) {
      adminPasswordSubmit.addEventListener('click', () => {
        const enteredPassword = adminPasswordInput.value;
        
        if (enteredPassword === ADMIN_PASSWORD) {
          // Password correct - close modal and navigate to admin page
          adminPasswordModal.close();
          const pageKey = adminButton.getAttribute('data-page');
          
          // Update active class in sidebar
          const sidebarMenu = document.getElementById('sidebar-menu');
          if (sidebarMenu) {
            sidebarMenu.querySelectorAll('a[data-page]').forEach((a) => {
              a.classList.toggle('active', a.getAttribute('data-page') === pageKey);
            });
          }
          
          renderPage(pageKey);
        } else {
          // Password incorrect - show error
          adminPasswordError.style.display = 'block';
          adminPasswordInput.value = '';
          adminPasswordInput.focus();
        }
      });
    }

    // Handle Enter key in password input
    if (adminPasswordInput) {
      adminPasswordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          adminPasswordSubmit.click();
        }
      });
    }

    // Handle cancel button
    if (adminPasswordCancel) {
      adminPasswordCancel.addEventListener('click', () => {
        adminPasswordModal.close();
        adminPasswordInput.value = '';
        adminPasswordError.style.display = 'none';
      });
    }
  }
}, 0);

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

// ================================================================
// SIDEBAR COLLAPSE/EXPAND FUNCTIONALITY
// ================================================================

setTimeout(() => {
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebarBackdrop = document.getElementById('sidebar-backdrop');
  const sidebarClose = document.getElementById('sidebar-close');

  if (!sidebar || !sidebarToggle) return;

  // Load saved sidebar state (desktop only)
  const savedSidebarState = localStorage.getItem('matrix-sidebar-collapsed');
  const isCollapsed = savedSidebarState === 'true';

  // Apply saved state on page load (desktop only)
  if (isCollapsed && window.innerWidth >= 768) {
    sidebar.classList.add('w-0', 'overflow-hidden');
    sidebar.classList.remove('w-72');
  }

  // Toggle sidebar function
  function toggleSidebar() {
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
      // Mobile: toggle drawer (translate-x)
      const isOpen = !sidebar.classList.contains('-translate-x-full');
      
      if (isOpen) {
        // Close drawer
        sidebar.classList.add('-translate-x-full');
        if (sidebarBackdrop) sidebarBackdrop.classList.add('hidden');
        // Re-enable body scroll
        document.body.style.overflow = '';
      } else {
        // Open drawer
        sidebar.classList.remove('-translate-x-full');
        if (sidebarBackdrop) sidebarBackdrop.classList.remove('hidden');
        // Prevent body scroll when sidebar is open
        document.body.style.overflow = 'hidden';
      }
    } else {
      // Desktop: toggle width
      const currentlyCollapsed = sidebar.classList.contains('w-0');
      
      if (currentlyCollapsed) {
        // Expand
        sidebar.classList.remove('w-0', 'overflow-hidden');
        sidebar.classList.add('w-72');
        localStorage.setItem('matrix-sidebar-collapsed', 'false');
      } else {
        // Collapse
        sidebar.classList.remove('w-72');
        sidebar.classList.add('w-0', 'overflow-hidden');
        localStorage.setItem('matrix-sidebar-collapsed', 'true');
      }
    }
  }

  // Add event listener to toggle button
  sidebarToggle.addEventListener('click', toggleSidebar);
  
  // Add event listener to close button (mobile)
  if (sidebarClose) {
    sidebarClose.addEventListener('click', () => {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        toggleSidebar();
      }
    });
  }
  
  // Close mobile sidebar when clicking backdrop
  if (sidebarBackdrop) {
    sidebarBackdrop.addEventListener('click', () => {
      const isMobile = window.innerWidth < 768;
      if (isMobile && !sidebar.classList.contains('-translate-x-full')) {
        toggleSidebar();
      }
    });
  }
  
  // Close mobile sidebar when clicking a menu item
  const sidebarMenu = document.getElementById('sidebar-menu');
  if (sidebarMenu) {
    sidebarMenu.addEventListener('click', (e) => {
      const link = e.target.closest('a[data-page]');
      if (link && window.innerWidth < 768) {
        // Close sidebar on mobile after selecting a menu item
        setTimeout(() => {
          if (!sidebar.classList.contains('-translate-x-full')) {
            toggleSidebar();
          }
        }, 100);
      }
    });
  }
  
  // Prevent scroll events from propagating from sidebar to body
  if (sidebar) {
    const sidebarScrollContainer = sidebar.querySelector('.overflow-y-auto');
    if (sidebarScrollContainer) {
      // Stop wheel events from propagating to body when scrolling within sidebar
      sidebarScrollContainer.addEventListener('wheel', (e) => {
        const { scrollTop, scrollHeight, clientHeight } = sidebarScrollContainer;
        const isAtTop = scrollTop === 0;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
        
        // If we can scroll within the sidebar, prevent body scroll
        if ((!isAtTop && e.deltaY < 0) || (!isAtBottom && e.deltaY > 0)) {
          e.stopPropagation();
        }
      }, { passive: false });
      
      // Prevent touchmove events from propagating on mobile
      sidebarScrollContainer.addEventListener('touchmove', (e) => {
        e.stopPropagation();
      }, { passive: false });
    }
  }
  
  // Handle window resize - ensure proper state
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        // On mobile, ensure sidebar is closed by default
        sidebar.classList.add('-translate-x-full');
        if (sidebarBackdrop) sidebarBackdrop.classList.add('hidden');
        // Restore body scroll
        document.body.style.overflow = '';
      } else {
        // On desktop, restore saved state
        sidebar.classList.remove('-translate-x-full');
        if (sidebarBackdrop) sidebarBackdrop.classList.add('hidden');
        const savedState = localStorage.getItem('matrix-sidebar-collapsed');
        if (savedState === 'true') {
          sidebar.classList.add('w-0', 'overflow-hidden');
          sidebar.classList.remove('w-72');
        } else {
          sidebar.classList.remove('w-0', 'overflow-hidden');
          sidebar.classList.add('w-72');
        }
      }
    }, 250);
  });
}, 0);

// ================================================================
// CONNECTION STATUS MANAGEMENT (TEMPLATE STUB)
// ================================================================
// TODO: Implement actual device connection detection logic here
// This is a placeholder template for future Matrix TSL projects

setTimeout(() => {
  const connectionIndicator = document.getElementById('connection-indicator');
  const connectionText = document.getElementById('connection-text');
  const connectionTime = document.getElementById('connection-time');

  if (!connectionIndicator || !connectionText || !connectionTime) return;

  // Template function to update connection status UI
  // TODO: Replace with actual connection status from device communication
  function updateConnectionStatusUI(isConnected) {
    if (isConnected) {
      connectionIndicator.classList.remove('bg-error');
      connectionIndicator.classList.add('bg-success');
      connectionText.textContent = 'Connected';
      connectionText.classList.remove('text-error');
      connectionText.classList.add('text-success');
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      connectionTime.textContent = `Last connected: ${timeStr}`;
    } else {
      connectionIndicator.classList.remove('bg-success');
      connectionIndicator.classList.add('bg-error');
      connectionText.textContent = 'Disconnected';
      connectionText.classList.remove('text-success');
      connectionText.classList.add('text-error');
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      connectionTime.textContent = `Last disconnected: ${timeStr}`;
    }
  }

  // TEMPLATE STUB: Initialize connection status
  // TODO: Replace with actual device connection check
  // Example: checkDeviceConnection().then(status => updateConnectionStatusUI(status))
  const isConnected = true; // Placeholder: default to connected for template
  updateConnectionStatusUI(isConnected);

  // TEMPLATE STUB: Expose function for device communication integration
  // TODO: Call this function when device connection status changes
  // Example: window.updateConnectionStatus = (status) => updateConnectionStatusUI(status);
  window.updateConnectionStatus = updateConnectionStatusUI;
}, 0);

// Initial page: HMI Dashboard 1 (the star of the show!)
renderPage('hmi-dashboard-1');
