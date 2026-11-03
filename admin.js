(function () {
  "use strict";
  var $ = function (id) { return document.getElementById(id); };
  var qsa = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var VENTAS = ["PS5", "Xbox", "PC", "Realidad Virtual", "Simulador", "Comida", "Bebida", "Cumpleaños", "Jugadores casuales", "Eventos"];
  var GASTOS = ["Sueldos", "Alquiler", "Servicios", "Mercadería", "Mantenimiento", "Publicidad", "Otros"];
  var COLOR = { "PS5": "#00d9ff", "Xbox": "#39ff14", "PC": "#ff39c8", "Realidad Virtual": "#b86bff", "Simulador": "#ff9d00", "Comida": "#ffd84d", "Bebida": "#5ee7ff", "Cumpleaños": "#ff7ab8", "Jugadores casuales": "#9aa8ff", "Eventos": "#ff4d5e" };
  var S = { more: 20, demo: false, url: "", clave: "", range: "mes", tab: "ingresos", btab: "agenda", bq: "", bst: "todas", data: { ingresos: [], egresos: [], reservas: [], pedidos: [] } };
  var $m = function (n) { return "$\u00a0" + Math.round(+n || 0).toLocaleString("es-AR"); };
  var today = function () { var d = new Date(); return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2); };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  function addDays(n) { var d = new Date(Date.now() + n * 864e5); return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2); }
  function toast(t) { var e = $("toast"); e.textContent = t; e.hidden = false; setTimeout(function () { e.hidden = true; }, 2200); }

  /* ---------- conexión con la planilla ---------- */
  function call(method, body) {
    if (method === "GET") return fetch(S.url + "?action=list&clave=" + encodeURIComponent(S.clave)).then(function (r) { return r.json(); });
    body.clave = S.clave;
    return fetch(S.url, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(body) }).then(function (r) { return r.json(); });
  }
  function load() {
    if (S.demo) { render(); return Promise.resolve(); }
    return call("GET").then(function (r) {
      if (!r.ok) throw new Error(r.error === "clave" ? "La clave no es correcta." : "No se pudo leer la planilla.");
      Object.keys(S.data).forEach(function (k) { S.data[k] = (r.data[k] || []); });
      render();
    });
  }
  function save(hoja, fila) {
    if (S.demo) { fila.id = "d" + Date.now(); S.data[hoja].push(fila); render(); return Promise.resolve(); }
    return call("POST", { action: "add", hoja: hoja, fila: fila }).then(function (r) { if (!r.ok) throw new Error("No se pudo guardar."); return load(); });
  }
  function change(hoja, id, fila) {
    if (S.demo) { S.data[hoja].forEach(function (x) { if (x.id === id) Object.assign(x, fila); }); render(); return Promise.resolve(); }
    return call("POST", { action: "update", hoja: hoja, id: id, fila: fila }).then(load);
  }
  function remove(hoja, id) {
    if (S.demo) { S.data[hoja] = S.data[hoja].filter(function (x) { return x.id !== id; }); render(); return Promise.resolve(); }
    return call("POST", { action: "delete", hoja: hoja, id: id }).then(load);
  }

  /* ---------- datos de ejemplo (solo para mirar) ---------- */
  function demo() {
    var seed = 7, r = function () { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    var d = { ingresos: [], egresos: [], reservas: [], pedidos: [] }, i, t = new Date();
    for (i = 0; i < 28; i++) {
      var f = new Date(t.getTime() - i * 864e5), ds = f.getFullYear() + "-" + ("0" + (f.getMonth() + 1)).slice(-2) + "-" + ("0" + f.getDate()).slice(-2);
      for (var k = 0; k < 7; k++) {
        var c = VENTAS[Math.floor(r() * 7.4)], h = 12 + Math.floor(Math.pow(r(), 0.7) * 11);
        d.ingresos.push({ id: "i" + i + k, fecha: ds, hora: h + ":00", categoria: c, monto: 2000 + Math.floor(r() * 9000), clientes: 1 + Math.floor(r() * 4), nota: "" });
      }
      if (i % 3 === 0) d.egresos.push({ id: "e" + i, fecha: ds, categoria: GASTOS[Math.floor(r() * 7)], concepto: "Ejemplo", monto: 5000 + Math.floor(r() * 30000) });
    }
    d.reservas = [{ id: "r1", creada: "", fecha: today(), hora: "18:00 hs", tipo: "cumple", zona: "", nombre: "Ejemplo Cumpleaños", personas: "12", contacto: "5491100000000", estado: "pendiente", nota: "" },
      { id: "r2", creada: "", fecha: today(), hora: "20:00 hs", tipo: "turno", zona: "PS5", nombre: "Ejemplo Turno", personas: "3", contacto: "", estado: "pendiente", nota: "" },
      { id: "r3", creada: "", fecha: addDays(2), hora: "19:00 hs", tipo: "turno", zona: "Xbox", nombre: "Lucas (confirmado)", personas: "4", contacto: "", estado: "confirmada", nota: "" },
      { id: "r4", creada: "", fecha: addDays(5), hora: "16:00 hs", tipo: "cumple", zona: "", nombre: "Cumple de Mía", personas: "10", contacto: "", estado: "confirmada", nota: "" },
      { id: "r5", creada: "", fecha: addDays(-3), hora: "21:00 hs", tipo: "turno", zona: "PC Gamer", nombre: "Tomás", personas: "2", contacto: "", estado: "confirmada", nota: "" },
      { id: "r6", creada: "", fecha: addDays(-9), hora: "17:00 hs", tipo: "cumple", zona: "", nombre: "Cumple de Joaquín", personas: "14", contacto: "", estado: "confirmada", nota: "" },
      { id: "r7", creada: "", fecha: addDays(-6), hora: "20:00 hs", tipo: "turno", zona: "PS5", nombre: "Agus", personas: "3", contacto: "", estado: "cancelada", nota: "" }];
    d.pedidos = [{ id: "p1", creada: "", juego: "Tekken 8", plataforma: "PS5", nombre: "Ejemplo" }];
    return d;
  }

  /* ---------- períodos ---------- */
  function inRange(f) {
    if (S.range === "todo") return true;
    var d = new Date(f + "T12:00:00"), n = new Date(); n.setHours(12, 0, 0, 0);
    var dias = Math.round((n - d) / 864e5);
    return S.range === "hoy" ? dias === 0 : S.range === "semana" ? dias >= 0 && dias < 7 : (d.getMonth() === n.getMonth() && d.getFullYear() === n.getFullYear());
  }
  function sum(a, k) { return a.reduce(function (s, x) { return s + (+x[k] || 0); }, 0); }

  /* ---------- pantalla ---------- */
  function render() {
    var ing = S.data.ingresos.filter(function (x) { return inRange(x.fecha); }), egr = S.data.egresos.filter(function (x) { return inRange(x.fecha); });
    var pend = S.data.reservas.filter(function (x) { return x.estado === "pendiente"; });
    var cumples = pend.filter(function (x) { return x.tipo === "cumple"; });
    var I = sum(ing, "monto"), E = sum(egr, "monto"), B = I - E;
    $("kpis").innerHTML = [
      ["Entró", $m(I), "ventas del período", "#39ff14"], ["Salió", $m(E), "gastos del período", "#ff39c8"],
      ["Quedó", $m(B), B >= 0 ? "ganancia" : "pérdida", B >= 0 ? "#00d9ff" : "#ff4d5e"],
      ["Clientes", sum(ing, "clientes"), "personas atendidas", "#b86bff"],
      ["Reservas por responder", pend.length, "pendientes", "#ff9d00"], ["Pedidos de cumpleaños", cumples.length, "sin responder", "#ff7ab8"]
    ].map(function (k) { return '<div class="kpi" style="--c:' + k[3] + '"><small>' + k[0] + "</small><b>" + k[1] + "</b><i>" + k[2] + "</i></div>"; }).join("");
    fitKpis();

    $("todo").innerHTML = "<h2>Para responder</h2>" + (pend.length ? pend.map(function (r) {
      var tel = String(r.contacto || "").replace(/\D/g, "");
      return '<div class="item"><div class="t"><b>' + (r.tipo === "cumple" ? "🎂 Cumpleaños" : "🎮 Turno " + esc(r.zona)) + " · " + esc(r.nombre) + "</b><small>" + esc(r.fecha) + " " + esc(r.hora) + " · " + esc(r.personas) + " personas</small></div>" +
        (tel ? '<a class="mini wa" target="_blank" rel="noopener" href="https://wa.me/' + tel + '">Escribirle</a>' : "") +
        '<button class="mini" data-est="confirmada" data-id="' + esc(r.id) + '">Confirmar</button><button class="mini no" data-est="cancelada" data-id="' + esc(r.id) + '">Cancelar</button></div>';
    }).join("") : '<p class="empty">No hay nada pendiente. ✅</p>');

    /* ¿A qué hora viene más gente? */
    var hrs = {}, h, max = 0, best = null;
    ing.forEach(function (x) { h = parseInt(x.hora, 10); if (!isNaN(h)) hrs[h] = (hrs[h] || 0) + (+x.clientes || 1); });
    for (h = 10; h <= 23; h++) if ((hrs[h] || 0) > max) { max = hrs[h]; best = h; }
    var bars = "";
    for (h = 10; h <= 23; h++) {
      var v = hrs[h] || 0, hh = max ? Math.round(v / max * 130) : 0, x = 14 + (h - 10) * 24;
      bars += '<rect x="' + x + '" y="' + (150 - hh) + '" width="18" height="' + hh + '" rx="3" fill="' + (h === best ? "#39ff14" : "#8a4bff") + '"/><text x="' + (x + 9) + '" y="168" text-anchor="middle">' + h + "</text>" + (v ? '<text x="' + (x + 9) + '" y="' + (145 - hh) + '" text-anchor="middle" style="fill:#fff">' + v + "</text>" : "");
    }
    $("chHours").innerHTML = '<svg viewBox="0 0 356 176" width="100%">' + bars + "</svg>" + (best !== null ? '<p class="hint">La hora con más gente es <b>las ' + best + "</b>. (Números = personas.)</p>" : '<p class="empty">Todavía no hay ventas en este período.</p>');

    /* por categoría */
    var cat = {}; ing.forEach(function (x) { cat[x.categoria] = (cat[x.categoria] || 0) + (+x.monto || 0); });
    var cs = Object.keys(cat).sort(function (a, b) { return cat[b] - cat[a]; }), top = cat[cs[0]] || 1;
    $("chCats").innerHTML = cs.length ? cs.map(function (c) {
      return '<div style="display:grid;grid-template-columns:130px 1fr auto;gap:8px;align-items:center;margin:7px 0;font-size:.88rem"><span>' + esc(c) + '</span><span style="background:rgba(255,255,255,.08);border-radius:6px;height:14px"><span style="display:block;height:100%;border-radius:6px;width:' + Math.max(3, cat[c] / top * 100) + "%;background:" + (COLOR[c] || "#b86bff") + '"></span></span><b>' + $m(cat[c]) + "</b></div>";
    }).join("") : '<p class="empty">Todavía no hay ventas en este período.</p>';

    /* día por día (últimos 14) */
    var days = [], i2, bi = {}, be = {}, mx = 1;
    for (i2 = 13; i2 >= 0; i2--) { var dd = new Date(Date.now() - i2 * 864e5); days.push(dd.getFullYear() + "-" + ("0" + (dd.getMonth() + 1)).slice(-2) + "-" + ("0" + dd.getDate()).slice(-2)); }
    S.data.ingresos.forEach(function (x) { bi[x.fecha] = (bi[x.fecha] || 0) + (+x.monto || 0); });
    S.data.egresos.forEach(function (x) { be[x.fecha] = (be[x.fecha] || 0) + (+x.monto || 0); });
    days.forEach(function (d) { mx = Math.max(mx, bi[d] || 0, be[d] || 0); });
    var fl = ""; days.forEach(function (d, n) {
      var a = Math.round((bi[d] || 0) / mx * 110), b = Math.round((be[d] || 0) / mx * 110), x = 10 + n * 48;
      fl += '<rect x="' + x + '" y="' + (120 - a) + '" width="17" height="' + a + '" rx="3" fill="#39ff14"/><rect x="' + (x + 19) + '" y="' + (120 - b) + '" width="17" height="' + b + '" rx="3" fill="#ff39c8"/><text x="' + (x + 18) + '" y="136" text-anchor="middle">' + d.slice(8) + "</text>";
    });
    $("chFlow").innerHTML = '<svg viewBox="0 0 690 142" width="100%">' + fl + '</svg><p class="hint"><b style="color:#39ff14">■</b> entró &nbsp; <b style="color:#ff39c8">■</b> salió (últimos 14 días)</p>';
    renderBookings();
    renderList();
  }

  /* achica el número si no entra en la tarjeta */
  function fitKpis() {
    qsa(".kpi b").forEach(function (b) {
      b.style.fontSize = ""; var s = parseFloat(getComputedStyle(b).fontSize);
      while (b.scrollWidth > b.clientWidth && s > 11) { s -= 1; b.style.fontSize = s + "px"; }
    });
  }
  window.addEventListener("resize", fitKpis);

  /* ---------- reservas: agenda + historial ---------- */
  var EST = { pendiente: ["Pendiente", "#ff9d00"], confirmada: ["Confirmada", "#39ff14"], cancelada: ["Cancelada", "#ff4d5e"] };
  function rkey(r) { return String(r.fecha) + " " + String(r.hora); }
  function nice(f) { try { return new Date(f + "T12:00:00").toLocaleDateString("es-AR", { weekday: "long", day: "numeric", month: "long" }); } catch (e) { return f; } }
  function rtitle(r) { return (r.tipo === "cumple" ? "🎂 Cumpleaños" : "🎮 Turno " + esc(r.zona)) + " · " + esc(r.nombre); }
  function waBtn(r) { var tel = String(r.contacto || "").replace(/\D/g, ""); return tel ? '<a class="mini wa" target="_blank" rel="noopener" href="https://wa.me/' + tel + '">Escribirle</a>' : ""; }
  function renderBookings() {
    var all = S.data.reservas, t = today(), html = "";
    if (S.btab === "agenda") {
      var up = all.filter(function (r) { return r.estado === "confirmada" && r.fecha >= t; }).sort(function (a, b) { return rkey(a) < rkey(b) ? -1 : 1; });
      if (!up.length) html = '<p class="empty">No hay turnos confirmados por delante. Cuando confirmes uno en "Para responder", aparece acá. ✅</p>';
      else { var last = ""; up.forEach(function (r) {
        if (r.fecha !== last) { last = r.fecha; html += '<h3 class="day">' + (r.fecha === t ? "Hoy" : nice(r.fecha)) + "</h3>"; }
        html += '<div class="item"><div class="t"><b>' + esc(r.hora) + " · " + rtitle(r) + "</b><small>" + esc(r.personas) + " personas</small></div>" + waBtn(r) +
          '<button class="mini no" data-est="cancelada" data-id="' + esc(r.id) + '">Cancelar</button></div>'; }); }
      html += '<p class="hint">Los turnos ya pasados no se pierden: quedan guardados en el Historial.</p>';
    } else {
      var rows = all.filter(function (r) { return (S.bst === "todas" || r.estado === S.bst) && (!S.bq || (r.nombre + " " + r.zona).toLowerCase().indexOf(S.bq.toLowerCase()) >= 0); })
        .sort(function (a, b) { return rkey(a) < rkey(b) ? 1 : -1; });
      html = '<div class="bfilter"><input id="bq" type="search" placeholder="Buscar por nombre…" value="' + esc(S.bq) + '"><div class="period">' +
        [["todas", "Todas"], ["confirmada", "Confirmadas"], ["pendiente", "Pendientes"], ["cancelada", "Canceladas"]].map(function (x) { return '<button data-bs="' + x[0] + '"' + (S.bst === x[0] ? ' class="on"' : "") + ">" + x[1] + "</button>"; }).join("") + "</div></div>";
      html += rows.length ? '<div class="scroll"><table><thead><tr><th>Día</th><th>Hora</th><th>Qué</th><th>Nombre</th><th>Personas</th><th>Estado</th><th></th></tr></thead><tbody>' +
        rows.slice(0, S.bmore || 20).map(function (r) { var e = EST[r.estado] || [r.estado, "#b2a6cc"];
          return "<tr><td>" + esc(r.fecha) + "</td><td>" + esc(r.hora) + "</td><td>" + (r.tipo === "cumple" ? "🎂 Cumpleaños" : "🎮 " + esc(r.zona)) + "</td><td>" + esc(r.nombre) + "</td><td>" + esc(r.personas) + '</td><td><span class="st" style="--c:' + e[1] + '">' + e[0] + '</span></td><td><button class="x" title="Borrar" data-delr="' + esc(r.id) + '">🗑</button></td></tr>'; }).join("") + "</tbody></table></div>" +
        (rows.length > (S.bmore || 20) ? '<p style="text-align:center;margin-top:12px"><button class="mini" data-bmore="1">Ver más (' + (rows.length - (S.bmore || 20)) + " restantes)</button></p>" : "") +
        '<p class="hint">' + all.length + " reservas guardadas en total.</p>" : '<p class="empty">No hay reservas con ese filtro.</p>';
    }
    $("bbody").innerHTML = html;
    var q = $("bq"); if (q) q.oninput = function () { S.bq = q.value; var p = q.selectionStart; renderBookings(); var n = $("bq"); n.focus(); n.setSelectionRange(p, p); };
  }

  var COLS = {
    ingresos: [["fecha", "Día"], ["hora", "Hora"], ["categoria", "Qué"], ["monto", "Monto"], ["clientes", "Personas"], ["nota", "Nota"]],
    egresos: [["fecha", "Día"], ["categoria", "Tipo"], ["concepto", "Detalle"], ["monto", "Monto"]],
    pedidos: [["juego", "Juego"], ["plataforma", "Plataforma"], ["nombre", "Quién"]]
  };
  function renderList() {
    var t = S.tab, rows = S.data[t].slice().reverse(), c = COLS[t];
    if (!rows.length) { $("list").innerHTML = '<p class="empty">Todavía no hay nada acá.' + (t !== "pedidos" ? " Tocá el botón de arriba para anotar." : " Los pedidos llegan solos desde la web.") + "</p>"; return; }
    $("list").innerHTML = '<div class="scroll"><table><thead><tr>' + c.map(function (x) { return "<th>" + x[1] + "</th>"; }).join("") + "<th></th></tr></thead><tbody>" +
      rows.slice(0, S.more).map(function (r) {
        return "<tr>" + c.map(function (x) { var v = r[x[0]]; return "<td>" + (x[0] === "monto" ? $m(v) : esc(v)) + "</td>"; }).join("") + '<td><button class="x" title="Borrar" data-del="' + esc(r.id) + '">🗑</button></td></tr>';
      }).join("") + "</tbody></table></div>" + (rows.length > S.more ? '<p style="text-align:center;margin-top:12px"><button class="mini" data-more="1">Ver más (' + (rows.length - S.more) + " restantes)</button></p>" : "");
  }

  /* ---------- ventana para anotar ---------- */
  var SEL = function (id, label, list) { return "<label>" + label + '<select id="' + id + '">' + list.map(function (o) { return "<option>" + o + "</option>"; }).join("") + "</select></label>"; };
  var FORMS = {
    ingresos: { t: "Anotar una venta", f: function () { return '<div class="two"><label>Día<input id="f_fecha" type="date" value="' + today() + '"></label><label>Hora<input id="f_hora" type="time" value="' + new Date().toTimeString().slice(0, 5) + '"></label></div>' + SEL("f_categoria", "¿Qué se vendió?", VENTAS) + '<div class="two"><label>Monto ($)<input id="f_monto" type="number" inputmode="numeric" min="0"></label><label>Personas<input id="f_clientes" type="number" inputmode="numeric" min="1" value="1"></label></div>'; }, need: ["monto"] },
    egresos: { t: "Anotar un gasto", f: function () { return '<label>Día<input id="f_fecha" type="date" value="' + today() + '"></label>' + SEL("f_categoria", "¿Qué tipo de gasto?", GASTOS) + '<label>Detalle (opcional)<input id="f_concepto"></label><label>Monto ($)<input id="f_monto" type="number" inputmode="numeric" min="0"></label>'; }, need: ["monto"] },
    reservas: { t: "Nueva reserva", f: function () { return '<label>Nombre<input id="f_nombre"></label><div class="two"><label>Día<input id="f_fecha" type="date" value="' + today() + '"></label><label>Hora<input id="f_hora" type="time" value="18:00"></label></div><div class="two">' + SEL("f_tipo", "Tipo", ["turno", "cumple"]) + '<label>Personas<input id="f_personas" type="number" min="1" value="2"></label></div><label>WhatsApp (opcional)<input id="f_contacto" inputmode="tel" placeholder="54911..."></label>'; }, need: ["nombre"] }
  };
  var cur = null;
  function openForm(h) { cur = h; $("dlgTitle").textContent = FORMS[h].t; $("dlgFields").innerHTML = FORMS[h].f(); $("dlgMsg").textContent = ""; $("dlg").showModal(); var f = $("dlgFields").querySelector("input[type=number],input:not([type])"); if (f) f.focus(); }
  $("dlgCancel").onclick = function () { $("dlg").close(); };
  $("dlgForm").onsubmit = function (e) {
    e.preventDefault(); var fila = {}, bad = false;
    qsa("[id^=f_]", $("dlgFields")).forEach(function (el) { fila[el.id.slice(2)] = el.value; });
    FORMS[cur].need.forEach(function (n) { if (!String(fila[n] || "").trim()) bad = true; });
    if (bad) { $("dlgMsg").textContent = "Falta completar un dato."; return; }
    if (cur === "reservas") fila.estado = "confirmada";
    save(cur, fila).then(function () { $("dlg").close(); toast("Guardado ✔"); }).catch(function (x) { $("dlgMsg").textContent = x.message; });
  };

  /* ---------- clics ---------- */
  document.addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return;
    if (b.dataset.new) openForm(b.dataset.new);
    else if (b.dataset.more) { S.more += 20; renderList(); }
    else if (b.dataset.r) { S.range = b.dataset.r; qsa("#period button").forEach(function (x) { x.classList.toggle("on", x === b); }); render(); }
    else if (b.dataset.t) { S.tab = b.dataset.t; S.more = 20; qsa("#tabs button").forEach(function (x) { x.classList.toggle("on", x === b); }); renderList(); }
    else if (b.dataset.b) { S.btab = b.dataset.b; qsa("#btabs button").forEach(function (x) { x.classList.toggle("on", x === b); }); renderBookings(); }
    else if (b.dataset.bs) { S.bst = b.dataset.bs; S.bmore = 20; renderBookings(); }
    else if (b.dataset.bmore) { S.bmore = (S.bmore || 20) + 20; renderBookings(); }
    else if (b.dataset.delr) { if (confirm("¿Borrar esta reserva del historial?")) remove("reservas", b.dataset.delr).then(function () { toast("Borrada"); }); }
    else if (b.dataset.est) change("reservas", b.dataset.id, { estado: b.dataset.est }).then(function () { toast(b.dataset.est === "confirmada" ? "Confirmada ✔ Mirala en Agenda" : "Cancelada. Queda en el Historial"); });
    else if (b.dataset.del) { if (confirm("¿Borrar este renglón?")) remove(S.tab, b.dataset.del).then(function () { toast("Borrado"); }); }
  });
  $("refresh").onclick = function () { load().then(function () { toast("Actualizado ✔"); }); };
  $("exit").onclick = function () { try { localStorage.removeItem("dz_admin"); } catch (x) {} location.reload(); };

  function enter() { $("login").hidden = true; $("app").hidden = false; $("badge").hidden = !S.demo; }
  $("loginForm").onsubmit = function (e) {
    e.preventDefault(); S.url = $("url").value.trim(); S.clave = $("clave").value;
    if (!/^https:\/\/script\.google\.com\//.test(S.url)) { $("loginMsg").textContent = "Pegá la dirección completa que empieza con https://script.google.com/"; return; }
    $("loginMsg").textContent = "Conectando…";
    load().then(function () { try { localStorage.setItem("dz_admin", JSON.stringify({ u: S.url, c: S.clave })); } catch (x) {} enter(); }).catch(function (x) { $("loginMsg").textContent = x.message || "No se pudo conectar. Revisá la dirección."; });
  };
  $("demoBtn").onclick = function () { S.demo = true; S.data = demo(); enter(); render(); };
  try { var g = JSON.parse(localStorage.getItem("dz_admin") || "null"); if (g) { S.url = g.u; S.clave = g.c; load().then(enter).catch(function () { $("url").value = g.u; }); } } catch (x) {}
})();
