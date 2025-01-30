// Obtener la referencia al input de fecha
const dateSelect = document.getElementById('dateSelect')

// Obtener la refenrencia al botón de iniciar
const startButton = document.getElementById('startButton')

// Obtener la referencia al elemento de audio
const timerSound = document.getElementById('timerSound')

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

    // Función para formatear números a dos dígitos
    function padNumber(number) {
        return number.toString().padStart(2, '0')
    }

    // Verificamos si el tiempo restante es menor o igual a cero
    if (timeRemaining <= 0 && isRunning) {
        isRunning = false
        startButton.textContent = 'Iniciar'
        startButton.classList.remove('active')
        dateSelect.disabled = false
        timerSound.play()
    }

    // Agregamos los elementos HTML al contenedor
    timer.innerHTML = `
<div>
  <span>${padNumber(days)}</span>
  <span class="text">Días</span>
  </div>
  <div>
  <span>${padNumber(hours)}</span>
  <span class="text">Horas</span>
  </div>
  <div>
  <span>${padNumber(minutes)}</span>
  <span class="text">Minutos</span>
  </div>
  <div>
  <span>${padNumber(seconds)}</span>
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
