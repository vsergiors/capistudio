/**
 * =========================================================
 *  PLANTILLA DE PLUGINS - CapiStudio Docs
 * =========================================================
 * Para añadir un plugin nuevo, copia el bloque { ... } de
 * abajo, pégalo dentro del array (antes del "];") y rellena
 * los campos. No hace falta tocar ningún otro archivo.
 *
 * Campos:
 *  - name        -> Nombre del plugin (obligatorio)
 *  - version     -> Versión actual, ej "1.0.0" (opcional)
 *  - mcVersion   -> Versión de Minecraft/Paper soportada (opcional)
 *  - description -> Descripción corta (obligatorio)
 *  - tags        -> Lista de etiquetas, ej ["Economía", "SQLite"]
 *  - modrinth    -> URL a Modrinth (deja "" si no tiene)
 *  - spigot      -> URL a Spigot (deja "" si no tiene)
 *  - icon        -> Emoji o letra para el icono de la tarjeta
 * =========================================================
 */

const PLUGINS = [
  {
    name: "TradePlus",
    version: "1.0.0",
    mcVersion: "Paper 1.21.9",
    description: "TradePlus is a secure player-to-player trading plugin for Paper 1.21.9 with a shared trade GUI, Vault economy support, and scam protection.",
    tags: ["Economía", "Transporte", "Utilidad"],
    spigot: "https://www.spigotmc.org/resources/tradeplus2.136861/",
    icon: "🔁"
  },
  {
    name: "SeasonalShop",
    version: "1.0.0",
    mcVersion: "Paper 1.21.9",
    description: "SeasonalShop is a seasonal cosmetics shop for Paper 1.21.9 with Vault support and automatic season switching.",
    tags: ["Economia"],
    spigot: "https://www.spigotmc.org/resources/seasonalshop.136858/",
    icon: "🛒"
  },
  {
    name: "VoidLottey",
    version: "1.0.0",
    mcVersion: "Paper 1.21.9",
    description: "Automatic lottery system with weighted draws. Players buy tickets via Vault to grow a pot, winners are picked automatically. Requires Vault.",
    tags: ["Economia", "MiniJuego"],
    modrinth: "https://modrinth.com/plugin/voidlottery",
    spigot: "https://www.spigotmc.org/resources/voidlottery.136873/",
    icon: "🎟️"
  },
  {
    name: "VoidPunishments",
    version: "1.0.0",
    mcVersion: "Paper 1.21.9",
    description: "VoidPunishments — sistema de sanciones (ban, tempban, banip, kick, warn, mute) 100% configurable, con modo silencioso y variables dinámicas.",
    tags: ["Gestion"],
    modrinth: "https://modrinth.com/plugin/voidpunishments",
    spigot: "https://www.spigotmc.org/resources/voidpunishments.136892/",
    icon: "🔨"
  },

  // 👇 Copia aquí abajo un bloque nuevo cuando publiques otro plugin
  /*
  {
    name: "NombreDelPlugin",
    version: "1.0.0",
    mcVersion: "Paper 1.21.x",
    description: "Descripción corta de qué hace el plugin.",
    tags: ["Etiqueta1", "Etiqueta2"],
    modrinth: "https://modrinth.com/plugin/tu-plugin",
    spigot: "https://spigot.com/CapiStudio/tu-plugin",
    icon: "⚙️"
  },
  */
];
