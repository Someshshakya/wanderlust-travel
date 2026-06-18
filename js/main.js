function getActivePage() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  return path;
}

function initNavigation() {
  const currentPage = getActivePage();
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });
}

function createCard(item) {
  const badgeClass = `badge-${item.category}`;
  const categoryLabel =
    item.category.charAt(0).toUpperCase() + item.category.slice(1);

  return `
    <article class="card" data-category="${item.category}">
      <img class="card-image" src="${item.image}" alt="${item.name}" loading="lazy" />
      <div class="card-body">
        <span class="card-badge ${badgeClass}">${categoryLabel}</span>
        <h3>${item.name}</h3>
        <p><strong>${item.location}</strong></p>
        <p>${item.description}</p>
      </div>
    </article>
  `;
}

function renderResults(items, container) {
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">🔍</div>
        <p>No recommendations found. Try searching for "beach", "temple", or a country name.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(createCard).join("");
}

function searchRecommendations(query) {
  const term = query.trim().toLowerCase();
  if (!term) return recommendations;

  return recommendations.filter(
    (item) =>
      item.name.toLowerCase().includes(term) ||
      item.category.toLowerCase().includes(term) ||
      item.location.toLowerCase().includes(term) ||
      item.description.toLowerCase().includes(term) ||
      item.keywords.some((kw) => kw.includes(term))
  );
}

function filterByCategory(category) {
  if (!category || category === "all") return recommendations;
  return recommendations.filter((item) => item.category === category);
}

function initSearch() {
  const searchInput = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");
  const resultsContainer = document.getElementById("results");
  const filterBtns = document.querySelectorAll(".filter-btn");

  if (!resultsContainer) return;

  let activeCategory = "all";

  function updateResults() {
    const query = searchInput ? searchInput.value : "";
    let items =
      activeCategory === "all"
        ? searchRecommendations(query)
        : searchRecommendations(query).filter(
            (item) => item.category === activeCategory
          );
    renderResults(items, resultsContainer);
  }

  if (searchBtn) {
    searchBtn.addEventListener("click", updateResults);
  }

  if (searchInput) {
    searchInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") updateResults();
    });
    searchInput.addEventListener("input", updateResults);
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.dataset.category;
      updateResults();
    });
  });

  updateResults();
}

function initHeroButtons() {
  const exploreBtn = document.getElementById("explore-btn");
  const beachBtn = document.getElementById("beach-btn");
  const templeBtn = document.getElementById("temple-btn");

  if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
      document.getElementById("recommendations")?.scrollIntoView({
        behavior: "smooth",
      });
    });
  }

  if (beachBtn) {
    beachBtn.addEventListener("click", () => {
      const searchInput = document.getElementById("search-input");
      const beachFilter = document.querySelector('[data-category="beach"]');
      if (searchInput) searchInput.value = "beach";
      beachFilter?.click();
      document.getElementById("recommendations")?.scrollIntoView({
        behavior: "smooth",
      });
    });
  }

  if (templeBtn) {
    templeBtn.addEventListener("click", () => {
      const searchInput = document.getElementById("search-input");
      const templeFilter = document.querySelector('[data-category="temple"]');
      if (searchInput) searchInput.value = "temple";
      templeFilter?.click();
      document.getElementById("recommendations")?.scrollIntoView({
        behavior: "smooth",
      });
    });
  }
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  const successMsg = document.getElementById("form-success");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (successMsg) {
      successMsg.classList.add("show");
      form.reset();
      setTimeout(() => successMsg.classList.remove("show"), 4000);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initSearch();
  initHeroButtons();
  initContactForm();
});
