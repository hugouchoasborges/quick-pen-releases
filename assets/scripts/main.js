const LATEST_DOWNLOAD_URL = "https://github.com/hugouchoasborges/quick-pen-releases/releases/latest/download/QuickPen-Setup.exe";

const MEDIA_ITEMS = [
  { path: "assets/images/tool_pen.png", caption: "Pen — freehand drawing on the overlay" },
  { path: "assets/images/tool_highlighter.png", caption: "Highlighter — alpha-aware highlights" },
  { path: "assets/images/tool_shapes.png", caption: "Shapes — arrows, rectangles, ellipses" },
  { path: "assets/images/tool_text_label.png", caption: "Text and Label — inline editing" },
  { path: "assets/images/tool_postit_and_counter.png", caption: "Post-it and Counter on the overlay" },
  { path: "assets/images/tool_blur_mask_snapshot.png", caption: "Blur, Mask and Snapshot focus tools" },
  { path: "assets/images/radial_pen.png", caption: "Radial menu — Pen submenu" },
  { path: "assets/images/radial_shapes.png", caption: "Radial menu — Shapes submenu" },
  { path: "assets/images/radial_text.png", caption: "Radial menu — Text submenu" },
  { path: "assets/images/radial_postit.png", caption: "Radial menu — Post-it submenu" },
  { path: "assets/images/radial_counter.png", caption: "Radial menu — Counter submenu" },
  { path: "assets/images/radial_eraser.png", caption: "Radial menu — Eraser submenu" },
  { path: "assets/images/radial_blur.png", caption: "Radial menu — Blur submenu" },
  { path: "assets/images/radial_pattern.png", caption: "Radial menu — Pattern background" },
  { path: "assets/images/radial_printscreen.png", caption: "Radial menu — Printscreen submenu" },
  { path: "assets/images/radial_clear.png", caption: "Radial menu — Clear All sector" },
  { path: "assets/images/radial_settings.png", caption: "Radial menu — Settings sector" },
  { path: "assets/images/radial_slots.png", caption: "Radial menu — Slots sector" },
  { path: "assets/images/radial_label.png", caption: "Radial menu — Label Text" },
  { path: "assets/images/radial_pointer.png", caption: "Radial menu — Pointer mode" },
  { path: "assets/images/radial_visibility.png", caption: "Radial menu — Visibility toggle" },
  { path: "assets/images/radial_timer.png", caption: "Radial menu — Lifetime timer" },
  { path: "assets/images/radial_zoom.png", caption: "Radial menu — Zoom tool" },
  { path: "assets/images/settings_general.png", caption: "Settings — General tab" },
  { path: "assets/images/settings_shortcuts.png", caption: "Settings — Shortcuts tab" },
  { path: "assets/images/settings_tools_order.png", caption: "Settings — Tools order tab" },
  { path: "assets/images/settings_updates.png", caption: "Settings — Updates tab" },
  { path: "assets/images/settings_license.png", caption: "Settings — License tab" }
];

let mediaIndex = 0;

function renderMediaGrid() {
  const grid = document.querySelector("[data-media-grid]");
  if (!grid) return;
  grid.innerHTML = MEDIA_ITEMS.map((item, index) => `
    <div class="media-frame">
      <button class="media-card-btn" data-media-open="${index}" type="button">
        <img class="media-thumb" src="${item.path}" alt="${item.caption}" loading="lazy">
      </button>
      <p class="media-caption">${item.caption}</p>
    </div>
  `).join("");
}

function renderLightboxItem() {
  const viewer = document.querySelector("[data-media-viewer]");
  if (!viewer) return;
  const item = MEDIA_ITEMS[mediaIndex];
  viewer.innerHTML = `<img class="media-lightbox-media" src="${item.path}" alt="${item.caption}">`;
}

function openLightbox(index) {
  mediaIndex = index;
  const lightbox = document.querySelector("[data-media-lightbox]");
  if (!lightbox) return;
  renderLightboxItem();
  lightbox.hidden = false;
  document.body.classList.add("media-lightbox-open");
}

function closeLightbox() {
  const lightbox = document.querySelector("[data-media-lightbox]");
  if (!lightbox) return;
  lightbox.hidden = true;
  document.body.classList.remove("media-lightbox-open");
}

function shiftLightbox(step) {
  mediaIndex = (mediaIndex + step + MEDIA_ITEMS.length) % MEDIA_ITEMS.length;
  renderLightboxItem();
}

function bindMediaEvents() {
  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const opener = target.closest("[data-media-open]");
    if (opener instanceof HTMLElement) {
      const value = Number(opener.getAttribute("data-media-open"));
      if (Number.isInteger(value)) openLightbox(value);
      return;
    }
    if (target.closest("[data-media-close]")) { closeLightbox(); return; }
    if (target.closest("[data-media-prev]")) { shiftLightbox(-1); return; }
    if (target.closest("[data-media-next]")) { shiftLightbox(1); return; }
    if (target.matches("[data-media-lightbox]")) closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    const lightbox = document.querySelector("[data-media-lightbox]");
    if (!lightbox || lightbox.hidden) return;
    if (event.key === "Escape") closeLightbox();
    else if (event.key === "ArrowLeft") shiftLightbox(-1);
    else if (event.key === "ArrowRight") shiftLightbox(1);
  });
}

function initializeLatestDownloadLinks() {
  document.querySelectorAll("[data-latest-download]").forEach((link) => {
    if (link instanceof HTMLAnchorElement) link.href = LATEST_DOWNLOAD_URL;
  });
}

function initializeYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

renderMediaGrid();
bindMediaEvents();
initializeLatestDownloadLinks();
initializeYear();
