
// Alerta de anuncio 
Swal.fire({
    html: 'Acepta nuestros términos y condiciones', 
    confirmButtonText: 'Acepto', 
    icon: 'info', 
    padding: '1em', 
    width: '100%',
    grow: 'row', 
    backdrop: true, 
    toast: true, 
    position: 'bottom', 
    allowOutsideClick: false, 
    allowEscapeKey: false, 
    stopKeydownPropagation: false, 

    showConfirmButton: true, 
    showCancelButton: false, 
    showCloseButton: false, 
    closeButtonArialLabel: 'Cerrar alerta', 

    /*Dar separacion a los términos */
    customClass: {
        content: 'content-class'
    }
}); 
