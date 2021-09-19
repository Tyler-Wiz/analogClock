const hourHand = document.querySelector('#hours')
const minuteHand = document.querySelector('#minutes')
const secondHand = document.querySelector('#seconds')


setInterval(() => { 
    let day = new Date()
    let hours = day.getHours() * 30
    let minute = day.getMinutes() * 6
    let second = day.getSeconds() * 6

    hourHand.style.transform = `rotate(${hours+(minute/12)}deg)`
    minuteHand.style.transform = `rotate(${minute}deg)`
    secondHand.style.transform = `rotate(${second}deg)`

},)


