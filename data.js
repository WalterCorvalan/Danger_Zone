/* =====================================================================
   DATOS DEL SITIO  ·  Este es el único archivo que hay que editar para
   actualizar eventos, ganadores, juegos y fotos. No hace falta tocar el
   resto del código. Se puede editar directo desde GitHub (lápiz ✏️).
   ===================================================================== */
window.DZ = {

  /* ---------- PLANILLA DE GOOGLE (opcional) ----------
     Pegar acá la dirección que da Google al instalar el panel (ver README).
     Con eso, las reservas, cumpleaños y pedidos de juegos de la web quedan
     anotados solos en la planilla y aparecen en admin.html. */
  api: "",

  /* ---------- PRÓXIMOS EVENTOS ----------
     date: "AAAA-MM-DD" (ej. "2026-11-28"). Si queda en null dice "Fecha a confirmar".
     time: texto libre (ej. "18:00 hs").
     img:  imagen del banner (opcional). Si el archivo existe en assets/, se usa
           en lugar de la ilustración. Ver README. */
  events: [
    { id: "mk", name: "Mortal Kombat 11", tag: "Torneo", date: null, time: "",
      desc: "Elegí a tu luchador y demostrá quién manda en la arena.",
      img: "assets/evento-mk.webp", e1: "#ff2f3f", e2: "#6e0b0b" },
    { id: "fifa", name: "F26", tag: "Torneo", date: null, time: "",
      desc: "Torneo de F26. Armá tu equipo y salí a buscar la copa.",
      img: "assets/evento-fifa.webp", e1: "#17ff8f", e2: "#07503a" }
  ],

  /* ---------- SALÓN DE LA FAMA (ganadores históricos) ----------
     Un renglón por torneo. Se ordena solo: el más reciente arriba.
     Copiar el modelo de abajo (sin las barras //) y completar:
       { fecha: "2026-10-10", torneo: "F26", ganador: "Nombre", segundo: "Nombre" },
     "segundo" es opcional. */
  winners: [
    // { fecha: "2026-10-10", torneo: "F26", ganador: "Nombre", segundo: "Nombre" },
  ],

  /* ---------- JUEGOS DISPONIBLES ----------
     plat: lista con PS5, Xbox, PC, VR y/o Simulador.
     estado: "disponible" o "pronto".
     color (opcional): blue, red, green, pink, violet u orange (color de la tarjeta).
     Revisar esta lista: es un punto de partida, hay que completarla con
     los juegos que realmente tiene el local. */
  games: [
    { name: "F26",        plat: ["PS5", "Xbox", "PC"], genre: "Fútbol",  estado: "disponible", color: "green" },
    { name: "Mortal Kombat 11",  plat: ["PS5", "Xbox"],       genre: "Lucha",   estado: "disponible", color: "red" },
    { name: "F1",             plat: ["Simulador"],         genre: "Carreras", estado: "disponible", color: "orange" }
  ],

  /* ---------- GALERÍA DE FOTOS ----------
     1) Subir la foto a la carpeta assets/galeria/ (mejor en .webp o .jpg, de hasta ~300 KB).
     2) Agregar una línea acá. Ejemplo:
        { src: "assets/galeria/torneo-fifa.webp", alt: "Final del torneo de FIFA", caption: "Final de FIFA, octubre" },
     Si la lista está vacía se muestran espacios de ejemplo. */
  gallery: [
    // { src: "assets/galeria/foto-1.webp", alt: "Descripción de la foto", caption: "Texto corto (opcional)" },
  ]
};
