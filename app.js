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

const stayInventory = [
  {
    id: "stay-delhi-1",
    city: "Delhi",
    name: "The Lodhi Suites",
    type: "Luxury hotel",
    rating: 9.2,
    reviews: 1248,
    price: 18500,
    amenities: ["Airport transfer", "Spa", "Breakfast included"],
    freeCancellation: true,
    breakfast: true,
    payLater: true,
    deal: "Member offer 15% off",
  },
  {
    id: "stay-delhi-2",
    city: "Delhi",
    name: "Haveli Courtyard Stay",
    type: "Boutique stay",
    rating: 8.7,
    reviews: 789,
    price: 7100,
    amenities: ["Old Delhi tour desk", "Free Wi-Fi", "Family rooms"],
    freeCancellation: true,
    breakfast: false,
    payLater: true,
    deal: "Limited-time saver",
  },
  {
    id: "stay-agra-1",
    city: "Agra",
    name: "Mughal View Retreat",
    type: "Resort",
    rating: 8.9,
    reviews: 1541,
    price: 9600,
    amenities: ["Taj viewpoint terrace", "Pool", "Breakfast included"],
    freeCancellation: true,
    breakfast: true,
    payLater: false,
    deal: "Early booker 12% off",
  },
  {
    id: "stay-agra-2",
    city: "Agra",
    name: "Yamuna Riverside Inn",
    type: "Hotel",
    rating: 8.3,
    reviews: 652,
    price: 5200,
    amenities: ["River walk access", "Free parking", "Room service"],
    freeCancellation: false,
    breakfast: true,
    payLater: true,
    deal: "Weekend value rate",
  },
  {
    id: "stay-jaipur-1",
    city: "Jaipur",
    name: "Rajputana Heritage House",
    type: "Heritage hotel",
    rating: 9.1,
    reviews: 2324,
    price: 11200,
    amenities: ["Courtyard dining", "Cultural evenings", "Breakfast included"],
    freeCancellation: true,
    breakfast: true,
    payLater: true,
    deal: "Top pick in Jaipur",
  },
  {
    id: "stay-jaipur-2",
    city: "Jaipur",
    name: "Pink City Urban Stay",
    type: "City hotel",
    rating: 8.4,
    reviews: 978,
    price: 4800,
    amenities: ["Near metro", "Business lounge", "Fast check-in"],
    freeCancellation: true,
    breakfast: false,
    payLater: true,
    deal: "Smart saver",
  },
  {
    id: "stay-jodhpur-1",
    city: "Jodhpur",
    name: "Blue Fort Residency",
    type: "Boutique hotel",
    rating: 8.8,
    reviews: 1103,
    price: 6900,
    amenities: ["Fort shuttle", "Rooftop dining", "Breakfast included"],
    freeCancellation: true,
    breakfast: true,
    payLater: false,
    deal: "Hidden gem",
  },
  {
    id: "stay-udaipur-1",
    city: "Udaipur",
    name: "Lake Pichola Palace Stay",
    type: "Lakefront hotel",
    rating: 9.4,
    reviews: 1984,
    price: 16700,
    amenities: ["Lake view rooms", "Boat pickup", "Spa"],
    freeCancellation: true,
    breakfast: true,
    payLater: true,
    deal: "Premium lake deal",
  },
];

const excursionsByCity = {
  Delhi: [
    { name: "Old Delhi Street Food Trail", duration: "4 hrs", type: "Food + Culture" },
    { name: "Humayun to Lodhi Heritage Walk", duration: "3 hrs", type: "History" },
    { name: "Night Market & Craft Hop", duration: "3 hrs", type: "Shopping" },
    { name: "Akshardham + Riverfront Evening", duration: "5 hrs", type: "Family" },
  ],
  Agra: [
    { name: "Sunrise Taj + Photographer Session", duration: "3 hrs", type: "Iconic" },
    { name: "Marble Inlay Workshop Visit", duration: "2 hrs", type: "Craft" },
    { name: "Agra Fort + Mehtab Bagh Combo", duration: "4 hrs", type: "History" },
    { name: "Mughlai Dinner Crawl", duration: "3 hrs", type: "Food" },
  ],
  Jaipur: [
    { name: "Amber Fort Express Excursion", duration: "4 hrs", type: "Heritage" },
    { name: "Block Printing Hands-on Tour", duration: "3 hrs", type: "Craft" },
    { name: "Pink City Bazaar Shopping Run", duration: "3 hrs", type: "Shopping" },
    { name: "Folk Music Rooftop Evening", duration: "3 hrs", type: "Cultural" },
  ],
  Jodhpur: [
    { name: "Blue City Walking Circuit", duration: "3 hrs", type: "Culture" },
    { name: "Mehrangarh Guided Tour", duration: "3 hrs", type: "Heritage" },
    { name: "Spice Market Experience", duration: "2 hrs", type: "Food" },
    { name: "Village Safari Half Day", duration: "5 hrs", type: "Rural" },
  ],
  Udaipur: [
    { name: "Lake Pichola Sunset Cruise", duration: "2 hrs", type: "Scenic" },
    { name: "City Palace Curated Visit", duration: "3 hrs", type: "Heritage" },
    { name: "Artisan Studio Trail", duration: "3 hrs", type: "Craft" },
    { name: "Kumbhalgarh Day Excursion", duration: "8 hrs", type: "Day Trip" },
  ],
};

const destinationInsights = {
  Delhi: { culture: 90, food: 94, nightlife: 82, shopping: 88 },
  Agra: { culture: 96, food: 84, nightlife: 62, shopping: 76 },
  Jaipur: { culture: 93, food: 87, nightlife: 81, shopping: 92 },
  Jodhpur: { culture: 88, food: 82, nightlife: 67, shopping: 79 },
  Udaipur: { culture: 91, food: 85, nightlife: 74, shopping: 83 },
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

const offerModules = [
  {
    kicker: "Partner Program",
    title: "Aureo Plus Member Prices",
    text: "Signed-in members unlock an additional 10-15% discount on selected stays and airport transfers.",
  },
  {
    kicker: "Cross-Sell",
    title: "Stay + Experiences Bundle",
    text: "Attach city tours and food walks at checkout for higher cart value and smoother planning.",
  },
  {
    kicker: "Retention",
    title: "Free Cancellation Window",
    text: "Flexible inventory options reduce hesitation and improve completed booking rates.",
  },
];

const styleNotes = {
  balanced: "Balanced pace with highlights, local meals, and market windows.",
  luxury: "Premium stays and slower, comfort-first day design.",
  culture: "More heritage walks, food trails, and craft shopping immersion.",
};

const cityTabs = document.getElementById("city-tabs");
const cityContent = document.getElementById("city-content");
const storyGrid = document.getElementById("story-grid");
const storyInsights = document.getElementById("story-insights");
const plannerForm = document.getElementById("planner-form");
const itineraryResults = document.getElementById("itinerary-results");
const routeChip = document.getElementById("route-chip");
const plannerDestination = document.getElementById("planner-destination");
const excursionsResults = document.getElementById("excursions-results");
const videoCity = document.getElementById("video-city");
const videoGrid = document.getElementById("video-grid");
const heroDestination = document.getElementById("hero-destination");
const heroStartDate = document.getElementById("hero-start-date");
const heroEndDate = document.getElementById("hero-end-date");
const heroGuests = document.getElementById("hero-guests");
const heroStartBtn = document.getElementById("hero-start-btn");
const heroValidation = document.getElementById("hero-validation");
const staysCity = document.getElementById("stays-city");
const staysSort = document.getElementById("stays-sort");
const staysBudget = document.getElementById("stays-budget");
const staysBudgetNote = document.getElementById("stays-budget-note");
const staysMeta = document.getElementById("stays-meta");
const staysGrid = document.getElementById("stays-grid");
const dealsMeta = document.getElementById("deals-meta");
const dealsGrid = document.getElementById("deals-grid");
const bookingConfirmation = document.getElementById("booking-confirmation");
const filterCancel = document.getElementById("filter-cancel");
const filterBreakfast = document.getElementById("filter-breakfast");
const filterPayLater = document.getElementById("filter-paylater");
const offersGrid = document.getElementById("offers-grid");
const bookingModal = document.getElementById("booking-modal");
const bookingForm = document.getElementById("booking-form");
const modalStayName = document.getElementById("modal-stay-name");
const modalStayPrice = document.getElementById("modal-stay-price");
const modalStayId = document.getElementById("modal-stay-id");
const modalStayPriceInput = document.getElementById("modal-stay-price-input");
const modalCheckin = document.getElementById("modal-checkin");
const modalCheckout = document.getElementById("modal-checkout");
const modalGuests = document.getElementById("modal-guests");
const districtCta = document.getElementById("district-cta");
const districtLocation = document.getElementById("district-location");
const cityKeys = Object.keys(cityData);
let selectedDestination = "Delhi";

const listToHtml = (items) => `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;

function formatInr(value) {
  return new Intl.NumberFormat("en-IN").format(value);
}

function calculateDays(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const ms = endDate.getTime() - startDate.getTime();
  const days = Math.floor(ms / (1000 * 60 * 60 * 24)) + 1;
  return Math.max(1, days);
}

function getTripDays() {
  const selected = Number(document.getElementById("trip-days").value);
  return Number.isNaN(selected) ? 3 : selected;
}

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

function renderStoryInsights(city) {
  const insights = destinationInsights[city] || destinationInsights.Delhi;
  const rows = Object.entries(insights)
    .map(
      ([label, score]) => `
        <div class="insight-row">
          <strong>${label.charAt(0).toUpperCase()}${label.slice(1)}</strong>
          <span class="insight-track"><span class="insight-fill" style="width:${score}%"></span></span>
          <span>${score}</span>
        </div>
      `,
    )
    .join("");

  storyInsights.innerHTML = `
    <h3>${city} Snapshot</h3>
    <p>Live destination visualization to guide planning intent and campaign messaging.</p>
    <div class="insight-bars">${rows}</div>
  `;
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

function renderExcursions(city, days) {
  const excursions = excursionsByCity[city] || [];
  const count = Math.min(excursions.length, Math.max(2, Math.ceil(days / 2)));
  const selectedExcursions = excursions.slice(0, count);

  excursionsResults.innerHTML = `
    <h3>Recommended Local Excursions (${city})</h3>
    <div class="excursion-grid">
      ${selectedExcursions
        .map(
          (item) => `
          <article class="excursion-card">
            <h4>${item.name}</h4>
            <p>${item.type} • ${item.duration}</p>
          </article>
        `,
        )
        .join("")}
    </div>
  `;
}

function updateDistrictLinks(city) {
  const cityQuery = encodeURIComponent(city);
  if (districtCta) {
    districtCta.href = `https://www.district.in/search?query=${cityQuery}`;
    districtCta.textContent = `Open District for ${city}`;
  }
  if (districtLocation) districtLocation.textContent = `District location: ${city}`;
}

function cardTags(stay) {
  const tags = [];
  if (stay.freeCancellation) tags.push("Free cancellation");
  if (stay.breakfast) tags.push("Breakfast included");
  if (stay.payLater) tags.push("Pay at property");
  if (stay.deal) tags.push(stay.deal);
  return tags;
}

function renderDeals(preferredStayId) {
  const deals = stayInventory.filter((stay) => stay.city === selectedDestination);
  if (preferredStayId) {
    deals.sort((a, b) => (a.id === preferredStayId ? -1 : b.id === preferredStayId ? 1 : 0));
  }

  dealsMeta.textContent = `Deals for ${selectedDestination} • ${getTripDays()} day trip • ${heroGuests.value} guest(s)`;

  dealsGrid.innerHTML = deals
    .map(
      (stay) => `
      <article class="deal-card">
        <div class="deal-head">
          <div>
            <h3>${stay.name}</h3>
            <p>${stay.type} • Rating ${stay.rating} • ${stay.reviews} reviews</p>
          </div>
          <p class="deal-price">INR ${formatInr(stay.price)}/night</p>
        </div>
        <p>${stay.deal}</p>
        <div class="stay-tags">${cardTags(stay)
          .map((tag) => `<span class="stay-tag">${tag}</span>`)
          .join("")}</div>
        <div class="deal-actions">
          <button class="btn" type="button" data-open-stay="${stay.id}">Show Deal</button>
          <button class="btn btn-primary deal-book-btn" type="button" data-stay-id="${stay.id}">Book This Hotel</button>
        </div>
      </article>
    `,
    )
    .join("");
}

function openBookingModal(stayId) {
  const stay = stayInventory.find((item) => item.id === stayId);
  if (!stay) return;

  modalStayName.textContent = `Book ${stay.name}`;
  modalStayPrice.textContent = `INR ${formatInr(stay.price)} per night`;
  modalStayId.value = stay.id;
  modalStayPriceInput.value = String(stay.price);
  modalCheckin.value = heroStartDate.value;
  modalCheckout.value = heroEndDate.value;
  modalGuests.value = heroGuests.value;
  bookingForm.reset();
  modalStayId.value = stay.id;
  modalStayPriceInput.value = String(stay.price);
  modalCheckin.value = heroStartDate.value;
  modalCheckout.value = heroEndDate.value;
  modalGuests.value = heroGuests.value;

  bookingModal.showModal();
}

function openDeals(preferredStayId) {
  renderDeals(preferredStayId);
  window.location.hash = "deals";
  document.getElementById("deals").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderStays() {
  const city = staysCity.value || selectedDestination;
  const sort = staysSort.value;
  const maxBudget = Number(staysBudget.value);

  staysBudgetNote.textContent = `Showing stays up to INR ${formatInr(maxBudget)} per night`;

  let filtered = stayInventory.filter((stay) => stay.city === city && stay.price <= maxBudget);
  if (filterCancel.checked) filtered = filtered.filter((stay) => stay.freeCancellation);
  if (filterBreakfast.checked) filtered = filtered.filter((stay) => stay.breakfast);
  if (filterPayLater.checked) filtered = filtered.filter((stay) => stay.payLater);

  if (sort === "priceLow") filtered.sort((a, b) => a.price - b.price);
  if (sort === "priceHigh") filtered.sort((a, b) => b.price - a.price);
  if (sort === "ratingHigh") filtered.sort((a, b) => b.rating - a.rating);
  if (sort === "recommended") {
    filtered.sort((a, b) => b.rating * 100 + b.reviews - (a.rating * 100 + a.reviews));
  }

  staysMeta.textContent = `${filtered.length} stays found in ${city}`;
  staysGrid.innerHTML = filtered.length
    ? filtered
        .map((stay) => {
          const tags = cardTags(stay)
            .map((tag) => `<span class="stay-tag">${tag}</span>`)
            .join("");
          const amenities = stay.amenities.map((item) => `<li>${item}</li>`).join("");
          return `
            <article class="stay-card">
              <div class="stay-top">
                <div>
                  <h3>${stay.name}</h3>
                  <p class="stay-type">${stay.type} • ${stay.reviews} reviews</p>
                </div>
                <span class="stay-rating">${stay.rating}</span>
              </div>
              <ul class="stay-amenities">${amenities}</ul>
              <div class="stay-bottom">
                <div>
                  <div class="stay-price">INR ${formatInr(stay.price)}</div>
                  <div class="stay-per">per night</div>
                </div>
                <button class="btn btn-primary view-deal-btn" type="button" data-stay-id="${stay.id}">View Deal</button>
              </div>
              <div class="stay-tags">${tags}</div>
            </article>
          `;
        })
        .join("")
    : `<article class="stay-card"><h3>No exact matches</h3><p class="stay-type">Try increasing budget or disabling one filter.</p></article>`;
}

function renderOffers() {
  offersGrid.innerHTML = offerModules
    .map(
      (offer) => `
      <article class="offer-card">
        <p class="offer-kicker">${offer.kicker}</p>
        <h3>${offer.title}</h3>
        <p>${offer.text}</p>
      </article>
    `,
    )
    .join("");
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
  renderExcursions(selectedDestination, days);
}

function createVideoCard(video, region) {
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
  videoGrid.innerHTML = videos.map((video) => createVideoCard(video, region)).join("");
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
  selectedDestination = activeBtn.dataset.city;
  heroDestination.value = selectedDestination;
  staysCity.value = selectedDestination;

  renderCity(selectedDestination);
  renderStoryInsights(selectedDestination);
  renderStays();
  renderDeals();
  updateDistrictLinks(selectedDestination);

  if (videoCollections[selectedDestination]) {
    videoCity.value = selectedDestination;
    renderVideos(selectedDestination);
  }

  const days = Number(document.getElementById("trip-days").value);
  generateItinerary(days, document.getElementById("trip-style").value);
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

function setupStays() {
  cityKeys.forEach((city) => {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    staysCity.appendChild(option);
  });

  staysCity.value = selectedDestination;
  [staysCity, staysSort, staysBudget, filterCancel, filterBreakfast, filterPayLater].forEach((control) => {
    control.addEventListener("change", renderStays);
    control.addEventListener("input", renderStays);
  });

  staysGrid.addEventListener("click", (event) => {
    const button = event.target.closest(".view-deal-btn");
    if (!button) return;
    openDeals(button.dataset.stayId);
  });

  renderStays();
}

function setupDeals() {
  dealsGrid.addEventListener("click", (event) => {
    const bookBtn = event.target.closest(".deal-book-btn");
    if (bookBtn) {
      openBookingModal(bookBtn.dataset.stayId);
      return;
    }

    const showBtn = event.target.closest("[data-open-stay]");
    if (showBtn) {
      openDeals(showBtn.dataset.openStay);
    }
  });
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

function setupBookingModal() {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(bookingForm);
    const checkin = data.get("checkin");
    const checkout = data.get("checkout");

    if (new Date(checkout) < new Date(checkin)) {
      bookingConfirmation.textContent = "Check-out date must be after check-in date.";
      return;
    }

    const nights = Math.max(1, calculateDays(checkin, checkout) - 1);
    const total = Number(data.get("stay-price")) * nights;

    bookingConfirmation.textContent = `Booking confirmed for ${data.get("name")}. Total payable INR ${formatInr(total)} for ${nights} night(s). Confirmation sent to ${data.get("email")}.`;
    bookingModal.close();
    bookingConfirmation.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

plannerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const days = Number(document.getElementById("trip-days").value);
  const style = document.getElementById("trip-style").value;
  generateItinerary(days, style);
  renderDeals();
});

function updateHeroStartButton() {
  heroValidation.textContent = "";
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

  const destinationTab = document.getElementById(`tab-${destination.toLowerCase()}`);
  if (destinationTab) destinationTab.click();

  const days = Math.max(3, Math.min(12, calculateDays(start, end)));
  const tripDays = document.getElementById("trip-days");
  tripDays.value = String(days);
  generateItinerary(days, document.getElementById("trip-style").value);

  staysCity.value = destination;
  renderStays();
  renderDeals();

  heroValidation.textContent = `Trip setup complete for ${heroGuests.value} guest(s).`;
  document.getElementById("planner").scrollIntoView({ behavior: "smooth", block: "start" });
});

renderStories();
setupTabs();
setupStays();
setupDeals();
setupVideoFilter();
setupBookingModal();
renderOffers();
renderStoryInsights(selectedDestination);
updateDistrictLinks(selectedDestination);
generateItinerary(3, "balanced");
renderDeals();
