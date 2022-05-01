const canvas = document.getElementById('canvas')
const reset = document.getElementById('resetear')

const dif = canvas.getBoundingClientRect()

const context = canvas.getContext("2d")

let painting, color, lineWidth, difX, difY;

canvas.addEventListener('mousedown', e => {
    difX = e.clientX - dif.left
    difY = e.clientY - dif.top
    painting = true
    color = document.getElementById('color').value
    lineWidth = document.getElementById('lw').value
})

canvas.addEventListener('mousemove', e => {
    if (painting) {
        let newDifX = e.clientX - dif.left
        let newDifY = e.clientY - dif.top
        dibujar(difX, difY, newDifX, newDifY)
        difX = e.clientX - difX.left
        difY = e.clientY - difY.top
    }
})

canvas.addEventListener('mouseup', () => {
    painting = false
    context.closePath()
    context.beginPath()
})

reset.addEventListener('click', () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
})

const dibujar = (x1, y1, x2, y2) => {
    context.strokeStyle = color
    context.lineWidth = lineWidth
    context.moveTo(x1, y1)
    context.lineTo(x2, y2)
    context.stroke()

}