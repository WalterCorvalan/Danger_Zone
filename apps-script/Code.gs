/* =====================================================================
   DANGER ZONE · Conexión entre la planilla de Google y el panel (admin.html)
   Cómo se instala (una sola vez, ~5 minutos): ver README.md, sección "Panel".
   ===================================================================== */

const CLAVE = 'cambiar-esta-clave';   // ← CAMBIARLA por una clave propia antes de publicar

const HOJAS = {
  ingresos: ['id', 'fecha', 'hora', 'categoria', 'monto', 'clientes', 'nota'],
  egresos:  ['id', 'fecha', 'categoria', 'concepto', 'monto'],
  reservas: ['id', 'creada', 'fecha', 'hora', 'tipo', 'zona', 'nombre', 'personas', 'contacto', 'estado', 'nota'],
  pedidos:  ['id', 'creada', 'juego', 'plataforma', 'nombre']
};

/* Ejecutar UNA vez desde el editor: crea las pestañas con sus columnas. */
function setup() {
  const ss = SpreadsheetApp.getActive();
  Object.keys(HOJAS).forEach(function (n) {
    const sh = ss.getSheetByName(n) || ss.insertSheet(n);
    sh.getRange(1, 1, sh.getMaxRows(), HOJAS[n].length).setNumberFormat('@');  // texto plano: sin fórmulas ni fechas raras
    if (sh.getLastRow() === 0) {
      sh.appendRow(HOJAS[n]);
      sh.setFrozenRows(1);
      sh.getRange(1, 1, 1, HOJAS[n].length).setFontWeight('bold');
    }
  });
  ['Hoja 1', 'Sheet1', 'Hoja1'].forEach(function (x) {
    const s = ss.getSheetByName(x);
    if (s && ss.getSheets().length > 1) ss.deleteSheet(s);
  });
}

function out_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
function hoja_(n) { return SpreadsheetApp.getActive().getSheetByName(n); }
function limpiar_(v, max) { return String(v == null ? '' : v).replace(/[\r\n\t]+/g, ' ').trim().slice(0, max || 200); }

function leer_(n) {
  const sh = hoja_(n); if (!sh || sh.getLastRow() < 2) return [];
  const vals = sh.getRange(1, 1, sh.getLastRow(), HOJAS[n].length).getValues();
  const cab = vals.shift();
  return vals.map(function (r) { const o = {}; cab.forEach(function (c, i) { o[c] = r[i]; }); return o; });
}
function buscar_(n, id) {
  const sh = hoja_(n); if (!sh || sh.getLastRow() < 2) return -1;
  const ids = sh.getRange(2, 1, sh.getLastRow() - 1, 1).getValues();
  for (let i = 0; i < ids.length; i++) if (String(ids[i][0]) === String(id)) return i + 2;
  return -1;
}
function armar_(n, f, conId) {
  f = f || {};
  return HOJAS[n].map(function (c) {
    if (c === 'id') return conId ? Utilities.getUuid().slice(0, 8) : f.id;
    if (c === 'creada') return f.creada || new Date().toISOString();
    return limpiar_(f[c], c === 'nota' || c === 'concepto' ? 300 : 120);
  });
}

/* Lectura (solo con clave) */
function doGet(e) {
  const p = (e && e.parameter) || {};
  if (p.action === 'ping') return out_({ ok: true });
  if (p.clave !== CLAVE) return out_({ ok: false, error: 'clave' });
  if (p.action === 'list') {
    const data = {}; Object.keys(HOJAS).forEach(function (n) { data[n] = leer_(n); });
    return out_({ ok: true, data: data });
  }
  return out_({ ok: false, error: 'accion' });
}

/* Escritura. Los formularios de la web pueden anotar reservas y pedidos SIN clave;
   todo lo demás (agregar, editar, borrar) requiere la clave. */
function doPost(e) {
  let b; try { b = JSON.parse(e.postData.contents); } catch (x) { return out_({ ok: false, error: 'json' }); }
  const lock = LockService.getScriptLock(); lock.waitLock(10000);
  try {
    if (b.action === 'reserva') {
      const f = b.fila || {}; f.estado = 'pendiente';
      hoja_('reservas').appendRow(armar_('reservas', f, true)); return out_({ ok: true });
    }
    if (b.action === 'pedido') {
      hoja_('pedidos').appendRow(armar_('pedidos', b.fila || {}, true)); return out_({ ok: true });
    }
    if (b.clave !== CLAVE) return out_({ ok: false, error: 'clave' });
    const n = b.hoja; if (!HOJAS[n]) return out_({ ok: false, error: 'hoja' });
    if (b.action === 'add') {
      const row = armar_(n, b.fila, true); hoja_(n).appendRow(row); return out_({ ok: true, id: row[0] });
    }
    const i = buscar_(n, b.id); if (i < 0) return out_({ ok: false, error: 'no existe' });
    if (b.action === 'update') {
      const cur = leer_(n).filter(function (r) { return String(r.id) === String(b.id); })[0] || {};
      const row = armar_(n, Object.assign({}, cur, b.fila, { id: b.id }), false);
      hoja_(n).getRange(i, 1, 1, row.length).setValues([row]); return out_({ ok: true });
    }
    if (b.action === 'delete') { hoja_(n).deleteRow(i); return out_({ ok: true }); }
    return out_({ ok: false, error: 'accion' });
  } finally { lock.releaseLock(); }
}
