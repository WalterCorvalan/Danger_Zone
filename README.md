# Danger Zone

Página web del ciber gamer **Danger Zone** (Av. Constitución 546, Del Viso).
Sitio estático: HTML + CSS + JS, sin dependencias ni build. Las animaciones
(resortes, parallax, paneles apilados, tilt 3D, imanes) están hechas a mano en `script.js`.

## Ver la página

Abrir `index.html` en el navegador, o servirla con `python3 -m http.server`.

## Qué editar

**Casi todo se edita en `data.js`** (se puede hacer directo desde GitHub con el lápiz ✏️):

| Qué | Dónde en `data.js` |
|---|---|
| Fechas y horarios de los torneos (Mortal Kombat 11, F26) | `events` (`date: "2026-11-28"`, `time: "18:00 hs"`) |
| Ganadores históricos (tabla "Salón de la fama") | `winners` (un renglón por torneo; se ordena solo) |
| Juegos disponibles (grilla con filtros por plataforma) | `games` |
| Fotos del lugar y la gente | `gallery` (subir la foto a `assets/galeria/` y sumar una línea) |

Otros datos:

| Qué | Dónde |
|---|---|
| Servicios (textos y colores de cada panel) | array `ZONES` en `script.js` |
| Número de WhatsApp y mensaje | `WA_NUMBER` y `WA_TEXT` al inicio de `script.js` |
| Horarios y dirección | sección `#visitanos` en `index.html` |
| Horarios disponibles del formulario de turnos | función `slots()` en `script.js` |
| Colores generales | variables `:root` en `styles.css` |
| Tipografía de títulos | `--display` en `styles.css` (Tomorrow itálica, la más parecida a la del logo) y el `<link>` de Google Fonts en `index.html` |

Los formularios (turnos, cumpleaños y pedir juegos) **no guardan nada en un servidor**: arman el mensaje y abren WhatsApp.

## Banners de los eventos

Si existen `assets/evento-mk.webp` y `assets/evento-fifa.webp`, reemplazan a las ilustraciones de las tarjetas.
Cada imagen es la tarjeta completa, recortada sin el margen oscuro. La caja de la fecha (arriba a la derecha)
la tapa la web con la fecha real que se carga en `data.js`, y toda la imagen es un link a WhatsApp.

## Imágenes de los servicios

Ya están cargadas fotos libres de Wikimedia Commons (los créditos salen en el pie de la página).
Para cambiarlas, reemplazá el archivo en `assets/` con el mismo nombre (`ps5.webp`, `xbox.webp`, `pc.webp`,
`vr.webp`, `sim.webp`, con fondo transparente). Si un archivo falta, se usa el dibujo incluido.
