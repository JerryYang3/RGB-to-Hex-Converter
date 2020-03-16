// 宣告變數
const redRange = document.getElementById('redRange')
const greenRange = document.getElementById('greenRange')
const blueRange = document.getElementById('blueRange')

const red = document.getElementById('red')
const green = document.getElementById('green')
const blue = document.getElementById('blue')
const label = document.getElementById('label')

let redNum = '00'
let greenNum = '00'
let blueNum = '00'


convert()

// 事件
redRange.addEventListener('mousemove', (event) => {
  let redColor = event.target.value
  red.innerHTML = `${redColor}`
  redNum = Number(redColor).toString(16).padStart(2, '0')
  convert()
})

greenRange.addEventListener('mousemove', (event) => {
  let greenColor = event.target.value
  green.innerHTML = `${greenColor}`
  greenNum = Number(greenColor).toString(16).padStart(2, '0')
  convert()
})

blueRange.addEventListener('mousemove', (event) => {
  let blueColor = event.target.value
  blue.innerHTML = `${blueColor}`
  blueNum = Number(blueColor).toString(16).padStart(2, '0')
  convert()
})

// 函式
function convert() {
  label.innerHTML = `#${redNum}${greenNum}${blueNum}`
  document.body.style.backgroundColor = label.innerText
}

