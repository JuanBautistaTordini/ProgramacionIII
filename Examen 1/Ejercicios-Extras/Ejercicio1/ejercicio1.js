        // Obtenemos los elementos del DOM
        const minutos = document.getElementById('minutos');
        const segundos = document.getElementById('segundos');
        const centesimas = document.getElementById('centesimas');
        const iniciar = document.getElementById('iniciar');
        const pausar = document.getElementById('pausar');
        const resetear = document.getElementById('resetear');
        
        // controlar el cronómetro
        let intervalId = null; // ID del intervalo
        let min = 0;
        let seg = 0;
        let cent = 0;
        let corriendo = false; // siempre inicia en false
        
        // Función para formatear números menores a 10 (añadir un cero delante)
        function formatearNumero(numero) {
            return numero < 10 ? '0' + numero : numero;
        }
        
        // Función para actualizar la visualización del cronómetro
        function actualizarCronometro() {
            // Incrementamos las centésimas
            cent++;
            
            // Si las centésimas llegan a 100, incrementamos los segundos
            if (cent === 100) {
                cent = 0;
                seg++;
                
                // Si los segundos llegan a 60, incrementamos los minutos
                if (seg === 60) {
                    seg = 0;
                    min++;
                }
            }
            
            // Actualizamos la visualización con los valores formateados
            // llamamos la funcion formatear numero + el parametro cent, seg, min
            centesimas.textContent = formatearNumero(cent);
            segundos.textContent = formatearNumero(seg);
            minutos.textContent = formatearNumero(min);
        }
        
        // Función para iniciar el cronómetro
        function iniciarCronometro() {
            // Solo iniciamos si no está corriendo ya
            if (!corriendo) {
                // Establecemos un intervalo que se ejecuta cada 10 milisegundos (1 centésima)
                intervalId = setInterval(actualizarCronometro, 10);
                corriendo = true;
            }
        }
        
        // Función para pausar el cronómetro
        function pausarCronometro() {
            // Detenemos el intervalo y marcamos como no corriendo
            clearInterval(intervalId);
            corriendo = false;
        }
        
        // Función para resetear el cronómetro
        function resetearCronometro() {
            // Detenemos el intervalo
            clearInterval(intervalId);
            
            // Reiniciamos las variables
            min = 0;
            seg = 0;
            cent = 0;
            corriendo = false;
            
            // Actualizamos la visualización
            centesimas.textContent = '00';
            segundos.textContent = '00';
            minutos.textContent = '00';
        }
        
        // Asignamos los eventos a los botones
        iniciar.addEventListener('click', iniciarCronometro);
        pausar.addEventListener('click', pausarCronometro);
        resetear.addEventListener('click', resetearCronometro);