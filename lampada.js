const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')

const lamp = document.getElementById('lamp')

const verificaLampada = () => {
  return lamp.src.indexOf('quebrada') > -1
}

const lampOn = () => {
  if (!verificaLampada()) {
    lamp.src = './img/ligada.jpg'
  }
}

const lampOff = () => {
  if (!verificaLampada()) {
    lamp.src = './img/desligada.jpg'
  }
}

const lampBk = () => {
  lamp.src = './img/quebrada.jpg'
}
turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBk)
