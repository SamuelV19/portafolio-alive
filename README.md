# Alive Studio — mini portafolio de networking (QR)

Pieza editorial de una sola página, pensada para abrirse desde un código QR
durante un evento de networking y entenderse en 30–60 segundos. No es (ni
compite con) la web corporativa completa (https://www.alivestudio.art).

## Estructura de contenido (5 bloques)

1. **Introducción** — wordmark, tagline y "Estrategia + Marketing + Tecnología".
2. **La idea** — "No empezamos por la herramienta. Empezamos por el problema."
3. **Nuestro trabajo** — el corazón del sitio: el caso de Claudia (protagonista)
   + los dos proyectos propios (inventarios, IA para prospectos).
4. **Lo que conecta todo** — estrategia → marketing → tecnología, y el cierre
   "no buscamos darte más herramientas, buscamos construir la solución correcta".
5. **Cierre / networking** — CTA a la web principal, a Instagram y (pendiente)
   a WhatsApp.

## Estructura de archivos

```
alive-studio/
├── index.html            # los 5 bloques, en una sola vista
├── css/style.css          # tokens de color/tipografía + estilos
├── js/main.js             # nav sticky, scroll-reveal, smooth scroll
├── public/assets/
│   └── README-assets.txt  # dónde va el logo, favicon y og-image
└── README.md
```

## Cómo ejecutarlo localmente

```bash
cd alive-studio
python3 -m http.server 8000
# abrir http://localhost:8000
```

## Build

No hay paso de build: HTML/CSS/JS puro, listo para publicarse tal cual.

## Cómo desplegarlo gratis

- **Netlify**: arrastra la carpeta a app.netlify.com/drop.
- **Vercel**: `vercel` desde dentro de la carpeta.
- **GitHub Pages** o **Cloudflare Pages**: sube el repo y activa Pages.

Genera el QR apuntando a la URL pública final (no a localhost).

## Pendiente antes de publicar

- [ ] **WhatsApp**: en `index.html`, dentro del bloque `#cierre`, el botón
      tiene `href="WHATSAPP_URL_AQUI"` — reemplázalo por el enlace real
      (ej. `https://wa.me/57XXXXXXXXXX`). El botón está marcado
      visualmente como "completar enlace" hasta que lo hagas.
- [ ] **Logo**: coloca `logo.svg` en `public/assets/` y reemplaza el
      wordmark de texto en el header (`.nav__mark`) y en la intro si
      quieres.
- [ ] **Favicon y og-image**: agrega `public/assets/favicon.ico` y
      `public/assets/og-image.jpg`.
- [ ] **Capturas reales de Claudia**: el bloque `.case__gallery` en
      `index.html` (sección `#trabajo`) tiene 4 espacios reservados
      (Instagram, Identidad visual, Contenido, Reels). Reemplaza cada
      `<div class="case__tile">` por una imagen real cuando la tengas.
- [ ] **Capturas de los proyectos propios**: los mockups abstractos en
      `.own-project__mock` pueden reemplazarse por `<img>` reales de la
      plataforma de inventarios y del asistente de IA.
- [ ] Probar en un teléfono real antes de imprimir el QR.
- [ ] Confirmar que el QR apunte a la URL de producción, no a localhost.

## Dónde cambiar los colores

Variables CSS en `css/style.css`, dentro de `:root`:

```css
--ink:    #151412;  /* fondo oscuro */
--paper:  #f6f4ef;  /* fondo claro */
--yellow: #fab615;
--orange: #f18415;
--gray:   #a9a9aa;
```

## Enlaces ya configurados

| Botón | Destino |
|---|---|
| "Ver proyecto ↗" (Claudia) | `https://www.instagram.com/psicoclaudia.contigo/` |
| "Conocer Alive Studio →" | `https://www.alivestudio.art` |
| "Instagram →" | `https://www.instagram.com/alivestudio.art/` |
| "WhatsApp →" | pendiente — ver checklist arriba |

## Qué cambió respecto a la versión anterior

La versión anterior tenía una estructura de web corporativa (inicio →
problema → enfoque → caso → proyectos → servicios → para quién trabajamos
→ CTA). Esta versión la reemplaza por 5 bloques editoriales, elimina la
lista de servicios, la sección "para quién trabajamos" y reduce el sitio
a lo esencial: quiénes somos, cómo pensamos, qué hemos construido, y un
único cierre con tres formas de contacto.

## Notas de contenido

No se incluyen métricas, testimonios, cifras de crecimiento, número de
proyectos, premios ni años de experiencia que no fueron proporcionados.
