// Definimos el tiempo de inicio en milisegundos
const myBirthday = new Date('May 30, 2025 00:00:00').getTime()
console.log(myBirthday)

// Definimos el tiempo actual
const now = new Date().getTime()
console.log(now)

// Calculamos la diferencia entre el tiempo de inicio y el tiempo actual
let timeRemaining = myBirthday - now
console.log(timeRemaining)

// Convertimos los milisegundos a segundos 1s = 1000ms
timeRemaining /= 1000
console.log(timeRemaining)

// Calculamos los días restantes
const days = Math.floor(timeRemaining / (60 * 60 * 24))
console.log(days)

// Calculamos las horas restantes
const hours = Math.floor((timeRemaining % (60 * 60 * 24)) / (60 * 60))
console.log(hours)

// Calculamos los minutos restantes
const minutes = Math.floor((timeRemaining % (60 * 60)) / 60)
console.log(minutes)

// Calculamos los segundos restantes
const seconds = Math.floor(timeRemaining % 60)
console.log(seconds)
