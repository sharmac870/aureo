const cityData = {
  Delhi: {
    title: "Delhi",
    summary: "Where your journey lands: heritage, nightlife, and iconic food lanes.",
    hotels: ["The Lodhi", "The Claridges", "Haveli Dharampura", "Andaz Delhi"],
    places: ["Humayun's Tomb", "Qutub Minar", "India Gate", "Chandni Chowk"],
    food: ["Karim's", "Paranthe Wali Gali", "Indian Accent", "Pandara Road"],
    shopping: ["Dilli Haat", "Khan Market", "Janpath", "Dariba Kalan"],
    morning: ["Monument walk + museum", "Old Delhi heritage trail"],
    evening: ["Street-food crawl", "Market walk and cafe stop"],
  },
  Agra: {
    title: "Agra",
    summary: "Beyond the Taj: Mughal beauty, marble craft, and rich local flavors.",
    hotels: ["ITC Mughal", "Taj Hotel & Convention Centre", "Ekaa Villa", "The Coral Tree"],
    places: ["Taj Mahal", "Agra Fort", "Mehtab Bagh", "Itmad-ud-Daulah"],
    food: ["Bedai-Jalebi", "Pinch of Spice", "Peshawri", "Famous Petha Shops"],
    shopping: ["Sadar Bazaar", "Kinari Bazaar", "Marble Inlay Stores"],
    morning: ["Sunrise at Taj", "Fort and riverside viewpoint"],
    evening: ["Mughlai dinner trail", "Marble and textile shopping"],
  },
  Jaipur: {
    title: "Jaipur",
    summary: "Royal pink city with forts, artisan markets, and festive nights.",
    hotels: ["Samode Haveli", "ITC Rajputana", "The Johri", "Alsisar Haveli"],
    places: ["Amber Fort", "City Palace", "Jantar Mantar", "Nahargarh Fort"],
    food: ["Lassiwala", "Rawat Kachori", "Laal Maas", "Tapri Central"],
    shopping: ["Johari Bazaar", "Bapu Bazaar", "Tripolia", "Block Print Studios"],
    morning: ["Fort and palace highlights", "Stepwell and old city photo walk"],
    evening: ["Bazaar shopping and chai", "Rooftop dinner with live folk music"],
  },
  Jodhpur: {
    title: "Jodhpur",
    summary: "Blue lanes, mighty forts, bold flavors, and traditional textiles.",
    hotels: ["RAAS", "Ratan Vilas", "Pal Haveli", "Stepwell House"],
    places: ["Mehrangarh Fort", "Jaswant Thada", "Toorji Ka Jhalra", "Clock Tower"],
    food: ["Mirchi Vada", "Gypsy Thali", "Makhaniya Lassi", "Marwari Specials"],
    shopping: ["Clock Tower Market", "Mochi Bazaar", "Sojati Gate"],
    morning: ["Fort museum route", "Blue city walking trail"],
    evening: ["Spice and textile bazaar", "Traditional dinner setting"],
  },
  Udaipur: {
    title: "Udaipur",
    summary: "Lakeside romance with palace elegance and craft-rich bazaars.",
    hotels: ["Trident", "Amet Haveli", "Madri Haveli", "Lake Pichola Hotel"],
    places: ["City Palace", "Lake Pichola", "Bagore Ki Haveli", "Monsoon Palace"],
    food: ["Natraj Thali", "Ambrai", "Dal Baati", "Lakeside Cafe Breakfast"],
    shopping: ["Hathi Pol", "Bada Bazaar", "Shilpgram"],
    morning: ["Palace and ghat circuit", "Boat ride and local gallery visit"],
    evening: ["Sunset dinner by lake", "Handmade craft shopping"],
  },
};

const storyCards = [
  {
    title: "First Morning in Jaipur",
    text: "The excitement of your first fort view and a fresh local breakfast.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Sunrise at the Taj",
    text: "Soft marble tones, calm gardens, and that once-in-a-lifetime moment.",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Bazaar Rush",
    text: "Colorful alleys, handcrafted finds, and food aromas in every lane.",
    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80",
  },
];

const videoCollections = {
  Rajasthan: [
    { title: "Rajasthan Travel Guide", query: "Rajasthan travel guide" },
    { title: "Rajasthan Local Food Tour", query: "Rajasthan local food tour" },
    { title: "Rajasthan Shopping Guide", query: "Rajasthan bazaar shopping guide" },
  ],
  Jaipur: [
    { title: "Jaipur City Guide", query: "Jaipur travel vlog" },
    { title: "Jaipur Street Food", query: "Jaipur street food tour" },
    { title: "Jaipur Bazaar Shopping", query: "Jaipur shopping bazaar guide" },
  ],
  Agra: [
    { title: "Agra + Taj Mahal Guide", query: "Agra Taj Mahal travel guide" },
    { title: "Agra Food Walk", query: "Agra food tour" },
    { title: "Agra Market Walk", query: "Agra market shopping vlog" },
  ],
  Delhi: [
    { title: "Delhi Travel Guide", query: "Delhi travel guide" },
    { title: "Old Delhi Food Trail", query: "Old Delhi food tour" },
    { title: "Delhi Shopping Markets", query: "Delhi shopping markets guide" },
  ],
  Jodhpur: [
    { title: "Jodhpur Blue City Guide", query: "Jodhpur blue city travel guide" },
    { title: "Mehrangarh Fort Tips", query: "Mehrangarh Fort visit guide" },
    { title: "Jodhpur Food & Market", query: "Jodhpur food market vlog" },
  ],
  Udaipur: [
    { title: "Udaipur Travel Guide", query: "Udaipur travel guide" },
    { title: "Udaipur Lake City Itinerary", query: "Udaipur lake city itinerary" },
    { title: "Udaipur Food + Shopping", query: "Udaipur food shopping guide" },
  ],
};

const styleNotes = {
  balanced: "Balanced pace with highlights, local meals, and market windows.",
  luxury: "Premium stays and slower, comfort-first day design.",
  culture: "More heritage walks, food trails, and craft shopping immersion.",
};

const cityTabs = document.getElementById("city-tabs");
const cityContent = document.getElementById("city-content");
const storyGrid = document.getElementById("story-grid");
const plannerForm = document.getElementById("planner-form");
const itineraryResults = document.getElementById("itinerary-results");
const routeChip = document.getElementById("route-chip");
const plannerDestination = document.getElementById("planner-destination");
const videoCity = document.getElementById("video-city");
const videoGrid = document.getElementById("video-grid");
const heroDestination = document.getElementById("hero-destination");
const heroStartDate = document.getElementById("hero-start-date");
const heroEndDate = document.getElementById("hero-end-date");
const heroStartBtn = document.getElementById("hero-start-btn");
const heroValidation = document.getElementById("hero-validation");
const cityKeys = Object.keys(cityData);
let selectedDestination = "Delhi";

const listToHtml = (items) => `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;

function renderStories() {
  storyGrid.innerHTML = storyCards
    .map(
      (story) => `
      <article class="story-card">
        <img class="story-image" src="${story.image}" alt="${story.title}" loading="lazy" />
        <div class="story-copy">
          <h3>${story.title}</h3>
          <p>${story.text}</p>
        </div>
      </article>
    `,
    )
    .join("");
}

function renderCity(cityName) {
  const city = cityData[cityName];
  cityContent.innerHTML = `
    <div class="city-summary">
      <h3>${city.title}</h3>
      <p>${city.summary}</p>
    </div>
    <div class="info-grid">
      <article class="info-card"><h4>Hotels</h4>${listToHtml(city.hotels)}</article>
      <article class="info-card"><h4>Best Places</h4>${listToHtml(city.places)}</article>
      <article class="info-card"><h4>Local Food</h4>${listToHtml(city.food)}</article>
      <article class="info-card"><h4>Local Shopping</h4>${listToHtml(city.shopping)}</article>
    </div>
  `;
}

function setActiveTab(activeBtn) {
  const buttons = Array.from(document.querySelectorAll(".city-tabs button"));
  buttons.forEach((button) => {
    const isActive = button === activeBtn;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
    button.tabIndex = isActive ? 0 : -1;
  });
  cityContent.setAttribute("aria-labelledby", activeBtn.id);
  const selectedCity = activeBtn.dataset.city;
  selectedDestination = selectedCity;
  renderCity(selectedCity);
  heroDestination.value = selectedCity;
  if (videoCollections[selectedCity]) {
    videoCity.value = selectedCity;
    renderVideos(selectedCity);
  }
  generateItinerary(Number(document.getElementById("trip-days").value), document.getElementById("trip-style").value);
}

function bindTabKeyboard(tabButton) {
  tabButton.addEventListener("keydown", (event) => {
    const buttons = Array.from(document.querySelectorAll(".city-tabs button"));
    const current = buttons.indexOf(tabButton);
    let target = current;

    if (event.key === "ArrowRight") target = (current + 1) % buttons.length;
    if (event.key === "ArrowLeft") target = (current - 1 + buttons.length) % buttons.length;
    if (event.key === "Home") target = 0;
    if (event.key === "End") target = buttons.length - 1;

    if (target !== current) {
      event.preventDefault();
      buttons[target].focus();
      setActiveTab(buttons[target]);
    }
  });
}

function setupTabs() {
  cityKeys.forEach((city, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.role = "tab";
    btn.id = `tab-${city.toLowerCase()}`;
    btn.setAttribute("aria-controls", "city-content");
    btn.setAttribute("aria-selected", idx === 0 ? "true" : "false");
    btn.tabIndex = idx === 0 ? 0 : -1;
    btn.dataset.city = city;
    btn.textContent = city;
    if (idx === 0) btn.classList.add("active");

    btn.addEventListener("click", () => setActiveTab(btn));
    bindTabKeyboard(btn);
    cityTabs.appendChild(btn);
  });

  renderCity(cityKeys[0]);
}

function generateItinerary(days, style) {
  const city = cityData[selectedDestination];
  const cards = [];

  plannerDestination.textContent = `Planning for: ${selectedDestination}`;
  routeChip.textContent = `Destination: ${selectedDestination} | ${days} days | ${styleNotes[style]}`;

  for (let dayNumber = 1; dayNumber <= days; dayNumber += 1) {
    const idx = dayNumber - 1;
    cards.push(`
      <article class="day-card">
        <h3>Day ${dayNumber} • ${selectedDestination}</h3>
        <p><strong>Morning:</strong> ${city.morning[idx % city.morning.length]}</p>
        <p><strong>Place focus:</strong> ${city.places[idx % city.places.length]}</p>
        <p><strong>Evening:</strong> ${city.evening[idx % city.evening.length]}</p>
        <ul>
          <li><strong>Food:</strong> ${city.food[idx % city.food.length]}</li>
          <li><strong>Shopping:</strong> ${city.shopping[idx % city.shopping.length]}</li>
        </ul>
      </article>
    `);
  }

  itineraryResults.innerHTML = `<div class="day-grid">${cards.join("")}</div>`;
}

function createVideoCard(video, idx, region) {
  const encoded = encodeURIComponent(video.query);
  const embedSrc = `https://www.youtube.com/embed?listType=search&list=${encoded}`;
  return `
    <article class="video-card">
      <h3>${video.title}</h3>
      <p>${region}</p>
      <iframe
        class="video-frame"
        src="${embedSrc}"
        title="${video.title}"
        loading="lazy"
        referrerpolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </article>
  `;
}

function renderVideos(region) {
  const videos = videoCollections[region] || videoCollections.Rajasthan;
  videoGrid.innerHTML = videos.map((video, idx) => createVideoCard(video, idx, region)).join("");
}

function setupVideoFilter() {
  Object.keys(videoCollections).forEach((region) => {
    const option = document.createElement("option");
    option.value = region;
    option.textContent = region;
    videoCity.appendChild(option);
  });

  videoCity.value = "Delhi";
  renderVideos("Delhi");
  videoCity.addEventListener("change", () => {
    const region = videoCity.value;
    renderVideos(region);
    if (cityData[region]) {
      const destinationTab = document.getElementById(`tab-${region.toLowerCase()}`);
      if (destinationTab) destinationTab.click();
    }
  });
}

plannerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const days = Number(document.getElementById("trip-days").value);
  const style = document.getElementById("trip-style").value;
  generateItinerary(days, style);
});

function updateHeroStartButton() {
  heroValidation.textContent = "";
}

function calculateDays(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const ms = endDate.getTime() - startDate.getTime();
  const days = Math.floor(ms / (1000 * 60 * 60 * 24)) + 1;
  return Math.max(3, Math.min(12, days));
}

heroDestination.addEventListener("change", updateHeroStartButton);
heroStartDate.addEventListener("change", () => {
  heroEndDate.min = heroStartDate.value;
  updateHeroStartButton();
});
heroEndDate.addEventListener("change", updateHeroStartButton);

heroDestination.addEventListener("change", () => {
  if (!heroDestination.value) return;
  const destinationTab = document.getElementById(`tab-${heroDestination.value.toLowerCase()}`);
  if (destinationTab) destinationTab.click();
});

heroStartBtn.addEventListener("click", () => {
  const destination = heroDestination.value;
  const start = heroStartDate.value;
  const end = heroEndDate.value;
  if (!destination || !start || !end) {
    heroValidation.textContent = "Select destination, start date, and end date to continue.";
    return;
  }
  if (new Date(end) < new Date(start)) {
    heroValidation.textContent = "End date must be same as or after start date.";
    return;
  }
  heroValidation.textContent = "";

  const destinationTab = document.getElementById(`tab-${destination.toLowerCase()}`);
  if (destinationTab) {
    destinationTab.click();
  }

  const days = calculateDays(start, end);
  const tripDays = document.getElementById("trip-days");
  tripDays.value = String(days);
  generateItinerary(days, document.getElementById("trip-style").value);

  document.getElementById("planner").scrollIntoView({ behavior: "smooth", block: "start" });
});

renderStories();
setupTabs();
setupVideoFilter();
generateItinerary(3, "balanced");
