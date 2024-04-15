setInterval(setClock, 1000)


const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
    const currentTime = new Date()
    const secondsRatio = currentTime.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentTime.getMinutes()) / 60
    const hourRatio = (minutesRatio + currentTime.getHours()) / 12

    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hourRatio)
}

function setRotation(element, rotationAmount) {
    element.style.setProperty('--rotation', rotationAmount * 360)
}

setClock()
