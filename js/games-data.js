const GAMES_DATA = [
    {
        id: "hollow-knight",
        title: "Hollow Knight",
        genre: "METROIDVANIA",
        tagline: "Desciende a un reino olvidado",
        description: "Explora Hallownest, un vasto reino subterráneo habitado por insectos y criaturas extrañas. Domina nuevas habilidades, vence a jefes desafiantes y reconstruye una historia contada a través de sus ruinas.",
        score: "9.6",
        platforms: "PC · PS · Xbox · Switch",
        price: 14.99,
        youtubeId: "UAO2urG23S4"
    },
    {
        id: "gow-ragnarok",
        title: "God of War Ragnarök",
        genre: "ACCIÓN",
        tagline: "El destino no espera a Kratos",
        description: "Kratos y Atreus viajan por los Nueve Reinos en busca de respuestas mientras se acerca el Ragnarök. Enfrenta dioses nórdicos, criaturas colosales y descubre el vínculo entre padre e hijo.",
        score: "9.4",
        platforms: "PC · PlayStation",
        price: 49.99,
        youtubeId: "EE-4Gvj_-sE"
    },
    {
        id: "party-animals",
        title: "Party Animals",
        genre: "MULTIJUGADOR",
        tagline: "Amistad, caos y muchas caídas",
        description: "Pelea con cachorros, gatitos y otras criaturas con físicas impredecibles en modos locales y en línea. Ideal para partidas rápidas con amigos y risas aseguradas.",
        score: "8.7",
        platforms: "PC · Xbox",
        price: 19.99,
        youtubeId: "L4BWwOOU5Cg"
    },
    {
        id: "elden-ring",
        title: "Elden Ring",
        genre: "RPG ACCIÓN",
        tagline: "Álzate, Sinluz, y que la gracia te guíe",
        description: "Recorre las Tierras Intermedias en un mundo abierto interconectado lleno de mazmorras, secretos y jefes memorables con un sistema de combate profundo y personalizable.",
        score: "9.7",
        platforms: "PC · PS · Xbox",
        price: 59.99,
        youtubeId: "E3Huy2cdih0"
    },
    {
        id: "cyberpunk-2077",
        title: "Cyberpunk 2077",
        genre: "CIENCIA FICCIÓN",
        tagline: "Bienvenido a Night City",
        description: "Juega como V, un mercenario a sueldo en una megalópolis obsesionada con el poder, el glamour y la modificación corporal. Toma decisiones que cambian el rumbo de la historia.",
        score: "8.9",
        platforms: "PC · PS · Xbox",
        price: 39.99,
        youtubeId: "8X2kIfS6fb8"
    },
    {
        id: "cuphead",
        title: "Cuphead",
        genre: "RUN & GUN",
        tagline: "Dibujos animados de los años 30",
        description: "Acción clásica de disparos y plataformas inspirada en las caricaturas de los años 30, con fondos pintados a mano, jazz original y enfrentamientos intensos contra jefes.",
        score: "9.1",
        platforms: "PC · PS · Xbox · Switch",
        price: 19.99,
        youtubeId: "4TjUPXAnQXw"
    },
    {
        id: "rdr2",
        title: "Red Dead Redemption 2",
        genre: "AVENTURA",
        tagline: "El ocaso del lejano oeste",
        description: "Sigue a Arthur Morgan y a la banda de Van der Linde mientras huyen por el corazón de Estados Unidos en una epopeya de forajidos con un mundo abierto sumamente detallado.",
        score: "9.8",
        platforms: "PC · PS · Xbox",
        price: 34.99,
        youtubeId: "eaW0tYpxyp0"
    },
    {
        id: "hades",
        title: "Hades",
        genre: "ROGUELIKE",
        tagline: "Desafía al dios de los muertos",
        description: "Ábrete paso fuera del Inframundo usando los poderes y las armas míticas del Olimpo mientras cada intento desbloquea mejoras, armas y diálogos nuevos.",
        score: "9.5",
        platforms: "PC · PS · Xbox · Switch",
        price: 24.99,
        youtubeId: "91t0ha9x0AE"
    },
    {
        id: "baldurs-gate-3",
        title: "Baldur's Gate 3",
        genre: "ROL TÁCTICO",
        tagline: "Reúne a tu grupo y decide tu destino",
        description: "Una aventura de rol basada en Dungeons & Dragons con libertad de elecciones, compañeros con historias propias, combate táctico por turnos y modo cooperativo.",
        score: "9.7",
        platforms: "PC · PS · Xbox",
        price: 59.99,
        youtubeId: "1T22wNvoNiU"
    },
    {
        id: "celeste",
        title: "Celeste",
        genre: "PLATAFORMAS",
        tagline: "Escala la montaña paso a paso",
        description: "Ayuda a Madeline a sobrevivir a sus demonios interiores en su viaje hacia la cima de la montaña Celeste con cientos de desafíos de precisión y reintentos instantáneos.",
        score: "9.3",
        platforms: "PC · PS · Xbox · Switch",
        price: 16.99,
        youtubeId: "iof79iDFdTE"
    },
    {
        id: "witcher-3",
        title: "The Witcher 3: Wild Hunt",
        genre: "ACCIÓN RPG",
        tagline: "Caza monstruos en un continente vasto",
        description: "Como Geralt de Rivia, cazador de monstruos a sueldo, emprende la búsqueda de la niña de la profecía en un mundo devastado por la guerra y habitado por bestias.",
        score: "9.6",
        platforms: "PC · PS · Xbox",
        price: 29.99,
        youtubeId: "c0i88t0Kacs"
    },
    {
        id: "sekiro",
        title: "Sekiro: Shadows Die Twice",
        genre: "ACCIÓN",
        tagline: "Domina el desvío y el honor",
        description: "En el Japón del período Sengoku, encarna a un guerrero deshonrado y desfigurado rescatado al borde de la muerte para proteger a su joven señor y vengarse de su clan.",
        score: "9.4",
        platforms: "PC · PS · Xbox",
        price: 59.99,
        youtubeId: "rXMX4YJ7Lks"
    },
    {
        id: "minecraft",
        title: "Minecraft",
        genre: "SANDBOX",
        tagline: "Construye, explora y sobrevive",
        description: "Explora mundos infinitos formados por bloques, recolecta recursos, fabrica herramientas y levanta desde simples refugios hasta grandes estructuras en solitario o multijugador.",
        score: "9.2",
        platforms: "PC · PS · Xbox · Switch",
        price: 26.99,
        youtubeId: "MmB9b5njVbA"
    }
];