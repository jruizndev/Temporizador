# Temporizador JavaScript

Un proyecto práctico para aprender JavaScript, enfocado en el uso de operadores y manipulación del DOM a través de la creación de un temporizador interactivo.

## Descripción

Este proyecto fue creado como ejercicio de aprendizaje para comprender mejor:

-   Operadores en JavaScript
-   Manipulación de fechas
-   Eventos y manipulación del DOM
-   Trabajo con intervalos de tiempo

## Funcionalidades

-   Selección de fecha objetivo
-   Cuenta regresiva en tiempo real (días, horas, minutos, segundos)
-   Control de inicio/parada
-   Notificaciones visuales y sonoras
-   Diseño responsive

## Conceptos JavaScript Aplicados

### Operadores Clave

-   División y Módulo para cálculos de tiempo

```javascript
// Convertir a segundos
timeRemaining /= 1000

// Calcular horas, minutos y segundos
const hours = Math.floor((timeRemaining % (60 * 60 * 24)) / (60 * 60))
const minutes = Math.floor((timeRemaining % (60 * 60)) / 60)
const seconds = Math.floor(timeRemaining % 60)
```

-   Operadores lógicos para control

```javascript
// Control del temporizador
if (timeRemaining <= 0 && isRunning) {
    // Lógica de finalización
}
```

## Instalación

1. Clona el repositorio
2. Abre `index.html` en tu navegador

## Estructura

```
temporizador/
├── index.html    # Estructura y elementos HTML
├── styles.css    # Estilos y diseño responsive
├── main.js       # Lógica del temporizador
└── sounds/       # Recursos de audio
```
