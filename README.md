# Danger Zone

Página web del ciber gamer **Danger Zone** (Av. Constitución 546, Del Viso).
Sitio estático: HTML + CSS + JS, sin dependencias ni build. Las animaciones
(resortes, parallax, paneles apilados, tilt 3D, imanes) están hechas a mano en `script.js`.

## Ver la página

Abrir `index.html` en el navegador, o servirla con `python3 -m http.server`.

## Qué editar

| Qué | Dónde |
|---|---|
| Servicios (textos y colores de cada panel) | array `ZONES` en `script.js` |
| **Fechas de los eventos (Mortal Kombat, FIFA 26)** | array `EVENTS` en `script.js` (`date: "2026-11-28"`, `time: "18:00 hs"`) |
| Número de WhatsApp y mensaje | `WA_NUMBER` y `WA_TEXT` al inicio de `script.js` |
| Horarios y dirección | sección `#visitanos` en `index.html` |
| Horarios disponibles del formulario de turnos | función `slots()` en `script.js` |
| Colores generales | variables `:root` en `styles.css` |
| Tipografía de títulos | `--display` en `styles.css` (Tomorrow itálica, la más parecida a la del logo) y el `<link>` de Google Fonts en `index.html` |

## Imágenes reales (opcional)

Ya están cargadas fotos libres de Wikimedia Commons (los créditos salen en el pie de la página).
Para cambiarlas, reemplazá el archivo en `assets/` con el mismo nombre. Si un archivo falta, se usa el dibujo incluido:

- Producto, WebP (o PNG, cambiando la extensión en `ZONES`) con **fondo transparente**: `ps5.webp`, `xbox.webp`, `pc.webp`, `vr.webp`, `sim.webp`
- Logo de cada marca (se muestra junto al nombre): `logo-ps5.png`, `logo-xbox.png`, `logo-pc.png`, `logo-vr.png`, `logo-sim.png`

Los 404 de estos archivos en la consola del navegador son normales mientras no estén cargados.
