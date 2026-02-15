/**
 * Тематические изображения по ключевым словам — Unsplash Featured.
 * Ресурс: source.unsplash.com/featured (поиск по ключевым словам), без API-ключа.
 * Формат: https://source.unsplash.com/featured/400x300/?keyword1,keyword2
 */
const W = 400;
const H = 300;
const BASE = "https://source.unsplash.com/featured";

const url = (keywords) => {
  const q = String(keywords).replace(/\s+/g, ",");
  return `${BASE}/${W}x${H}/?${q}`;
};

// Ключ: "categoryId.serviceId", значение: ключевые слова для тематического фото (англ.)
const THEMATIC_KEYWORDS = {
  // furniture
  "furniture.wardrobe-assembly": "wardrobe,cabinet",
  "furniture.kitchen-assembly": "kitchen,cabinets",
  "furniture.wardrobe-closet-assembly": "closet,wardrobe",
  "furniture.dresser-assembly": "dresser,furniture",
  "furniture.bed-assembly": "bed,bedroom",
  "furniture.table-assembly": "table,dining",
  "furniture.sofa-assembly": "sofa,couch",
  "furniture.furniture-disassembly": "moving,boxes",

  // handyman
  "handyman.hang-picture": "picture,frame,wall",
  "handyman.hang-cabinet": "wall,cabinet,kitchen",
  "handyman.wallpaper-installation": "wallpaper,wall",
  "handyman.tile-laying": "tile,bathroom",
  "handyman.laminate-installation": "laminate,floor",
  "handyman.linoleum-installation": "floor,linoleum",
  "handyman.pull-up-bar-installation": "gym,bar",
  "handyman.curtain-rod-installation": "curtain,window",
  "handyman.roller-blinds-installation": "blinds,window",
  "handyman.mirror-hanging": "mirror,bathroom",
  "handyman.ventilation-grille-installation": "ventilation,grille",
  "handyman.shelf-hanging": "shelf,wall",
  "handyman.radiator-screen-installation": "radiator,heating",

  // plumbing
  "plumbing.sink-installation": "sink,bathroom",
  "plumbing.sink-removal": "sink,plumbing",
  "plumbing.kitchen-sink-installation": "kitchen,sink",
  "plumbing.kitchen-sink-removal": "kitchen,sink",
  "plumbing.faucet-installation": "faucet,sink",
  "plumbing.faucet-repair": "faucet,plumbing",
  "plumbing.faucet-assembly": "faucet",
  "plumbing.bathtub-installation": "bathtub,bathroom",
  "plumbing.bathtub-leak-repair": "bathtub,plumbing",
  "plumbing.access-hatch-installation": "hatch,wall",
  "plumbing.siphon-installation": "siphon,plumbing",
  "plumbing.shower-cabin-installation": "shower,cabin",
  "plumbing.shower-tray-installation": "shower,tray",
  "plumbing.shower-cabin-assembly": "shower,cabin",
  "plumbing.shower-cabin-repair": "shower,repair",
  "plumbing.toilet-installation": "toilet,bathroom",
  "plumbing.urinal-installation": "toilet,bathroom",
  "plumbing.toilet-corrugation": "toilet,plumbing",
  "plumbing.toilet-tank-installation": "toilet,tank",
  "plumbing.toilet-repair": "toilet,plumbing",
  "plumbing.toilet-removal": "toilet,plumbing",
  "plumbing.bidet-installation": "bidet,bathroom",
  "plumbing.towel-warmer-installation": "towel,heater",
  "plumbing.electric-towel-warmer": "towel,heater",
  "plumbing.drain-cleaning": "drain,plumbing",
  "plumbing.leak-repair": "plumbing,pipe",
  "plumbing.water-heater-installation": "water,heater",

  // electrical
  "electrical.outlet-installation": "outlet,electrical",
  "electrical.switch-installation": "switch,wall",
  "electrical.light-fixture-installation": "light,ceiling",
  "electrical.chandelier-installation": "chandelier,ceiling",
  "electrical.appliance-connection": "appliance,kitchen",
  "electrical.appliance-installation": "washing,machine",
  "electrical.cooktop-installation": "stove,kitchen",
  "electrical.electrical-panel-assembly": "electrical,panel",
  "electrical.doorbell-installation": "doorbell,door",
  "electrical.heated-floor-installation": "floor,heating",
  "electrical.electrical-repair": "electrical,wiring",
  "electrical.electrician-call": "electrician,tools",
  "electrical.diagnostics-with-service": "electrical,diagnostics",
  "electrical.diagnostics-without-service": "electrical",
  "electrical.master-visit": "electrician",
  "electrical.minimum-order": "electrical",
  "electrical.rcbo-breaker-installation": "electrical,panel",
  "electrical.diff-breaker-installation": "electrical,breaker",
  "electrical.wiring-installation": "wiring,electrical",
  "electrical.lamp-replacement": "lamp,light",
  "electrical.socket-repair": "socket,outlet",
  "electrical.switch-repair": "switch,electrical",
  "electrical.grounding-installation": "electrical,grounding",

  // windows
  "windows.window-adjustment": "window,frame",
  "windows.balcony-door-adjustment": "balcony,door",
  "windows.sash-geometry-restoration": "window,sash",
  "windows.door-geometry-restoration": "door,balcony",
  "windows.single-chamber-glass-replacement": "window,glass",
  "windows.double-chamber-glass-replacement": "window,glass",
  "windows.glass-replacement": "glass,window",
  "windows.handle-replacement-white": "window,handle",
  "windows.handle-replacement-colored": "window,handle",
  "windows.child-lock": "window,lock",
  "windows.handle-with-key": "window,handle",
  "windows.hinge-replacement": "window,hinge",
  "windows.seal-replacement": "window,seal",
  "windows.mosquito-net-installation": "window,mesh",
  "windows.mosquito-net-repair": "window,mesh",
  "windows.windowsill-installation": "windowsill",
  "windows.drip-cap-installation": "window,sill",
  "windows.slopes-installation": "window,slope",
  "windows.lubrication-cleaning": "window,cleaning",
  "windows.seal-cleaning": "window,seal",
  "windows.plastic-repair": "window,plastic",

  // minor_repair
  "minor_repair.hang-picture": "picture,frame",
  "minor_repair.hang-cabinet": "cabinet,wall",
  "minor_repair.wallpaper-installation": "wallpaper",
  "minor_repair.tile-installation": "tile",
  "minor_repair.laminate-installation": "laminate,floor",
  "minor_repair.linoleum-installation": "floor,linoleum",
  "minor_repair.curtain-rod-installation": "curtain,rod",
  "minor_repair.blinds-installation": "blinds",
  "minor_repair.mirror-hanging": "mirror",
  "minor_repair.shelf-installation": "shelf",
  "minor_repair.tv-wall-mount": "tv,wall",
  "minor_repair.baseboard-installation": "baseboard,floor",
  "minor_repair.threshold-installation": "threshold,door",
};

const CATEGORY_FALLBACK = {
  furniture: "furniture",
  handyman: "repair,home",
  plumbing: "plumbing,bathroom",
  electrical: "electrical,wiring",
  windows: "window",
  minor_repair: "repair",
};

/** Ключевые слова для Unsplash API (тематический поиск) */
export function getThematicKeywords(categoryId, serviceId) {
  const key = `${categoryId}.${serviceId}`;
  return THEMATIC_KEYWORDS[key] || CATEGORY_FALLBACK[categoryId] || null;
}

export function getThematicImageUrl(categoryId, serviceId) {
  const keywords = getThematicKeywords(categoryId, serviceId);
  if (!keywords) return null;
  return url(keywords);
}
