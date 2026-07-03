const estateImage = "url('assets/san-pedro-estate.png')";

const icons = {
  activity: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 12h-4l-3 8-6-16-3 8H2"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m13 2-9 14h7l-1 6 10-15h-7l1-5Z"/></svg>',
  camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m15 10 4.5-2.5v9L15 14"/><rect x="3" y="6" width="12" height="12" rx="2"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 6 9 17l-5-5"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></svg>',
  key: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="7.5" cy="14.5" r="3.5"/><path d="M10 12 21 1"/><path d="m18 4 2 2"/><path d="m15 7 2 2"/></svg>',
  layout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  plane: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17.8 19.2 16 11l5-5a2 2 0 0 0-3-3l-5 5-8.2-1.8L3 8l6 4-4 4-3-.5L1 17l4 2 2 4 1.5-1 -.5-3 4-4 4 6 1.8-1.8Z"/></svg>',
  refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 12a9 9 0 0 1-15.4 6.4L3 16"/><path d="M3 16h6v6"/><path d="M3 12A9 9 0 0 1 18.4 5.6L21 8"/><path d="M21 8h-6V2"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  wallet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 7V6a2 2 0 0 0-2-2H5a3 3 0 0 0 0 6h15v10H5a3 3 0 0 1-3-3V7"/><path d="M16 14h.01"/></svg>',
  wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5L15 12l-3-3 2.7-2.7Z"/></svg>'
};

const properties = [
  {
    id: "sierra",
    name: "Casa Sierra Alta",
    area: "San Agustin",
    type: "Main residence",
    value: 184000000,
    monthly: 1480000,
    staff: 12,
    cameras: 6,
    utilityScore: 92,
    security: "Clear",
    airport: "MTY",
    airportName: "Monterrey International",
    transfer: "38 min",
    nightlyRate: 185000,
    occupancy: 58,
    rentalStatus: "Owner hold",
    color: "#1f7a69"
  },
  {
    id: "valle",
    name: "Residencia Valle",
    area: "Del Valle",
    type: "Family residence",
    value: 128000000,
    monthly: 920000,
    staff: 8,
    cameras: 5,
    utilityScore: 88,
    security: "Clear",
    airport: "MTY",
    airportName: "Monterrey International",
    transfer: "32 min",
    nightlyRate: 142000,
    occupancy: 64,
    rentalStatus: "Available",
    color: "#365fa7"
  },
  {
    id: "campestre",
    name: "Campestre Penthouse",
    area: "Club Campestre",
    type: "City base",
    value: 76000000,
    monthly: 460000,
    staff: 5,
    cameras: 4,
    utilityScore: 79,
    security: "Review",
    airport: "MTY",
    airportName: "Monterrey International",
    transfer: "29 min",
    nightlyRate: 88000,
    occupancy: 71,
    rentalStatus: "Listed",
    color: "#b8852f"
  },
  {
    id: "chipinque",
    name: "Chipinque Guest House",
    area: "Chipinque",
    type: "Guest property",
    value: 94000000,
    monthly: 640000,
    staff: 7,
    cameras: 5,
    utilityScore: 84,
    security: "Clear",
    airport: "NTR",
    airportName: "Del Norte private aviation",
    transfer: "24 min",
    nightlyRate: 126000,
    occupancy: 46,
    rentalStatus: "Direct only",
    color: "#7752a3"
  }
];

const staff = [
  { id: 1, name: "Marcela Ruiz", role: "Estate Manager", propertyId: "sierra", department: "Operations", salary: 96000, status: "Approved", note: "Coordinates vendors, owner requests, and household calendars." },
  { id: 2, name: "Jorge Cantu", role: "Security Lead", propertyId: "sierra", department: "Security", salary: 68000, status: "Pending", note: "Supervises overnight rotations and camera escalation protocol." },
  { id: 3, name: "Ana Beltran", role: "Housekeeping Chief", propertyId: "sierra", department: "Housekeeping", salary: 48000, status: "Approved", note: "Runs staff assignments for residence prep and inventories." },
  { id: 4, name: "Diego Alvarez", role: "Driver", propertyId: "valle", department: "Transport", salary: 43000, status: "Pending", note: "Manages executive transfer schedule and vehicle checks." },
  { id: 5, name: "Sofia Ibarra", role: "Family Assistant", propertyId: "valle", department: "Operations", salary: 62000, status: "Approved", note: "Handles school, club, travel, and guest arrangements." },
  { id: 6, name: "Ramon Garza", role: "Facilities Technician", propertyId: "campestre", department: "Maintenance", salary: 41000, status: "Pending", note: "Tracks HVAC, elevators, backup power, and access systems." },
  { id: 7, name: "Lucia Vega", role: "Housekeeper", propertyId: "campestre", department: "Housekeeping", salary: 32000, status: "Approved", note: "Maintains city residence readiness and linen inventory." },
  { id: 8, name: "Oscar Medina", role: "Groundskeeper", propertyId: "chipinque", department: "Grounds", salary: 38000, status: "Pending", note: "Maintains gardens, pool deck, and exterior lighting." },
  { id: 9, name: "Patricia Rios", role: "Chef", propertyId: "chipinque", department: "Hospitality", salary: 57000, status: "Approved", note: "Prepares guest menus and manages kitchen procurement." }
];

const cameras = [
  { id: 1, propertyId: "sierra", label: "Main gate", zone: "Access", status: "Live", x: "62%", y: "38%" },
  { id: 2, propertyId: "sierra", label: "Motor court", zone: "Exterior", status: "Live", x: "45%", y: "54%" },
  { id: 3, propertyId: "sierra", label: "Pool terrace", zone: "Exterior", status: "Live", x: "70%", y: "48%" },
  { id: 4, propertyId: "sierra", label: "Service corridor", zone: "Interior", status: "Live", x: "51%", y: "43%" },
  { id: 5, propertyId: "sierra", label: "Family garage", zone: "Garage", status: "Live", x: "38%", y: "58%" },
  { id: 6, propertyId: "sierra", label: "Garden wall", zone: "Perimeter", status: "Live", x: "57%", y: "34%" },
  { id: 7, propertyId: "valle", label: "Service entry", zone: "Access", status: "Live", x: "40%", y: "42%" },
  { id: 8, propertyId: "valle", label: "Children wing hall", zone: "Interior", status: "Live", x: "56%", y: "35%" },
  { id: 9, propertyId: "valle", label: "East garden", zone: "Exterior", status: "Live", x: "68%", y: "50%" },
  { id: 10, propertyId: "valle", label: "Kitchen service", zone: "Interior", status: "Live", x: "49%", y: "52%" },
  { id: 11, propertyId: "valle", label: "Guest parking", zone: "Access", status: "Live", x: "44%", y: "36%" },
  { id: 12, propertyId: "campestre", label: "Elevator lobby", zone: "Interior", status: "Offline", x: "52%", y: "46%" },
  { id: 13, propertyId: "campestre", label: "Private foyer", zone: "Interior", status: "Live", x: "46%", y: "34%" },
  { id: 14, propertyId: "campestre", label: "Terrace door", zone: "Access", status: "Live", x: "62%", y: "55%" },
  { id: 15, propertyId: "campestre", label: "Storage room", zone: "Service", status: "Live", x: "41%", y: "48%" },
  { id: 16, propertyId: "chipinque", label: "Guest driveway", zone: "Access", status: "Live", x: "62%", y: "58%" },
  { id: 17, propertyId: "chipinque", label: "North perimeter", zone: "Perimeter", status: "Live", x: "48%", y: "36%" },
  { id: 18, propertyId: "chipinque", label: "Guest suite hall", zone: "Interior", status: "Live", x: "58%", y: "41%" },
  { id: 19, propertyId: "chipinque", label: "Pool equipment", zone: "Service", status: "Live", x: "39%", y: "60%" },
  { id: 20, propertyId: "chipinque", label: "Trail gate", zone: "Perimeter", status: "Live", x: "66%", y: "32%" }
];

const tasks = [
  { id: 1, propertyId: "sierra", title: "Replace pool heat pump filter", vendor: "Aqua Norte", due: "Today", priority: "high", category: "Pool" },
  { id: 2, propertyId: "sierra", title: "Confirm armored glass inspection", vendor: "Seguritek", due: "Tomorrow", priority: "medium", category: "Security" },
  { id: 3, propertyId: "valle", title: "Service Sub-Zero refrigerator", vendor: "Premium Cold", due: "Friday", priority: "medium", category: "Appliance" },
  { id: 4, propertyId: "campestre", title: "Elevator card reader firmware", vendor: "Access Pro", due: "Jul 8", priority: "high", category: "Access" },
  { id: 5, propertyId: "chipinque", title: "Guest suite AC balancing", vendor: "Clima Regio", due: "Jul 9", priority: "low", category: "HVAC" },
  { id: 6, propertyId: "chipinque", title: "Landscape lighting zone 4", vendor: "Luz Jardin", due: "Jul 11", priority: "low", category: "Grounds" }
];

const utilityRows = [
  { key: "Power", icon: "bolt", month: 246000, quarter: 710000, usage: 82, color: "#b8852f" },
  { key: "Water", icon: "activity", month: 92000, quarter: 258000, usage: 64, color: "#365fa7" },
  { key: "Gas", icon: "wrench", month: 38000, quarter: 114000, usage: 38, color: "#d15f4a" },
  { key: "Connectivity", icon: "camera", month: 61000, quarter: 176000, usage: 48, color: "#1f7a69" }
];

const origins = {
  MEX: { city: "Mexico City", baseMinutes: 95 },
  IAH: { city: "Houston", baseMinutes: 105 },
  DAL: { city: "Dallas", baseMinutes: 125 },
  LAX: { city: "Los Angeles", baseMinutes: 175 }
};

const flightTemplates = [
  { carrier: "Vista Executive", type: "Private charter", depart: "08:15", priceFactor: 8.2, stops: "Nonstop", cabin: "Private" },
  { carrier: "Aero Premier", type: "First cabin", depart: "11:40", priceFactor: 2.4, stops: "Nonstop", cabin: "First" },
  { carrier: "Regio Connect", type: "Business cabin", depart: "17:05", priceFactor: 1.4, stops: "Nonstop", cabin: "Business" }
];

const rentalBookings = [
  { id: 1, propertyId: "valle", guest: "Santos Family Office", source: "Direct", dates: "Jul 18-23", nights: 5, amount: 710000, status: "Requested", note: "House staff and airport transfer requested." },
  { id: 2, propertyId: "campestre", guest: "Private member referral", source: "Airbnb Luxe", dates: "Aug 2-6", nights: 4, amount: 352000, status: "Confirmed", note: "Listing calendar synced after owner approval." },
  { id: 3, propertyId: "chipinque", guest: "Monterrey Arts Board", source: "Direct", dates: "Aug 15-17", nights: 2, amount: 252000, status: "Requested", note: "Small hosted dinner; security deposit required." },
  { id: 4, propertyId: "sierra", guest: "Owner family block", source: "Owner", dates: "Jul 9-16", nights: 7, amount: 0, status: "Blocked", note: "Property reserved for family use." }
];

const rentalChannels = [
  { id: "direct", name: "Direct portal", fee: "0%", payout: "Instant owner approval", status: "Live" },
  { id: "airbnb", name: "Airbnb", fee: "3%", payout: "Calendar sync active", status: "Live" },
  { id: "vrbo", name: "Vrbo", fee: "5%", payout: "Manual review required", status: "Paused" },
  { id: "booking", name: "Booking.com", fee: "15%", payout: "Luxury inventory hidden", status: "Paused" }
];

const state = {
  section: "overview",
  propertyId: "sierra",
  cameraMode: "grid",
  selectedCameraId: 1,
  utilityPeriod: "month",
  rentalMode: "direct",
  flightOrigin: "MEX",
  flightPropertyId: "sierra",
  flightDepart: "",
  flightReturn: "",
  flightTravelers: 2,
  flightCabin: "Business",
  staffQuery: "",
  approvedStaffIds: new Set(staff.filter((member) => member.status === "Approved").map((member) => member.id)),
  completedTasks: new Set(),
  acceptedBookings: new Set(rentalBookings.filter((booking) => booking.status === "Confirmed").map((booking) => booking.id)),
  declinedBookings: new Set(),
  pausedChannels: new Set(rentalChannels.filter((channel) => channel.status === "Paused").map((channel) => channel.id))
};

const currency = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  maximumFractionDigits: 0
});

const shortNumber = new Intl.NumberFormat("en", {
  notation: "compact",
  maximumFractionDigits: 1
});

function hydrateIcons() {
  document.querySelectorAll("[data-icon]").forEach((node) => {
    const name = node.getAttribute("data-icon");
    if (icons[name]) {
      node.innerHTML = icons[name];
    }
  });
}

function selectedProperty() {
  return properties.find((property) => property.id === state.propertyId) || properties[0];
}

function propertyName(id) {
  return properties.find((property) => property.id === id)?.name || "Portfolio";
}

function filteredStaff() {
  const query = state.staffQuery.trim().toLowerCase();
  return staff.filter((member) => {
    const matchesProperty = member.propertyId === state.propertyId;
    if (!query) return matchesProperty;
    const content = `${member.name} ${member.role} ${member.department} ${propertyName(member.propertyId)}`.toLowerCase();
    return matchesProperty && content.includes(query);
  });
}

function scopedPayroll() {
  return staff.filter((member) => member.propertyId === state.propertyId);
}

function pendingPayroll() {
  return scopedPayroll().filter((member) => !state.approvedStaffIds.has(member.id));
}

function scopedTasks() {
  return tasks.filter((task) => task.propertyId === state.propertyId);
}

function openTasks() {
  return tasks.filter((task) => !state.completedTasks.has(task.id));
}

function flightProperty() {
  return properties.find((property) => property.id === state.flightPropertyId) || selectedProperty();
}

function bookingStatus(booking) {
  if (state.declinedBookings.has(booking.id)) return "Declined";
  if (state.acceptedBookings.has(booking.id)) return "Confirmed";
  return booking.status;
}

function propertyBookings(propertyId) {
  return rentalBookings.filter((booking) => booking.propertyId === propertyId);
}

function defaultDate(offsetDays) {
  const date = new Date();
  date.setDate(date.getDate() + offsetDays);
  return date.toISOString().slice(0, 10);
}

function flightOptions() {
  const property = flightProperty();
  const origin = origins[state.flightOrigin] || origins.MEX;
  const travelers = Math.max(1, Number(state.flightTravelers) || 1);
  const airportPremium = property.airport === "NTR" ? 1.28 : 1;
  const cabinPremium = state.flightCabin === "Private" ? 1.6 : state.flightCabin === "First" ? 1.25 : 1;
  return flightTemplates
    .filter((option) => state.flightCabin === "Business" || option.cabin === state.flightCabin || option.cabin === "Business")
    .map((option, index) => {
      const duration = origin.baseMinutes + index * 18 + (property.airport === "NTR" ? 16 : 0);
      const basePrice = Math.round((6200 + duration * 84) * option.priceFactor * cabinPremium * airportPremium * travelers);
      return {
        ...option,
        duration,
        arrive: addMinutes(option.depart, duration),
        price: basePrice
      };
    });
}

function addMinutes(time, minutes) {
  const [hour, minute] = time.split(":").map(Number);
  const date = new Date(2026, 0, 1, hour, minute);
  date.setMinutes(date.getMinutes() + minutes);
  return date.toTimeString().slice(0, 5);
}

function setPanel(section) {
  state.section = section;
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.section === section);
  });
  document.querySelectorAll("[data-panel]").forEach((panel) => {
    const visible = panel.dataset.panel === section;
    panel.hidden = !visible;
    panel.classList.toggle("is-visible", visible);
  });
  const titles = {
    overview: "Private estate command center",
    properties: "Property command",
    staff: "Staff directory",
    payroll: "Payroll control",
    cameras: "Camera monitoring",
    maintenance: "Maintenance queue",
    utilities: "Utilities spend",
    flights: "Flight search",
    rentals: "Rental management"
  };
  document.getElementById("pageTitle").textContent = titles[section];
}

function renderHero() {
  const property = selectedProperty();
  const totalValue = properties.reduce((sum, item) => sum + item.value, 0);
  const totalMonthly = properties.reduce((sum, item) => sum + item.monthly, 0);
  const totalCameras = properties.reduce((sum, item) => sum + item.cameras, 0);
  const totalStaff = staff.length;

  document.getElementById("heroHeadline").textContent = `${properties.length} properties, ${totalStaff} staff, ${totalCameras} cameras`;
  document.getElementById("heroSubhead").textContent =
    state.section === "overview"
      ? "Consolidated visibility across residences, staff payroll, camera status, maintenance, utilities, travel, and rentals."
      : `${property.name} is selected across the workspace.`;
  document.getElementById("selectedPropertyLabel").textContent =
    state.section === "overview" ? "Portfolio view" : `${property.name} active`;

  document.getElementById("heroStats").innerHTML = [
    ["Portfolio value", currency.format(totalValue)],
    ["Monthly operations", currency.format(totalMonthly)],
    ["Open work orders", openTasks().length],
    ["Payroll pending", pendingPayroll().length]
  ]
    .map(
      ([label, value]) => `
        <div class="hero-stat">
          <span>${label}</span>
          <strong>${value}</strong>
        </div>
      `
    )
    .join("");
}

function renderProperties() {
  document.documentElement.style.setProperty("--property-image", estateImage);
  document.getElementById("propertyStrip").innerHTML = properties
    .map((property) => {
      const statusClass = property.security === "Review" ? "warn" : "";
      const openTaskCount = tasks.filter((task) => task.propertyId === property.id && !state.completedTasks.has(task.id)).length;
      return `
        <button class="property-card ${property.id === state.propertyId ? "is-active" : ""}" type="button" data-property="${property.id}">
          <div class="property-card-head">
            <strong>${property.name}</strong>
            <span class="status-chip ${statusClass}">${property.security}</span>
          </div>
          <span class="property-meta">${property.area} - ${property.type}</span>
          <div class="property-footer">
            <span>${property.staff} staff</span>
            <span>${property.cameras} cameras</span>
            <span>${openTaskCount} task${openTaskCount === 1 ? "" : "s"}</span>
          </div>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll("[data-property]").forEach((button) => {
    button.addEventListener("click", () => {
      state.propertyId = button.dataset.property;
      state.flightPropertyId = state.propertyId;
      const firstCamera = cameras.find((camera) => camera.propertyId === state.propertyId);
      if (firstCamera) state.selectedCameraId = firstCamera.id;
      renderAll();
    });
  });
}

function renderOverview() {
  const property = selectedProperty();
  const payrollTotal = scopedPayroll().reduce((sum, member) => sum + member.salary, 0);
  const pendingAmount = pendingPayroll().reduce((sum, member) => sum + member.salary, 0);
  const scopedOfflineCameras = cameras.filter((camera) => camera.propertyId === property.id && camera.status === "Offline");
  const portfolioOfflineCameras = cameras.filter((camera) => camera.status === "Offline");

  document.getElementById("metricBoard").innerHTML = [
    ["home", "Selected property", property.name, property.area],
    ["wallet", "Monthly payroll", currency.format(payrollTotal), `${pendingPayroll().length} approvals pending`],
    [
      "camera",
      "Camera network",
      `${property.cameras - scopedOfflineCameras.length}/${property.cameras} live`,
      scopedOfflineCameras.length ? `${scopedOfflineCameras[0].label} needs review` : "All feeds online"
    ],
    ["wrench", "Maintenance", `${scopedTasks().filter((task) => !state.completedTasks.has(task.id)).length} open`, `${property.utilityScore}% utility efficiency`]
  ]
    .map(
      ([icon, label, value, caption]) => `
        <div class="metric-card">
          <span class="metric-icon" data-icon="${icon}"></span>
          <span>${label}</span>
          <strong>${value}</strong>
          <span>${caption}</span>
        </div>
      `
    )
    .join("");

  const operations = [
    { title: "Payroll cycle awaiting owner approval", detail: `${currency.format(pendingAmount)} pending for ${property.name}`, time: "9:10 AM", tone: pendingAmount ? "warn" : "" },
    { title: "Security camera health check", detail: portfolioOfflineCameras.length ? "Campestre elevator lobby feed offline" : "All critical feeds recording", time: "8:42 AM", tone: portfolioOfflineCameras.length ? "alert" : "" },
    { title: "Maintenance vendor window confirmed", detail: "Pool and HVAC vendors scheduled this week", time: "7:35 AM", tone: "" },
    { title: "Utilities variance within threshold", detail: `${property.utilityScore}% efficiency for selected residence`, time: "6:20 AM", tone: "" }
  ];

  document.getElementById("operationsList").innerHTML = operations
    .map(
      (item) => `
        <div class="operation-row ${item.tone}">
          <span class="operation-dot"></span>
          <div>
            <strong>${item.title}</strong>
            <span>${item.detail}</span>
          </div>
          <time>${item.time}</time>
        </div>
      `
    )
    .join("");

  document.getElementById("portfolioMap").innerHTML = `
    <div class="map-header">
      <div>
        <strong>Portfolio zones</strong>
        <span class="small-label">Operating load by residence</span>
      </div>
      <span class="status-chip">Live</span>
    </div>
    <div class="zone-grid">
      ${properties
        .map(
          (item) => `
            <button class="zone-card" type="button" data-property="${item.id}">
              <span>${item.area}</span>
              <strong>${item.name}</strong>
              <span>${currency.format(item.monthly)} monthly</span>
            </button>
          `
        )
        .join("")}
    </div>
  `;
  document.querySelectorAll(".zone-card").forEach((button) => {
    button.addEventListener("click", () => {
      state.propertyId = button.dataset.property;
      state.flightPropertyId = state.propertyId;
      renderAll();
    });
  });
}

function renderPropertyCommand() {
  const property = selectedProperty();
  document.getElementById("propertyCommand").innerHTML = `
    <div class="property-detail">
      <div class="property-photo">
        <div>
          <span>${property.area} - ${property.type}</span>
          <strong>${property.name}</strong>
        </div>
      </div>
      <div class="property-detail-body">
        <div class="property-kpis">
          <div class="kpi-tile"><span>Estimated value</span><strong>${currency.format(property.value)}</strong></div>
          <div class="kpi-tile"><span>Monthly operations</span><strong>${currency.format(property.monthly)}</strong></div>
          <div class="kpi-tile"><span>Utility efficiency</span><strong>${property.utilityScore}%</strong></div>
        </div>
        <div class="system-grid">
          <div class="system-tile"><span>Household staff</span><strong>${property.staff}</strong><span>Active assignments</span></div>
          <div class="system-tile"><span>Security cameras</span><strong>${property.cameras}</strong><span>${cameras.filter((camera) => camera.propertyId === property.id && camera.status === "Live").length} live feeds visible</span></div>
          <div class="system-tile"><span>Open maintenance</span><strong>${scopedTasks().filter((task) => !state.completedTasks.has(task.id)).length}</strong><span>Owner-visible work orders</span></div>
          <div class="system-tile"><span>Payroll status</span><strong>${pendingPayroll().length ? "Review" : "Clear"}</strong><span>${pendingPayroll().length} staff pending approval</span></div>
          <div class="system-tile"><span>Access status</span><strong>${property.security}</strong><span>Perimeter and entry points</span></div>
          <div class="system-tile"><span>Spend forecast</span><strong>${currency.format(Math.round(property.monthly * 1.04))}</strong><span>Next 30 days</span></div>
        </div>
      </div>
    </div>
  `;
}

function renderStaff() {
  const list = filteredStaff();
  document.getElementById("staffList").innerHTML =
    list.length === 0
      ? `<div class="staff-card"><strong>No staff match this search.</strong><p>Try another name, role, or department.</p></div>`
      : list
          .map((member) => {
            const initials = member.name
              .split(" ")
              .map((part) => part[0])
              .slice(0, 2)
              .join("");
            const approved = state.approvedStaffIds.has(member.id);
            return `
              <article class="staff-card">
                <div class="staff-card-head">
                  <span class="avatar">${initials}</span>
                  <div>
                    <strong>${member.name}</strong>
                    <span>${member.role}</span>
                  </div>
                </div>
                <p>${member.note}</p>
                <div class="staff-meta">
                  <span class="status-chip">${member.department}</span>
                  <span class="status-chip ${approved ? "" : "warn"}">${approved ? "Payroll approved" : "Payroll pending"}</span>
                </div>
              </article>
            `;
          })
          .join("");

  const propertyStaff = scopedPayroll();
  const payroll = propertyStaff.reduce((sum, member) => sum + member.salary, 0);
  const departments = [...new Set(propertyStaff.map((member) => member.department))];
  document.getElementById("staffSummary").innerHTML = `
    <div>
      <strong>${selectedProperty().name}</strong>
      <span class="small-label">Staffing composition</span>
    </div>
    <div class="summary-line"><span>Active staff</span><strong>${propertyStaff.length}</strong></div>
    <div class="summary-line"><span>Departments</span><strong>${departments.length}</strong></div>
    <div class="summary-line"><span>Monthly payroll</span><strong>${currency.format(payroll)}</strong></div>
    <div class="summary-line"><span>Pending approvals</span><strong>${pendingPayroll().length}</strong></div>
  `;
}

function renderPayroll() {
  const rows = scopedPayroll();
  const total = rows.reduce((sum, member) => sum + member.salary, 0);
  const approved = rows.filter((member) => state.approvedStaffIds.has(member.id));
  const pending = rows.length - approved.length;
  const percent = rows.length ? Math.round((approved.length / rows.length) * 100) : 0;

  document.getElementById("payrollSummary").innerHTML = `
    <div class="payroll-total">
      <span>${selectedProperty().name}</span>
      <strong>${currency.format(total)}</strong>
    </div>
    <div class="summary-line"><span>Approved staff</span><strong>${approved.length}</strong></div>
    <div class="summary-line"><span>Pending staff</span><strong>${pending}</strong></div>
    <div>
      <div class="row-between"><span>Cycle readiness</span><strong>${percent}%</strong></div>
      <div class="progress-bar"><span style="width:${percent}%"></span></div>
    </div>
    <span class="small-label">Mock banking state for prototype review.</span>
  `;

  document.getElementById("payrollRows").innerHTML = rows
    .map((member) => {
      const approvedStatus = state.approvedStaffIds.has(member.id);
      return `
        <tr>
          <td><strong>${member.name}</strong><br><span class="small-label">${member.role}</span></td>
          <td>${propertyName(member.propertyId)}</td>
          <td>${currency.format(member.salary)}</td>
          <td><span class="status-chip ${approvedStatus ? "" : "warn"}">${approvedStatus ? "Approved" : "Pending"}</span></td>
        </tr>
      `;
    })
    .join("");
}

function renderCameras() {
  const propertyCameras = cameras.filter((camera) => camera.propertyId === state.propertyId);
  if (!propertyCameras.some((camera) => camera.id === state.selectedCameraId) && propertyCameras[0]) {
    state.selectedCameraId = propertyCameras[0].id;
  }

  document.querySelectorAll("[data-camera-mode]").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.cameraMode === state.cameraMode);
  });

  const ordered = state.cameraMode === "focus"
    ? [...propertyCameras].sort((a) => (a.id === state.selectedCameraId ? -1 : 1))
    : propertyCameras;

  const layout = document.getElementById("cameraLayout");
  layout.classList.toggle("is-focus", state.cameraMode === "focus");
  layout.innerHTML = ordered
    .map((camera, index) => {
      const isMain = state.cameraMode === "focus" && index === 0;
      return `
        <button class="camera-card ${camera.status === "Offline" ? "offline" : ""} ${camera.id === state.selectedCameraId ? "is-selected" : ""} ${isMain ? "is-focus-main" : ""}" type="button" data-camera="${camera.id}">
          <div class="camera-feed" style="--x:${camera.x};--y:${camera.y}"></div>
          <span class="live-pill">${camera.status}</span>
          <div class="camera-content">
            <strong>${camera.label}</strong>
            <span>${propertyName(camera.propertyId)} - ${camera.zone}</span>
          </div>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll("[data-camera]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedCameraId = Number(button.dataset.camera);
      if (state.cameraMode === "grid") state.cameraMode = "focus";
      renderCameras();
    });
  });
}

function renderMaintenance() {
  const items = scopedTasks();
  const open = items.filter((task) => !state.completedTasks.has(task.id)).length;
  document.getElementById("maintenanceCounter").textContent = `${open} open for ${selectedProperty().name}`;
  document.getElementById("maintenanceBoard").innerHTML = items
    .map((task) => {
      const done = state.completedTasks.has(task.id);
      return `
        <article class="maintenance-item ${done ? "is-done" : ""}">
          <label>
            <input type="checkbox" data-task="${task.id}" ${done ? "checked" : ""} />
            <div>
              <strong>${task.title}</strong>
              <span class="task-meta">${task.vendor} - Due ${task.due}</span>
            </div>
          </label>
          <div class="row-between">
            <span class="priority-chip ${task.priority}">${task.priority}</span>
            <span class="status-chip">${task.category}</span>
          </div>
        </article>
      `;
    })
    .join("");

  document.querySelectorAll("[data-task]").forEach((input) => {
    input.addEventListener("change", () => {
      const id = Number(input.dataset.task);
      if (input.checked) state.completedTasks.add(id);
      else state.completedTasks.delete(id);
      renderAll();
    });
  });
}

function renderUtilities() {
  document.querySelectorAll("[data-utility-period]").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.utilityPeriod === state.utilityPeriod);
  });

  const total = utilityRows.reduce((sum, item) => sum + item[state.utilityPeriod], 0);
  const property = selectedProperty();
  document.getElementById("utilitiesLayout").innerHTML = `
    <div class="utility-card utility-total">
      <span>${property.name}</span>
      <strong>${currency.format(total)}</strong>
      <p>Projected ${state.utilityPeriod === "month" ? "monthly" : "quarterly"} utilities for power, water, gas, and connectivity.</p>
      <div class="progress-bar"><span style="width:${property.utilityScore}%"></span></div>
    </div>
    <div class="utility-grid">
      ${utilityRows
        .map(
          (item) => `
            <div class="utility-card">
              <div class="row-between">
                <span class="metric-icon" data-icon="${item.icon}" style="color:${item.color}"></span>
                <span class="utility-chip">${item.usage}% usage</span>
              </div>
              <span>${item.key}</span>
              <strong>${currency.format(item[state.utilityPeriod])}</strong>
              <div class="utility-meter">
                <div class="row-between"><span>Budget load</span><strong>${item.usage}%</strong></div>
                <div class="progress-bar"><span style="width:${item.usage}%; background:${item.color}"></span></div>
              </div>
            </div>
          `
        )
        .join("")}
    </div>
  `;
  hydrateIcons();
}

function renderFlights() {
  const property = flightProperty();
  const origin = origins[state.flightOrigin] || origins.MEX;
  const options = flightOptions();
  const propertySelect = document.getElementById("flightProperty");

  propertySelect.innerHTML = properties
    .map((item) => `<option value="${item.id}" ${item.id === property.id ? "selected" : ""}>${item.name}</option>`)
    .join("");
  document.getElementById("flightOrigin").value = state.flightOrigin;
  document.getElementById("flightDepart").value = state.flightDepart;
  document.getElementById("flightReturn").value = state.flightReturn;
  document.getElementById("flightTravelers").value = state.flightTravelers;
  document.getElementById("flightCabin").value = state.flightCabin;
  document.getElementById("flightRouteSummary").textContent = `${origin.city} to ${property.airport}`;

  document.getElementById("flightResults").innerHTML = `
    <div class="flight-route-card">
      <span>${property.name}</span>
      <strong>${state.flightOrigin} to ${property.airport}</strong>
      <span>${property.airportName} - ${property.transfer} private transfer</span>
    </div>
    ${options
      .map(
        (option) => `
          <article class="flight-result-card">
            <div>
              <div class="flight-leg">
                <div>
                  <strong>${state.flightOrigin}</strong>
                  <span>${option.depart}</span>
                </div>
                <span class="flight-line"></span>
                <div>
                  <strong>${property.airport}</strong>
                  <span>${option.arrive}</span>
                </div>
              </div>
              <div class="staff-meta">
                <span class="status-chip">${option.carrier}</span>
                <span class="status-chip">${option.type}</span>
                <span class="status-chip">${Math.floor(option.duration / 60)}h ${option.duration % 60}m</span>
                <span class="status-chip">${option.stops}</span>
              </div>
            </div>
            <div class="flight-price">
              <strong>${currency.format(option.price)}</strong>
              <span>${state.flightTravelers} traveler${Number(state.flightTravelers) === 1 ? "" : "s"}</span>
            </div>
          </article>
        `
      )
      .join("")}
  `;
}

function renderRentals() {
  const property = selectedProperty();
  const bookings = propertyBookings(property.id);
  const confirmedRevenue = bookings
    .filter((booking) => bookingStatus(booking) === "Confirmed")
    .reduce((sum, booking) => sum + booking.amount, 0);
  const requestedCount = bookings.filter((booking) => bookingStatus(booking) === "Requested").length;
  const channelCount = rentalChannels.filter((channel) => !state.pausedChannels.has(channel.id)).length;

  document.querySelectorAll("[data-rental-mode]").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.rentalMode === state.rentalMode);
  });

  document.getElementById("rentalBoard").innerHTML = properties
    .map((item) => {
      const itemBookings = propertyBookings(item.id);
      const requested = itemBookings.filter((booking) => bookingStatus(booking) === "Requested").length;
      const confirmed = itemBookings.filter((booking) => bookingStatus(booking) === "Confirmed").length;
      return `
        <button class="rental-property-card ${item.id === property.id ? "is-active" : ""}" type="button" data-rental-property="${item.id}">
          <div class="rental-card-head">
            <div>
              <strong>${item.name}</strong>
              <span class="property-meta">${item.rentalStatus}</span>
            </div>
            <span class="status-chip ${requested ? "warn" : ""}">${requested ? `${requested} request` : "Clear"}</span>
          </div>
          <div class="rental-metrics">
            <div class="rental-metric"><span>Nightly</span><strong>${currency.format(item.nightlyRate)}</strong></div>
            <div class="rental-metric"><span>Occupancy</span><strong>${item.occupancy}%</strong></div>
            <div class="rental-metric"><span>Bookings</span><strong>${confirmed}</strong></div>
          </div>
        </button>
      `;
    })
    .join("");

  const directContent = `
    <div class="rental-property-card is-active">
      <div class="rental-card-head">
        <div>
          <strong>${property.name}</strong>
          <span class="property-meta">${currency.format(property.nightlyRate)} nightly - ${property.occupancy}% occupancy</span>
        </div>
        <span class="status-chip">${requestedCount} pending</span>
      </div>
      <div class="calendar-strip">
        ${["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
          .map((day, index) => {
            const className = index === 2 ? "is-booked" : index === 5 ? "is-blocked" : "";
            const label = index === 2 ? "Booked" : index === 5 ? "Hold" : "Open";
            return `<div class="calendar-day ${className}"><strong>${day}</strong><span>${label}</span></div>`;
          })
          .join("")}
      </div>
    </div>
    ${bookings
      .map((booking) => {
        const status = bookingStatus(booking);
        return `
          <article class="booking-card">
            <div class="booking-head">
              <div>
                <strong>${booking.guest}</strong>
                <span class="property-meta">${booking.source} - ${booking.dates} - ${booking.nights} nights</span>
              </div>
              <span class="status-chip ${status === "Requested" ? "warn" : status === "Declined" ? "alert" : ""}">${status}</span>
            </div>
            <p>${booking.note}</p>
            <div class="row-between">
              <strong>${booking.amount ? currency.format(booking.amount) : "Owner use"}</strong>
              ${
                status === "Requested"
                  ? `<div class="booking-actions">
                      <button class="ghost-button" type="button" data-booking-action="accept" data-booking="${booking.id}">Approve</button>
                      <button class="ghost-button" type="button" data-booking-action="decline" data-booking="${booking.id}">Decline</button>
                    </div>`
                  : ""
              }
            </div>
          </article>
        `;
      })
      .join("")}
  `;

  const channelContent = `
    <div class="rate-control">
      <label>
        <span>Base nightly rate</span>
        <input id="nightlyRateInput" type="number" min="0" step="1000" value="${property.nightlyRate}" />
      </label>
      <label>
        <span>Distribution mode</span>
        <select id="distributionMode">
          <option>Owner approval required</option>
          <option>Instant book for vetted guests</option>
          <option>Hidden from public platforms</option>
        </select>
      </label>
      <button class="ghost-button" type="button" id="syncRateButton">
        <span data-icon="refresh"></span>
        Sync rate
      </button>
    </div>
    <div class="channel-grid">
      ${rentalChannels
        .map((channel) => {
          const paused = state.pausedChannels.has(channel.id);
          return `
            <article class="channel-card ${paused ? "is-paused" : ""}">
              <div class="channel-head">
                <div>
                  <strong>${channel.name}</strong>
                  <span class="property-meta">${channel.payout}</span>
                </div>
                <span class="status-chip ${paused ? "warn" : ""}">${paused ? "Paused" : "Live"}</span>
              </div>
              <div class="row-between">
                <span class="small-label">Platform fee</span>
                <strong>${channel.fee}</strong>
              </div>
              <button class="ghost-button" type="button" data-channel="${channel.id}">${paused ? "Go live" : "Pause"}</button>
            </article>
          `;
        })
        .join("")}
    </div>
  `;

  document.getElementById("bookingPanel").innerHTML = `
    <div class="row-between">
      <div>
        <strong>${state.rentalMode === "direct" ? "Direct booking desk" : "Channel manager"}</strong>
        <span class="small-label">${currency.format(confirmedRevenue)} confirmed - ${channelCount} channels live</span>
      </div>
      <span class="status-chip">${property.name}</span>
    </div>
    ${state.rentalMode === "direct" ? directContent : channelContent}
  `;

  document.querySelectorAll("[data-rental-property]").forEach((button) => {
    button.addEventListener("click", () => {
      state.propertyId = button.dataset.rentalProperty;
      state.flightPropertyId = state.propertyId;
      renderAll();
    });
  });

  document.querySelectorAll("[data-booking-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const bookingId = Number(button.dataset.booking);
      if (button.dataset.bookingAction === "accept") {
        state.acceptedBookings.add(bookingId);
        state.declinedBookings.delete(bookingId);
      } else {
        state.declinedBookings.add(bookingId);
        state.acceptedBookings.delete(bookingId);
      }
      renderAll();
    });
  });

  document.querySelectorAll("[data-channel]").forEach((button) => {
    button.addEventListener("click", () => {
      const channel = button.dataset.channel;
      if (state.pausedChannels.has(channel)) state.pausedChannels.delete(channel);
      else state.pausedChannels.add(channel);
      renderRentals();
    });
  });

  const syncButton = document.getElementById("syncRateButton");
  if (syncButton) {
    syncButton.addEventListener("click", () => {
      const input = document.getElementById("nightlyRateInput");
      const nextRate = Math.max(0, Number(input.value) || property.nightlyRate);
      property.nightlyRate = nextRate;
      renderAll();
    });
  }
  hydrateIcons();
}

function bindEvents() {
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => {
      setPanel(button.dataset.section);
      renderAll();
    });
  });

  document.getElementById("staffSearch").addEventListener("input", (event) => {
    state.staffQuery = event.target.value;
    renderStaff();
  });

  document.getElementById("approvePayrollButton").addEventListener("click", () => {
    scopedPayroll().forEach((member) => state.approvedStaffIds.add(member.id));
    renderAll();
  });

  document.querySelectorAll("[data-camera-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.cameraMode = button.dataset.cameraMode;
      renderCameras();
    });
  });

  document.querySelectorAll("[data-utility-period]").forEach((button) => {
    button.addEventListener("click", () => {
      state.utilityPeriod = button.dataset.utilityPeriod;
      renderUtilities();
    });
  });

  document.getElementById("flightSearch").addEventListener("submit", (event) => {
    event.preventDefault();
    state.flightOrigin = document.getElementById("flightOrigin").value;
    state.flightPropertyId = document.getElementById("flightProperty").value;
    state.propertyId = state.flightPropertyId;
    state.flightDepart = document.getElementById("flightDepart").value;
    state.flightReturn = document.getElementById("flightReturn").value;
    state.flightTravelers = Number(document.getElementById("flightTravelers").value) || 1;
    state.flightCabin = document.getElementById("flightCabin").value;
    renderAll();
  });

  ["flightOrigin", "flightProperty", "flightDepart", "flightReturn", "flightTravelers", "flightCabin"].forEach((id) => {
    document.getElementById(id).addEventListener("change", () => {
      state.flightOrigin = document.getElementById("flightOrigin").value;
      state.flightPropertyId = document.getElementById("flightProperty").value;
      state.flightDepart = document.getElementById("flightDepart").value;
      state.flightReturn = document.getElementById("flightReturn").value;
      state.flightTravelers = Number(document.getElementById("flightTravelers").value) || 1;
      state.flightCabin = document.getElementById("flightCabin").value;
      renderFlights();
    });
  });

  document.querySelectorAll("[data-rental-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.rentalMode = button.dataset.rentalMode;
      renderRentals();
    });
  });

  document.getElementById("refreshButton").addEventListener("click", () => {
    document.getElementById("lastUpdated").textContent = `Updated ${new Date().toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit"
    })}`;
    renderAll();
  });

  document.getElementById("propertyPulseButton").addEventListener("click", () => {
    const status = document.getElementById("deskStatus");
    status.textContent = `${selectedProperty().name} check completed`;
    setTimeout(() => {
      status.textContent = "All critical services clear";
    }, 2400);
  });
}

function renderAll() {
  renderHero();
  renderProperties();
  renderOverview();
  renderPropertyCommand();
  renderStaff();
  renderPayroll();
  renderCameras();
  renderMaintenance();
  renderUtilities();
  renderFlights();
  renderRentals();
  hydrateIcons();
}

hydrateIcons();
state.flightDepart = defaultDate(7);
state.flightReturn = defaultDate(11);
bindEvents();
setPanel("overview");
renderAll();
