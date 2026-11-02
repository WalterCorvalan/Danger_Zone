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
    { id: "ps5", img: "assets/ps5.png", logo: "assets/logo-ps5.png", name: "PS5", eyebrow: "PlayStation 5", title: "PS5", art: "ps5",
      c1: "#4aa8ff", c2: "#1f5bff", bgA: "#0d3a80", bgB: "#050d24",
      desc: "Los mejores juegos de PlayStation 5, con pantalla grande y amigos al lado.",
      s1: ["Modo", "Multijugador"], s2: ["Reserva", "WhatsApp"] },
    { id: "xbox", img: "assets/xbox.png", logo: "assets/logo-xbox.png", name: "Xbox", eyebrow: "Xbox", title: "Xbox", art: "xbox",
      c1: "#9dff3a", c2: "#18c964", bgA: "#0c4a26", bgB: "#04120a",
      desc: "Competí o jugá en equipo en Xbox. Tu consola favorita, sin gastar en ella.",
      s1: ["Modo", "Multijugador"], s2: ["Reserva", "WhatsApp"] },
    { id: "pc", img: "assets/pc.png", logo: "assets/logo-pc.png", name: "PC Gamer", eyebrow: "Gaming PC", title: "PC Gamer", art: "pc",
      c1: "#ff7ae8", c2: "#ff2bd6", bgA: "#5a0f55", bgB: "#14041a",
      desc: "Equipos armados para jugar. Shooters, MOBAs y todo lo que quieras.",
      s1: ["Estilo", "Competitivo"], s2: ["Reserva", "WhatsApp"] },
    { id: "vr", img: "assets/vr.png", logo: "assets/logo-vr.png", name: "Realidad Virtual", eyebrow: "Realidad virtual", title: "Realidad Virtual", art: "vr",
      c1: "#c77dff", c2: "#7b2cff", bgA: "#3b1380", bgB: "#0a0418",
      desc: "Meté la cabeza en el juego. Una experiencia inmersiva que tenés que probar.",
      s1: ["Experiencia", "Inmersiva"], s2: ["Reserva", "WhatsApp"] },
    { id: "sim", img: "assets/sim.png", logo: "assets/logo-sim.png", name: "Simulador F1", eyebrow: "Simu F1", title: "Simulador F1", art: "sim",
      c1: "#ff8a3d", c2: "#ff2a3a", bgA: "#6b1010", bgB: "#150506",
      desc: "Volante, pedales y pista. Sentí la velocidad y buscá la vuelta perfecta.",
      s1: ["Experiencia", "Realista"], s2: ["Reserva", "WhatsApp"] }
  ];

  /* =====================================================================
     EVENTOS  ->  acá se cargan las fechas de los próximos torneos.
     date: "AAAA-MM-DD" (ej. "2026-11-28"). Si queda en null se muestra
     "Fecha a confirmar". time: texto libre (ej. "18:00 hs").
     ===================================================================== */
  var EVENTS = [
    { id: "mk", name: "Mortal Kombat", tag: "Torneo", date: null, time: "",
      desc: "Elegí a tu luchador y demostrá quién manda en la arena.",
      e1: "#ff3b3b", e2: "#6e0b0b" },
    { id: "fifa", name: "FIFA 26", tag: "Torneo", date: null, time: "",
      desc: "Torneo de FIFA 26. Armá tu equipo y salí a buscar la copa.",
      e1: "#3dffb0", e2: "#07503a" }
  ];

  var EVENT_ART = {
    mk: '<svg viewBox="0 0 300 300" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round"><path d="M70 40c40 60 70 130 90 230"/><path d="M130 30c40 60 70 130 90 230"/><path d="M190 40c40 60 60 120 80 200"/></g><circle cx="150" cy="150" r="120" fill="none" stroke="currentColor" stroke-width="6" opacity=".5"/></svg>',
    fifa: '<svg viewBox="0 0 300 300" aria-hidden="true"><circle cx="150" cy="150" r="130" fill="none" stroke="currentColor" stroke-width="10"/><g fill="currentColor"><path d="M150 95l40 29-15 47h-50l-15-47z"/></g><g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round"><path d="M150 95V22M190 124l66-24M175 171l40 56M125 171l-40 56M110 124l-66-24"/></g></svg>'
  };

  /* ---------- Utilidades ---------- */
  var $ = function (id) { return document.getElementById(id); };
  var qs = function (s, c) { return (c || document).querySelector(s); };
  var qsa = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var clamp = function (n, a, b) { return Math.max(a, Math.min(b, n)); };
  var root = document.documentElement;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var coarse = window.matchMedia("(pointer: coarse)").matches;
  var WORDS = { ps5: "PLAY", xbox: "XBOX", pc: "PC", vr: "VR", sim: "SPEED" };
  var DEFAULT_ACCENT = { c1: "#ff2bd6", c2: "#8a2be2" };

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
    for (var k = 0; k < 9; k++) {
      var r = function (n) { return (Math.sin(seed * 97 + k * 13.37 + n * 7.1) + 1) / 2; };
      h += '<i class="p" style="left:' + (r(1) * 100).toFixed(1) + "%;top:" + (r(2) * 100).toFixed(1) +
        "%;--s:" + (3 + r(3) * 6).toFixed(1) + "px;--t:" + (4 + r(4) * 5).toFixed(1) + "s;--dl:-" + (r(5) * 6).toFixed(1) +
        "s;--dx:" + ((r(6) - 0.5) * 60).toFixed(0) + "px;--dy:" + ((r(7) - 0.5) * 80).toFixed(0) + 'px"></i>';
    }
    return h;
  }

  var host = $("servicios");
  ZONES.forEach(function (z, i) {
    var next = [ZONES[(i + 1) % ZONES.length], ZONES[(i + 2) % ZONES.length]];
    var sec = document.createElement("section");
    sec.className = "service"; sec.id = z.id;
    sec.setAttribute("aria-label", z.name);
    sec.style.cssText = "--accent:" + z.c2 + ";--accent-2:" + z.c1 + ";--bg-a:" + z.bgA + ";--bg-b:" + z.bgB;
    sec.innerHTML =
      '<div class="hero-bg" aria-hidden="true"></div>' +
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
        '<aside class="hero-side">' +
          '<ul class="thumbs" data-group>' + next.map(function (n, k) {
            return '<li><a href="#' + n.id + '"><span class="ico" data-art="' + n.id + '">' + ART[n.art]("t" + i + "_" + k, n.c1, n.c2) + "</span><span>" + n.name + "</span></a></li>";
          }).join("") + "</ul>" +
          '<div class="stats" data-group>' +
            '<div class="stat"><small>' + z.s1[0] + "</small><strong>" + z.s1[1] + "</strong></div>" +
            '<div class="stat"><small>' + z.s2[0] + "</small><strong>" + z.s2[1] + "</strong></div>" +
          "</div>" +
        "</aside>" +
      "</div>" +
      '<span class="counter" aria-hidden="true">0' + (i + 1) + " / 0" + ZONES.length + "</span>" +
      (i === 0 ? '<div class="scroll-hint" aria-hidden="true"><span>Scroll</span><i></i></div>' : "");
    host.appendChild(sec);
  });

  /* Imágenes reales: si existe el archivo, reemplaza al dibujo (ver README) */
  ZONES.forEach(function (z) {
    if (z.img) {
      var im = new Image();
      im.onload = function () {
        qsa('[data-art="' + z.id + '"]').forEach(function (w) {
          w.innerHTML = '<img class="photo" src="' + z.img + '" alt="" draggable="false">';
        });
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
    if (!ev.date) return { html: '<div class="event-date tbd"><b>Fecha a<br>confirmar</b></div>', count: "" };
    var p = ev.date.split("-"), d = new Date(+p[0], +p[1] - 1, +p[2]);
    var today = new Date(); today.setHours(0, 0, 0, 0);
    var days = Math.round((d - today) / 86400000);
    var count = days > 1 ? "Faltan " + days + " días" : days === 1 ? "¡Mañana!" : days === 0 ? "¡Es hoy!" : "Evento finalizado";
    return {
      html: '<div class="event-date"><b>' + d.getDate() + "</b><span>" + MONTHS[d.getMonth()] + "</span>" + (ev.time ? "<small>" + ev.time + "</small>" : "") + "</div>",
      count: count
    };
  }
  var evHost = $("event-cards");
  EVENTS.forEach(function (ev) {
    var dt = eventDate(ev);
    var msg = "Hola! Quiero anotarme al torneo de " + ev.name + " en Danger Zone.";
    var a = document.createElement("article");
    a.className = "event"; a.style.cssText = "--e1:" + ev.e1 + ";--e2:" + ev.e2;
    a.innerHTML =
      '<div class="event-art" style="color:' + ev.e1 + '">' + EVENT_ART[ev.id] + "</div>" +
      "<div><span class=\"chip\">" + ev.tag + "</span><h3>" + ev.name + "</h3><p>" + ev.desc + "</p></div>" +
      dt.html +
      '<div class="event-foot"><a class="btn" data-magnet data-wa data-msg="' + msg + '" href="#">Anotarme</a>' +
      (dt.count ? '<span class="countdown">' + dt.count + "</span>" : "") + "</div>";
    evHost.appendChild(a);
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

  /* Estado de animación */
  var panels = qsa(".service"), servicios = $("servicios"), nav = $("nav");
  var stackMQ = window.matchMedia("(min-width: 981px) and (min-height: 640px)");
  function syncStack() { servicios.classList.toggle("stack", stackMQ.matches); }
  syncStack();
  if (stackMQ.addEventListener) stackMQ.addEventListener("change", syncStack);

  var pState = panels.map(function () { return { v: 0, cover: 0 }; });
  var tilts = qsa(".hero-stage").map(function (st) {
    return { stage: st, el: qs(".tilt", st), rx: new Spring(0, 140, 15), ry: new Spring(0, 140, 15) };
  });
  var magnets = qsa("[data-magnet]").map(function (el) { return { el: el, x: new Spring(0, 220, 16), y: new Spring(0, 220, 16), moving: false }; });
  var glowEl = qs(".cursor-glow"), gx = new Spring(innerWidth / 2, 90, 18), gy = new Spring(innerHeight / 2, 90, 18);
  var ptr = { x: -9999, y: -9999, moved: false };
  var mq = $("mq"), mqX = 0, mqW = 0, mqDir = 1, scrollVel = 0;
  var sections = ["servicios", "eventos", "turnos", "visitanos"].map(function (id) { return { id: id, el: $(id) }; });
  var currentSec = null, currentPanel = -2;
  var lastY = window.scrollY, lastNavY = lastY, lastT = performance.now();

  function measure() {
    mqW = mq.firstElementChild.offsetWidth;
    place(activeLink);
  }

  function setAccent(i) {
    if (i === currentPanel) return;
    currentPanel = i;
    if (i < 0) { root.style.setProperty("--accent", DEFAULT_ACCENT.c2); root.style.setProperty("--accent-2", DEFAULT_ACCENT.c1); }
    else { root.style.setProperty("--accent", ZONES[i].c2); root.style.setProperty("--accent-2", ZONES[i].c1); }
  }

  function frame(now) {
    var dt = Math.min((now - lastT) / 1000, 1 / 30) || 1 / 60; lastT = now;
    var y = window.scrollY, vh = window.innerHeight, dy = y - lastY; lastY = y;
    var stack = servicios.classList.contains("stack");

    /* barra de progreso, menú y pista de scroll */
    var max = root.scrollHeight - vh;
    root.style.setProperty("--sp", (max > 0 ? y / max : 0).toFixed(4));
    nav.classList.toggle("solid", y > 40);
    if (y > lastNavY + 4 && y > 160) nav.classList.add("hide"); else if (y < lastNavY - 4) nav.classList.remove("hide");
    lastNavY = y;
    document.body.classList.toggle("scrolled", y > 60);

    /* sección activa en el menú */
    var cs = null;
    sections.forEach(function (s) { var r = s.el.getBoundingClientRect(); if (r.top <= vh * 0.5 && r.bottom > vh * 0.5) cs = s.id; });
    if (cs !== currentSec) {
      currentSec = cs;
      activeLink = links.filter(function (a) { return a.getAttribute("data-sec") === cs; })[0] || null;
      links.forEach(function (a) { a.classList.toggle("on", a === activeLink); });
      place(activeLink);
    }

    /* paneles: parallax, apilado y color de acento activo */
    var active = -1, k = 1 - Math.pow(0.0005, dt);
    panels.forEach(function (p, i) {
      var r = p.getBoundingClientRect();
      var pr = clamp(r.top / vh, -1, 1), q = 0;
      if (stack && panels[i + 1]) q = clamp(1 - panels[i + 1].getBoundingClientRect().top / vh, 0, 1);
      var v = stack ? clamp(pr - q, -1, 1) : pr;
      if (reduce) { v = 0; q = 0; }
      var s = pState[i];
      s.v += (v - s.v) * k; s.cover += (q - s.cover) * k;
      if (Math.abs(s.v - v) < 0.0005) s.v = v;
      if (Math.abs(s.cover - q) < 0.0005) s.cover = q;
      p.style.setProperty("--v", s.v.toFixed(4)); p.style.setProperty("--cover", s.cover.toFixed(4));
      if (r.top <= vh * 0.5 && r.bottom > vh * 0.5) active = i;
    });
    setAccent(active);

    if (!reduce) {
      /* puntero: inclinación 3D, imanes y luz */
      if (ptr.moved && !coarse) {
        tilts.forEach(function (t) {
          var r = t.stage.getBoundingClientRect();
          var inside = ptr.x > r.left - 60 && ptr.x < r.right + 60 && ptr.y > r.top - 60 && ptr.y < r.bottom + 60;
          t.ry.t = inside ? clamp((ptr.x - (r.left + r.width / 2)) / (r.width / 2), -1, 1) * 13 : 0;
          t.rx.t = inside ? clamp((ptr.y - (r.top + r.height / 2)) / (r.height / 2), -1, 1) * -10 : 0;
        });
        magnets.forEach(function (m) {
          var r = m.el.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
          var near = Math.abs(ptr.x - cx) < r.width / 2 + 40 && Math.abs(ptr.y - cy) < r.height / 2 + 40;
          m.x.t = near ? clamp((ptr.x - cx) * 0.3, -14, 14) : 0; m.y.t = near ? clamp((ptr.y - cy) * 0.35, -10, 10) : 0;
        });
        gx.t = ptr.x; gy.t = ptr.y; ptr.moved = false;
      }
      tilts.forEach(function (t) {
        if (t.rx.idle() && t.ry.idle()) return;
        t.rx.step(dt); t.ry.step(dt);
        t.el.style.setProperty("--rx", t.rx.v.toFixed(2) + "deg"); t.el.style.setProperty("--ry", t.ry.v.toFixed(2) + "deg");
      });
      magnets.forEach(function (m) {
        if (m.x.idle() && m.y.idle()) { if (m.moving) { m.el.style.transform = ""; m.moving = false; } return; }
        m.x.step(dt); m.y.step(dt); m.moving = true;
        m.el.style.transform = "translate3d(" + m.x.v.toFixed(2) + "px," + m.y.v.toFixed(2) + "px,0)";
      });
      if (glowEl && !coarse) { gx.step(dt); gy.step(dt); glowEl.style.transform = "translate3d(" + gx.v.toFixed(1) + "px," + gy.v.toFixed(1) + "px,0)"; }

      /* cinta: velocidad base + empuje según la velocidad del scroll */
      scrollVel += (dy / dt - scrollVel) * 0.12;
      if (Math.abs(dy) > 0.5) mqDir += ((dy >= 0 ? 1 : -1) - mqDir) * 0.15;
      mqX -= (55 + Math.abs(scrollVel) * 0.5) * mqDir * dt;
      if (mqW) { if (mqX <= -mqW) mqX += mqW; if (mqX > 0) mqX -= mqW; }
      mq.style.transform = "translate3d(" + mqX.toFixed(1) + "px,0,0)";
    }
    requestAnimationFrame(frame);
  }

  /* Eventos de puntero */
  if (!coarse) {
    window.addEventListener("pointermove", function (e) {
      ptr.x = e.clientX; ptr.y = e.clientY; ptr.moved = true;
      if (glowEl && !glowEl.classList.contains("on")) { gx.v = gx.t = e.clientX; gy.v = gy.t = e.clientY; glowEl.classList.add("on"); }
      var sp = e.target.closest && e.target.closest(".spot");
      if (sp) { var r = sp.getBoundingClientRect(); sp.style.setProperty("--mx", e.clientX - r.left + "px"); sp.style.setProperty("--my", e.clientY - r.top + "px"); }
    }, { passive: true });
    document.addEventListener("pointerleave", function () { ptr.x = ptr.y = -9999; ptr.moved = true; });
  }
  window.addEventListener("resize", measure);

  /* ---------- Arranque: pantalla de carga -> animación de entrada ---------- */
  var t0 = performance.now(), started = false;
  function start() {
    if (started) return; started = true;
    measure();
    document.body.classList.add("ready");
    setTimeout(function () { var l = qs(".loader"); if (l) l.remove(); }, 1400);
    observe();
    requestAnimationFrame(function (t) { lastT = t; requestAnimationFrame(frame); });
  }
  function whenReady() {
    var wait = Math.max(0, 1000 - (performance.now() - t0));
    setTimeout(start, wait);
  }
  var loaded = document.readyState === "complete" ? Promise.resolve() : new Promise(function (r) { window.addEventListener("load", r, { once: true }); });
  var fonts = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
  Promise.all([loaded, fonts]).then(whenReady);
  setTimeout(start, 3500); /* por si algún recurso externo tarda de más */
})();
