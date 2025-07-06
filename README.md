
# Guía Disneyland Familia

Esta es una aplicación web de una sola página (SPA) pensada para planificar y vivir una aventura de cinco días en Disneyland París.  
Está optimizada para móviles, guarda el estado en `localStorage` y **no necesita servidor**: basta con subir los archivos a un repositorio
(GitHub Pages, Netlify, Vercel, etc.) o abrir `index.html` directamente en el navegador.

## Tecnologías

- **Tailwind CSS** vía CDN para estilos.
- **JavaScript** vanilla (sin frameworks).
- **Google Fonts** (Poppins).
- Almacenamiento de estado: `localStorage`.

## Estructura

```
disney-guide/
├── index.html      # Entrada principal
├── styles.css      # Estilos personalizados
├── script.js       # Lógica de la aplicación
└── README.md
```

## Cómo utilizar

1. Descarga el ZIP o clona el repo.
2. Abre `index.html` en tu navegador o despliega en el hosting estático de tu elección.
3. ¡Disfruta y personaliza tu experiencia!

---

**Nota**: Todas las imágenes personalizadas que subas desde la interfaz se guardan únicamente en el `localStorage`
de tu navegador; si cambias de dispositivo o borras la caché, esas imágenes se perderán.
