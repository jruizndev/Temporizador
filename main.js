// Obtener la referencia al input de fecha
const dateSelect = document.getElementById('dateSelect')

// Obtener la refenrencia al botón de iniciar
const startButton = document.getElementById('startButton')

let isRunning = false // Variable para controlar si el contador está en ejecución

// Función para actualizar el contador
const actualizador = setInterval(function () {
    // Definimos el tiempo de inicio en milisegundos
    const targetDate =
        dateSelect.value && isRunning
            ? new Date(dateSelect.value).getTime()
            : new Date().getTime()

    // Definimos el tiempo actual
    const now = new Date().getTime()

    // Calculamos la diferencia entre el tiempo de inicio y el tiempo actual
    let timeRemaining = targetDate - now

    // Convertimos los milisegundos a segundos 1s = 1000ms
    timeRemaining /= 1000

    // Calculamos los días restantes
    const days = Math.floor(timeRemaining / (60 * 60 * 24))

    // Calculamos las horas restantes
    const hours = Math.floor((timeRemaining % (60 * 60 * 24)) / (60 * 60))

    // Calculamos los minutos restantes
    const minutes = Math.floor((timeRemaining % (60 * 60)) / 60)

    // Calculamos los segundos restantes
    const seconds = Math.floor(timeRemaining % 60)

    // Obtenemos el elemento HTML donde se mostrará el contador
    const timer = document.getElementById('timer')

    // Agregamos los elementos HTML al contenedor
    timer.innerHTML = `
<div>
  <span>${days}</span>
  <span class="text">Días</span>
  </div>
  <div>
  <span>${hours}</span>
  <span class="text">Horas</span>
  </div>
  <div>
  <span>${minutes}</span>
  <span class="text">Minutos</span>
  </div>
  <div>
  <span>${seconds}</span>
  <span class="text">Segundos</span>
  </div>
  `
}, 1000)

// Evento para iniciar el contador
startButton.addEventListener('click', function () {
    if (!dateSelect.value && !isRunning) {
        alert('Por favor, selecciona una fecha')
        return
    }

    isRunning = !isRunning
    startButton.textContent = isRunning ? 'Detener' : 'Iniciar'
    startButton.classList.toggle('active')
    dateSelect.disabled = isRunning
})
