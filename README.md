# Prueba técnica automatización - SQA

## Objetivo
Esta prueba técnica busca medir las capacidades de automatización de pruebas, de los candidatos.

## Requisitos del Proyecto
- **Url de la página:** https://es.aliexpress.com/
- **Agregar un producto al carro de compras:** Buscar producto desde la barra de búsqueda,escoger cuidad y almacén, agregarlo al carro de compras y seleccionar 3 cantidades. (Debido a que la pagina solo deja añadir solo un producto, se hace la prueba sin seleccionar 3 cantidades.)
- **Añadir a la cesta el producto**
- **Validar el precio del producto**
- **Ir a la cesta**
- **Validar el precio del producto**

# Configuración
- Instalar las dependencias y el nodo de playwright: npm i && npx playwright install --with-deps
    - Solo es necesario ejecutar al actualizar las dependencias **npm i**

# Ejecución de pruebas
- Ejecutar el escenario de prueba. **npx playwright test testSQA.spec.ts --headed --project=chromium**
    - Si está familiarizado con la interfaz de usuario del playwrigth, Ejecutar para iniciar la interfaz de usuario del dramaturgonpm start