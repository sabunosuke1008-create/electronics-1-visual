(() => {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const state = {
    category: "all",
    query: "",
    currentId: null,
  };

  // ===== Theme =====
  function initTheme() {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = saved || (prefersDark ? "dark" : "light");
    document.documentElement.dataset.theme = theme;
    const btn = $("#theme-toggle");
    btn.textContent = theme === "dark" ? "☀️" : "🌙";
    btn.addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      localStorage.setItem("theme", next);
      btn.textContent = next === "dark" ? "☀️" : "🌙";
    });
  }

  // ===== Categories =====
  function renderCategories() {
    const nav = $("#category-nav");
    nav.innerHTML = categories
      .map(
        (c) =>
          `<button class="cat-btn${c.id === state.category ? " active" : ""}" data-cat="${c.id}">${c.name}</button>`
      )
      .join("");
    nav.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-cat]");
      if (!btn) return;
      state.category = btn.dataset.cat;
      $$(".cat-btn", nav).forEach((b) => b.classList.toggle("active", b === btn));
      renderList();
    });
  }

  // ===== List =====
  function filteredTerms() {
    const q = state.query.trim().toLowerCase();
    return terms.filter((t) => {
      if (state.category !== "all" && t.category !== state.category) return false;
      if (!q) return true;
      const hay = `${t.name} ${t.oneLiner} ${t.meaning || ""} ${t.id}`.toLowerCase();
      return hay.includes(q);
    });
  }

  function renderList() {
    const list = $("#term-list");
    const items = filteredTerms();
    $("#result-count").textContent = `${items.length}件`;
    if (items.length === 0) {
      list.innerHTML = `<li style="cursor:default;color:var(--muted);text-align:center;padding:20px">該当なし</li>`;
      return;
    }
    list.innerHTML = items
      .map(
        (t) => `
        <li data-id="${t.id}" class="${t.id === state.currentId ? "active" : ""}">
          <span class="term-no">${t.no ?? ""}</span>
          <span class="cat-dot cat-${t.category}"></span>
          <span class="term-name-li">${t.name}</span>
        </li>`
      )
      .join("");
    list.addEventListener(
      "click",
      (e) => {
        const li = e.target.closest("li[data-id]");
        if (!li) return;
        location.hash = li.dataset.id;
      },
      { once: true }
    );
  }

  // ===== Detail =====
  function renderDetail(id) {
    const term = terms.find((t) => t.id === id);
    const detail = $("#detail");
    if (!term) {
      detail.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">⚡</div>
          <p>左の一覧から用語を選ぶと、図解と説明が表示されます。</p>
          <p class="hint">スマホでは下にスクロールしてください。</p>
        </div>`;
      return;
    }
    state.currentId = id;
    $$("#term-list li").forEach((li) => li.classList.toggle("active", li.dataset.id === id));

    const catLabel = (categories.find((c) => c.id === term.category) || {}).name || "";

    const formulaHTML = term.formula
      ? `<div class="section">
           <h3>📐 数式</h3>
           <div class="formula">
             ${term.formula.expr}
             <span class="plain">${term.formula.plain}</span>
           </div>
         </div>`
      : "";

    const mistakesHTML =
      term.mistakes && term.mistakes.length
        ? `<div class="section">
             <h3>⚠️ よくある間違い</h3>
             <div class="mistakes"><ul>${term.mistakes.map((m) => `<li>${m}</li>`).join("")}</ul></div>
           </div>`
        : "";

    const relatedHTML =
      term.related && term.related.length
        ? `<div class="section">
             <h3>🔁 関連する用語との違い</h3>
             <div class="related">
               ${term.related
                 .map((r) => {
                   const tgt = terms.find((t) => t.id === r.id);
                   const name = tgt ? tgt.name : r.id;
                   return `<div class="related-item" data-jump="${r.id}"><strong>→ ${name}</strong>${r.diff}</div>`;
                 })
                 .join("")}
             </div>
           </div>`
        : "";

    detail.innerHTML = `
      <article class="term-card">
        <header class="term-header">
          <span class="term-no-badge">No.${term.no ?? "-"}</span>
          <h2 class="term-name">${term.name}</h2>
          <span style="color:var(--muted);font-size:12px">${catLabel}</span>
        </header>
        <div class="one-liner">💡 ${term.oneLiner}</div>

        <div class="section">
          <h3>📖 意味</h3>
          <p>${term.meaning}</p>
        </div>

        <div class="section">
          <h3>🎨 図で見る</h3>
          <div class="svg-box">${term.svg || "<p style='color:var(--muted)'>図は準備中です</p>"}</div>
        </div>

        <div class="section">
          <h3>⚙️ 原理（なぜそうなる？）</h3>
          <p>${term.principle}</p>
        </div>

        ${formulaHTML}
        ${mistakesHTML}
        ${relatedHTML}
      </article>
    `;

    $$(".related-item").forEach((el) => {
      el.addEventListener("click", () => {
        location.hash = el.dataset.jump;
      });
    });

    detail.scrollTop = 0;
    if (window.matchMedia("(max-width:860px)").matches) {
      detail.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  // ===== Hash routing =====
  function handleHash() {
    const id = decodeURIComponent(location.hash.replace(/^#/, ""));
    if (id) renderDetail(id);
    else renderDetail(null);
  }

  // ===== Search =====
  function initSearch() {
    const input = $("#search");
    let timer;
    input.addEventListener("input", () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        state.query = input.value;
        renderList();
      }, 80);
    });
  }

  // ===== Compare dialog =====
  function initCompare() {
    const dlg = $("#compare-dialog");
    const content = $("#compare-content");
    $("#show-compare").addEventListener("click", () => {
      content.innerHTML = comparisons
        .map(
          (cmp) => `
          <section class="compare-section">
            <h3>${cmp.title}</h3>
            <div style="overflow-x:auto">
              <table class="compare-table">
                <thead><tr>${cmp.headers.map((h) => `<th>${h}</th>`).join("")}</tr></thead>
                <tbody>${cmp.rows
                  .map(
                    (row) =>
                      `<tr>${row.map((c) => `<td>${c}</td>`).join("")}</tr>`
                  )
                  .join("")}</tbody>
              </table>
            </div>
          </section>`
        )
        .join("");
      if (typeof dlg.showModal === "function") dlg.showModal();
      else dlg.setAttribute("open", "");
    });
    $("#compare-close").addEventListener("click", () => dlg.close());
    dlg.addEventListener("click", (e) => {
      const rect = dlg.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        dlg.close();
      }
    });
  }

  // ===== Boot =====
  document.addEventListener("DOMContentLoaded", () => {
    if (typeof terms === "undefined" || typeof categories === "undefined") {
      $("#detail").innerHTML = `<div class="empty-state"><div class="empty-icon">⚠️</div><p>データの読み込みに失敗しました。</p></div>`;
      return;
    }
    initTheme();
    renderCategories();
    renderList();
    initSearch();
    initCompare();
    window.addEventListener("hashchange", handleHash);
    handleHash();

    // Delegated click for list (because innerHTML replaces nodes)
    $("#term-list").addEventListener("click", (e) => {
      const li = e.target.closest("li[data-id]");
      if (!li) return;
      location.hash = li.dataset.id;
    });
  });
})();
