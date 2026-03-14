/**
 * app.js — Application data and UI logic for Apps Library
 *
 * To add an application, append an entry to the `apps` array below.
 * Fields:
 *   id           {string}    Unique identifier (e.g. "app-001")
 *   name         {string}    Display name
 *   version      {string}    Version string (e.g. "1.2.0")
 *   category     {string}    One of: "Civil" | "CAD" | "Utility" | "Structural" | "Academic"
 *   description  {string}    Short card summary (2 lines max)
 *   details      {string}    Full description shown in modal (no length limit)
 *   features     {string[]}  Bullet-point list of key features for the modal
 *   requirements {string}    System requirements text (OS, RAM, .NET, etc.)
 *   releaseDate  {string}    Release date string, e.g. "March 2026"
 *   thumbnail    {string}    Path to screenshot image, e.g. "assets/app.png"
 *                            Set to "" to show a placeholder
 *   downloadUrl  {string}    Direct download URL or file path
 *                            Set to "" or "#" to show a disabled button
 *   sourceUrl    {string}    (optional) Public GitHub repository URL
 *                            Omit or set to "" to hide the Source Code button
 */

const apps = [
  {
    id: "app-001",
    name: "AcadTool V2.0",
    version: "1.0.0",
    category: "CAD",
    tags: [".NET 4.8", "AutoCAD", "COM API", "KML/DXF"],
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
    screenshots: ["images/acadtool.jpg"],
    downloadUrl: "https://bit.ly/acadtoolv2",
    sourceUrl:   ""
   },
  {
    id: "app-002",
    name: "Construction Utility",
    version: "1.0.0",
    category: "Civil",
    tags: [".NET 4.8", "SQLite", "WinForms"],
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
    screenshots: ["images/constructionutility.jpg","images/constructionutility1.jpg","images/constructionutility2.jpg","images/constructionutility3.jpg"],
    downloadUrl: "https://bit.ly/constructionutility",
    sourceUrl:   ""
  },
  {
    id: "app-003",
    name: "Structural Dynamics & Vibration Analysis",
    version: "1.0.1",
    category: "Structural",
    tags: [".NET 4.8", "NPlot", "SDOF", "WinForms"],
    description: "A Windows desktop SDOF vibration analysis tool for structural and earthquake engineering education. Computes and visualizes time-history displacement responses for four vibration cases with interactive plots and tabulated data.",
    details: "Structural Dynamics & Vibration Analysis is a Windows desktop application developed as part of a Masters in Earthquake Engineering at Khwopa Engineering College. It implements closed-form analytical solutions for four Single-Degree-of-Freedom (SDOF) vibration cases: undamped free, damped free, undamped forced, and damped forced vibration. Each module produces an interactive displacement time-history plot and a tabulated numerical output side by side. All input parameters are edited through a PropertyGrid that instantly re-draws the chart on any change. An MDI shell keeps all analysis windows open simultaneously for easy cross-comparison.",
    features: [
      "Four SDOF analysis modules: Undamped Free, Damped Free, Undamped Forced, and Damped Forced Vibration - each with closed-form analytical solutions",
      "Damped Free Vibration Comparison panel: 2×2 grid showing responses at 2%, 5%, 10%, and 20% damping ratios simultaneously for direct visual comparison",
      "Interactive NPlot charts with pan, zoom, anti-aliased rendering, equilibrium reference line, and legend; three-curve display (Transient, Steady-State, Total) on forced vibration modules",
      "PropertyGrid-driven parameter input with instant live chart updates - change any value and the plot redraws immediately",
      "Tabulated displacement data (t, u(t)) in a DataGridView alongside every plot, rounded to 3 decimal places",
      "Built-in HTML theory and derivation browser with governing equations and formula derivations for all four vibration cases.",
      "Chart export to JPEG or BMP."
    ],
    requirements: "Windows 10 or Windows 11 (64-bit recommended)\n.NET Framework 4.8\n30 MB disk space\nNo additional software required",
    releaseDate: "2024",
    screenshots: ["images/vibration.jpg","images/vibration1.jpg","images/vibration2.jpg","images/vibration3.jpg","images/vibration4.jpg"],
    downloadUrl: "https://bit.ly/structurevibration",
    sourceUrl:   "https://github.com/SoftwelSanjog/StructuralDynamics_Vibration"
  },
  {
    id: "app-004",
    name: "Land Area Converter",
    version: "1.0.0",
    category: "Utility",
    tags: [".NET 4.8", "WinForms"],
    description: "A Windows desktop utility that converts land area measurements between metric units (Sq.m, Sq.ft) and traditional Nepali-Indian cadastral units (Ropani-Aana-Paisa-Daam and Bigha-Kattha-Dhur-Kanwa).",
    details: "Land Area Converter is a lightweight Windows desktop utility for civil engineers, surveyors, land administrators, and property professionals working in Nepal and northern India. It covers all 16 conversion combinations across four unit systems: Square Metres, Square Feet, Ropani-Aana-Paisa-Daam (RAPD), and Bigha-Kattha-Dhur-Kanwa (BKDK). Select a source and destination unit from the dropdowns and the result updates in real time as you type — no button press required. Traditional multi-part units are displayed and entered as separate sub-unit fields (e.g. 1 Ropani 8 Aana 2 Paisa 1 Daam), so reading and entering cadastral descriptions from land records or field surveys is direct and unambiguous.",
    features: [
      "Converts between all four unit systems - Sq.m, Sq.ft, Ropani-Aana-Paisa-Daam (RAPD), and Bigha-Kattha-Dhur-Kanwa (BKDK) - covering all 16 possible conversion pairs",
      "Real-time conversion",
      "Multi-part sub-unit display: traditional unit results are shown in separate labelled fields (Ropani / Aana / Paisa / Daam and Bigha / Kattha / Dhur / Kanwa) matching the format used in land records",
      "Supports full RAPD and BKDK input: enter each sub-unit independently when converting from traditional units to metric or cross-converting between the two cadastral systems",
      "Conversion factors: 1 Ropani = 508.7371 m², 1 Bigha = 6 772.63 m², 1 Sq.ft = 0.0929 m²; sub-unit hierarchy: 1 Ropani = 16 Aana = 64 Paisa = 256 Daam; 1 Bigha = 20 Kattha = 400 Dhur = 6 400 Kanwa"
    ],
    requirements: "Windows 10 or Windows 11 (64-bit recommended)\n.NET Framework 4.8\nNo additional software required\n< 5 MB disk space",
    releaseDate: "March 2026",
    screenshots: ["images/landarea1.jpg","images/landarea2.jpg","images/landarea3.jpg"],
    downloadUrl: "https://bit.ly/landareaconvertor",
    sourceUrl:   ""
  }
];

/* ─────────────────────────────────────────────
   Academic Projects
───────────────────────────────────────────── */
const academicProjects = [
  {
    id: "acad-001",
    name: "Probabilistic Seismic Hazard Assessment of Sankhuwasabha District",
    institution: "Khwopa Engineering College, Bhaktapur",
    degree: "M.E. in Earthquake Engineering",
    releaseDate: "August 2020",
    description: "A PSHA of Sankhuwasabha District, Nepal, covering a 600 km × 600 km region with 1,124 earthquake events (Mw 4.0–8.5, 1255–2020 AD) grouped into 9 areal source zones. Seismicity parameters were derived using the Gutenberg–Richter relation with Stepp (1972) completeness analysis and Reasenberg (1985) declustering, applying the Youngs et al. (1997) attenuation model for the subduction zone. Results yield PGA of 0.54g (rock) / 0.74g (soil) at 10% probability of exceedance in 50 years, and 0.87g (rock) / 1.32g (soil) at 2% in 50 years, with Uniform Hazard Spectra for structural design. A VBA-based PSHA computation module was also developed as part of the study.",
    tags: ["PSHA", "Seismic Hazard", "Nepal", "G-R Relation", "Youngs et al. 1997", "Stepp 1972", "Reasenberg 1985", "UHS", "PGA", "Logic Tree"],
    pdfUrl: "pdfs/Thesis-Sanjog-Final-Dissertation.pdf",
    downloadUrl: "pdfs/Thesis-Sanjog-Final-Dissertation.pdf",
    sourceUrl: ""
  }
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

function thumbnailHtml(screenshots, name) {
  const imgs = (screenshots && screenshots.length > 0) ? screenshots : [];
  if (imgs.length === 0) {
    return `<div class="card-thumb-placeholder">${placeholderSvg()}</div>`;
  }
  if (imgs.length === 1) {
    return `<img class="card-thumb" src="${escapeHtml(imgs[0])}" alt="${escapeHtml(name)} screenshot" loading="lazy"
              onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
            <div class="card-thumb-placeholder" style="display:none">${placeholderSvg()}</div>`;
  }
  const slides = imgs.map((src, i) =>
    `<img class="card-carousel-slide${i === 0 ? " active" : ""}" src="${escapeHtml(src)}"
          alt="${escapeHtml(name)} screenshot ${i + 1}" loading="lazy">`
  ).join("");
  const dots = imgs.map((_, i) =>
    `<span class="card-carousel-dot${i === 0 ? " active" : ""}"></span>`
  ).join("");
  return `<div class="card-carousel">
    ${slides}
    <button class="card-carousel-prev" aria-label="Previous">&#8249;</button>
    <button class="card-carousel-next" aria-label="Next">&#8250;</button>
    <div class="card-carousel-dots">${dots}</div>
  </div>`;
}

function galleryHtml(screenshots, name) {
  const imgs = (screenshots && screenshots.length > 0) ? screenshots : [];
  if (imgs.length === 0) {
    return `<div class="modal-thumb-placeholder">${placeholderSvg()}</div>`;
  }
  if (imgs.length === 1) {
    return `<img src="${escapeHtml(imgs[0])}" alt="${escapeHtml(name)} screenshot"
                 onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
            <div class="modal-thumb-placeholder" style="display:none">${placeholderSvg()}</div>`;
  }
  const slides = imgs.map((src, i) =>
    `<img class="gallery-slide${i === 0 ? " active" : ""}" src="${escapeHtml(src)}"
          alt="${escapeHtml(name)} screenshot ${i + 1}"
          onerror="this.style.opacity='0'">`
  ).join("");
  const dots = imgs.map((_, i) =>
    `<button class="gallery-dot${i === 0 ? " active" : ""}" data-idx="${i}" aria-label="Screenshot ${i + 1}"></button>`
  ).join("");
  return `
    <div class="gallery">
      <div class="gallery-slides">${slides}</div>
      <button class="gallery-prev" aria-label="Previous">&#8249;</button>
      <button class="gallery-next" aria-label="Next">&#8250;</button>
      <div class="gallery-dots">${dots}</div>
    </div>`;
}

function wireGallery(container) {
  const gallery = container.querySelector(".gallery");
  if (!gallery) return;
  const slides = gallery.querySelectorAll(".gallery-slide");
  const dots   = gallery.querySelectorAll(".gallery-dot");
  let current  = 0;

  function goTo(idx) {
    slides[current].classList.remove("active");
    dots[current].classList.remove("active");
    current = (idx + slides.length) % slides.length;
    slides[current].classList.add("active");
    dots[current].classList.add("active");
  }

  gallery.querySelector(".gallery-prev").addEventListener("click", () => goTo(current - 1));
  gallery.querySelector(".gallery-next").addEventListener("click", () => goTo(current + 1));
  dots.forEach(dot => dot.addEventListener("click", () => goTo(+dot.dataset.idx)));
}

function placeholderSvg() {
  return `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="40" height="32" rx="3" stroke="#b0bec8" stroke-width="2"/>
    <path d="M4 30l10-10 8 8 6-6 16 14" stroke="#b0bec8" stroke-width="2" stroke-linejoin="round"/>
    <circle cx="16" cy="19" r="3" stroke="#b0bec8" stroke-width="2"/>
  </svg>`;
}

function downloadBtnHtml(url) {
  const isDisabled = !url || url === "#";
  const cls = isDisabled ? "btn-download disabled" : "btn-download";
  const label = isDisabled ? "Coming Soon" : "Download";
  const dataAttr = isDisabled ? "" : `data-dlurl="${escapeHtml(url)}"`;
  return `<button class="${cls}" ${dataAttr} ${isDisabled ? "disabled" : ""}>
    <svg viewBox="0 0 16 16" fill="currentColor">
      <path d="M.5 9.9a.5.5 0 01.5.5v2.5a1 1 0 001 1h12a1 1 0 001-1v-2.5a.5.5 0 011 0v2.5a2 2 0 01-2 2H2a2 2 0 01-2-2v-2.5a.5.5 0 01.5-.5z"/>
      <path d="M7.646 11.854a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L8.5 10.293V1.5a.5.5 0 00-1 0v8.793L5.354 8.146a.5.5 0 10-.708.708l3 3z"/>
    </svg>
    ${label}
  </button>`;
}

/* ─────────────────────────────────────────────
   Card Carousel (auto-play)
───────────────────────────────────────────── */
function wireCardCarousels() {
  document.querySelectorAll(".card-carousel").forEach(carousel => {
    const slides = carousel.querySelectorAll(".card-carousel-slide");
    const dots   = carousel.querySelectorAll(".card-carousel-dot");
    if (slides.length < 2) return;
    let current = 0;

    function goTo(idx) {
      slides[current].classList.remove("active");
      dots[current].classList.remove("active");
      current = (idx + slides.length) % slides.length;
      slides[current].classList.add("active");
      dots[current].classList.add("active");
    }

    carousel.querySelector(".card-carousel-prev").addEventListener("click", e => {
      e.stopPropagation();
      goTo(current - 1);
    });
    carousel.querySelector(".card-carousel-next").addEventListener("click", e => {
      e.stopPropagation();
      goTo(current + 1);
    });
  });
}

/* ─────────────────────────────────────────────
   Card Render
───────────────────────────────────────────── */
function getFilteredApps() {
  return apps.filter(app => {
    if (app.category === "Academic") return false;
    const matchCat    = activeFilter === "all" || app.category === activeFilter;
    const matchSearch = app.name.toLowerCase().includes(searchQuery) ||
                        app.description.toLowerCase().includes(searchQuery) ||
                        app.category.toLowerCase().includes(searchQuery);
    return matchCat && matchSearch;
  });
}

function showPdfViewer(project) {
  document.getElementById("academic-section").style.display    = "none";
  document.getElementById("pdf-viewer-section").style.display = "flex";
  document.getElementById("pdf-viewer-title").textContent     = project.name;
  document.getElementById("pdf-viewer-meta").textContent      =
    [project.degree, project.institution, project.releaseDate].filter(Boolean).join("  ·  ");
  document.getElementById("pdf-iframe").src                   = project.pdfUrl;
  const dl = document.getElementById("pdf-download-btn");
  dl.href = project.downloadUrl || project.pdfUrl;
}

function showAcademicGrid() {
  document.getElementById("pdf-viewer-section").style.display = "none";
  document.getElementById("academic-section").style.display   = "flex";
  document.getElementById("pdf-iframe").src = "";
}

function renderAcademic() {
  const grid = document.getElementById("academic-grid");

  if (!academicProjects.length) {
    grid.innerHTML = `<p style="color:#8b949e; padding:24px; font-size:14px;">No academic projects added yet.</p>`;
    return;
  }

  grid.innerHTML = academicProjects.map(p => `
    <div class="academic-card" data-acad-id="${escapeHtml(p.id)}">
      <div class="academic-card-header">
        <div class="academic-card-title">${escapeHtml(p.name)}</div>
        <div class="academic-card-meta">
          ${p.degree     ? `<span>${escapeHtml(p.degree)}</span>`      : ""}
          ${p.institution ? `<span>${escapeHtml(p.institution)}</span>` : ""}
          ${p.releaseDate ? `<span>${escapeHtml(p.releaseDate)}</span>` : ""}
        </div>
      </div>
      <div class="academic-card-body">
        <p class="academic-card-abstract">${escapeHtml(p.description)}</p>
        ${p.tags && p.tags.length ? `<div class="academic-card-tags">${p.tags.map(t => `<span class="academic-card-tag">${escapeHtml(t)}</span>`).join("")}</div>` : ""}
      </div>
      <div class="academic-card-footer">
        ${p.pdfUrl ? `<button class="btn-academic-view btn-view-pdf" data-acad-id="${escapeHtml(p.id)}">
          <svg viewBox="0 0 16 16" fill="currentColor" width="13" height="13"><path d="M10.5 8a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/><path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"/></svg>
          View Report
        </button>` : ""}
        ${p.downloadUrl ? `<a href="${escapeHtml(p.downloadUrl)}" download class="btn-academic-source">
          <svg viewBox="0 0 16 16" fill="currentColor" width="13" height="13"><path d="M.5 9.9a.5.5 0 01.5.5v2.5a1 1 0 001 1h12a1 1 0 001-1v-2.5a.5.5 0 011 0v2.5a2 2 0 01-2 2H2a2 2 0 01-2-2v-2.5a.5.5 0 01.5-.5z"/><path d="M7.646 11.854a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L8.5 10.293V1.5a.5.5 0 00-1 0v8.793L5.354 8.146a.5.5 0 10-.708.708l3 3z"/></svg>
          Download
        </a>` : ""}
      </div>
    </div>
  `).join("");

  // Wire up view buttons
  document.querySelectorAll(".btn-view-pdf").forEach(btn => {
    btn.addEventListener("click", () => {
      const proj = academicProjects.find(p => p.id === btn.dataset.acadId);
      if (proj) showPdfViewer(proj);
    });
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
    <article class="app-card cat-accent-${escapeHtml(app.category)}" data-id="${escapeHtml(app.id)}">
      ${thumbnailHtml(app.screenshots, app.name)}
      <div class="card-name-header">
        <span class="card-name">${escapeHtml(app.name)}</span>
        <span class="card-version">v${escapeHtml(app.version)}</span>
      </div>
      <div class="card-body">
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
        ${app.sourceUrl ? `<a href="${escapeHtml(app.sourceUrl)}" target="_blank" rel="noopener" class="btn-source card-source-btn">
          <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
          Source
        </a>` : ""}
        ${downloadBtnHtml(app.downloadUrl)}
      </div>
      <div class="dl-count-row" id="dlcount-${escapeHtml(app.id)}" style="display:none"></div>
      <div class="card-stars" id="stars-${escapeHtml(app.id)}"></div>
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

  // Wire up card Download buttons — require auth before downloading
  grid.querySelectorAll(".app-card").forEach(card => {
    const btn = card.querySelector(".btn-download:not(.disabled)");
    if (!btn) return;
    const app = apps.find(a => a.id === card.dataset.id);
    if (!app) return;
    btn.addEventListener("click", () => {
      window.requireAuth(async () => {
        window.open(app.downloadUrl, "_blank", "noopener");
        trackEvent(`download/${slugify(app.name)}`, `Download: ${app.name}`);
        const newCount = await incrementCount(slugify(app.name));
        if (newCount !== null) setCountDisplay(app.id, newCount);
      });
    });
  });

  // Wire up card auto-carousels
  wireCardCarousels();

  // Fetch and display current counts (non-blocking)
  loadAllCounts();

  // Load star ratings for all cards (non-blocking)
  if (typeof window.loadAllStars === "function") window.loadAllStars(filtered);
}

function updateCounts() {
  const softwareApps = apps.filter(a => a.category !== "Academic");
  const categories   = ["Civil", "CAD", "Utility", "Structural"];
  document.getElementById("count-all").textContent = softwareApps.length;
  categories.forEach(cat => {
    const el = document.getElementById(`count-${cat}`);
    if (el) el.textContent = softwareApps.filter(a => a.category === cat).length;
  });

  // Stats bar
  const totalEl = document.getElementById("stat-total");
  const catsEl  = document.getElementById("stat-cats");
  if (totalEl) totalEl.textContent = softwareApps.length;
  if (catsEl) {
    const cats = new Set(softwareApps.map(a => a.category));
    catsEl.textContent = cats.size;
  }
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

  // Screenshots gallery
  const thumbWrap = document.getElementById("modal-thumb-wrap");
  thumbWrap.innerHTML = galleryHtml(app.screenshots, app.name);
  wireGallery(thumbWrap);

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

  // Source Code button in footer
  const srcBtn = document.getElementById("modal-source-btn");
  if (srcBtn) {
    if (app.sourceUrl) {
      srcBtn.href = app.sourceUrl;
      srcBtn.style.display = "";
    } else {
      srcBtn.style.display = "none";
    }
  }

  // Download button in footer
  const modalDlWrap = document.getElementById("modal-download-btn");
  modalDlWrap.innerHTML = downloadBtnHtml(app.downloadUrl);
  const modalDlBtn = modalDlWrap.querySelector(".btn-download:not(.disabled)");
  if (modalDlBtn) {
    modalDlBtn.addEventListener("click", () => {
      window.requireAuth(async () => {
        window.open(app.downloadUrl, "_blank", "noopener");
        trackEvent(`download/${slugify(app.name)}`, `Download: ${app.name}`);
        const newCount = await incrementCount(slugify(app.name));
        if (newCount !== null) setCountDisplay(app.id, newCount);
      });
    });
  }

  // Load ratings for this app in modal
  if (typeof window.openModalStars === "function") window.openModalStars(app.id);

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

  // Browse tabs (Applications / Academic Projects)
  const appsSection     = document.getElementById("card-grid");
  const academicSection = document.getElementById("academic-section");
  const statsBar        = document.getElementById("stats-bar");
  const mainHeader      = document.querySelector(".main-header");

  document.querySelectorAll(".browse-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".browse-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const isAcademic = tab.dataset.section === "academic";
      appsSection.style.display      = isAcademic ? "none" : "";
      academicSection.style.display  = isAcademic ? "block" : "none";
      statsBar.style.display         = isAcademic ? "none" : "";
      mainHeader.style.display       = isAcademic ? "none" : "";

      if (isAcademic) renderAcademic();
    });
  });

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

  // PDF viewer — back button
  document.getElementById("pdf-back-btn").addEventListener("click", showAcademicGrid);

  // Initial render
  updateCounts();
  renderCards();
});
