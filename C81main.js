canvas= document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
color="red"
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=2
ctx.arc(200,200,40,0,2*Math.PI)
ctx.stroke()

color="yellow"
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=2
ctx.arc(300,200,40,0,2*Math.PI)
ctx.stroke()
function clear_area(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}
color="blue"
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=2
ctx.arc(400,200,40,0,2*Math.PI)
ctx.stroke()

color="green"
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=2
ctx.arc(250,250,40,0,2*Math.PI)
ctx.stroke()

color="black"
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=2
ctx.arc(350,250,40,0,2*Math.PI)
ctx.stroke()

color="red"
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=2
ctx.rect(150,150,350,200)
ctx.stroke()