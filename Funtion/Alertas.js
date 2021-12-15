
/* Mensaje de bienvenida */
Swal.fire({
    title: "Bienvenido",
    text: "Espero encuentres lo que estas buscando", 
    //html:  //Podemos poner cualquier  cosa e incluso añadir clases
    //icon: 'info', //warning, error, info, question 
    confirmButtonText: 'Aceptar',
    with: '80%', 
    padding: '1em',
    //grow: column, row, fullscreen
    backdrop: true, 
    timer: 4000, 
    timerProgressBar: true, 
    position: 'center' ,
    showCloseButton: true, 
    allowOutsideClick: false, //no permitie dar clic fuera de la alerta
    allowEscapeKey: false, 
    allowEnterKey: false,
    stopKeydownPropagation: false, //detener comando de fondo

}); 

function Cesta() {
    Swal.fire({
        title: "Completado",
        text: "El producto se añadió a la cesta", 
        //html:  //Podemos poner cualquier  cosa e incluso añadir clases
        icon: 'success', //warning, error, info, question 
        confirmButtonText: 'Aceptar',
        with: '80%', 
        padding: '1em',
        //grow: column, row, fullscreen
        backdrop: true,  
        timerProgressBar: true, 
        position: 'center' ,
        
        allowOutsideClick: false, //no permitie dar clic fuera de la alerta
        allowEscapeKey: false, 
        allowEnterKey: false,
        stopKeydownPropagation: false, //detener comando de fondo
        
        showCloseButton: true, 
        showCancelButton: true,
        cancelButtonText: 'Cancelar'
    }); 
}

function Garantia() {
    Swal.fire({
        title: "Garantías",
        text: "El producto se añadió a la cesta", 
        html: '<h3>No gastar, invertir</h3> <p>Cualquiera de los servicios que ofrecemos están destinados a crear un diseño profesional adaptado a cada cliente. El resultado es un acabado profesional, que genera valor de marca y confianza.</p> <h3>Compromiso total</h3> <p>Cada proyecto es único y por ello desarrollamos un brainstorming para generar ideas novedosas e innovadoras. Gracias a esta parte del proceso conseguimos un trabajo innovador y creativo.</p> <h3>Plazos de entrega</h3><p>Cada proyecto tiene unos plazos que siempre cumplimos, por muy complejo que resulte, superamos todas las etapas en el tiempo estimado. Incluso si tiene proyectos urgentes sin tiempo para un desarrollo normal.</p> <h3>Total disponibilidad</h3> <p>Estaremos encantados de atenderle para hablar sobre proyectos en desarrollo, abordar nuevos, solventar dudas o asesorarle sobre cualquier asunto relacionado con diseño aplicado a su negocio.</p>', 
        confirmButtonText: 'Aceptar',
        with: '80%', 
        padding: '1em',
        grow: 'column',
        backdrop: true,  
        timerProgressBar: true, 
        position: 'center' ,
        
        allowOutsideClick: false, //no permitie dar clic fuera de la alerta
        allowEscapeKey: false, 
        allowEnterKey: false,
        stopKeydownPropagation: false, //detener comando de fondo
        showCloseButton: true,  

        customClass: {
            content: 'textoGarantia'
        }
    }); 
}

function Artpopu() {
    Swal.fire({
        title: "Articulo popular",
        text: "El producto se añadió a la cesta", 
        html: '<img src="Images/Folletos.jpeg" alt="" class="imagenArtpopu"> <p>Diseño de folletos',
        confirmButtonText: 'Aceptar',
        with: '80%',  
        grow: 'fullscreen',
        backdrop: true,  
        timerProgressBar: true, 
        position: 'center' ,

        //imageUrl: 'Images/Folletos.jpeg',
        
        allowOutsideClick: false, //no permitie dar clic fuera de la alerta
        allowEscapeKey: false, 
        allowEnterKey: false,
        stopKeydownPropagation: false, //detener comando de fondo
        showCloseButton: true,  

        customClass: {
            content: 'artpopu'
        }
    }); 
}