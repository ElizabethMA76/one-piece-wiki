## API externa de One Piece

### Decisión

Evaluar el consumo de una API pública de One Piece para obtener información real de personajes.

### Justificación

Se realizó una prueba con el endpoint de búsqueda de personajes de `api.api-onepiece.com`, confirmando que la API puede consumirse desde el navegador sin bloqueo por CORS.

Esto permite considerar una futura integración con datos reales, evitando la carga manual de información y reduciendo retrabajo.

### Resultado de la prueba

La API respondió correctamente y los datos fueron normalizados al formato utilizado por la aplicación.

### Decisión actual

Mantener temporalmente `characters.json` como fuente local para continuar el desarrollo de la interfaz, y preparar la integración progresiva con la API externa en una etapa posterior.