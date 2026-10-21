/* ==========================================================================
   1. CONFIGURACIÓN GENERAL DE LA FLORERÍA (MODIFICA TUS DATOS AQUÍ)
   ========================================================================== */
const CONFIG = {
    telefonoWhatsApp: "5219621927066",
    
    telefonoLlamada: "962 192 7066",
    
    enlaceGoogleMaps: "https://maps.app.goo.gl/8drNz4RexMnGVuzY7",
    
    // Dirección escrita que aparece en la página
    direccionTexto: "9a Sur Par vial. Santa Rosa. 30795. Tapachula, Chiapas Mexico, Santa Rosa, 30795 Tapachula de Córdova y Ordóñez, Chis."
};


/* ==========================================================================
   2. CATÁLOGO DE 30 RAMOS (AQUÍ PUEDES CAMBIAR FOTOS, PRECIOS Y TEXTOS)
   ========================================================================== */
const catalogoFlores = [
    // --- CATEGORÍA: AMOR Y ANIVERSARIO (1 al 6) ---
    {
        id: 1,
        nombre: "Ramo Clásico Pasión",
        precio: 450,
        categoria: "amor",
        etiqueta: "Más vendido",
        imagen: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&w=600&q=80",
        flores: ["12 Rosas rojas de invernadero", "Nube blanca (Gypsophila)", "Follaje de eucalipto", "Envoltura coreana impermeable"],
        descripcion: "El clásico infalible para expresar amor profundo. Doce rosas rojas seleccionadas a mano, acompañadas de nube fresca y papel coreano con moño de listón satinado."
    },
    {
        id: 2,
        nombre: "Suspiro Rosa",
        precio: 520,
        categoria: "amor",
        etiqueta: "Romántico",
        imagen: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=600&q=80",
        flores: ["15 Rosas rosa pastel", "Astromelias blancas", "Eucalipto dólar", "Moño de seda"],
        descripcion: "Un ramo tierno y delicado en tonos pastel, ideal para aniversarios, citas especiales o para sorprender a tu pareja en un día inesperado."
    },
    {
        id: 3,
        nombre: "Amor Eterno en Caja",
        precio: 680,
        categoria: "amor",
        etiqueta: "Especial",
        imagen: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=600&q=80",
        flores: ["18 Rosas rojas y blancas", "3 Chocolates Ferrero Rocher", "Caja cilíndrica de lujo", "Espuma floral hidratada"],
        descripcion: "Elegante arreglo en caja rígida que no necesita florero. Combina la dulzura de los chocolates con rosas frescas de larga duración."
    },
    {
        id: 4,
        nombre: "Dulce Encanto",
        precio: 390,
        categoria: "amor",
        etiqueta: "",
        imagen: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=600&q=80",
        flores: ["8 Rosas fiusha", "4 Claveles rosados", "Margaritas blancas", "Papel kraft decorado"],
        descripcion: "Un detalle fresco, juvenil y accesible con una combinación vibrante de aromas y tonos rosados."
    },
    {
        id: 5,
        nombre: "Corazón de Terciopelo",
        precio: 850,
        categoria: "amor",
        etiqueta: "Premium",
        imagen: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&w=600&q=80",
        flores: ["24 Rosas rojas exportación", "Lirios blancos aromáticos", "Follaje ruscus", "Envoltura negra con dorado"],
        descripcion: "Dos docenas de rosas rojas de tallo largo combinadas con el perfume natural de los lirios. Presentación sumamente elegante."
    },
    {
        id: 6,
        nombre: "Brisa de Amor",
        precio: 480,
        categoria: "amor",
        etiqueta: "",
        imagen: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=600&q=80",
        flores: ["10 Rosas blancas", "6 Rosas color durazno", "Eucalipto fresco", "Papel tono perla"],
        descripcion: "Combinación suave y luminosa que transmite paz, cariño sincero y admiración. Ideal para celebrar meses de noviazgo."
    },

    // --- CATEGORÍA: CUMPLEAÑOS (7 al 12) ---
    {
        id: 7,
        nombre: "Fiesta de Colores",
        precio: 490,
        categoria: "cumpleanos",
        etiqueta: "Popular",
        imagen: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80",
        flores: ["6 Gerberas multicolores", "6 Rosas de colores", "Astromelias", "Follaje verde fresco"],
        descripcion: "Un ramo lleno de vida y energía para desear un feliz cumpleaños. Sus colores alegres iluminan cualquier habitación."
    },
    {
        id: 8,
        nombre: "Alegría Primaveral",
        precio: 420,
        categoria: "cumpleanos",
        etiqueta: "",
        imagen: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80",
        flores: ["Margaritas amarillas y blancas", "5 Rosas naranjas", "Solidago", "Envoltura amarilla pastel"],
        descripcion: "Fresco como una mañana de primavera. Excelente opción para felicitar a una amiga, mamá o compañera de trabajo."
    },
    {
        id: 9,
        nombre: "Sorpresa de Cumpleaños",
        precio: 650,
        categoria: "cumpleanos",
        etiqueta: "Con Globo",
        imagen: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=600&q=80",
        flores: ["12 Rosas combinadas", "3 Lirios Stargazer", "Globo metálico de Feliz Cumpleaños", "Base de madera"],
        descripcion: "Arreglo completo listo para festejar. Incluye globo metálico de cumpleaños y flores aromáticas en base decorativa."
    },
    {
        id: 10,
        nombre: "Jardín Secreto",
        precio: 550,
        categoria: "cumpleanos",
        etiqueta: "",
        imagen: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=600&q=80",
        flores: ["Hortensia azul/rosa", "8 Rosas pastel", "Lisianthus morado", "Eucalipto"],
        descripcion: "Diseño estilo jardín europeo con texturas variadas y flores finas de excelente duración."
    },
    {
        id: 11,
        nombre: "Ramo Dulce Festejo",
        precio: 380,
        categoria: "cumpleanos",
        etiqueta: "Económico",
        imagen: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=600&q=80",
        flores: ["6 Rosas rosas", "Nube abundante", "Mariposas decorativas", "Papel coreano bicolor"],
        descripcion: "Un detalle hermoso y económico con mariposas decorativas que le dan un toque mágico de cumpleaños."
    },
    {
        id: 12,
        nombre: "Canasta Reina del Día",
        precio: 790,
        categoria: "cumpleanos",
        etiqueta: "Para Mamá",
        imagen: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=600&q=80",
        flores: ["15 Rosas seleccionadas", "4 Gerberas", "Lirios orientales", "Canasta artesanal tejida"],
        descripcion: "Presentado en una hermosa canasta artesanal, este arreglo es el favorito para consentir a mamá o a la abuela en su día."
    },

    // --- CATEGORÍA: RAMOS BUCHONES (13 al 18) ---
    {
        id: 13,
        nombre: "Ramo Buchón 50 Rosas",
        precio: 1350,
        categoria: "buchones",
        etiqueta: "Impactante",
        imagen: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=600&q=80",
        flores: ["50 Rosas rojas de invernadero", "Corona dorada decorativa", "Mariposas doradas", "Envoltura coreana de lujo"],
        descripcion: "Ramo de gran tamaño con 50 rosas frescas empacadas en capas de papel coreano importado, corona brillante y listón ancho."
    },
    {
        id: 14,
        nombre: "Ramo Buchón 100 Rosas",
        precio: 2400,
        categoria: "buchones",
        etiqueta: "Más pedido",
        imagen: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&w=600&q=80",
        flores: ["100 Rosas rojas premium", "Corona de reina grande", "Pines de brillantes en las rosas", "Envoltura doble capa"],
        descripcion: "El regalo definitivo para dejar sin palabras. Cien rosas de tallo largo armadas en espiral con acabados de lujo."
    },
    {
        id: 15,
        nombre: "Buchón Rosa Imperial (75 Rosas)",
        precio: 1850,
        categoria: "buchones",
        etiqueta: "Tendencia",
        imagen: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=600&q=80",
        flores: ["75 Rosas en degradado rosa y blanco", "Mariposas 3D", "Corona plateada", "Papel coreano rosa pastel"],
        descripcion: "Un diseño espectacular que combina rosas blancas en el centro y rosas rosadas alrededor con un acabado digno de fotografía."
    },
    {
        id: 16,
        nombre: "Buchón con Girasoles y Rosas",
        precio: 1500,
        categoria: "buchones",
        etiqueta: "Especial",
        imagen: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=600&q=80",
        flores: ["50 Rosas rojas", "5 Girasoles gigantes al centro", "Follaje fino", "Envoltura negra elegante"],
        descripcion: "La combinación perfecta entre la pasión de las rosas rojas y la luz de los girasoles en formato gigante."
    },
    {
        id: 17,
        nombre: "Buchón Blanco Pureza (60 Rosas)",
        precio: 1550,
        categoria: "buchones",
        etiqueta: "",
        imagen: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=600&q=80",
        flores: ["60 Rosas blancas nieve", "Gypsophila alrededor", "Listón dorado", "Papel blanco nacarado"],
        descripcion: "Sumamente distinguido y luminoso. Ideal para pedidas de mano, aniversarios de bodas o graduaciones."
    },
    {
        id: 18,
        nombre: "Mega Ramo 150 Rosas",
        precio: 3500,
        categoria: "buchones",
        etiqueta: "Sobre pedido",
        imagen: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=600&q=80",
        flores: ["150 Rosas seleccionadas", "Iniciales formadas con rosas de otro color", "Corona y mariposas", "Cinta personalizada"],
        descripcion: "Personalizado con la inicial de esa persona especial formada en el centro del ramo con rosas contrastantes."
    },

    // --- CATEGORÍA: GIRASOLES Y TULIPANES (19 al 24) ---
    {
        id: 19,
        nombre: "Luz de Sol (5 Girasoles)",
        precio: 460,
        categoria: "especiales",
        etiqueta: "Favorito",
        imagen: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=600&q=80",
        flores: ["5 Girasoles grandes", "Nube blanca", "Eucalipto", "Papel estilo rústico kraft"],
        descripcion: "Cinco girasoles radiantes de centro oscuro y pétalos vibrantes. Perfecto para transmitir alegría, éxito y buenos deseos."
    },
    {
        id: 20,
        nombre: "Dúo Girasoles y Rosas",
        precio: 540,
        categoria: "especiales",
        etiqueta: "Más vendido",
        imagen: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80",
        flores: ["3 Girasoles grandes", "10 Rosas rojas o rosas", "Astromelias", "Envoltura negra o beige"],
        descripcion: "Uno de los ramos más solicitados porque une las dos flores favoritas en un solo diseño equilibrado."
    },
    {
        id: 21,
        nombre: "Encanto de Tulipanes (10 tallos)",
        precio: 890,
        categoria: "especiales",
        etiqueta: "De temporada",
        imagen: "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=600&q=80",
        flores: ["10 Tulipanes holandeses frescos", "Follaje fino", "Envoltura coreana minimalista", "Sobre hidratante"],
        descripcion: "Tulipanes importados de corte fresco. Puedes consultar disponibilidad en color rojo, rosa, amarillo, blanco o morado."
    },
    {
        id: 22,
        nombre: "Ramo 10 Girasoles Radiantes",
        precio: 780,
        categoria: "especiales",
        etiqueta: "",
        imagen: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=600&q=80",
        flores: ["10 Girasoles de primera calidad", "Solidago amarillo", "Follaje verde", "Moño de yute natural"],
        descripcion: "Un ramo abundante y lleno de energía solar. Ideal para graduaciones, logros profesionales o amantes de los girasoles."
    },
    {
        id: 23,
        nombre: "Florero de Tulipanes y Lirios",
        precio: 950,
        categoria: "especiales",
        etiqueta: "Elegante",
        imagen: "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=600&q=80",
        flores: ["8 Tulipanes", "3 Lirios aromáticos", "Florero de vidrio incluido", "Piedra decorativa"],
        descripcion: "Listo para colocarse en casa o en la oficina gracias a su florero de cristal transparente."
    },
    {
        id: 24,
        nombre: "Detalle Mini Girasol",
        precio: 250,
        categoria: "especiales",
        etiqueta: "Económico",
        imagen: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80",
        flores: ["2 Girasoles grandes", "3 Rosas", "Nube blanca", "Envoltura decorativa"],
        descripcion: "Un detalle accesible pero muy vistoso para sorprender sin motivo o acompañar un regalo."
    },

    // --- CATEGORÍA: CONDOLENCIAS (25 al 30) ---
    {
        id: 25,
        nombre: "Corona Fúnebre Paz Blanca",
        precio: 1100,
        categoria: "condolencias",
        etiqueta: "Con listón impreso",
        imagen: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=600&q=80",
        flores: ["Rosas blancas", "Crisantemos y polaris", "Lirios blancos", "Tripié de madera y listón con nombre"],
        descripcion: "Corona tradicional en tonos blancos que expresa respeto y acompañamiento. Incluye caballete y banda impresa con dedicatoria."
    },
    {
        id: 26,
        nombre: "Arreglo de Condolencias Serenidad",
        precio: 650,
        categoria: "condolencias",
        etiqueta: "",
        imagen: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&w=600&q=80",
        flores: ["12 Rosas blancas", "Lirios Casablanca", "Gladiolas blancas", "Base blanca con espuma floral"],
        descripcion: "Arreglo vertical sobrio y elegante para enviar a capilla o domicilio familiar."
    },
    {
        id: 27,
        nombre: "Cruz Floral de Luz",
        precio: 980,
        categoria: "condolencias",
        etiqueta: "Solemne",
        imagen: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=600&q=80",
        flores: ["Claveles y crisantemos blancos", "Centro de rosas blancas", "Follaje fino", "Pedestal incluido"],
        descripcion: "Cruz elaborada completamente con flor natural fresca y centro de rosas, símbolo de fe y consuelo."
    },
    {
        id: 28,
        nombre: "Ramo de Condolencias Respeto",
        precio: 420,
        categoria: "condolencias",
        etiqueta: "",
        imagen: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&w=600&q=80",
        flores: ["10 Rosas blancas", "4 Lirios blancos", "Eucalipto", "Envoltura blanca con listón"],
        descripcion: "Ramo de mano discreto y respetuoso para llevar personalmente a servicios funerarios o misas."
    },
    {
        id: 29,
        nombre: "Cubre Ataúd Imperial",
        precio: 1600,
        categoria: "condolencias",
        etiqueta: "Especial",
        imagen: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=600&q=80",
        flores: ["36 Rosas blancas", "Lirios orientales", "Nube y follaje selecto", "Base alargada hidratada"],
        descripcion: "Arreglo horizontal de gran presencia diseñado con flores blancas de primera calidad."
    },
    {
        id: 30,
        nombre: "Florero Homenaje en Casa",
        precio: 580,
        categoria: "condolencias",
        etiqueta: "",
        imagen: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&w=600&q=80",
        flores: ["Rosas blancas", "Lisianthus blanco", "Astromelias", "Florero de cerámica o vidrio"],
        descripcion: "Pensado para enviar a casa de la familia como muestra de cariño, apoyo y solidaridad."
    }
];


/* ==========================================================================
   3. LÓGICA DEL CATÁLOGO, FILTROS, VENTANA EMERGENTE Y ENLACES
   ========================================================================== */
const gridCatalogo = document.getElementById("catalogo-grid");
const botonesFiltro = document.querySelectorAll(".btn-filtro");
const modal = document.getElementById("modal-ramo");
const btnCerrarModal = document.getElementById("cerrar-modal");

// Nombres legibles para las categorías
const nombresCategorias = {
    amor: "Amor y Aniversario",
    cumpleanos: "Cumpleaños",
    buchones: "Ramos Buchones",
    especiales: "Girasoles y Tulipanes",
    condolencias: "Condolencias"
};

// Función para dibujar las tarjetas de flores en la pantalla
function mostrarRamos(listaRamos) {
    gridCatalogo.innerHTML = "";

    listaRamos.forEach((ramo) => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "tarjeta-ramo";

        // Si el ramo tiene etiqueta (ej. "Más vendido"), la muestra; si no, no pone nada
        const etiquetaHTML = ramo.etiqueta 
            ? `<span class="etiqueta-ramo">${ramo.etiqueta}</span>` 
            : "";

        tarjeta.innerHTML = `
            <div class="tarjeta-img-caja">
                ${etiquetaHTML}
                <img src="${ramo.imagen}" alt="${ramo.nombre}" loading="lazy">
            </div>
            <div class="tarjeta-cuerpo">
                <div>
                    <h3 class="tarjeta-titulo">${ramo.nombre}</h3>
                    <p class="tarjeta-resumen">${ramo.descripcion}</p>
                </div>
                <div class="tarjeta-pie">
                    <span class="tarjeta-precio">$${ramo.precio} MXN</span>
                    <button class="btn-ver-mas">Ver flores y detalles</button>
                </div>
            </div>
        `;

        // Al hacer clic en cualquier parte de la tarjeta, se abre la ventana con su info
        tarjeta.addEventListener("click", () => abrirModal(ramo));
        gridCatalogo.appendChild(tarjeta);
    });

    activarAnimacionScroll();
}

// Función para abrir la ventana emergente con los datos del ramo seleccionado
function abrirModal(ramo) {
    document.getElementById("modal-img").src = ramo.imagen;
    document.getElementById("modal-img").alt = ramo.nombre;
    document.getElementById("modal-titulo").textContent = ramo.nombre;
    document.getElementById("modal-precio").textContent = `$${ramo.precio} MXN`;
    document.getElementById("modal-descripcion").textContent = ramo.descripcion;
    document.getElementById("modal-categoria").textContent = nombresCategorias[ramo.categoria] || "Catálogo";

    // Etiqueta dentro del modal
    const etiquetaModal = document.getElementById("modal-etiqueta");
    if (ramo.etiqueta) {
        etiquetaModal.textContent = ramo.etiqueta;
        etiquetaModal.style.display = "inline-block";
    } else {
        etiquetaModal.style.display = "none";
    }

    // Llenar la lista de "¿Qué flores incluye?"
    const listaFlores = document.getElementById("modal-flores");
    listaFlores.innerHTML = "";
    ramo.flores.forEach((flor) => {
        const li = document.createElement("li");
        li.textContent = `• ${flor}`;
        listaFlores.appendChild(li);
    });

    // Crear el mensaje automático para WhatsApp con el nombre y precio de este ramo
    const mensaje = `Hola, vi en su catálogo web el *${ramo.nombre}* ($${ramo.precio} MXN) y me gustaría consultar disponibilidad.`;
    const urlWhatsApp = `https://wa.me/${CONFIG.telefonoWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    document.getElementById("modal-btn-whatsapp").href = urlWhatsApp;

    modal.classList.add("activo");
    document.body.style.overflow = "hidden"; // Evita que el fondo se mueva mientras el modal está abierto
}

// Cerrar el modal
function cerrarModal() {
    modal.classList.remove("activo");
    document.body.style.overflow = "auto";
}

btnCerrarModal.addEventListener("click", cerrarModal);
modal.addEventListener("click", (e) => {
    if (e.target === modal) cerrarModal();
});
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") cerrarModal();
});

// Funcionamiento de los botones de filtro por categoría
botonesFiltro.forEach((boton) => {
    boton.addEventListener("click", () => {
        botonesFiltro.forEach((b) => b.classList.remove("activo"));
        boton.classList.add("activo");

        const categoriaSeleccionada = boton.getAttribute("data-categoria");

        if (categoriaSeleccionada === "todos") {
            mostrarRamos(catalogoFlores);
        } else {
            const filtrados = catalogoFlores.filter(
                (ramo) => ramo.categoria === categoriaSeleccionada
            );
            mostrarRamos(filtrados);
        }
    });
});

// Animación suave de aparición al bajar por la página (IntersectionObserver)
function activarAnimacionScroll() {
    const tarjetas = document.querySelectorAll(".tarjeta-ramo");
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada, index) => {
            if (entrada.isIntersecting) {
                setTimeout(() => {
                    entrada.target.classList.add("visible");
                }, (index % 4) * 80);
                observador.unobserve(entrada.target);
            }
        });
    }, { threshold: 0.1 });

    tarjetas.forEach((t) => observador.observe(t));
}

// Configurar todos los botones de WhatsApp, Llamada y Google Maps al iniciar
function inicializarEnlacesContacto() {
    // 1. Botón flotante ("¿Preguntas? Escríbenos acá")
    const msgGeneral = "Hola, vi su página web de la florería y tengo una pregunta.";
    document.getElementById("btn-whatsapp-flotante").href = 
        `https://wa.me/${CONFIG.telefonoWhatsApp}?text=${encodeURIComponent(msgGeneral)}`;

    // 2. Botón de ramo personalizado
    const msgPersonalizado = "Hola, me gustaría cotizar un ramo personalizado con ustedes.";
    document.getElementById("btn-whatsapp-personalizado").href = 
        `https://wa.me/${CONFIG.telefonoWhatsApp}?text=${encodeURIComponent(msgPersonalizado)}`;

    // 3. Botón de Google Maps y Dirección
    document.getElementById("btn-google-maps").href = CONFIG.enlaceGoogleMaps;
    document.getElementById("texto-direccion").textContent = CONFIG.direccionTexto;

    // 4. Botón de llamada telefónica
    const numeroLimpio = CONFIG.telefonoLlamada.replace(/\s+/g, "");
    document.getElementById("btn-llamar").href = `tel:+52${numeroLimpio}`;
    document.getElementById("numero-visible").textContent = CONFIG.telefonoLlamada;
}

// Iniciar todo al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    inicializarEnlacesContacto();
    mostrarRamos(catalogoFlores);
});