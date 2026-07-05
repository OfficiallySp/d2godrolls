/* ---------------------------------------------------------------------------
   God Roll Armory — weapon data
   Curated snapshot of community-consensus rolls. To add a weapon, copy any
   entry and fill it in; the UI picks up new types/elements automatically.

   element: kinetic | arc | solar | void | stasis | strand
   source.cat: raid | dungeon | nightfall | trials | crucible | world | exotic
   tier: S | A | B  (overall grind-worthiness)
   pve / pvp: null when the weapon has no roll worth chasing in that mode.
--------------------------------------------------------------------------- */

// Short descriptions shown as tooltips on trait perks.
const PERKS = {
  "Explosive Payload": "Shots split into an explosive round — bonus damage, no falloff on the blast, flinches targets.",
  "Firefly": "Precision kills detonate the target in a solar explosion and boost reload.",
  "Eye of the Storm": "Accuracy and handling improve as your health gets lower — wins duels you should lose.",
  "Heal Clip": "Reloading right after a kill heals you and nearby allies.",
  "Incandescent": "Kills scorch nearby enemies, chaining solar ignitions through groups.",
  "Rewind Rounds": "When the mag runs dry, hits you landed return rounds straight to the magazine.",
  "Kinetic Tremors": "Sustained kinetic hits send damaging shockwaves through the target — works on bodies, not just crits.",
  "Snapshot Sights": "Massively faster aim-down-sights speed.",
  "Opening Shot": "Bonus accuracy and range on the first shot of an engagement — the sniper/shotgun dueling perk.",
  "Quickdraw": "Weapon can be drawn instantly.",
  "Reconstruction": "The weapon slowly reloads itself while stowed, up to double capacity.",
  "Bait and Switch": "Deal damage with all three of your weapons within a window for a big damage boost on this one.",
  "Fourth Time's the Charm": "Rapid precision hits return two rounds to the magazine.",
  "Ambitious Assassin": "Overflows the magazine based on kills made just before reloading.",
  "Chain Reaction": "Every kill creates an elemental explosion — the add-clear perk.",
  "Subsistence": "Kills partially refill the magazine from reserves without reloading.",
  "Frenzy": "While in combat for a few seconds: bonus damage, handling, and reload — always-on 15% in PvE.",
  "Dragonfly": "Precision kills create an elemental damage explosion.",
  "Recombination": "Elemental final blows stack damage into your next shot — up to a one-shot champion nuke.",
  "Killing Tally": "Kills boost damage until you stow or reload — pairs with perks that refill the mag.",
  "Chill Clip": "Top half of the magazine applies slow — stacks to freeze; stuns Overload and Unstoppable champions.",
  "Focused Fury": "Landing half the mag as precision hits grants bonus damage.",
  "Demolitionist": "Kills recharge your grenade; throwing a grenade reloads the weapon.",
  "Hatchling": "Precision kills spawn a Threadling to seek new targets.",
  "Envious Arsenal": "Dealing damage with both other weapons before drawing refills this from reserves.",
  "Envious Assassin": "Kills with your other weapons before drawing overflow this magazine.",
  "Voltshot": "Reloading after a kill overcharges the next shot to jolt targets — chain-lightning add clear.",
  "Rapid Hit": "Rapid precision hits stack reload speed and stability.",
  "Auto-Loading Holster": "The weapon reloads itself after a moment stowed — swap DPS backbone.",
  "Explosive Light": "Picking up an Orb of Power buffs your next shots (~25% on rockets/GLs).",
  "Vorpal Weapon": "Flat bonus damage against bosses, minibosses, champions, and vehicles.",
  "One for All": "Hitting three separate targets grants a long 35% damage buff.",
  "Feeding Frenzy": "Each rapid kill progressively improves reload speed.",
  "Master of Arms": "Kills with any weapon buff this weapon's damage for a short time.",
  "Repulsor Brace": "Kills against void-debuffed targets grant a void overshield.",
  "Destabilizing Rounds": "Kills make nearby enemies volatile — they explode when damaged.",
  "Zen Moment": "Dealing damage increases stability and reduces flinch.",
  "Headseeker": "Body hits briefly boost precision damage — forgiving pulse dueling perk.",
  "Relentless Strikes": "Landing three light-attack hits within a short time grants sword ammo.",
  "Whirlwind Blade": "Rapid consecutive sword strikes stack up bonus damage.",
  "Magnificent Howl": "Rapid precision hits buff the next shots' damage — the Luna's Howl signature.",
  "Slideshot": "Sliding partially reloads the magazine and boosts range and stability.",
  "Keep Away": "Bonus range, reload, and accuracy while no enemies are near you.",
  "Precision Instrument": "Consecutive hits on the same target ramp up precision damage — two-taps on 120s.",
  "Desperado": "Reloading after a precision kill massively increases fire rate.",
  "Dynamic Sway Reduction": "Accuracy and stability improve the longer you hold the trigger.",
  "Target Lock": "Damage ramps the longer you stay on the same target — melts in sustained sprays.",
  "Kill Clip": "Reloading after a kill grants bonus damage.",
  "Outlaw": "Precision kills dramatically speed up reload.",
  "Rampage": "Kills stack up to 3x bonus damage.",
  "Rangefinder": "Better zoom and projectile speed while aiming — effective range up.",
  "Threat Detector": "Bonus reload, stability, and handling when enemies are close.",
  "Triple Tap": "Three rapid precision hits return a round to the magazine.",
  "Firing Line": "Bonus precision damage while near two or more allies — fireteam DPS perk.",
  "Overflow": "Picking up special or heavy ammo overflows the magazine to double capacity.",
  "Controlled Burst": "Landing the whole burst boosts damage and charge speed.",
  "Wolfpack Rounds": "Sword hits release tracking cluster missiles — Gjallarhorn's gift.",
};

const WEAPONS = [
  /* ------------------------------------------------------------- raids */
  {
    name: "Fatebringer", sub: "Timelost", badge: "HC", type: "Hand Cannon",
    frame: "Adaptive · 140 RPM", element: "kinetic", rarity: "legendary", tier: "S",
    craftable: false, source: { name: "Vault of Glass", cat: "raid" },
    pve: {
      barrel: "Corkscrew Rifling", mag: "Tactical Mag",
      traits: ["Explosive Payload", "Firefly"], mw: "Reload",
      why: "The definitive legendary hand cannon: explosive rounds flinch everything and Firefly chain-detonates whole packs."
    },
    pvp: {
      barrel: "Hammer-Forged Rifling", mag: "Accurized Rounds",
      traits: ["Explosive Payload", "Eye of the Storm"], mw: "Range",
      why: "Explosive Payload's flinch wins duels; Eye of the Storm steadies your aim in the clutch."
    }
  },
  {
    name: "Abyss Defiant", badge: "AR", type: "Auto Rifle",
    frame: "Lightweight · 450 RPM", element: "solar", rarity: "legendary", tier: "A",
    craftable: false, source: { name: "Crota's End", cat: "raid" },
    pve: {
      barrel: "Arrowhead Brake", mag: "Appended Mag",
      traits: ["Heal Clip", "Incandescent"], mw: "Reload",
      why: "The self-sustain auto: every reload after a kill heals you while Incandescent spreads scorch."
    },
    pvp: null
  },
  {
    name: "The Supremacy", badge: "SR", type: "Sniper Rifle",
    frame: "Rapid-Fire · 140 RPM", element: "kinetic", rarity: "legendary", tier: "A",
    craftable: true, source: { name: "Last Wish", cat: "raid" },
    pve: {
      barrel: "Fluted Barrel", mag: "Appended Mag",
      traits: ["Rewind Rounds", "Kinetic Tremors"], mw: "Reload",
      why: "Tremors proc off body shots and Rewind keeps the mag topped — lazy, huge total damage."
    },
    pvp: {
      barrel: "Fluted Barrel", mag: "Accurized Rounds",
      traits: ["Snapshot Sights", "Opening Shot"], mw: "Handling",
      why: "Rapid-fire snipers are forgiving; Snapshot plus Opening Shot makes it a fast, honest dueling rifle."
    }
  },
  {
    name: "Apex Predator", badge: "RL", type: "Rocket Launcher",
    frame: "Adaptive", element: "solar", rarity: "legendary", tier: "S",
    craftable: true, source: { name: "Last Wish", cat: "raid" },
    pve: {
      barrel: "Quick Launch", mag: "Impact Casing",
      traits: ["Reconstruction", "Bait and Switch"], mw: "Velocity",
      why: "Reconstruction keeps two in the tube without reloading; Bait and Switch is the gold-standard rocket DPS roll."
    },
    pvp: null
  },
  {
    name: "Cataclysmic", badge: "LFR", type: "Linear Fusion",
    frame: "Precision", element: "solar", rarity: "legendary", tier: "A",
    craftable: true, source: { name: "Vow of the Disciple", cat: "raid" },
    pve: {
      barrel: "Arrowhead Brake", mag: "Enhanced Battery",
      traits: ["Fourth Time's the Charm", "Bait and Switch"], mw: "Charge Time",
      why: "FTTC stretches every mag and Bait and Switch keeps it hitting like a heavy twice its slot."
    },
    pvp: null
  },
  {
    name: "Forbearance", badge: "GL", type: "Grenade Launcher",
    frame: "Wave Frame", element: "arc", rarity: "legendary", tier: "S",
    craftable: true, source: { name: "Vow of the Disciple", cat: "raid" },
    pve: {
      barrel: "Quick Launch", mag: "High-Velocity Rounds",
      traits: ["Ambitious Assassin", "Chain Reaction"], mw: "Velocity",
      why: "One wave clears a room, Chain Reaction detonates the stragglers, Ambitious refills the tube. Add-clear royalty."
    },
    pvp: null
  },
  {
    name: "Submission", badge: "SMG", type: "Submachine Gun",
    frame: "Lightweight · 900 RPM", element: "kinetic", rarity: "legendary", tier: "B",
    craftable: true, source: { name: "Vow of the Disciple", cat: "raid" },
    pve: {
      barrel: "Smallbore", mag: "Appended Mag",
      traits: ["Subsistence", "Frenzy"], mw: "Reload",
      why: "A no-reload workhorse primary — Subsistence feeds the mag and Frenzy is always active in real content."
    },
    pvp: null
  },
  {
    name: "Zaouli's Bane", badge: "HC", type: "Hand Cannon",
    frame: "Adaptive · 140 RPM", element: "solar", rarity: "legendary", tier: "S",
    craftable: true, source: { name: "King's Fall", cat: "raid" },
    pve: {
      barrel: "Corkscrew Rifling", mag: "Tactical Mag",
      traits: ["Explosive Payload", "Incandescent"], mw: "Reload",
      why: "Fatebringer's solar twin — explosive rounds plus scorch chains make it the best solar hand cannon in the game."
    },
    pvp: null
  },
  {
    name: "Doom of Chelchis", badge: "SR", type: "Scout Rifle",
    frame: "Rapid-Fire · 180 RPM", element: "void", rarity: "legendary", tier: "A",
    craftable: true, source: { name: "King's Fall", cat: "raid" },
    pve: {
      barrel: "Arrowhead Brake", mag: "Appended Mag",
      traits: ["Explosive Payload", "Dragonfly"], mw: "Reload",
      why: "Explosive rounds poke safely from range and Dragonfly turns every headshot kill into void splash damage."
    },
    pvp: null
  },
  {
    name: "Succession", badge: "SR", type: "Sniper Rifle",
    frame: "Aggressive · 72 RPM", element: "kinetic", rarity: "legendary", tier: "A",
    craftable: true, source: { name: "Deep Stone Crypt", cat: "raid" },
    pve: {
      barrel: "Fluted Barrel", mag: "Appended Mag",
      traits: ["Reconstruction", "Recombination"], mw: "Handling",
      why: "Recon reloads it on your back; Recombination charges a shot that deletes champions in one crit."
    },
    pvp: null
  },
  {
    name: "Heritage", badge: "SG", type: "Shotgun",
    frame: "Pinpoint Slug", element: "kinetic", rarity: "legendary", tier: "S",
    craftable: true, source: { name: "Deep Stone Crypt", cat: "raid" },
    pve: {
      barrel: "Smallbore", mag: "Assault Mag",
      traits: ["Reconstruction", "Recombination"], mw: "Handling",
      why: "The slug shotgun benchmark for years — passive reloads plus Recombination burst on demand."
    },
    pvp: null
  },
  {
    name: "Commemoration", badge: "MG", type: "Machine Gun",
    frame: "Adaptive · 600 RPM", element: "void", rarity: "legendary", tier: "A",
    craftable: true, source: { name: "Deep Stone Crypt", cat: "raid" },
    pve: {
      barrel: "Arrowhead Brake", mag: "Extended Mag",
      traits: ["Reconstruction", "Killing Tally"], mw: "Reload",
      why: "Killing Tally stacks never drop because Reconstruction reloads without touching the mag. Infinite x3."
    },
    pvp: null
  },
  {
    name: "Critical Anomaly", badge: "SR", type: "Sniper Rifle",
    frame: "Aggressive · 72 RPM", element: "stasis", rarity: "legendary", tier: "A",
    craftable: true, source: { name: "Salvation's Edge", cat: "raid" },
    pve: {
      barrel: "Fluted Barrel", mag: "Appended Mag",
      traits: ["Rewind Rounds", "Chill Clip"], mw: "Handling",
      why: "A sniper that freezes: Chill Clip stuns two champion types from complete safety, and Rewind keeps it fed."
    },
    pvp: null
  },
  {
    name: "Briar's Contempt", badge: "LFR", type: "Linear Fusion",
    frame: "Aggressive", element: "solar", rarity: "legendary", tier: "A",
    craftable: true, source: { name: "Root of Nightmares", cat: "raid" },
    pve: {
      barrel: "Arrowhead Brake", mag: "Enhanced Battery",
      traits: ["Reconstruction", "Focused Fury"], mw: "Charge Time",
      why: "Two-burst aggressive frame that reloads itself while you swap — steady, high-uptime boss damage."
    },
    pvp: null
  },
  {
    name: "Rufus's Fury", badge: "AR", type: "Auto Rifle",
    frame: "Rapid-Fire · 720 RPM", element: "strand", rarity: "legendary", tier: "A",
    craftable: true, source: { name: "Root of Nightmares", cat: "raid" },
    pve: {
      barrel: "Arrowhead Brake", mag: "Appended Mag",
      traits: ["Demolitionist", "Hatchling"], mw: "Reload",
      why: "A strand engine — grenades back constantly, Threadlings on every precision kill, never stop shooting."
    },
    pvp: null
  },

  /* ----------------------------------------------------------- dungeons */
  {
    name: "VS Chill Inhibitor", badge: "GL", type: "Grenade Launcher",
    frame: "Rapid-Fire · Heavy", element: "stasis", rarity: "legendary", tier: "S",
    craftable: false, source: { name: "Vesper's Host", cat: "dungeon" },
    pve: {
      barrel: "Quick Launch", mag: "Spike Grenades",
      traits: ["Envious Arsenal", "Bait and Switch"], mw: "Velocity",
      why: "The DPS roll of its era: prime Envious with your other two guns, swap in with a full mag and Bait and Switch running."
    },
    pvp: null
  },
  {
    name: "Indebted Kindness", badge: "SA", type: "Sidearm",
    frame: "Rocket-Assisted", element: "arc", rarity: "legendary", tier: "S",
    craftable: false, source: { name: "Warlord's Ruin", cat: "dungeon" },
    pve: {
      barrel: "Quick Launch", mag: "High-Velocity Rounds",
      traits: ["Demolitionist", "Voltshot"], mw: "Reload",
      why: "The rocket sidearm that started it all — Voltshot jolts entire rooms off one reload, on special ammo."
    },
    pvp: null
  },

  /* ---------------------------------------------------------- nightfall */
  {
    name: "Hung Jury SR4", badge: "SR", type: "Scout Rifle",
    frame: "Precision · 180 RPM", element: "kinetic", rarity: "legendary", tier: "A",
    craftable: false, source: { name: "Nightfall", cat: "nightfall" },
    pve: {
      barrel: "Arrowhead Brake", mag: "Appended Mag",
      traits: ["Rapid Hit", "Kinetic Tremors"], mw: "Reload",
      why: "The Grandmaster comfort pick — safe range, snappy reloads, and Tremors chunking everything you tag."
    },
    pvp: null
  },
  {
    name: "Wendigo GL3", badge: "GL", type: "Grenade Launcher",
    frame: "Adaptive · Heavy", element: "arc", rarity: "legendary", tier: "A",
    craftable: false, source: { name: "Nightfall", cat: "nightfall" },
    pve: {
      barrel: "Quick Launch", mag: "Spike Grenades",
      traits: ["Auto-Loading Holster", "Explosive Light"], mw: "Blast Radius",
      why: "Grab an orb, swap, dump six buffed spike grenades, swap out while it reloads itself. Classic burst loop."
    },
    pvp: null
  },
  {
    name: "The Hothead", badge: "RL", type: "Rocket Launcher",
    frame: "Adaptive", element: "arc", rarity: "legendary", tier: "A",
    craftable: false, source: { name: "Nightfall", cat: "nightfall" },
    pve: {
      barrel: "Quick Launch", mag: "Impact Casing",
      traits: ["Auto-Loading Holster", "Explosive Light"], mw: "Velocity",
      why: "The swap-rocket standard: it reloads on your back and Explosive Light rounds hit ~25% harder."
    },
    pvp: null
  },
  {
    name: "Warden's Law", badge: "HC", type: "Hand Cannon",
    frame: "Heavy Burst · 257 RPM", element: "kinetic", rarity: "legendary", tier: "A",
    craftable: false, source: { name: "Nightfall", cat: "nightfall" },
    pve: {
      barrel: "Corkscrew Rifling", mag: "Tactical Mag",
      traits: ["Fourth Time's the Charm", "Vorpal Weapon"], mw: "Handling",
      why: "The two-shot burst double-dips FTTC refunds while Vorpal makes it a genuine champion-killer primary."
    },
    pvp: null
  },

  /* ------------------------------------------------- BRAVE / reissues */
  {
    name: "Midnight Coup", badge: "HC", type: "Hand Cannon",
    frame: "Adaptive · 140 RPM", element: "kinetic", rarity: "legendary", tier: "A",
    craftable: false, source: { name: "Onslaught (BRAVE)", cat: "world" },
    pve: {
      barrel: "Corkscrew Rifling", mag: "Tactical Mag",
      traits: ["Firefly", "One for All"], mw: "Reload",
      why: "Tag three targets for an easy 35% buff, then let Firefly chain the kills. The Leviathan classic, better than ever."
    },
    pvp: null
  },
  {
    name: "The Mountaintop", badge: "GL", type: "Grenade Launcher",
    frame: "Micro-Missile · Kinetic slot", element: "kinetic", rarity: "legendary", tier: "A",
    craftable: false, source: { name: "Onslaught (BRAVE)", cat: "world" },
    pve: {
      barrel: "Hard Launch", mag: "High-Velocity Rounds",
      traits: ["Auto-Loading Holster", "Recombination"], mw: "Handling",
      why: "Stack Recombination off add kills, swap to it, and the next micro-missile hits like a truck. Elite swap-DPS glue."
    },
    pvp: null
  },
  {
    name: "The Recluse", badge: "SMG", type: "Submachine Gun",
    frame: "Lightweight · 900 RPM", element: "void", rarity: "legendary", tier: "A",
    craftable: false, source: { name: "Onslaught (BRAVE)", cat: "world" },
    pve: {
      barrel: "Smallbore", mag: "Appended Mag",
      traits: ["Feeding Frenzy", "Master of Arms"], mw: "Reload",
      why: "Kill anything with anything and Recluse hits harder — the loop that once ruled the game still shreds."
    },
    pvp: null
  },
  {
    name: "Elsie's Rifle", badge: "PR", type: "Pulse Rifle",
    frame: "Aggressive Burst · 450 RPM", element: "void", rarity: "legendary", tier: "A",
    craftable: false, source: { name: "Onslaught (BRAVE)", cat: "world" },
    pve: {
      barrel: "Arrowhead Brake", mag: "Appended Mag",
      traits: ["Repulsor Brace", "Destabilizing Rounds"], mw: "Range",
      why: "A perpetual-overshield machine: kills make targets volatile, volatile kills shield you. Void 3.0 in one gun."
    },
    pvp: {
      barrel: "Hammer-Forged Rifling", mag: "Ricochet Rounds",
      traits: ["Zen Moment", "Headseeker"], mw: "Range",
      why: "Aggressive-burst pulses two-burst reliably; Headseeker makes sloppy bursts forgiving."
    }
  },
  {
    name: "Edge Transit", badge: "GL", type: "Grenade Launcher",
    frame: "Adaptive · Heavy", element: "void", rarity: "legendary", tier: "S",
    craftable: false, source: { name: "Onslaught (BRAVE)", cat: "world" },
    pve: {
      barrel: "Quick Launch", mag: "Spike Grenades",
      traits: ["Envious Assassin", "Bait and Switch"], mw: "Velocity",
      why: "The meme gun turned meta king — an overflowed mag of spike grenades with Bait and Switch is top-tier boss DPS."
    },
    pvp: null
  },
  {
    name: "Falling Guillotine", badge: "SW", type: "Sword",
    frame: "Vortex Frame", element: "void", rarity: "legendary", tier: "A",
    craftable: false, source: { name: "Onslaught (BRAVE)", cat: "world" },
    pve: {
      barrel: "Jagged Edge", mag: "Swordmaster's Guard",
      traits: ["Relentless Strikes", "Whirlwind Blade"], mw: "Impact",
      why: "Light attacks build ammo and Whirlwind stacks, heavy spin deletes. Still the legendary sword to beat."
    },
    pvp: null
  },
  {
    name: "Blast Furnace", badge: "PR", type: "Pulse Rifle",
    frame: "Aggressive Burst · 450 RPM", element: "kinetic", rarity: "legendary", tier: "A",
    craftable: false, source: { name: "Onslaught (BRAVE)", cat: "world" },
    pve: {
      barrel: "Arrowhead Brake", mag: "Appended Mag",
      traits: ["Firefly", "Kinetic Tremors"], mw: "Reload",
      why: "Headshot kills explode, body damage quakes — a pulse that clears like a wave frame at scout range."
    },
    pvp: null
  },

  /* -------------------------------------------------------------- trials */
  {
    name: "The Messenger", badge: "PR", type: "Pulse Rifle",
    frame: "High-Impact · 340 RPM", element: "kinetic", rarity: "legendary", tier: "A",
    craftable: false, source: { name: "Trials of Osiris", cat: "trials" },
    pvp: {
      barrel: "Hammer-Forged Rifling", mag: "Ricochet Rounds",
      traits: ["Rapid Hit", "Desperado"], mw: "Range",
      why: "Two-burst at range, and after a precision kill Desperado turns it into a 540 that still hits like a 340."
    },
    pve: null
  },
  {
    name: "Eye of Sol", badge: "SR", type: "Sniper Rifle",
    frame: "Adaptive · 90 RPM", element: "kinetic", rarity: "legendary", tier: "A",
    craftable: false, source: { name: "Trials of Osiris", cat: "trials" },
    pvp: {
      barrel: "Fluted Barrel", mag: "Accurized Rounds",
      traits: ["Snapshot Sights", "Opening Shot"], mw: "Handling",
      why: "The flawless-pool classic: instant ADS and a laser first shot — everything a dueling sniper needs."
    },
    pve: null
  },
  {
    name: "The Immortal", badge: "SMG", type: "Submachine Gun",
    frame: "Aggressive · 750 RPM", element: "strand", rarity: "legendary", tier: "S",
    craftable: false, source: { name: "Trials of Osiris", cat: "trials" },
    pvp: {
      barrel: "Hammer-Forged Rifling", mag: "Ricochet Rounds",
      traits: ["Dynamic Sway Reduction", "Target Lock"], mw: "Range",
      why: "The SMG that warped a whole meta — DSR tightens the spray while Target Lock melts through any duel."
    },
    pve: null
  },
  {
    name: "The Summoner", badge: "AR", type: "Auto Rifle",
    frame: "Adaptive · 600 RPM", element: "solar", rarity: "legendary", tier: "A",
    craftable: false, source: { name: "Trials of Osiris", cat: "trials" },
    pve: {
      barrel: "Arrowhead Brake", mag: "Appended Mag",
      traits: ["Heal Clip", "Incandescent"], mw: "Reload",
      why: "Trials gun, PvE monster — the Heal Clip / Incandescent loop on a 600 auto sustains you through anything."
    },
    pvp: {
      barrel: "Hammer-Forged Rifling", mag: "Ricochet Rounds",
      traits: ["Zen Moment", "Kill Clip"], mw: "Range",
      why: "Zen Moment keeps the reticle glued at range; Kill Clip snowballs multi-kills."
    }
  },
  {
    name: "Igneous Hammer", badge: "HC", type: "Hand Cannon",
    frame: "Aggressive · 120 RPM", element: "solar", rarity: "legendary", tier: "S",
    craftable: false, source: { name: "Trials of Osiris", cat: "trials" },
    pvp: {
      barrel: "Hammer-Forged Rifling", mag: "Ricochet Rounds",
      traits: ["Keep Away", "Precision Instrument"], mw: "Range",
      why: "The 120 that defines the archetype — Keep Away range with Precision Instrument two-tap potential."
    },
    pve: null
  },

  /* ------------------------------------------------------------ crucible */
  {
    name: "Rose", badge: "HC", type: "Hand Cannon",
    frame: "Lightweight · 140 RPM", element: "kinetic", rarity: "legendary", tier: "S",
    craftable: false, source: { name: "Crucible (rank reset)", cat: "crucible" },
    pvp: {
      barrel: "Hammer-Forged Rifling", mag: "Ricochet Rounds",
      traits: ["Slideshot", "Explosive Payload"], mw: "Range",
      why: "Lightweight speed, sliding top-ups, and explosive flinch — the default competitive hand cannon."
    },
    pve: null
  },
  {
    name: "Luna's Howl", badge: "HC", type: "Hand Cannon",
    frame: "Precision · 140 RPM", element: "solar", rarity: "legendary", tier: "A",
    craftable: false, source: { name: "Crucible (rank reset)", cat: "crucible" },
    pve: {
      barrel: "Corkscrew Rifling", mag: "Tactical Mag",
      traits: ["Heal Clip", "Incandescent"], mw: "Reload",
      why: "The reissued legend rolls the best solar combo in the game — heal on reload, scorch on kill."
    },
    pvp: {
      barrel: "Hammer-Forged Rifling", mag: "Accurized Rounds",
      traits: ["Heal Clip", "Magnificent Howl"], mw: "Range",
      why: "Land your crits and Magnificent Howl rewards you with faster follow-up kills, healing between fights."
    }
  },
  {
    name: "Riptide", badge: "FR", type: "Fusion Rifle",
    frame: "Rapid-Fire · Kinetic slot", element: "stasis", rarity: "legendary", tier: "A",
    craftable: false, source: { name: "Crucible", cat: "crucible" },
    pve: {
      barrel: "Arrowhead Brake", mag: "Enhanced Battery",
      traits: ["Auto-Loading Holster", "Chill Clip"], mw: "Handling",
      why: "The free champion answer: Chill Clip slows, freezes, and stuns from the kinetic slot, and it reloads itself."
    },
    pvp: null
  },

  /* ---------------------------------------------------- world & seasonal */
  {
    name: "Austringer", badge: "HC", type: "Hand Cannon",
    frame: "Adaptive · 140 RPM", element: "solar", rarity: "legendary", tier: "A",
    craftable: true, source: { name: "Opulent / Duality", cat: "world" },
    pve: {
      barrel: "Corkscrew Rifling", mag: "Tactical Mag",
      traits: ["Outlaw", "Rampage"], mw: "Reload",
      why: "The old faithful feel-good roll — fast reloads feeding stacking damage."
    },
    pvp: {
      barrel: "Hammer-Forged Rifling", mag: "Ricochet Rounds",
      traits: ["Eye of the Storm", "Rangefinder"], mw: "Range",
      why: "Buttery handling with extra effective range, and it shoots straighter as you get shot."
    }
  },
  {
    name: "CALUS Mini-Tool", badge: "SMG", type: "Submachine Gun",
    frame: "Lightweight · 900 RPM", element: "solar", rarity: "legendary", tier: "A",
    craftable: true, source: { name: "Opulent / Duality", cat: "world" },
    pve: {
      barrel: "Smallbore", mag: "Appended Mag",
      traits: ["Threat Detector", "Incandescent"], mw: "Reload",
      why: "Incandescent on a fast lightweight SMG is the whole roll — everything near your target catches fire."
    },
    pvp: null
  },
  {
    name: "Beloved", badge: "SR", type: "Sniper Rifle",
    frame: "Adaptive · 90 RPM", element: "solar", rarity: "legendary", tier: "A",
    craftable: true, source: { name: "World / Season reissue", cat: "world" },
    pvp: {
      barrel: "Fluted Barrel", mag: "Accurized Rounds",
      traits: ["Snapshot Sights", "Opening Shot"], mw: "Handling",
      why: "The most comfortable sniper sight picture in the game with the perks to match."
    },
    pve: null
  },
  {
    name: "Funnelweb", badge: "SMG", type: "Submachine Gun",
    frame: "Lightweight · 900 RPM", element: "void", rarity: "legendary", tier: "A",
    craftable: false, source: { name: "World drop", cat: "world" },
    pve: {
      barrel: "Smallbore", mag: "Appended Mag",
      traits: ["Subsistence", "Frenzy"], mw: "Reload",
      why: "The best world-drop primary for years — free, deadly, and it never needs to reload mid-fight."
    },
    pvp: null
  },
  {
    name: "Taipan-4fr", badge: "LFR", type: "Linear Fusion",
    frame: "Precision", element: "void", rarity: "legendary", tier: "B",
    craftable: true, source: { name: "World / craftable", cat: "world" },
    pve: {
      barrel: "Arrowhead Brake", mag: "Enhanced Battery",
      traits: ["Triple Tap", "Firing Line"], mw: "Charge Time",
      why: "The free DPS starter kit: craftable by anyone, and Triple Tap plus Firing Line still earns its raid slot."
    },
    pvp: null
  },
  {
    name: "IKELOS_SMG_v1.0.3", badge: "SMG", type: "Submachine Gun",
    frame: "Precision · 600 RPM", element: "arc", rarity: "legendary", tier: "A",
    craftable: true, source: { name: "Season of the Seraph", cat: "world" },
    pve: {
      barrel: "Smallbore", mag: "Appended Mag",
      traits: ["Feeding Frenzy", "Voltshot"], mw: "Reload",
      why: "Voltshot on a fast-reloading SMG means you're jolting a new pack every couple of seconds."
    },
    pvp: null
  },
  {
    name: "Retrofit Escapade", badge: "MG", type: "Machine Gun",
    frame: "Rapid-Fire · 900 RPM", element: "void", rarity: "legendary", tier: "A",
    craftable: true, source: { name: "Season of the Seraph", cat: "world" },
    pve: {
      barrel: "Arrowhead Brake", mag: "Extended Mag",
      traits: ["Fourth Time's the Charm", "Target Lock"], mw: "Reload",
      why: "Hold the trigger on a boss: Target Lock ramps to absurd sustained damage while FTTC refunds the mag."
    },
    pvp: null
  },
  {
    name: "Regnant", badge: "GL", type: "Grenade Launcher",
    frame: "Adaptive · Heavy", element: "void", rarity: "legendary", tier: "A",
    craftable: true, source: { name: "Season of Defiance", cat: "world" },
    pve: {
      barrel: "Quick Launch", mag: "Spike Grenades",
      traits: ["Envious Assassin", "Explosive Light"], mw: "Velocity",
      why: "A craftable Edge Transit stand-in — overflow the mag, grab an orb, and dump buffed spikes."
    },
    pvp: null
  },
  {
    name: "Scatter Signal", badge: "FR", type: "Fusion Rifle",
    frame: "Rapid-Fire", element: "strand", rarity: "legendary", tier: "S",
    craftable: false, source: { name: "Season of the Wish", cat: "world" },
    pve: {
      barrel: "Arrowhead Brake", mag: "Enhanced Battery",
      traits: ["Overflow", "Controlled Burst"], mw: "Charge Time",
      why: "Overflow doubles the mag, Controlled Burst boosts every bolt — briefly the best special DPS in the game, still elite."
    },
    pvp: null
  },
  {
    name: "Aberrant Action", badge: "SA", type: "Sidearm",
    frame: "Rocket-Assisted", element: "solar", rarity: "legendary", tier: "S",
    craftable: false, source: { name: "Episode: Echoes", cat: "world" },
    pve: {
      barrel: "Quick Launch", mag: "High-Velocity Rounds",
      traits: ["Heal Clip", "Incandescent"], mw: "Reload",
      why: "A rocket sidearm that heals you and sets the room on fire — the best special-ammo primary-slot partner around."
    },
    pvp: null
  },
  {
    name: "Tinasha's Mastery", badge: "SA", type: "Sidearm",
    frame: "Rocket-Assisted", element: "stasis", rarity: "legendary", tier: "S",
    craftable: false, source: { name: "Episode: Revenant", cat: "world" },
    pve: {
      barrel: "Quick Launch", mag: "High-Velocity Rounds",
      traits: ["Demolitionist", "Chill Clip"], mw: "Reload",
      why: "Chill Clip on a spammable special: slows, freezes, and stuns two champion types with zero setup."
    },
    pvp: null
  },

  /* ------------------------------------------------ exotics (random rolls) */
  {
    name: "Hawkmoon", badge: "HC", type: "Hand Cannon",
    frame: "Exotic · 140 RPM", element: "kinetic", rarity: "exotic", tier: "A",
    craftable: false, source: { name: "Exotic — random roll", cat: "exotic" },
    pvp: {
      barrel: "Smallbore", mag: null,
      traits: ["Opening Shot"], mw: "Range",
      why: "The one roll every Hawkmoon owner hunts: Opening Shot makes the final Paracausal shot land where it must."
    },
    pve: null
  },
  {
    name: "Dead Man's Tale", badge: "SR", type: "Scout Rifle",
    frame: "Exotic · Lever Action", element: "kinetic", rarity: "exotic", tier: "A",
    craftable: false, source: { name: "Exotic — random roll", cat: "exotic" },
    pvp: {
      barrel: "Hammer-Forged Rifling", mag: null,
      traits: ["Snapshot Sights"], mw: "Range",
      why: "Hip-fire cowboy rifle — Snapshot for when you do need the sights, Cranial Spike does the rest."
    },
    pve: null
  },
  {
    name: "Ergo Sum", badge: "SW", type: "Sword",
    frame: "Exotic · Special ammo", element: "arc", rarity: "exotic", tier: "S",
    craftable: false, source: { name: "Exotic — random roll", cat: "exotic" },
    pve: {
      barrel: null, mag: null,
      traits: ["Wolfpack Rounds"], mw: "Impact",
      why: "The chase roll: every swing launches Gjallarhorn cluster missiles. Any frame works — the perk is the weapon."
    },
    pvp: null
  }
];
