# Instrucciones para Añadir Screenshots

Para añadir capturas de pantalla de tus proyectos al portafolio, sigue estos pasos:

## 1. Crear el directorio de screenshots

```bash
mkdir screenshots
```

## 2. Tomar capturas de pantalla de tus proyectos

Visita cada uno de tus proyectos y toma capturas de pantalla. Dimensiones recomendadas:

- **Proyecto destacado (Clínica Cultural)**: 1200x600px
- **Proyectos regulares**: 800x450px

## 3. Nombrar los archivos

Guarda las capturas con estos nombres exactos:

- `clinica-cultural.jpg` - Clínica Cultural y Lingüística
- `literatura-espanola.jpg` - Literatura Española
- `produccion-oral.jpg` - Producción e Interacción Oral
- `curso-intensivo.jpg` - Curso Intensivo
- `ugt-clm.jpg` - UGT-CLM Granada
- `olvidos-granada.jpg` - Olvidos de Granada

## 4. Optimizar las imágenes

Antes de subirlas, optimiza las imágenes para web:

- Formato: JPG o WebP
- Calidad: 80-85%
- Herramientas recomendadas:
  - [TinyPNG](https://tinypng.com/)
  - [Squoosh](https://squoosh.app/)
  - ImageOptim (Mac)

## 5. Copiar al directorio screenshots

```bash
cp tu-captura.jpg screenshots/clinica-cultural.jpg
# Repite para cada imagen
```

## 6. Imagen para Open Graph (redes sociales)

Crea una imagen destacada para cuando compartas el portafolio en redes sociales:

- Nombre: `og-image.jpg`
- Dimensiones: 1200x630px
- Coloca en la raíz del proyecto
- Incluye tu nombre y título

## 7. Resultado

Una vez añadidas las imágenes:

- Las imágenes aparecerán automáticamente en las tarjetas de proyectos
- Los placeholders desaparecerán
- Al hacer hover, las imágenes tendrán un efecto de zoom
- Si una imagen falla al cargar, se mostrará el placeholder con el icono

## Placeholders actuales

Mientras no añadas las imágenes, se mostrarán placeholders con:
- Gradientes de color
- Iconos representativos de cada proyecto
- Texto "Screenshot disponible próximamente" (solo en proyecto destacado)

## Notas

- Los archivos deben estar en formato `.jpg` o `.png`
- Si usas otro formato, actualiza las extensiones en `index.html`
- Las imágenes usan `loading="lazy"` para mejor performance
