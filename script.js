(function () {
  "use strict";

  var WA_NUMBER = "541158153106";
  var WA_TEXT = "Hola! Quiero reservar en Danger Zone.";

  /* ---------- Ilustraciones (SVG inline, sin fotos) ---------- */
  var BODY = "M120 80C150 70 250 70 280 80C330 90 370 190 350 240C340 270 305 275 290 245C275 215 265 200 240 200L160 200C135 200 125 215 110 245C95 275 60 270 50 240C30 190 70 90 120 80Z";

  function defs(id, c1, c2) {
    return '<defs><linearGradient id="g' + id + '" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="' + c1 + '"/><stop offset="1" stop-color="' + c2 + '"/></linearGradient></defs>';
  }
  function svg(inner) {
    return '<svg viewBox="0 0 400 300" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">' + inner + "</svg>";
  }
  function stick(x, y) {
    return '<circle cx="' + x + '" cy="' + y + '" r="22" fill="#0b0814"/><circle cx="' + x + '" cy="' + y + '" r="15" fill="#2a2440"/>';
  }
  function dpad(x, y) {
    return '<g fill="#0b0814"><rect x="' + (x - 5) + '" y="' + (y - 17) + '" width="10" height="34" rx="3"/><rect x="' + (x - 17) + '" y="' + (y - 5) + '" width="34" height="10" rx="3"/></g>';
  }
  function dot(x, y, c) {
    return '<circle cx="' + x + '" cy="' + y + '" r="9" fill="#0b0814"/><circle cx="' + x + '" cy="' + y + '" r="4.5" fill="' + c + '"/>';
  }

  var ART = {
    ps5: function (id, c1, c2) {
      return svg(defs(id, c1, c2) +
        '<path d="' + BODY + '" fill="url(#g' + id + ')"/>' +
        '<path d="M120 80C150 70 250 70 280 80C300 85 315 100 325 120C290 95 110 95 75 120C85 100 100 85 120 80Z" fill="#fff" opacity=".22"/>' +
        '<rect x="170" y="105" width="60" height="38" rx="10" fill="#0b0814" opacity=".35"/>' +
        dpad(110, 135) + dot(290, 108, "#ff6b9a") + dot(315, 133, "#7ad7ff") + dot(265, 133, "#c9a7ff") + dot(290, 158, "#ffd36b") +
        stick(165, 178) + stick(235, 178));
    },
    xbox: function (id, c1, c2) {
      return svg(defs(id, c1, c2) +
        '<path d="' + BODY + '" fill="url(#g' + id + ')"/>' +
        '<path d="M120 80C150 70 250 70 280 80C300 85 315 100 325 120C290 95 110 95 75 120C85 100 100 85 120 80Z" fill="#fff" opacity=".2"/>' +
        '<circle cx="200" cy="108" r="16" fill="#0b0814"/><path d="M192 100l16 16M208 100l-16 16" stroke="' + c2 + '" stroke-width="4" stroke-linecap="round"/>' +
        stick(112, 128) + dpad(168, 178) + stick(232, 178) +
        dot(290, 108, "#ffd23f") + dot(315, 133, "#ff4d4d") + dot(265, 133, "#4da3ff") + dot(290, 158, "#4dff88"));
    },
    pc: function (id, c1, c2) {
      return svg(defs(id, c1, c2) +
        '<rect x="85" y="35" width="230" height="150" rx="14" fill="#0b0814" stroke="url(#g' + id + ')" stroke-width="6"/>' +
        '<rect x="97" y="47" width="206" height="126" rx="6" fill="url(#g' + id + ')" opacity=".9"/>' +
        '<path d="M97 150L170 95l40 40 30-25 63 50v13H97z" fill="#0b0814" opacity=".4"/>' +
        '<rect x="185" y="185" width="30" height="26" fill="#2a2440"/><rect x="150" y="209" width="100" height="10" rx="5" fill="#2a2440"/>' +
        '<rect x="70" y="240" width="190" height="34" rx="8" fill="#1b1430" stroke="url(#g' + id + ')" stroke-width="3"/>' +
        '<g fill="' + c1 + '" opacity=".85"><rect x="80" y="248" width="20" height="8" rx="2"/><rect x="104" y="248" width="20" height="8" rx="2"/><rect x="128" y="248" width="20" height="8" rx="2"/><rect x="152" y="248" width="20" height="8" rx="2"/><rect x="176" y="248" width="20" height="8" rx="2"/><rect x="200" y="248" width="20" height="8" rx="2"/><rect x="224" y="248" width="26" height="8" rx="2"/><rect x="92" y="260" width="140" height="8" rx="2"/></g>' +
        '<rect x="290" y="236" width="34" height="46" rx="17" fill="#1b1430" stroke="url(#g' + id + ')" stroke-width="3"/><path d="M307 236v18" stroke="' + c1 + '" stroke-width="3"/>');
    },
    vr: function (id, c1, c2) {
      return svg(defs(id, c1, c2) +
        '<path d="M60 130C60 100 80 85 110 85h180c30 0 50 15 50 45v50c0 25-15 40-40 40h-35c-15 0-22-14-32-14h-26c-10 0-17 14-32 14H100c-25 0-40-15-40-40z" fill="url(#g' + id + ')"/>' +
        '<path d="M70 118C75 100 90 92 110 92h180c20 0 35 8 40 26-60-14-200-14-260 0z" fill="#fff" opacity=".22"/>' +
        '<rect x="82" y="122" width="236" height="62" rx="26" fill="#0b0814"/>' +
        '<ellipse cx="148" cy="153" rx="38" ry="20" fill="#1d1536"/><ellipse cx="252" cy="153" rx="38" ry="20" fill="#1d1536"/>' +
        '<ellipse cx="148" cy="153" rx="30" ry="13" fill="' + c1 + '" opacity=".55"/><ellipse cx="252" cy="153" rx="30" ry="13" fill="' + c1 + '" opacity=".55"/>' +
        '<path d="M60 140c-18 4-26 18-26 36M340 140c18 4 26 18 26 36" stroke="url(#g' + id + ')" stroke-width="14" stroke-linecap="round" fill="none"/>');
    },
    sim: function (id, c1, c2) {
      return svg(defs(id, c1, c2) +
        '<circle cx="200" cy="140" r="104" fill="none" stroke="url(#g' + id + ')" stroke-width="26"/>' +
        '<rect x="96" y="129" width="208" height="22" fill="url(#g' + id + ')"/>' +
        '<rect x="187" y="140" width="26" height="108" fill="url(#g' + id + ')"/>' +
        '<circle cx="200" cy="140" r="34" fill="#0b0814" stroke="' + c1 + '" stroke-width="4"/>' +
        '<text x="200" y="146" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="20" fill="' + c1 + '">F1</text>' +
        '<rect x="193" y="30" width="14" height="22" rx="3" fill="#fff"/>');
    }
  };

  /* ---------- Datos de cada zona ---------- */
  var ZONES = [
    { id: "ps5", name: "PS5", eyebrow: "PlayStation 5", title: "PS5", art: "ps5",
      c1: "#4aa8ff", c2: "#1f5bff", bgA: "#0d3a80", bgB: "#050d24",
      desc: "Los mejores juegos de PlayStation 5, con pantalla grande y amigos al lado.",
      s1: ["Modo", "Multijugador"], s2: ["Reserva", "WhatsApp"] },
    { id: "xbox", name: "Xbox", eyebrow: "Xbox", title: "Xbox", art: "xbox",
      c1: "#9dff3a", c2: "#18c964", bgA: "#0c4a26", bgB: "#04120a",
      desc: "Competí o jugá en equipo en Xbox. Tu consola favorita, sin gastar en ella.",
      s1: ["Modo", "Multijugador"], s2: ["Reserva", "WhatsApp"] },
    { id: "pc", name: "PC Gamer", eyebrow: "Gaming PC", title: "PC Gamer", art: "pc",
      c1: "#ff7ae8", c2: "#ff2bd6", bgA: "#5a0f55", bgB: "#14041a",
      desc: "Equipos armados para jugar. Shooters, MOBAs y todo lo que quieras.",
      s1: ["Ideal para", "Torneos"], s2: ["Reserva", "WhatsApp"] },
    { id: "vr", name: "Realidad Virtual", eyebrow: "Realidad virtual", title: "Realidad Virtual", art: "vr",
      c1: "#c77dff", c2: "#7b2cff", bgA: "#3b1380", bgB: "#0a0418",
      desc: "Meté la cabeza en el juego. Una experiencia inmersiva que tenés que probar.",
      s1: ["Experiencia", "Inmersiva"], s2: ["Reserva", "WhatsApp"] },
    { id: "sim", name: "Simulador F1", eyebrow: "Simu F1", title: "Simulador F1", art: "sim",
      c1: "#ff8a3d", c2: "#ff2a3a", bgA: "#6b1010", bgB: "#150506",
      desc: "Volante, pedales y pista. Sentí la velocidad y buscá la vuelta perfecta.",
      s1: ["Experiencia", "Realista"], s2: ["Reserva", "WhatsApp"] }
  ];

  var $ = function (id) { return document.getElementById(id); };
  var host = $("servicios");

  /* ---------- Un panel por servicio (como en la referencia) ---------- */
  ZONES.forEach(function (z, i) {
    var next = [ZONES[(i + 1) % ZONES.length], ZONES[(i + 2) % ZONES.length]];
    var sec = document.createElement("section");
    sec.className = "service"; sec.id = z.id;
    sec.setAttribute("aria-label", z.name);
    sec.style.cssText = "--accent:" + z.c2 + ";--accent-2:" + z.c1 + ";--bg-a:" + z.bgA + ";--bg-b:" + z.bgB;
    sec.innerHTML =
      '<div class="hero-bg" aria-hidden="true"></div>' +
      '<div class="hero-word" aria-hidden="true">' + (z.word || "GAME") + '</div>' +
      '<div class="hero-inner">' +
        '<div class="hero-copy">' +
          '<p class="eyebrow">' + (i === 0 ? "Danger Zone · " : "") + z.eyebrow + '</p>' +
          '<h1>' + z.title + '</h1>' +
          '<p class="hero-desc">' + z.desc + '</p>' +
          '<div class="hero-actions">' +
            '<a class="btn" data-wa href="#">Reservá tu lugar</a>' +
            '<a class="btn btn-ghost" href="#visitanos">Cómo llegar</a>' +
          '</div>' +
        '</div>' +
        '<div class="hero-stage">' +
          '<div class="glow" aria-hidden="true"></div><div class="ring" aria-hidden="true"></div>' +
          '<div class="art">' + ART[z.art]("m" + i, z.c1, z.c2) + '</div>' +
        '</div>' +
        '<aside class="hero-side">' +
          '<ul class="thumbs">' + next.map(function (n, k) {
            var idx = (i + k + 1) % ZONES.length;
            return '<li><a href="#' + n.id + '">' + ART[n.art]("t" + i + "_" + k, n.c1, n.c2) + '<span>' + n.name + '</span></a></li>';
          }).join("") + '</ul>' +
          '<div class="stats">' +
            '<div class="stat"><small>' + z.s1[0] + '</small><strong>' + z.s1[1] + '</strong></div>' +
            '<div class="stat"><small>' + z.s2[0] + '</small><strong>' + z.s2[1] + '</strong></div>' +
          '</div>' +
        '</aside>' +
      '</div>' +
      '<span class="counter" aria-hidden="true">0' + (i + 1) + ' / 0' + ZONES.length + '</span>';
    host.appendChild(sec);
  });

  /* ---------- WhatsApp + año ---------- */
  var waUrl = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(WA_TEXT);
  Array.prototype.forEach.call(document.querySelectorAll("[data-wa]"), function (a) {
    a.href = waUrl; a.target = "_blank"; a.rel = "noopener";
  });
  $("year").textContent = new Date().getFullYear();

})();
