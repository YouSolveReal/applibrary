/**
 * app.js — Application data and UI logic for Apps Library
 *
 * To add an application, append an entry to the `apps` array below.
 * Fields:
 *   id           {string}    Unique identifier (e.g. "app-001")
 *   name         {string}    Display name
 *   version      {string}    Version string (e.g. "1.2.0")
 *   category     {string}    One of: "Civil" | "CAD" | "Utility" | "Structural"
 *   description  {string}    Short card summary (2 lines max)
 *   details      {string}    Full description shown in modal (no length limit)
 *   features     {string[]}  Bullet-point list of key features for the modal
 *   requirements {string}    System requirements text (OS, RAM, .NET, etc.)
 *   releaseDate  {string}    Release date string, e.g. "March 2026"
 *   thumbnail    {string}    Path to screenshot image, e.g. "assets/app.png"
 *                            Set to "" to show a placeholder
 *   downloadUrl  {string}    Direct download URL or file path
 *                            Set to "" or "#" to show a disabled button
 */

const apps = [
  {
    id: "app-001",
    name: "AcadTool V2.0",
    version: "1.0.0",
    category: "CAD",
    description: "A Windows desktop utility that extends AutoCAD with specialized tools for civil engineering: layer management, coordinate drafting, EPANET water network visualization, and KML/DXF geospatial conversion.",
    details: "AcadTool V2.0 is a Windows desktop utility that extends AutoCAD with specialized tools for civil engineering and infrastructure design. It connects directly to a running AutoCAD session via COM automation, enabling layer management, coordinate drafting, water distribution network visualization, and geospatial data conversion - all from a lightweight side panel. Designed for civil engineers, CAD operators, surveyors, and water utility professionals, AcadTool V2.0 bridges the gap between raw field and production-ready drawings.",
    features: [
      "Layer management - turn off layers, move objects between layers, delete layers, and export full layer reports to Excel with one click",
      "Calculate and annotate lengths of lines, arcs, and polylines; annotate arc radii with configurable decimal precision and text formatting",
      "Generate parametric coordinate grids with configurable intervals and labels; place survey points, text labels, and polylines from data files",
      "Draw complete EPANET water network layouts in AutoCAD from .INP files - junctions, reservoirs, tanks, pipes, pumps, and valves as intelligent CAD blocks",
      "Overlay EPANET simulation results from .RPT files - display pressure, flow, demand, and elevation per node with auto-generated flow-direction arrows",
      "Convert AutoCAD drawings back to EPANET .INP format using layer-based role assignment, with automatic node snapping and topology validation",
      "Convert KML placemarks to DXF with automatic WGS84 → UTM projection (Zones 44N and 45N); export KML nodes to structured CSV survey data",
      "Connects to AutoCAD 2007–2025 via COM automation with auto-detection"
    ],
    requirements: "Windows 10 or Windows 11 (64-bit recommended)\n.NET Framework 4.8\nAutoCAD 2007–2025 (any verticals with COM API)\n4 GB RAM minimum (8 GB recommended for large networks)\n50 MB disk space",
    releaseDate: "March 2026",
    thumbnail: "acadtool.jpg",
    downloadUrl: "http://sipnepal.org/shareable/acadtoolv2/setup.exe"
   },
  {
    id: "app-002",
    name: "Construction Utility",
    version: "1.0.0",
    category: "Civil",
    description: "A Windows desktop tool for estimating construction material quantities and costs - covering Plaster Work, Brick Work, and Plain Cement Concrete (PCC) with configurable material rates and real-time cost breakdowns.",
    details: "Construction Utility is a Windows desktop application designed for civil engineers, quantity surveyors, and construction estimators. It automates material quantity calculations for three common construction activities - plaster work, brick work, and plain cement concrete - based on user-supplied dimensions and mix ratios. All material unit costs (cement, sand, aggregate, bricks, water) are stored in a local SQLite database and can be updated directly from the app, producing instant line-item cost breakdowns without any manual spreadsheet work.",
    features: [
      "Plaster Work estimator: enter structural dimensions (length × breadth × thickness) or total wet volume; automatically computes dry volume (×1.4 factor), cement bags, sand volume, and water volume from a user-defined mix ratio",
      "Brick Work estimator: enter wall dimensions and mortar mix ratio; calculates number of bricks with and without wastage loss, mortar wet/dry volumes, and all constituent material quantities",
      "PCC (Plain Cement Concrete) estimator: accepts separate sand and aggregate ratios; applies ×1.5 dry-volume factor; produces a full material breakdown for cement, sand, and coarse aggregate",
      "Real-time cost analysis: each calculator generates a line-item cost table (Description, Quantity, Unit, Unit Cost, Total Cost) displayed in a DataGridView for instant review",
      "Configurable material rates: cement, sand, aggregate, and brick unit prices - plus brick dimensions, wastage/loss percentage, and output decimal precision - stored in a local SQLite database and editable from a dedicated Materials tab",
      "Two input modes per calculator - Structural Dimensions mode and Total Volume mode - selectable via radio buttons to suit available site data",
    ],
    requirements: "Windows 10 or Windows 11 (64-bit recommended)\n.NET Framework 4.8\n50 MB disk space\nNo additional software required",
    releaseDate: "February 2026",
    thumbnail: "constructionutility.jpg",
    downloadUrl: "http://sipnepal.org/shareable/constructionutility/setup.exe"
  },
  // {
  //   id: "app-003",
  //   name: "Sample Application Three",
  //   version: "1.5.2",
  //   category: "Structural",
  //   description: "A placeholder for your third application. Set downloadUrl to a real file path or URL to enable the download button.",
  //   details: "This is a detailed description of Sample Application Three. Once you set the downloadUrl field to a real file path or URL, the Download button on the card and inside this modal will become active. Replace this placeholder text with a genuine description of the application.",
  //   features: [
  //     "Feature one — describe a key capability of the application",
  //     "Feature two — describe another important function"
  //   ],
  //   requirements: "Windows 10 / 11 (64-bit)\n.NET 6.0 Runtime or later\n4 GB RAM minimum",
  //   releaseDate: "January 2026",
  //   thumbnail: "",
  //   downloadUrl: ""
  // }
];

/* ─────────────────────────────────────────────
   Analytics (GoatCounter)
───────────────────────────────────────────── */
function trackEvent(path, title) {
  if (typeof window.goatcounter !== "undefined" && window.goatcounter.count) {
    window.goatcounter.count({ path: path, title: title, event: true });
  }
}

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

/* ─────────────────────────────────────────────
   Download Counter (counterapi.dev)
───────────────────────────────────────────── */
const COUNTER_NS     = "sanjog-apps";   // unique namespace on counterapi.dev
const downloadCounts = {};              // in-memory cache  { appId: number }

async function fetchCount(slug) {
  try {
    const res = await fetch(`https://api.counterapi.dev/v1/${COUNTER_NS}/${slug}`);
    if (!res.ok) return null;
    const data = await res.json();
    return typeof data.count === "number" ? data.count : null;
  } catch { return null; }
}

async function incrementCount(slug) {
  try {
    const res = await fetch(`https://api.counterapi.dev/v1/${COUNTER_NS}/${slug}/up`);
    if (!res.ok) return null;
    const data = await res.json();
    return typeof data.count === "number" ? data.count : null;
  } catch { return null; }
}

function setCountDisplay(appId, count) {
  const n = count ?? 0;          // treat null (key not yet created) as 0
  downloadCounts[appId] = n;
  const el = document.getElementById(`dlcount-${appId}`);
  if (!el) return;
  el.textContent = `${n.toLocaleString()} download${n !== 1 ? "s" : ""}`;
  el.style.display = "";
}

async function loadAllCounts() {
  await Promise.all(apps.map(async app => {
    // Use cache if card was re-rendered (filter/search) without a new download
    if (downloadCounts[app.id] !== undefined) {
      setCountDisplay(app.id, downloadCounts[app.id]);
      return;
    }
    const count = await fetchCount(slugify(app.name));
    setCountDisplay(app.id, count);
  }));
}

/* ─────────────────────────────────────────────
   State
───────────────────────────────────────────── */
let activeFilter = "all";
let searchQuery  = "";

/* ─────────────────────────────────────────────
   Helpers
───────────────────────────────────────────── */
function escapeHtml(str) {
  const d = document.createElement("div");
  d.textContent = str;
  return d.innerHTML;
}

function categoryClass(cat) {
  const known = ["Civil", "CAD", "Utility", "Structural"];
  return known.includes(cat) ? `cat-${cat}` : "cat-default";
}

function thumbnailHtml(src, name) {
  if (src && src.trim() !== "") {
    return `<img class="card-thumb" src="${escapeHtml(src)}" alt="${escapeHtml(name)} screenshot" loading="lazy"
              onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
            <div class="card-thumb-placeholder" style="display:none">${placeholderSvg()}</div>`;
  }
  return `<div class="card-thumb-placeholder">${placeholderSvg()}</div>`;
}

function placeholderSvg() {
  return `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="40" height="32" rx="3" stroke="#b0bec8" stroke-width="2"/>
    <path d="M4 30l10-10 8 8 6-6 16 14" stroke="#b0bec8" stroke-width="2" stroke-linejoin="round"/>
    <circle cx="16" cy="19" r="3" stroke="#b0bec8" stroke-width="2"/>
  </svg>`;
}

function downloadBtnHtml(url, size) {
  const isDisabled = !url || url === "#";
  const cls = isDisabled ? "btn-download disabled" : "btn-download";
  const tag = isDisabled ? "span" : "a";
  const href = isDisabled ? "" : `href="${escapeHtml(url)}" download`;
  const label = isDisabled ? "Coming Soon" : "Download";
  return `<${tag} class="${cls}" ${href}>
    <svg viewBox="0 0 16 16" fill="currentColor">
      <path d="M.5 9.9a.5.5 0 01.5.5v2.5a1 1 0 001 1h12a1 1 0 001-1v-2.5a.5.5 0 011 0v2.5a2 2 0 01-2 2H2a2 2 0 01-2-2v-2.5a.5.5 0 01.5-.5z"/>
      <path d="M7.646 11.854a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L8.5 10.293V1.5a.5.5 0 00-1 0v8.793L5.354 8.146a.5.5 0 10-.708.708l3 3z"/>
    </svg>
    ${label}
  </${tag}>`;
}

/* ─────────────────────────────────────────────
   Card Render
───────────────────────────────────────────── */
function getFilteredApps() {
  return apps.filter(app => {
    const matchCat    = activeFilter === "all" || app.category === activeFilter;
    const matchSearch = app.name.toLowerCase().includes(searchQuery) ||
                        app.description.toLowerCase().includes(searchQuery) ||
                        app.category.toLowerCase().includes(searchQuery);
    return matchCat && matchSearch;
  });
}

function renderCards() {
  const grid       = document.getElementById("card-grid");
  const emptyState = document.getElementById("empty-state");
  const countEl    = document.getElementById("result-count");
  const filtered   = getFilteredApps();

  if (filtered.length === 0) {
    grid.innerHTML = "";
    emptyState.style.display = "flex";
    countEl.textContent = "0 results";
    return;
  }

  emptyState.style.display = "none";
  countEl.textContent = filtered.length === apps.length
    ? `${apps.length} application${apps.length !== 1 ? "s" : ""}`
    : `${filtered.length} of ${apps.length}`;

  grid.innerHTML = filtered.map(app => `
    <article class="app-card" data-id="${escapeHtml(app.id)}">
      ${thumbnailHtml(app.thumbnail, app.name)}
      <div class="card-body">
        <div class="card-title-row">
          <span class="card-name">${escapeHtml(app.name)}</span>
          <span class="card-version">v${escapeHtml(app.version)}</span>
        </div>
        <span class="card-category ${categoryClass(app.category)}">${escapeHtml(app.category)}</span>
        <p class="card-desc">${escapeHtml(app.description)}</p>
      </div>
      <div class="card-footer">
        <button class="btn-details" data-id="${escapeHtml(app.id)}">
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z"/>
            <path d="M5.255 5.786a.237.237 0 00.241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 00.25.246h.811a.25.25 0 00.25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
          </svg>
          View Details
        </button>
        ${downloadBtnHtml(app.downloadUrl)}
      </div>
      <div class="dl-count-row" id="dlcount-${escapeHtml(app.id)}" style="display:none"></div>
    </article>
  `).join("");

  // Wire up "View Details" buttons after rendering
  grid.querySelectorAll(".btn-details[data-id]").forEach(btn => {
    btn.addEventListener("click", () => {
      const app = apps.find(a => a.id === btn.dataset.id);
      if (app) trackEvent(`details/${slugify(app.name)}`, `Details: ${app.name}`);
      openModal(btn.dataset.id);
    });
  });

  // Wire up card Download buttons for tracking + live count increment
  grid.querySelectorAll(".app-card").forEach(card => {
    const btn = card.querySelector(".btn-download:not(.disabled)");
    if (!btn) return;
    const app = apps.find(a => a.id === card.dataset.id);
    if (!app) return;
    btn.addEventListener("click", async () => {
      trackEvent(`download/${slugify(app.name)}`, `Download: ${app.name}`);
      const newCount = await incrementCount(slugify(app.name));
      if (newCount !== null) setCountDisplay(app.id, newCount);
    });
  });

  // Fetch and display current counts (non-blocking)
  loadAllCounts();
}

function updateCounts() {
  const categories = ["Civil", "CAD", "Utility", "Structural"];
  document.getElementById("count-all").textContent = apps.length;
  categories.forEach(cat => {
    const el = document.getElementById(`count-${cat}`);
    if (el) el.textContent = apps.filter(a => a.category === cat).length;
  });
}

function updateSectionTitle() {
  const el = document.getElementById("section-title");
  el.textContent = activeFilter === "all" ? "All Applications" : activeFilter + " Applications";
}

/* ─────────────────────────────────────────────
   Modal
───────────────────────────────────────────── */
function openModal(appId) {
  const app = apps.find(a => a.id === appId);
  if (!app) return;

  // Header
  document.getElementById("modal-app-name").textContent = app.name;
  document.getElementById("modal-version").textContent  = `v${app.version}`;

  const catEl = document.getElementById("modal-category");
  catEl.textContent  = app.category;
  catEl.className    = `modal-category ${categoryClass(app.category)}`;

  // Thumbnail
  const thumbWrap = document.getElementById("modal-thumb-wrap");
  if (app.thumbnail && app.thumbnail.trim() !== "") {
    thumbWrap.innerHTML = `
      <img src="${escapeHtml(app.thumbnail)}" alt="${escapeHtml(app.name)} screenshot"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="modal-thumb-placeholder" style="display:none">${placeholderSvg()}</div>`;
  } else {
    thumbWrap.innerHTML = `<div class="modal-thumb-placeholder">${placeholderSvg()}</div>`;
  }

  // About
  document.getElementById("modal-desc").textContent = app.details || app.description;

  // Features
  const featSection = document.getElementById("modal-features-section");
  const featList    = document.getElementById("modal-features");
  if (app.features && app.features.length > 0) {
    featList.innerHTML = app.features.map(f => `<li>${escapeHtml(f)}</li>`).join("");
    featSection.style.display = "";
  } else {
    featSection.style.display = "none";
  }

  // Requirements
  const reqSection = document.getElementById("modal-req-section");
  const reqEl      = document.getElementById("modal-req");
  if (app.requirements && app.requirements.trim() !== "") {
    reqEl.innerHTML = escapeHtml(app.requirements).replace(/\n/g, "<br>");
    reqSection.style.display = "";
  } else {
    reqSection.style.display = "none";
  }

  // Meta row
  const metaEl = document.getElementById("modal-meta");
  const metaItems = [];
  if (app.releaseDate) metaItems.push({ label: "Released",  value: app.releaseDate });
  if (app.version)     metaItems.push({ label: "Version",   value: app.version });
  if (app.category)    metaItems.push({ label: "Category",  value: app.category });
  const cachedCount = downloadCounts[app.id];
  if (typeof cachedCount === "number") {
    metaItems.push({ label: "Downloads", value: cachedCount.toLocaleString() });
  }
  metaEl.innerHTML = metaItems.map(m => `
    <div class="modal-meta-item">
      <span class="modal-meta-label">${escapeHtml(m.label)}</span>
      <span class="modal-meta-value">${escapeHtml(m.value)}</span>
    </div>`).join("");

  // Download button in footer
  const modalDlWrap = document.getElementById("modal-download-btn");
  modalDlWrap.innerHTML = downloadBtnHtml(app.downloadUrl);
  const modalDlBtn = modalDlWrap.querySelector(".btn-download:not(.disabled)");
  if (modalDlBtn) {
    modalDlBtn.addEventListener("click", async () => {
      trackEvent(`download/${slugify(app.name)}`, `Download: ${app.name}`);
      const newCount = await incrementCount(slugify(app.name));
      if (newCount !== null) setCountDisplay(app.id, newCount);
    });
  }

  // Show modal
  document.getElementById("modal-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
  document.getElementById("modal-close").focus();
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("open");
  document.body.style.overflow = "";
}

/* ─────────────────────────────────────────────
   Event Wiring
───────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {

  // Sidebar category filter
  document.querySelectorAll(".nav-item[data-filter]").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      activeFilter = link.dataset.filter;
      document.querySelectorAll(".nav-item[data-filter]").forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      updateSectionTitle();
      renderCards();
    });
  });

  // Search
  document.getElementById("search-input").addEventListener("input", e => {
    searchQuery = e.target.value.trim().toLowerCase();
    renderCards();
  });

  // Modal close — X button
  document.getElementById("modal-close").addEventListener("click", closeModal);

  // Modal close — footer "Close" button
  document.getElementById("modal-btn-close-action").addEventListener("click", closeModal);

  // Modal close — click on backdrop
  document.getElementById("modal-overlay").addEventListener("click", e => {
    if (e.target === e.currentTarget) closeModal();
  });

  // Modal close — ESC key
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });

  // Initial render
  updateCounts();
  renderCards();
});
