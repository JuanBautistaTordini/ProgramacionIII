// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos del DOM
    const btnNegrita = document.getElementById('btn-negrita');
    const btnCursiva = document.getElementById('btn-cursiva');
    const btnSubrayado = document.getElementById('btn-subrayado');
    const colorTexto = document.getElementById('color-texto');
    const tamanoFuente = document.getElementById('tamano-fuente');
    const selectorFuente = document.getElementById('selector-fuente');
    const editor = document.getElementById('editor');
    
    // Variables para controlar el estado de los botones de formato
    let negritaActivo = false;
    let cursivaActivo = false;
    let subrayadoActivo = false;
    
    // Función para aplicar negrita al texto
    btnNegrita.addEventListener('click', function() {
        // Cambiar el estado del botón
        negritaActivo = !negritaActivo;
        
        // Aplicar o quitar la negrita según el estado
        if (negritaActivo) {
            btnNegrita.style.backgroundColor = '#d0d4da';
            editor.style.fontWeight = 'bold';
        } else {
            btnNegrita.style.backgroundColor = '#ffffff';
            editor.style.fontWeight = 'normal';
        }
        
        // Mantener el foco en el editor
        editor.focus();
    });
    
    // Función para aplicar cursiva al texto
    btnCursiva.addEventListener('click', function() {
        // Cambiar el estado del botón
        cursivaActivo = !cursivaActivo;
        
        // Aplicar o quitar la cursiva según el estado
        if (cursivaActivo) {
            btnCursiva.style.backgroundColor = '#d0d4da';
            editor.style.fontStyle = 'italic';
        } else {
            btnCursiva.style.backgroundColor = '#ffffff';
            editor.style.fontStyle = 'normal';
        }
        
        // Mantener el foco en el editor
        editor.focus();
    });
    
    // Función para aplicar subrayado al texto
    btnSubrayado.addEventListener('click', function() {
        // Cambiar el estado del botón
        subrayadoActivo = !subrayadoActivo;
        
        // Aplicar o quitar el subrayado según el estado
        if (subrayadoActivo) {
            btnSubrayado.style.backgroundColor = '#d0d4da';
            editor.style.textDecoration = 'underline';
        } else {
            btnSubrayado.style.backgroundColor = '#ffffff';
            editor.style.textDecoration = 'none';
        }
        
        // Mantener el foco en el editor
        editor.focus();
    });
    
    // Función para cambiar el color del texto
    colorTexto.addEventListener('input', function() {
        // Obtener el valor del color seleccionado
        const color = colorTexto.value;
        
        // Aplicar el color al texto
        editor.style.color = color;
        
        // Mantener el foco en el editor
        editor.focus();
    });
    
    // Función para cambiar el tamaño de la fuente
    tamanoFuente.addEventListener('input', function() {
        // Obtener el valor del tamaño seleccionado
        const tamano = tamanoFuente.value;
        
        // Aplicar el tamaño al texto (asegurarse de que sea un número válido)
        if (tamano >= 8 && tamano <= 72) {
            editor.style.fontSize = tamano + 'px';
        }
        
        // Mantener el foco en el editor
        editor.focus();
    });
    
    // Función para cambiar la fuente del texto
    selectorFuente.addEventListener('change', function() {
        // Obtener el valor de la fuente seleccionada
        const fuente = selectorFuente.value;
        
        // Aplicar la fuente al texto
        editor.style.fontFamily = fuente;
        
        // Mantener el foco en el editor
        editor.focus();
    });
    
    // Inicializar el editor con los valores predeterminados
    editor.style.fontSize = tamanoFuente.value + 'px';
    editor.style.color = colorTexto.value;
    editor.style.fontFamily = selectorFuente.value;
});