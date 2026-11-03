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
        '<text x="200" y="146" text-anchor="middle" font-family="Tomorrow,Impact,sans-serif" font-style="italic" font-weight="800" font-size="18" fill="' + c1 + '">F1</text>' +
        '<rect x="193" y="30" width="14" height="22" rx="3" fill="#fff"/>');
    }
  };

  /* ---------- Datos de cada zona ---------- */
  var ZONES = [
    { id: "ps5", img: "assets/ps5.webp", credit: { name: "DualSense", by: "Sonson2", lic: "CC0", url: "https://commons.wikimedia.org/wiki/File:DualSense_Wireless_Controller_Cobalt_Blue.jpg" }, name: "PS5", eyebrow: "PlayStation 5", title: "PS5", art: "ps5",
      c1: "#00d9ff", c2: "#1a4dff", bgA: "#08195f", bgB: "#01030c",
      desc: "Los mejores juegos de PlayStation 5, con pantalla grande y amigos al lado." },
    { id: "xbox", img: "assets/xbox.webp", credit: { name: "Xbox", by: "Evan-Amos", lic: "Dominio público", url: "https://commons.wikimedia.org/wiki/File:Microsoft-Xbox-One-controller.jpg" }, name: "Xbox", eyebrow: "Xbox", title: "Xbox", art: "xbox",
      c1: "#39ff14", c2: "#00d95f", bgA: "#064d12", bgB: "#010802",
      desc: "Competí o jugá en equipo en Xbox. Tu consola favorita, sin gastar en ella." },
    { id: "pc", img: "assets/pc.webp", credit: { name: "PC", by: "PantheraLeo1359531", lic: "CC BY 4.0", url: "https://commons.wikimedia.org/wiki/File:Gaming-PC_20240426_HOF2508-HDR_RAW-Export.png" }, name: "PC Gamer", eyebrow: "Gaming PC", title: "PC Gamer", art: "pc",
      c1: "#ff39c8", c2: "#ff0a78", bgA: "#5c0a45", bgB: "#0f0109",
      desc: "Equipos armados para jugar. Shooters, MOBAs y todo lo que quieras." },
    { id: "vr", img: "assets/vr.webp", credit: { name: "Realidad virtual", by: "Evan-Amos", lic: "Dominio público", url: "https://commons.wikimedia.org/wiki/File:Oculus-Rift-CV1-Headset-Front_with_transparent_background.png" }, name: "Realidad Virtual", eyebrow: "Realidad virtual", title: "Realidad Virtual", art: "vr",
      c1: "#b86bff", c2: "#6a2cff", bgA: "#2a0d85", bgB: "#05011a",
      desc: "Meté la cabeza en el juego. Una experiencia inmersiva que tenés que probar." },
    { id: "sim", img: "assets/sim.webp", credit: { name: "Volante", by: "Evan-Amos", lic: "Dominio público", url: "https://commons.wikimedia.org/wiki/File:Logitech-Driving-Force-PS3.jpg" }, name: "Simulador F1", eyebrow: "Simu F1", title: "Simulador F1", art: "sim",
      c1: "#ff9d00", c2: "#ff1a3c", bgA: "#5e0d0d", bgB: "#0e0202",
      desc: "Volante, pedales y pista. Sentí la velocidad y buscá la vuelta perfecta." }
  ];

  /* =====================================================================
     EVENTOS  ->  acá se cargan las fechas de los próximos torneos.
     date: "AAAA-MM-DD" (ej. "2026-11-28"). Si queda en null se muestra
     "Fecha a confirmar". time: texto libre (ej. "18:00 hs").
     ===================================================================== */
  var DZ = window.DZ || { events: [], winners: [], games: [], gallery: [] };
  var EVENTS = DZ.events || [];

  /* Ilustraciones originales dibujadas en SVG (no son fotos ni arte oficial de los juegos) */
  function fighter(accent, flip) {
    return '<g' + (flip ? ' transform="translate(400 0) scale(-1 1)"' : '') + '>' +
      '<path d="M30 300C42 238 86 212 130 212C174 212 218 238 230 300Z" fill="#0b0710" stroke="' + accent + '" stroke-width="2.5"/>' +
      '<path d="M90 150C90 104 110 72 130 52C150 72 170 104 170 150C170 186 152 214 130 214C108 214 90 186 90 150Z" fill="#0b0710" stroke="' + accent + '" stroke-width="3"/>' +
      '<path d="M97 158H163L154 202C147 214 113 214 106 202Z" fill="' + accent + '"/>' +
      '<path d="M108 170H152M113 183H147M120 196H140" stroke="#0b0710" stroke-width="3"/>' +
      '<path d="M96 136L127 146L98 156Z" fill="#fff"/><path d="M164 136L133 146L162 156Z" fill="#fff"/>' +
      '<path d="M96 136L127 146L98 156Z" fill="' + accent + '" opacity=".45" transform="translate(-4 -4) scale(1.06)"/>' +
      '</g>';
  }
  function slash(x, w) {
    return '<path d="M' + x + ' -10C' + (x + 60) + ' 90 ' + (x + 70) + ' 190 ' + (x + 40) + ' 310C' + (x + 40) + ' 200 ' + (x + 20) + ' 90 ' + x + ' -10Z" fill="url(#mkS)" opacity="' + w + '"/>';
  }
  var EVENT_ART = {
    mk: '<svg viewBox="0 0 400 300" aria-hidden="true"><defs>' +
      '<radialGradient id="mkG" cx=".5" cy=".5" r=".6"><stop offset="0" stop-color="#ff5a1f" stop-opacity=".85"/><stop offset=".55" stop-color="#ff1f3a" stop-opacity=".35"/><stop offset="1" stop-color="#ff1f3a" stop-opacity="0"/></radialGradient>' +
      '<linearGradient id="mkS" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffb347"/><stop offset=".5" stop-color="#ff2f3f"/><stop offset="1" stop-color="#ff2f3f" stop-opacity="0"/></linearGradient></defs>' +
      '<circle cx="200" cy="150" r="190" fill="url(#mkG)"/>' +
      slash(120, 0.95) + slash(185, 0.8) + slash(250, 0.65) +
      fighter("#ffc400", false) + fighter("#3de1ff", true) +
      '<text x="200" y="146" text-anchor="middle" font-family="Tomorrow,Impact,sans-serif" font-style="italic" font-weight="900" font-size="58" fill="#fff" stroke="#ff2f3f" stroke-width="3" paint-order="stroke">VS</text>' +
      '<g fill="#ff9a3c"><circle cx="48" cy="70" r="2.6"/><circle cx="92" cy="30" r="2"/><circle cx="318" cy="48" r="2.8"/><circle cx="360" cy="110" r="2"/><circle cx="30" cy="150" r="2"/><circle cx="270" cy="22" r="2"/><circle cx="378" cy="186" r="2.4"/><circle cx="14" cy="212" r="2.2"/></g></svg>',
    fifa: '<svg viewBox="0 0 400 300" aria-hidden="true"><defs>' +
      '<linearGradient id="fBL" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#dfffee" stop-opacity=".75"/><stop offset="1" stop-color="#17ff8f" stop-opacity="0"/></linearGradient>' +
      '<linearGradient id="fBR" x1="1" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#dfffee" stop-opacity=".75"/><stop offset="1" stop-color="#17ff8f" stop-opacity="0"/></linearGradient>' +
      '<linearGradient id="fGr" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0b6b3e"/><stop offset="1" stop-color="#021f12"/></linearGradient>' +
      '<radialGradient id="fBall" cx=".38" cy=".32" r=".8"><stop offset="0" stop-color="#fff"/><stop offset=".7" stop-color="#dfe6ee"/><stop offset="1" stop-color="#8d9bb0"/></radialGradient>' +
      '<linearGradient id="fStr" x1="1" y1="0" x2="0" y2="0"><stop offset="0" stop-color="#17ff8f" stop-opacity=".9"/><stop offset="1" stop-color="#17ff8f" stop-opacity="0"/></linearGradient>' +
      '<clipPath id="fClip"><circle cx="0" cy="0" r="72"/></clipPath></defs>' +
      '<path d="M0 0L175 30L35 300Z" fill="url(#fBL)"/><path d="M400 0L225 30L365 300Z" fill="url(#fBR)"/>' +
      '<g fill="#e9fff4"><rect x="6" y="4" width="46" height="14" rx="2"/><rect x="348" y="4" width="46" height="14" rx="2"/></g>' +
      '<path d="M0 300L70 205H330L400 300Z" fill="url(#fGr)"/>' +
      '<g fill="none" stroke="#17ff8f" stroke-opacity=".55" stroke-width="2"><path d="M200 205V300M70 205H330"/><ellipse cx="200" cy="262" rx="70" ry="16"/></g>' +
      '<g fill="url(#fStr)"><path d="M10 112L190 124L10 132Z"/><path d="M40 138L200 146L40 152Z"/><path d="M0 162L180 168L0 172Z"/></g>' +
      '<ellipse cx="262" cy="236" rx="66" ry="9" fill="#000" opacity=".45"/>' +
      '<g transform="translate(262 150)"><circle r="72" fill="url(#fBall)"/><g clip-path="url(#fClip)" fill="#0b0710" stroke="#0b0710" stroke-width="2">' +
      '<path d="M0-27L25.7-8.3L15.9 21.8H-15.9L-25.7-8.3Z"/>' +
      '<path d="M0-72L24-58L16-36H-16L-24-58Z"/><path d="M68-22L72 2L52 14L38-6L46-26Z"/><path d="M42 58L18 66L10 44L30 30L48 40Z"/><path d="M-42 58L-18 66L-10 44L-30 30L-48 40Z"/><path d="M-68-22L-72 2L-52 14L-38-6L-46-26Z"/>' +
      '<path d="M0-27V-36M25.7-8.3L38-6M15.9 21.8L30 30M-15.9 21.8L-30 30M-25.7-8.3L-38-6" fill="none"/></g>' +
      '<circle r="72" fill="none" stroke="#17ff8f" stroke-width="3" stroke-opacity=".8"/></g></svg>'
  };

  /* ---------- Utilidades ---------- */
  var $ = function (id) { return document.getElementById(id); };
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  var qs = function (s, c) { return (c || document).querySelector(s); };
  var qsa = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var clamp = function (n, a, b) { return Math.max(a, Math.min(b, n)); };
  var root = document.documentElement;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var coarse = window.matchMedia("(pointer: coarse)").matches;
  var WORDS = { ps5: "PLAY", xbox: "XBOX", pc: "PC", vr: "VR", sim: "SPEED" };
  var DEFAULT_ACCENT = { c1: "#ff35e8", c2: "#a24bff" };

  /* Resorte (spring) con física real, como los de Framer Motion */
  function Spring(v, k, c) { this.v = v; this.t = v; this.vel = 0; this.k = k || 200; this.c = c || 22; }
  Spring.prototype.step = function (dt) {
    var a = -this.k * (this.v - this.t) - this.c * this.vel;
    this.vel += a * dt; this.v += this.vel * dt; return this;
  };
  Spring.prototype.idle = function () { return Math.abs(this.v - this.t) < 0.01 && Math.abs(this.vel) < 0.01; };

  /* ---------- Paneles de servicio ---------- */
  function particles(seed) {
    var h = "";
    for (var k = 0; k < 5; k++) {
      var r = function (n) { return (Math.sin(seed * 97 + k * 13.37 + n * 7.1) + 1) / 2; };
      h += '<i class="p" style="left:' + (r(1) * 100).toFixed(1) + "%;top:" + (r(2) * 100).toFixed(1) +
        "%;--s:" + (3 + r(3) * 6).toFixed(1) + "px;--t:" + (4 + r(4) * 5).toFixed(1) + "s;--dl:-" + (r(5) * 6).toFixed(1) +
        "s;--dx:" + ((r(6) - 0.5) * 60).toFixed(0) + "px;--dy:" + ((r(7) - 0.5) * 80).toFixed(0) + 'px"></i>';
    }
    return h;
  }

  /* Piso de grilla estilo neón: SVG fijo con perspectiva y desvanecido ya dibujados */
  function floorSvg(color) {
    var v = "", h = "", i, ys = [0, 10, 26, 50, 84, 132, 200, 300];
    for (i = -14; i <= 14; i++) v += '<path d="M' + (500 + i * 14) + ' 0L' + (500 + i * 95) + ' 300"/>';
    ys.forEach(function (y) { h += '<path d="M0 ' + y + 'H1000"/>'; });
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 300" preserveAspectRatio="none">' +
      '<defs><linearGradient id="f" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="300">' +
      '<stop offset="0" stop-color="' + color + '" stop-opacity="0"/><stop offset="1" stop-color="' + color + '" stop-opacity=".5"/>' +
      '</linearGradient></defs><g fill="none" stroke="url(#f)" stroke-width="1.3" vector-effect="non-scaling-stroke">' + v + h + "</g></svg>";
    return 'url("data:image/svg+xml,' + encodeURIComponent(svg) + '")';
  }

  var host = $("servicios");
  ZONES.forEach(function (z, i) {
    var sec = document.createElement("section");
    sec.className = "service"; sec.id = z.id;
    sec.setAttribute("aria-label", z.name);
    sec.style.cssText = "--accent:" + z.c2 + ";--accent-2:" + z.c1 + ";--bg-a:" + z.bgA + ";--bg-b:" + z.bgB;
    sec.innerHTML =
      '<div class="hero-bg" aria-hidden="true"></div>' +
      '<div class="floor" aria-hidden="true" style="background-image:' + floorSvg(z.c1).replace(/"/g, "'") + '"></div>' +
      '<div class="hero-word" aria-hidden="true">' + WORDS[z.id] + "</div>" +
      '<div class="hero-inner">' +
        '<div class="hero-copy">' +
          '<p class="eyebrow" data-reveal><span class="logo-slot" data-logo="' + z.id + '"></span><span>' + (i === 0 ? "Danger Zone · " : "") + z.eyebrow + "</span></p>" +
          '<h1 data-split="chars">' + z.title + "</h1>" +
          '<p class="hero-desc" data-reveal style="--d:.3s">' + z.desc + "</p>" +
          '<div class="hero-actions" data-reveal style="--d:.42s">' +
            '<a class="btn" data-magnet href="#turnos">Reservá tu lugar</a>' +
            '<a class="btn btn-ghost" data-magnet href="#visitanos">Cómo llegar</a>' +
          "</div>" +
        "</div>" +
        '<div class="hero-stage" data-io>' +
          '<div class="glow" aria-hidden="true"></div><div class="orbit" aria-hidden="true"></div><div class="orbit o2" aria-hidden="true"></div><div class="ring" aria-hidden="true"></div>' +
          '<div class="particles" aria-hidden="true">' + particles(i + 1) + "</div>" +
          '<div class="art-in"><div class="art"><div class="tilt" data-art="' + z.id + '" role="img" aria-label="' + z.name + '">' + ART[z.art]("m" + i, z.c1, z.c2) + "</div></div></div>" +
        "</div>" +
      "</div>" +
      (i === 0 ? '<div class="scroll-hint" aria-hidden="true"><span>Scroll</span><i></i></div>' : "") +
      '<div class="shade" aria-hidden="true"></div>';
    host.appendChild(sec);
  });

  /* Créditos de las fotos (solo aparecen las que se cargaron) */
  function addCredit(z) {
    var box = document.getElementById("credits");
    if (!box || !z.credit) return;
    box.hidden = false;
    var s = document.createElement("span");
    s.innerHTML = z.credit.name + ': <a href="' + z.credit.url + '" target="_blank" rel="noopener">' + z.credit.by + "</a> (" + z.credit.lic + ")";
    box.appendChild(s);
  }

  /* Imágenes reales: si existe el archivo, reemplaza al dibujo (ver README) */
  ZONES.forEach(function (z) {
    if (z.img) {
      var im = new Image();
      im.onload = function () {
        qsa('[data-art="' + z.id + '"]').forEach(function (w) {
          w.innerHTML = '<img class="photo" src="' + z.img + '" alt="" draggable="false">';
        });
        addCredit(z);
      };
      im.src = z.img;
    }
    if (z.logo) {
      var lg = new Image();
      lg.onload = function () {
        qsa('[data-logo="' + z.id + '"]').forEach(function (w) {
          w.innerHTML = '<img src="' + z.logo + '" alt="">';
        });
      };
      lg.src = z.logo;
    }
  });

  /* ---------- Cinta ---------- */
  (function () {
    var items = ["PS5", "Xbox", "PC Gamer", "Realidad Virtual", "Simulador F1", "Danger Zone"];
    var group = items.map(function (t, i) { return '<span class="' + (i % 2 ? "fill" : "") + '">' + t + "</span><b>✦</b>"; }).join("");
    $("mq").innerHTML = '<div class="marquee-group">' + group + '</div><div class="marquee-group">' + group + "</div>";
  })();

  /* ---------- Eventos ---------- */
  var MONTHS = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];
  function eventDate(ev) {
    if (!ev.date) return { html: '<div class="event-date tbd"><b>Fecha a<br>confirmar</b></div>', count: "", day: null };
    var p = ev.date.split("-"), d = new Date(+p[0], +p[1] - 1, +p[2]);
    var today = new Date(); today.setHours(0, 0, 0, 0);
    var days = Math.round((d - today) / 86400000);
    var count = days > 1 ? "Faltan " + days + " días" : days === 1 ? "¡Mañana!" : days === 0 ? "¡Es hoy!" : "Evento finalizado";
    return {
      html: '<div class="event-date"><b>' + d.getDate() + "</b><span>" + MONTHS[d.getMonth()] + "</span>" + (ev.time ? "<small>" + ev.time + "</small>" : "") + "</div>",
      count: count, day: d.getDate(), mon: MONTHS[d.getMonth()]
    };
  }
  var evHost = $("event-cards");
  EVENTS.forEach(function (ev) {
    var dt = eventDate(ev);
    var msg = "Hola! Quiero anotarme al torneo de " + ev.name + " en Danger Zone.";
    var a = document.createElement("article");
    a.className = "event"; a.style.cssText = "--e1:" + ev.e1 + ";--e2:" + ev.e2;
    a.innerHTML =
      '<div class="event-art">' + EVENT_ART[ev.id] + "</div>" +
      "<div><span class=\"chip\">" + ev.tag + "</span><h3>" + ev.name + "</h3><p>" + ev.desc + "</p></div>" +
      dt.html +
      '<div class="event-foot"><a class="btn" data-magnet data-wa data-msg="' + msg + '" href="#">Anotarme</a>' +
      (dt.count ? '<span class="countdown">' + dt.count + "</span>" : "") + "</div>";
    evHost.appendChild(a);
    if (ev.img) {  /* si existe la imagen del banner, reemplaza a la ilustración */
      var im = new Image();
      im.onload = function () {
        a.className = "banner"; a.style.cssText = "--e1:" + ev.e1;
        a.innerHTML = '<a class="banner-link" href="' + waLink(msg) + '" target="_blank" rel="noopener" aria-label="Anotarme al torneo de ' + esc(ev.name) + '">' +
          '<img src="' + esc(ev.img) + '" alt="' + esc(ev.name + " - " + ev.tag) + '"></a>' +
          '<div class="banner-date' + (dt.day ? "" : " tbd") + '">' +
          (dt.day ? "<b>" + dt.day + "</b><span>" + dt.mon + "</span><small>" + esc(ev.time || "") + (ev.time ? "<br>" : "") + esc(dt.count) + "</small>"
                  : '<i aria-hidden="true">✓</i><span>Fecha a<br>confirmar</span>') + "</div>";
      };
      im.src = ev.img;
    }
  });


  /* ---------- Salón de la fama (ganadores históricos) ---------- */
  (function () {
    var host = $("hof");
    var W = (DZ.winners || []).slice().sort(function (a, b) { return String(b.fecha || "").localeCompare(String(a.fecha || "")); });
    var trophy = '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M14 6h20v10c0 8-4 13-10 14-6-1-10-6-10-14V6Z" fill="currentColor"/><path d="M14 10H6c0 8 4 12 9 13M34 10h8c0 8-4 12-9 13" fill="none" stroke="currentColor" stroke-width="3"/><path d="M24 30v8M16 42h16l-2-4H18Z" fill="currentColor"/></svg>';
    var head = "<h3>" + trophy + "Salón de la fama</h3>";
    if (!W.length) {
      host.innerHTML = head + '<div class="hof-empty"><p><b>Todavía no hay campeones cargados.</b> Acá van a aparecer los ganadores de cada torneo. ¡El primero puede ser vos!</p>' +
        '<a class="btn" data-magnet data-wa data-msg="Hola! Quiero anotarme al próximo torneo de Danger Zone." href="#">Quiero competir</a></div>';
      return;
    }
    var fmt = function (s) { var p = String(s || "").split("-"); return p.length === 3 ? p[2] + "/" + p[1] + "/" + p[0] : esc(s); };
    host.innerHTML = head + '<table class="hof-table"><thead><tr><th>Fecha</th><th>Torneo</th><th>Campeón</th><th>Subcampeón</th></tr></thead><tbody>' +
      W.map(function (w, i) {
        return '<tr' + (i === 0 ? ' class="latest"' : "") + '><td data-l="Fecha">' + fmt(w.fecha) + '</td><td data-l="Torneo">' + esc(w.torneo) +
          '</td><td data-l="Campeón" class="champ">🏆 ' + esc(w.ganador) + '</td><td data-l="Subcampeón">' + esc(w.segundo || "—") + "</td></tr>";
      }).join("") + "</tbody></table>";
  })();

  /* ---------- Juegos disponibles (grilla con filtro) + pedir juegos ---------- */
  (function () {
    var G = DZ.games || [], PLAT = { PS5: "ps5", Xbox: "xbox", PC: "pc", VR: "vr", Simulador: "sim" };
    var zone = function (p) { return ZONES.filter(function (z) { return z.id === PLAT[p]; })[0] || { c1: "#ff35e8", c2: "#a24bff" }; };
    var COLORS = { blue: ["#00d9ff", "#1a4dff"], red: ["#ff2f3f", "#8a0a1a"], green: ["#39ff14", "#00a84a"], pink: ["#ff39c8", "#ff0a78"], violet: ["#b86bff", "#6a2cff"], orange: ["#ff9d00", "#ff1a3c"] };
    var ORDER = ["blue", "red", "green", "pink", "violet", "orange"];
    var host = $("games"), fh = $("filters");
    fh.innerHTML = ["Todos"].concat(Object.keys(PLAT)).map(function (p, i) {
      return '<button type="button" class="filter' + (i === 0 ? " on" : "") + '" data-p="' + p + '">' + p + "</button>";
    }).join("");
    host.innerHTML = G.length ? G.map(function (g, i) {
      var col = COLORS[g.color] || COLORS[ORDER[i % ORDER.length]], z = { c1: col[0], c2: col[1] }, soon = g.estado === "pronto";
      return '<article class="game" data-plat="' + esc(g.plat.join("|")) + '" style="--g1:' + z.c1 + ";--g2:" + z.c2 + '">' +
        '<div class="game-cover"><b>' + esc(g.name) + '</b></div><div class="game-body"><span class="genre">' + esc(g.genre || "") + "</span>" +
        '<div class="plats">' + g.plat.map(function (p) { return '<span class="plat" style="--c:' + zone(p).c1 + '">' + esc(p) + "</span>"; }).join("") + "</div>" +
        '<span class="state ' + (soon ? "soon" : "ok") + '">' + (soon ? "Próximamente" : "Disponible") + "</span></div></article>";
    }).join("") : '<p class="muted">Pronto vamos a publicar el catálogo de juegos.</p>';
    fh.addEventListener("click", function (e) {
      var b = e.target.closest(".filter"); if (!b) return;
      qsa(".filter", fh).forEach(function (x) { x.classList.toggle("on", x === b); });
      var p = b.getAttribute("data-p");
      qsa(".game", host).forEach(function (c) { c.hidden = !(p === "Todos" || c.getAttribute("data-plat").split("|").indexOf(p) > -1); });
    });

    var f = $("request"), m = $("r-msg");
    f.elements.game.addEventListener("input", function () { f.elements.game.classList.remove("bad"); });
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var g = f.elements.game.value.trim();
      f.elements.game.classList.toggle("bad", !g);
      if (!g) { m.textContent = "Escribí el nombre del juego que querés."; f.elements.game.focus(); return; }
      m.textContent = "";
      var lines = ["Hola! Me gustaría que sumen un juego en Danger Zone.", "• Juego: " + g, "• Plataforma: " + f.elements.plat.value];
      if (f.elements.name.value.trim()) lines.push("• Nombre: " + f.elements.name.value.trim());
      window.open(waLink(lines.join("\n")), "_blank", "noopener");
    });
  })();

  /* ---------- Galería con visor ---------- */
  (function () {
    var P = DZ.gallery || [], host = $("gallery");
    var cam = '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M6 14h9l3-5h12l3 5h9v26H6Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><circle cx="24" cy="26" r="8" fill="none" stroke="currentColor" stroke-width="3"/></svg>';
    if (!P.length) {
      host.innerHTML = ZONES.concat(ZONES.slice(0, 1)).map(function (z) {
        return '<div class="shot ph" style="--g1:' + z.c1 + ";--g2:" + z.c2 + '">' + cam + "<span>Tu foto acá</span></div>";
      }).join("");
      return;
    }
    host.innerHTML = P.map(function (p, i) {
      return '<button type="button" class="shot" data-i="' + i + '"><img src="' + esc(p.src) + '" alt="' + esc(p.alt || "") + '" loading="lazy">' + (p.caption ? "<span>" + esc(p.caption) + "</span>" : "") + "</button>";
    }).join("");
    var lb = $("lb"), li = $("lb-img"), lc = $("lb-cap"), cur = 0;
    function show(i) {
      cur = (i + P.length) % P.length; li.src = P[cur].src; li.alt = P[cur].alt || ""; lc.textContent = P[cur].caption || "";
      lb.hidden = false; document.body.style.overflow = "hidden";
    }
    function hide() { lb.hidden = true; document.body.style.overflow = ""; }
    host.addEventListener("click", function (e) { var b = e.target.closest(".shot[data-i]"); if (b) show(+b.getAttribute("data-i")); });
    qs(".lb-x", lb).addEventListener("click", hide);
    qs(".lb-prev", lb).addEventListener("click", function () { show(cur - 1); });
    qs(".lb-next", lb).addEventListener("click", function () { show(cur + 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) hide(); });
    document.addEventListener("keydown", function (e) {
      if (lb.hidden) return;
      if (e.key === "Escape") hide(); else if (e.key === "ArrowLeft") show(cur - 1); else if (e.key === "ArrowRight") show(cur + 1);
    });
  })();

  /* Botones: la forma angulosa (clip-path) va en la cara; el brillo de neón, afuera */
  qsa(".btn").forEach(function (b) {
    var f = document.createElement("span"); f.className = "face";
    while (b.firstChild) f.appendChild(b.firstChild);
    b.appendChild(f);
  });

  /* ---------- WhatsApp ---------- */
  function waLink(text) { return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(text || WA_TEXT); }
  qsa("[data-wa]").forEach(function (a) {
    a.href = waLink(a.getAttribute("data-msg")); a.target = "_blank"; a.rel = "noopener";
  });
  $("year").textContent = new Date().getFullYear();

  /* ---------- Formulario de turnos ---------- */
  (function () {
    var form = $("booking"), dateEl = $("f-date"), timeEl = $("f-time"), msgEl = $("f-msg");
    var DAYS = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    function pad(n) { return (n < 10 ? "0" : "") + n; }
    function ymd(d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
    dateEl.min = ymd(new Date());

    function slots() {
      timeEl.innerHTML = "";
      if (!dateEl.value) { timeEl.innerHTML = '<option value="">Elegí una fecha</option>'; return; }
      var p = dateEl.value.split("-"), dow = new Date(+p[0], +p[1] - 1, +p[2]).getDay();
      var from, to;
      if (dow >= 1 && dow <= 5) { from = 11; to = 21; }      /* lun a vie 11:00 a 22:00 */
      else if (dow === 6) { from = 12; to = 23; }            /* sábado 12:00 a 00:00   */
      else { timeEl.innerHTML = '<option value="A coordinar">Domingo: a coordinar por WhatsApp</option>'; return; }
      timeEl.innerHTML = '<option value="">Elegí un horario</option>';
      for (var h = from; h <= to; h++) {
        var o = document.createElement("option");
        o.value = o.textContent = pad(h) + ":00 hs";
        timeEl.appendChild(o);
      }
    }
    dateEl.addEventListener("change", slots);
    slots();

    function kind() { return form.elements.kind.value; }
    function sync() {
      var cumple = kind() === "cumple";
      $("f-zone-wrap").hidden = cumple;
      $("f-age-wrap").hidden = !cumple;
      $("l-people").textContent = cumple ? "Invitados (aprox.)" : "Personas";
    }
    qsa('input[name="kind"]', form).forEach(function (r) { r.addEventListener("change", sync); });
    sync();

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var bad = [];
      [form.elements.name, dateEl, timeEl].forEach(function (el) {
        var ok = el.value.trim() !== "";
        el.classList.toggle("bad", !ok);
        if (!ok) bad.push(el);
      });
      if (bad.length) { msgEl.textContent = "Completá tu nombre, la fecha y el horario."; bad[0].focus(); return; }
      msgEl.textContent = "";

      var p = dateEl.value.split("-"), d = new Date(+p[0], +p[1] - 1, +p[2]);
      var fecha = DAYS[d.getDay()] + " " + d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
      var cumple = kind() === "cumple";
      var lines = [cumple
        ? "Hola! Quiero consultar por un cumpleaños en Danger Zone (alquiler del local completo)."
        : "Hola! Quiero reservar un turno en Danger Zone.",
        "• Nombre: " + form.elements.name.value.trim()];
      if (!cumple) lines.push("• Zona: " + form.elements.zone.value);
      lines.push("• Fecha: " + fecha, "• Horario: " + timeEl.value);
      lines.push("• " + (cumple ? "Invitados (aprox.)" : "Personas") + ": " + (form.elements.people.value || "-"));
      if (cumple && form.elements.age.value) lines.push("• Cumpleañero/a cumple: " + form.elements.age.value);
      if (form.elements.notes.value.trim()) lines.push("• Comentarios: " + form.elements.notes.value.trim());
      window.open(waLink(lines.join("\n")), "_blank", "noopener");
    });
    [form.elements.name, dateEl, timeEl].forEach(function (el) {
      el.addEventListener("input", function () { el.classList.remove("bad"); });
    });
  })();

  /* =====================================================================
     ANIMACIONES
     ===================================================================== */

  /* Texto partido en letras o palabras para la animación de entrada */
  function buildSplit(node, mode, ci) {
    var f = document.createDocumentFragment();
    Array.prototype.forEach.call(node.childNodes, function (n) {
      if (n.nodeType === 3) {
        n.textContent.split(/(\s+)/).forEach(function (part) {
          if (!part) return;
          if (/^\s+$/.test(part)) { f.appendChild(document.createTextNode(" ")); return; }
          var w = document.createElement("span"); w.className = "w"; w.setAttribute("aria-hidden", "true");
          if (mode === "chars") {
            part.split("").forEach(function (ch) {
              var c = document.createElement("span"); c.className = "c"; c.textContent = ch;
              c.style.setProperty("--ci", ci.n++); w.appendChild(c);
            });
          } else {
            var wi = document.createElement("span"); wi.className = "wi"; wi.textContent = part;
            wi.style.setProperty("--ci", ci.n++); w.appendChild(wi);
          }
          f.appendChild(w);
        });
      } else {
        var clone = n.cloneNode(false); clone.appendChild(buildSplit(n, mode, ci)); f.appendChild(clone);
      }
    });
    return f;
  }
  qsa("[data-split]").forEach(function (el) {
    var label = el.textContent.replace(/\s+/g, " ").trim();
    var frag = buildSplit(el, el.getAttribute("data-split"), { n: 0 });
    el.setAttribute("aria-label", label);
    el.innerHTML = ""; el.appendChild(frag);
  });
  /* Grupos: cada hijo entra con un pequeño retraso (stagger) */
  qsa("[data-group]").forEach(function (g) {
    Array.prototype.forEach.call(g.children, function (c, i) {
      c.setAttribute("data-reveal", ""); c.style.setProperty("--d", (0.12 + i * 0.1).toFixed(2) + "s");
    });
  });

  function observe() {
    var els = qsa("[data-reveal],[data-split],[data-io]");
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.2, rootMargin: "0px 0px -6% 0px" });
    els.forEach(function (e) { io.observe(e); });
  }

  /* Indicador deslizante del menú */
  var pill = qs(".pill-nav"), ind = qs(".pill-ind"), links = qsa(".pill-nav a"), activeLink = null;
  function place(a) {
    if (!a) { ind.style.opacity = 0; return; }
    ind.style.opacity = 1; ind.style.width = a.offsetWidth + "px"; ind.style.transform = "translateX(" + a.offsetLeft + "px)";
  }
  links.forEach(function (a) {
    a.addEventListener("pointerenter", function () { place(a); });
    a.addEventListener("focus", function () { place(a); });
  });
  pill.addEventListener("pointerleave", function () { place(activeLink); });

  /* =====================================================================
     MOTOR DE ANIMACIÓN (optimizado)
     - Cero lecturas de layout por cuadro: las posiciones se miden una vez
       (measure) y después todo se calcula con matemática a partir del scroll.
     - Solo se escriben `transform` y `opacity` directamente en pocos elementos
       (nada de variables CSS compartidas ni filtros/desenfoques por cuadro).
     - El bucle se apaga solo cuando no hay scroll ni resortes en movimiento.
     ===================================================================== */
  var panels = qsa(".service"), servicios = $("servicios"), nav = $("nav"), progress = qs(".progress"), glowEl = qs(".cursor-glow");
  var accentEls = [nav, progress, glowEl];
  var stackMQ = window.matchMedia("(min-width: 981px) and (min-height: 640px)");

  var P = panels.map(function (sec) {
    return {
      sec: sec, word: qs(".hero-word", sec), copy: qs(".hero-copy", sec),
      stage: qs(".hero-stage", sec), shade: qs(".shade", sec),
      v: 0, cover: 0, vis: false, top0: 0, h: 0, sig: ""
    };
  });
  var tilts = P.map(function (p) {
    return { stage: p.stage, el: qs(".tilt", p.sec), rx: new Spring(0, 140, 15), ry: new Spring(0, 140, 15) };
  });
  var magnets = qsa("[data-magnet]").map(function (el) {
    return { el: el, x: new Spring(0, 220, 16), y: new Spring(0, 220, 16), moving: false };
  });
  var gx = new Spring(innerWidth / 2, 90, 18), gy = new Spring(innerHeight / 2, 90, 18), glowOn = false;
  var secs = ["servicios", "eventos", "juegos", "galeria", "turnos", "visitanos"].map(function (id) { return { id: id, el: $(id), t: 0, b: 0 }; });

  var G = { vh: 0, vw: 0, contTop: 0, contH: 0, docMax: 0, stack: false };
  var currentSec = null, currentPanel = -2;
  var navSolid = false, navHide = false, scrolledFlag = false;
  var lastY = window.scrollY, lastNavY = lastY, lastT = performance.now();
  var running = false, scrollVel = 0, mqRate = 1;

  /* Cinta: animación nativa (compositor). El scroll solo cambia su velocidad. */
  var mq = $("mq");
  var mqAnim = mq.animate(
    [{ transform: "translate3d(0,0,0)" }, { transform: "translate3d(-50%,0,0)" }],
    { duration: 42000, iterations: Infinity, easing: "linear" }
  );
  if (reduce) mqAnim.pause();
  else if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) mqAnim.play(); else mqAnim.pause(); });
    }).observe(mq.parentNode);
  }

  /* Mide posiciones UNA vez (al cargar y al cambiar el tamaño) */
  function measure() {
    G.vh = window.innerHeight; G.vw = window.innerWidth; G.stack = stackMQ.matches;
    servicios.classList.toggle("stack", G.stack);
    var y = window.scrollY;
    G.contTop = servicios.getBoundingClientRect().top + y; G.contH = servicios.offsetHeight;
    var acc = 0;
    P.forEach(function (p) {
      p.h = p.sec.offsetHeight; p.top0 = G.contTop + acc; acc += p.h; p.sig = "";
      if (!G.stack) { p.sec.style.transform = ""; p.shade.style.opacity = 0; }
    });
    secs.forEach(function (s, i) {
      if (i === 0) { s.t = G.contTop; s.b = G.contTop + G.contH; return; }
      var r = s.el.getBoundingClientRect(); s.t = r.top + y; s.b = r.bottom + y;
    });
    G.docMax = Math.max(0, root.scrollHeight - G.vh);
    place(activeLink);
    kick();
  }

  function setAccent(i) {
    if (i === currentPanel) return;
    currentPanel = i;
    var c1 = i < 0 ? DEFAULT_ACCENT.c1 : ZONES[i].c1, c2 = i < 0 ? DEFAULT_ACCENT.c2 : ZONES[i].c2;
    accentEls.forEach(function (el) { el.style.setProperty("--accent", c2); el.style.setProperty("--accent-2", c1); });
  }

  function apply(p) {
    var v = p.v, c = p.cover, sig = v.toFixed(3) + "|" + c.toFixed(3);
    if (sig === p.sig) return;
    p.sig = sig;
    p.word.style.transform = "translate(calc(-50% + " + (v * G.vw * 0.16).toFixed(1) + "px), -50%) rotate(-6deg)";
    var op = Math.max(0, 1 - c * 1.1).toFixed(3);
    p.copy.style.transform = "translate3d(0," + (v * 60).toFixed(1) + "px,0)"; p.copy.style.opacity = op;
    p.stage.style.transform = "translate3d(0," + (v * 110).toFixed(1) + "px,0) scale(" + (1 - c * 0.08).toFixed(4) + ")";
    if (G.stack) { p.sec.style.transform = "scale(" + (1 - c * 0.06).toFixed(4) + ")"; p.shade.style.opacity = (c * 0.55).toFixed(3); }
  }

  function frame(now) {
    var dt = Math.min((now - lastT) / 1000, 1 / 30) || 1 / 60; lastT = now;
    var y = window.scrollY, vh = G.vh, dy = y - lastY; lastY = y;
    var busy = dy !== 0;

    /* barra de progreso, menú y pista de scroll (solo si hubo scroll) */
    if (dy !== 0) {
      progress.style.transform = "scaleX(" + (G.docMax > 0 ? clamp(y / G.docMax, 0, 1) : 0).toFixed(4) + ")";
      var solid = y > 40;
      if (solid !== navSolid) { navSolid = solid; nav.classList.toggle("solid", solid); }
      var hide = navHide;
      if (y > lastNavY + 4 && y > 160) hide = true; else if (y < lastNavY - 4) hide = false;
      if (hide !== navHide) { navHide = hide; nav.classList.toggle("hide", hide); }
      var sc = y > 60;
      if (sc !== scrolledFlag) { scrolledFlag = sc; document.body.classList.toggle("scrolled", sc); }
    }
    lastNavY = y;

    /* sección activa en el menú */
    var cs = null;
    secs.forEach(function (s) { if (s.t - y <= vh * 0.5 && s.b - y > vh * 0.5) cs = s.id; });
    if (cs !== currentSec) {
      currentSec = cs;
      activeLink = links.filter(function (a) { return a.getAttribute("data-sec") === cs; })[0] || null;
      links.forEach(function (a) { a.classList.toggle("on", a === activeLink); });
      place(activeLink);
    }

    /* paneles: posición calculada con matemática (sin leer el DOM) */
    var k = 1 - Math.pow(0.0005, dt), active = -1, bottom = G.contTop + G.contH - y;
    P.forEach(function (p, i) {
      var top = p.top0 - y;
      if (G.stack) top = Math.min(Math.max(top, 0), bottom - p.h);
      var q = 0, nx = P[i + 1];
      if (G.stack && nx) { var nt = Math.min(Math.max(nx.top0 - y, 0), bottom - nx.h); q = clamp(1 - nt / vh, 0, 1); }
      var vis = top < vh * 1.5 && top + p.h > -vh * 0.5 && q < 0.995;
      if (vis !== p.vis) { p.vis = vis; p.sec.classList.toggle("vis", vis); }
      if (top <= vh * 0.5 && top + p.h > vh * 0.5) active = i;
      if (!vis) return;
      var pr = clamp(top / vh, -1, 1), tv = G.stack ? clamp(pr - q, -1, 1) : pr;
      if (reduce) { tv = 0; q = 0; }
      p.v += (tv - p.v) * k; p.cover += (q - p.cover) * k;
      if (Math.abs(p.v - tv) < 0.0008) p.v = tv; else busy = true;
      if (Math.abs(p.cover - q) < 0.0008) p.cover = q; else busy = true;
      apply(p);
    });
    setAccent(active);

    if (!reduce) {
      /* resortes: inclinación 3D, imanes y luz del cursor (solo si se están moviendo) */
      tilts.forEach(function (t) {
        if (t.rx.idle() && t.ry.idle()) return;
        t.rx.step(dt); t.ry.step(dt); busy = true;
        t.el.style.transform = "perspective(900px) rotateX(" + t.rx.v.toFixed(2) + "deg) rotateY(" + t.ry.v.toFixed(2) + "deg)";
      });
      magnets.forEach(function (m) {
        if (m.x.idle() && m.y.idle()) { if (m.moving) { m.el.style.transform = ""; m.moving = false; } return; }
        m.x.step(dt); m.y.step(dt); m.moving = true; busy = true;
        m.el.style.transform = "translate3d(" + m.x.v.toFixed(2) + "px," + m.y.v.toFixed(2) + "px,0)";
      });
      if (glowOn && !(gx.idle() && gy.idle())) {
        gx.step(dt); gy.step(dt); busy = true;
        glowEl.style.transform = "translate3d(" + gx.v.toFixed(1) + "px," + gy.v.toFixed(1) + "px,0)";
      }
      /* cinta: la velocidad sube con el scroll y vuelve sola a la normal */
      scrollVel += (dy / dt - scrollVel) * 0.12;
      var target = 1 + Math.min(Math.abs(scrollVel) / 350, 5);
      mqRate += (target - mqRate) * 0.12;
      if (mqRate > 1.02 || target > 1.02) { mqAnim.playbackRate = mqRate; busy = true; }
      else if (mqAnim.playbackRate !== 1) mqAnim.playbackRate = 1;
    }

    if (busy) requestAnimationFrame(frame); else running = false;
  }

  /* El bucle solo corre cuando hace falta */
  function kick() {
    if (running) return;
    running = true; lastT = performance.now();
    requestAnimationFrame(frame);
  }
  window.addEventListener("scroll", kick, { passive: true });

  /* Punteros: cada elemento escucha lo suyo (sin leer el DOM en el bucle) */
  if (!coarse && !reduce) {
    tilts.forEach(function (t) {
      t.stage.addEventListener("pointermove", function (e) {
        var r = t.stage.getBoundingClientRect();
        t.ry.t = clamp((e.clientX - (r.left + r.width / 2)) / (r.width / 2), -1, 1) * 13;
        t.rx.t = clamp((e.clientY - (r.top + r.height / 2)) / (r.height / 2), -1, 1) * -10;
        kick();
      }, { passive: true });
      t.stage.addEventListener("pointerleave", function () { t.rx.t = 0; t.ry.t = 0; kick(); });
    });
    magnets.forEach(function (m) {
      m.el.addEventListener("pointermove", function (e) {
        var r = m.el.getBoundingClientRect();
        m.x.t = clamp((e.clientX - (r.left + r.width / 2 - m.x.v)) * 0.3, -14, 14);
        m.y.t = clamp((e.clientY - (r.top + r.height / 2 - m.y.v)) * 0.35, -10, 10);
        kick();
      }, { passive: true });
      m.el.addEventListener("pointerleave", function () { m.x.t = 0; m.y.t = 0; kick(); });
    });
    window.addEventListener("pointermove", function (e) {
      if (!glowOn) { glowOn = true; gx.v = gx.t = e.clientX; gy.v = gy.t = e.clientY; glowEl.classList.add("on"); }
      gx.t = e.clientX; gy.t = e.clientY; kick();
    }, { passive: true });
    qsa(".spot").forEach(function (sp) {
      sp.addEventListener("pointermove", function (e) {
        var r = sp.getBoundingClientRect();
        sp.style.setProperty("--mx", e.clientX - r.left + "px"); sp.style.setProperty("--my", e.clientY - r.top + "px");
      }, { passive: true });
    });
  }

  /* Re-medir cuando cambia el tamaño o el contenido */
  var mTimer = null;
  function remeasure() { clearTimeout(mTimer); mTimer = setTimeout(measure, 120); }
  window.addEventListener("resize", remeasure);
  if (stackMQ.addEventListener) stackMQ.addEventListener("change", remeasure);
  if ("ResizeObserver" in window) new ResizeObserver(remeasure).observe(document.body);

  /* ---------- Arranque: pantalla de carga -> animación de entrada ---------- */
  var t0 = performance.now(), started = false;
  function start() {
    if (started) return; started = true;
    measure();
    document.body.classList.add("ready");
    setTimeout(function () { var l = qs(".loader"); if (l) l.remove(); }, 1400);
    observe();
    kick();
  }
  function whenReady() { setTimeout(start, Math.max(0, 1000 - (performance.now() - t0))); }
  var loaded = document.readyState === "complete" ? Promise.resolve() : new Promise(function (r) { window.addEventListener("load", r, { once: true }); });
  var fonts = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
  Promise.all([loaded, fonts]).then(whenReady);
  setTimeout(start, 3500); /* por si algún recurso externo tarda de más */
})();
