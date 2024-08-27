# LA PREUVE
Este proyecto es parte del proceso de selección para la posición de Frontend Developer Specialist en Accenture. A través de este ejercicio técnico, he desarrollado una interfaz web utilizando React.js con el objetivo de demostrar mis habilidades.

## Objetivo
- **Fidelidad al diseño:** la maquetación sigue de manera precisa las especificaciones de [Figma](https://www.figma.com/file/3DExY0CA1hF4kA87Bx2D75/Test-Maquetado?node-id=0%3A1).
- **Responsividad:** el sitio es completamente responsive, adaptándose tanto a dispositivos móviles como a pantallas de escritorio.
- **Código limpio y semántico:** se ha prestado especial atención a mantener el código bien estructurado, con una semántica clara y utilizando convenciones de nombres de clases (BEM).

## Instalación y ejecución local

**1. Clonar el repositorio:**
```bash
git clone https://github.com/mariaflorenciarecio/react-challenge-accenture.git
```

**2. Instalar las dependencias:**
```bash
npm install
```

**3. Iniciar la aplicación:**
```bash
npm start
```

**4. Ver en el navegador:** abrir http://localhost:3000 en el navegador para ver el proyecto. Al realizar cualquier modificación en el código, se hará una recarga mostrando los cambios en vivo.

## Tecnologías utilizadas

- **HTML5:** lenguaje de marcado estándar para la creación de páginas web, utilizado para estructurar y presentar contenido en la web.
- **CSS3:** última versión del lenguaje de hojas de estilo en cascada, utilizado para el diseño y la presentación visual del contenido web.
- **TailwindCSS:** framework de CSS de utilidad que facilita el diseño y estilo de componentes a través de clases predefinidas, permitiendo un desarrollo más rápido y consistente.
- **JavaScript:** lenguaje de programación utilizado para crear interactividad en la web, manipular el DOM y manejar eventos.
- **React:** biblioteca de JavaScript utilizada para construir la interfaz de usuario del proyecto. React permite crear componentes reutilizables y manejar el estado de manera eficiente.
- **npm:** gestor de paquetes para JavaScript que facilita la instalación y gestión de dependencias necesarias para el desarrollo del proyecto.
- **git:** sistema de control de versiones distribuido utilizado para gestionar el código fuente del proyecto, permitiendo trabajar de manera colaborativa y mantener un historial de cambios.

## Adicionales
#### **Cart context**
Proporciona un contexto global accesible desde cualquier componente de la aplicación, permitiendo la interacción con el carrito. Incluye toda la lógica necesaria para agregar, eliminar y mostrar productos en el carrito, así como para calcular la cantidad total de productos y el costo total de la compra.

#### **Header**
- **Menú desplegable:** mediante el botón hamburger menu se puede mostrar y ocultar. Permite una experiencia de usuario más fluida en dispositivos móviles.
- **Enlaces:** la barra de navegación incluye enlaces que permiten moverse entre diferentes secciones del sitio. Cuando un enlace está activo, se resalta en negrita, ayudando a orientarse en el sitio.
- **Cart widget:** permite visualizar la cantidad total de productos en el carrito y dirigirse al mismo (si no hay productos, figura una leyenda).

#### **Footer**
- **Enlaces:** incluye enlaces que permiten moverse entre diferentes secciones del sitio.

#### **Product List Page (PLP)**
- **Filtros dinámicos:** filtra productos por categoría, tamaño y color. Los atributos están ordenados igual que en el Figma, se pueden seleccionar o deseleccionar, ocultar o mostrar mediante un acordeón. Cuando no se encuentra productos que coincidan con la búsqueda, figura una leyenda.
- **Título dinámico:** muestra la categoría filtrada, si no se está filtrando, muestra por defecto "productos".
- **Selector de columnas:** cambia la cantidad de columnas de la grilla de productos (2, 3 y 4 en desktop, 1 y 2 en mobile).
- **Otros:** precio formateado en pesos argentinos, transición para poder ver dos imágenes de cada producto, spinner visible mientras se cargan los productos.

#### **Product Description Page (PDP)**
- **Breadcrumbs:** permiten rastrear y regresar a secciones anteriores del sitio mediante enlaces.
- **Acordeón:** oculta o muestra detalles y beneficios del producto.
contador
- **Contador de unidades:** permite aumentar y disminuir las unidades de un producto y mediante un botón agregarlas al carrito.

#### **Carrito**
- **Productos:** se visualizan los productos agregados al carrito (precio, cantidad, subtotal, cantidad total, total).
- **Eliminar producto y vaciar carrito:** mediante botones se pueden eliminar productos puntuales del carrito o vaciarlo.

#### **Checkout**
- **Formulario:** todos los campos son obligatorios. El número de teléfono y el email deben cumplir con el formato definido por las expresiones regulares telephoneRegex y emailRegex respectivamente. El email debe ser igual al email de confirmación. Cumplidas estas validaciones se habilita el botón finalizar compra.
- **Botón finalizar compra:** genera una orden que incluye los datos del comprador, los ítems del carrito, el precio total y la fecha de la orden. La orden se guarda en Firestore.
- **Modal de confirmación de la orden:** incluye el nombre del comprador, el ID de la orden y un enlace para regresar al inicio del sitio.

#### **Página de error**
Figura si se accede a una ruta no válida, mostrando una leyenda y un enlace para volver al inicio del sitio.

#### **Base de datos**
- **Firestore:** base de datos NoSQL en tiempo real proporcionada por Firebase, utilizada para almacenar y consumir información de productos y órdenes. Permite consultar y filtrar productos además de generar IDs únicos para órdenes.

#### **Despliegue**
- **GitHub Pages:** servicio de alojamiento gratuito proporcionado por GitHub, utilizado para desplegar el proyecto y hacerlo accesible en línea.

## Conclusión
Este proyecto ha sido una excelente oportunidad para aplicar mis habilidades en desarrollo frontend, especialmente en la maquetación precisa de interfaces y la creación de experiencias de usuario responsivas.
Estoy entusiasmada por la posibilidad de unirme al equipo de Accenture como Frontend Developer Specialist, donde podré aportar mi experiencia, creatividad y pasión por el desarrollo web. Estoy convencida de que mi enfoque orientado al detalle y mi capacidad para resolver problemas serán valiosos para afrontar los desafíos que esta posición requiere.

## Contacto
Para obtener más información sobre mi perfil profesional y proyectos previos, no dudes en contactarme a través de LinkedIn o explorar más de mis trabajos en GitHub.

- **Frontend Developer:** María Florencia Recio
- **LinkedIn:** [https://www.linkedin.com/in/mariaflorenciarecio](https://www.linkedin.com/in/mariaflorenciarecio)
- **GitHub:** [https://github.com/mariaflorenciarecio](https://github.com/mariaflorenciarecio)