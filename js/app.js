/* God Roll Armory — filtering, rendering, interaction. No dependencies. */
(function () {
  "use strict";

  const ELEMENT_NAMES = {
    kinetic: "Kinetic", arc: "Arc", solar: "Solar",
    void: "Void", stasis: "Stasis", strand: "Strand"
  };
  const TIER_ORDER = { S: 0, A: 1, B: 2 };
  const SOURCE_LABELS = {
    raid: "Raid", dungeon: "Dungeon", nightfall: "Nightfall",
    trials: "Trials", crucible: "Crucible", world: "World & Seasonal",
    exotic: "Exotic"
  };

  const state = {
    mode: "pve",
    q: "",
    types: new Set(),
    elems: new Set(),
    source: "all",
    sort: "tier"
  };

  const grid = document.getElementById("grid");
  const resultLine = document.getElementById("result-line");
  const emptyBox = document.getElementById("empty");
  const searchInput = document.getElementById("search");

  /* ------------------------------------------------------------ helpers */

  function esc(s) {
    return String(s).replace(/[&<>"']/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }

  function lightggUrl(name) {
    return "https://www.light.gg/db/search?q=" + encodeURIComponent(name);
  }

  function rollPerkNames(roll) {
    if (!roll) return [];
    return [roll.barrel, roll.mag, ...(roll.traits || [])].filter(Boolean);
  }

  /* ---------------------------------------------------------- filtering */

  function matches(w) {
    if (state.types.size && !state.types.has(w.type)) return false;
    if (state.elems.size && !state.elems.has(w.element)) return false;
    if (state.source !== "all" && w.source.cat !== state.source) return false;

    if (state.q) {
      const hay = [
        w.name, w.sub, w.type, w.frame, w.source.name,
        ELEMENT_NAMES[w.element],
        ...rollPerkNames(w.pve), ...rollPerkNames(w.pvp)
      ].filter(Boolean).join(" ").toLowerCase();
      if (!hay.includes(state.q)) return false;
    }
    return true;
  }

  function sortWeapons(list) {
    const bySort = {
      tier: (a, b) => (TIER_ORDER[a.tier] - TIER_ORDER[b.tier]) || a.name.localeCompare(b.name),
      name: (a, b) => a.name.localeCompare(b.name),
      type: (a, b) => a.type.localeCompare(b.type) || a.name.localeCompare(b.name)
    };
    return [...list].sort(bySort[state.sort] || bySort.tier);
  }

  /* ---------------------------------------------------------- rendering */

  function socketHtml(slotLabel, perkName, opts) {
    const hot = opts && opts.hot;
    const mw = opts && opts.mw;
    const tip = hot && PERKS[perkName] ? PERKS[perkName] : null;
    const cls = "perk" + (hot ? " hot" : "") + (mw ? " mw" : "");
    const tipAttrs = tip
      ? ' data-tip="' + esc(tip) + '" tabindex="0" role="note" aria-label="' + esc(perkName + ": " + tip) + '"'
      : "";
    return '<li class="' + cls + '"' + tipAttrs + ">" +
      '<span class="node" aria-hidden="true"></span>' +
      '<span class="slot-label">' + esc(slotLabel) + "</span>" +
      '<span class="p-name">' + esc(perkName) + "</span></li>";
  }

  function rollHtml(w, roll, modeLabel) {
    if (!roll) {
      return '<div class="roll"><p class="roll-label">' + modeLabel + " god roll</p>" +
        '<p class="no-roll">No standout ' + modeLabel + " roll — this one earns its slot elsewhere.</p></div>";
    }
    const sockets = [];
    if (roll.barrel) sockets.push(socketHtml("Barrel", roll.barrel, {}));
    if (roll.mag) sockets.push(socketHtml("Mag", roll.mag, {}));
    (roll.traits || []).forEach(t => sockets.push(socketHtml("Trait", t, { hot: true })));
    if (roll.mw) sockets.push(socketHtml("MW", roll.mw, { mw: true }));

    return '<div class="roll"><p class="roll-label"><b>' + modeLabel + "</b> god roll</p>" +
      '<ol class="sockets">' + sockets.join("") + "</ol>" +
      (roll.why ? '<p class="why">' + esc(roll.why) + "</p>" : "") +
      "</div>";
  }

  function cardHtml(w, index) {
    const roll = state.mode === "pve" ? w.pve : w.pvp;
    const modeLabel = state.mode === "pve" ? "PvE" : "PvP";
    const sub = w.sub ? ' <span class="sub">(' + esc(w.sub) + ")</span>" : "";
    const src = esc(w.source.name) +
      (SOURCE_LABELS[w.source.cat] && w.source.cat !== "exotic"
        ? " — " + SOURCE_LABELS[w.source.cat] : "");

    return '<article class="card elem-' + w.element + " tier-" + w.tier +
      " rarity-" + w.rarity + '" style="--i:' + Math.min(index, 20) + '">' +
      '<div class="card-strip" aria-hidden="true"></div>' +
      '<div class="card-top"><div>' +
      '<h3 class="w-name">' + esc(w.name) + sub + "</h3>" +
      '<p class="w-meta"><span class="type-badge">' + esc(w.badge) + "</span> " +
      esc(w.frame || w.type) +
      ' <span class="w-elem"><span class="gem" aria-hidden="true"></span>' +
      ELEMENT_NAMES[w.element] + "</span></p>" +
      '<p class="w-src">' + src + "</p>" +
      '</div><span class="tier-mark" title="Tier ' + w.tier + '">' + w.tier + "</span></div>" +
      rollHtml(w, roll, modeLabel) +
      '<div class="card-foot">' +
      '<a href="' + lightggUrl(w.name) + '" target="_blank" rel="noopener">Full perk pool on light.gg ↗</a>' +
      (w.craftable ? '<span class="craftable">Craftable</span>' : "") +
      "</div></article>";
  }

  function render() {
    const shown = sortWeapons(WEAPONS.filter(matches));
    grid.innerHTML = shown.map(cardHtml).join("");
    emptyBox.hidden = shown.length > 0;
    resultLine.textContent = shown.length + " of " + WEAPONS.length +
      " weapons · showing " + (state.mode === "pve" ? "PvE" : "PvP") + " rolls";
  }

  /* ------------------------------------------------------------ controls */

  function buildChips() {
    const typeWrap = document.getElementById("type-chips");
    const types = [...new Set(WEAPONS.map(w => w.type))].sort();
    typeWrap.innerHTML = types.map(t =>
      '<button type="button" class="chip" data-type="' + esc(t) + '" aria-pressed="false">' + esc(t) + "</button>"
    ).join("");

    const elemWrap = document.getElementById("elem-chips");
    const elems = ["kinetic", "arc", "solar", "void", "stasis", "strand"]
      .filter(e => WEAPONS.some(w => w.element === e));
    elemWrap.innerHTML = elems.map(e =>
      '<button type="button" class="chip chip-elem" data-elem="' + e + '" aria-pressed="false" style="--gem:var(--' + e + ')">' +
      '<span class="gem" aria-hidden="true"></span>' + ELEMENT_NAMES[e] + "</button>"
    ).join("");
  }

  function toggleChip(btn, set, value) {
    const on = btn.getAttribute("aria-pressed") === "true";
    btn.setAttribute("aria-pressed", String(!on));
    if (on) set.delete(value); else set.add(value);
    render();
  }

  function resetFilters() {
    state.q = "";
    state.types.clear();
    state.elems.clear();
    state.source = "all";
    searchInput.value = "";
    document.getElementById("source-select").value = "all";
    document.querySelectorAll(".chip[aria-pressed='true']")
      .forEach(c => c.setAttribute("aria-pressed", "false"));
    render();
  }

  document.addEventListener("click", e => {
    const modeBtn = e.target.closest("[data-mode-btn]");
    if (modeBtn) {
      state.mode = modeBtn.dataset.modeBtn;
      document.body.dataset.mode = state.mode;
      document.querySelectorAll("[data-mode-btn]").forEach(b =>
        b.setAttribute("aria-pressed", String(b === modeBtn)));
      render();
      return;
    }
    const typeChip = e.target.closest(".chip[data-type]");
    if (typeChip) { toggleChip(typeChip, state.types, typeChip.dataset.type); return; }

    const elemChip = e.target.closest(".chip[data-elem]");
    if (elemChip) { toggleChip(elemChip, state.elems, elemChip.dataset.elem); return; }

    if (e.target.closest("#reset-btn") || e.target.closest("[data-reset]")) resetFilters();
  });

  searchInput.addEventListener("input", () => {
    state.q = searchInput.value.trim().toLowerCase();
    render();
  });

  document.getElementById("source-select").addEventListener("change", e => {
    state.source = e.target.value;
    render();
  });

  document.getElementById("sort-select").addEventListener("change", e => {
    state.sort = e.target.value;
    render();
  });

  /* --------------------------------------------------------------- init */

  buildChips();
  render();
})();
