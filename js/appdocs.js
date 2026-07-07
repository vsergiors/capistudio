function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function renderCard(plugin) {
  const tags = (plugin.tags || [])
    .map(t => `<span class="tag">${escapeHtml(t)}</span>`)
    .join("");

  const meta = [plugin.version ? `v${plugin.version}` : null, plugin.mcVersion || null]
    .filter(Boolean)
    .join(" · ");

  const modrinthBtn = plugin.modrinth
    ? `<a class="primary" href="${plugin.modrinth}" target="_blank" rel="noopener">Modrinth</a>`
    : "";
  const spigotBtn = plugin.spigot
    ? `<a href="${plugin.spigot}" target="_blank" rel="noopener">Spigot</a>`
    : "";

  return `
    <div class="card" data-search="${escapeHtml((plugin.name + " " + plugin.description + " " + (plugin.tags || []).join(" ")).toLowerCase())}">
      <div class="card-top">
        <div class="card-icon">${plugin.icon || "⚙️"}</div>
      </div>
      <div>
        <h3>${escapeHtml(plugin.name)}</h3>
        ${meta ? `<div class="meta">${escapeHtml(meta)}</div>` : ""}
      </div>
      <p class="desc">${escapeHtml(plugin.description)}</p>
      ${tags ? `<div class="tags">${tags}</div>` : ""}
      ${(modrinthBtn || spigotBtn) ? `<div class="card-links">${modrinthBtn}${spigotBtn}</div>` : ""}
    </div>
  `;
}

function init() {
  const grid = document.getElementById("grid");
  const empty = document.getElementById("empty");
  const search = document.getElementById("search");
  const statCount = document.getElementById("statCount");

  const plugins = typeof PLUGINS !== "undefined" ? PLUGINS : [];
  statCount.textContent = plugins.length;

  grid.innerHTML = plugins.map(renderCard).join("");

  search.addEventListener("input", () => {
    const q = search.value.trim().toLowerCase();
    const cards = grid.querySelectorAll(".card");
    let visibleCount = 0;

    cards.forEach(card => {
      const match = card.dataset.search.includes(q);
      card.style.display = match ? "" : "none";
      if (match) visibleCount++;
    });

    empty.style.display = visibleCount === 0 ? "block" : "none";
  });
}

document.addEventListener("DOMContentLoaded", init);
