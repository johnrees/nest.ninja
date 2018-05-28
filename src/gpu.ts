// https://github.com/gpujs/gpu.js/issues/229#issuecomment-361093612

import GPU from "gpu.js"

const gpu = new GPU()

const render = gpu
  .createKernel(function(x) {
    this.color(x[0], x[1], x[2], 1)
  })
  .setOutput([512, 512])
  .setGraphical(true)

let i = 0.01
const el = document.getElementById("root")

// function draw() {
//   i += 0.01
//   render([0, i, 0])
//   el.innerHTML = render.getCanvas()
// }

// requestAnimationFrame(draw)

render([0, i, 0])
console.log(render.getCanvas())
