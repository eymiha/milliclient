import { addChildApplication } from "../director.js"
import vis from "vis"

let app = {}

export function bootstrap() {
  return new Promise((resolve, reject) => {
    console.log(`${app.name} is bootstrapped`)
    resolve()
  })
}

export function mount() {
  return new Promise((resolve, reject) => {
    console.log(`${app.name} is mounted`)
    let graph = app.context.getGraph()
    let options = {
      nodes: { widthConstraint: { maximum: 150 }, shape: "box" },
      edges: { arrows: { to : true}, length: 50, color: "#ffffff" },
      physics: { barnesHut: { gravitationalConstant: -10000 } }
    }
    app.network = new vis.Network($("#teamview")[0], graph.data, options)
    resolve(app)
  })
}

export function unmount() {
  return new Promise((resolve, reject) => {
    console.log(`${app.name} is unmounted`)
    resolve()
  })
}

export function unload() {
  return new Promise((resolve, reject) => {
    console.log(`${app.name} is unloaded`)
    resolve()
  })
}

export function loadApp(name, id) {
  console.log([name, id])
  return new Promise((resolve, reject) => {
    app.name = name
    app.id = id
    console.log(`${app.name} is loaded`)
    resolve(app)
  })
}

app.setContext = (context) => {
  app.context = context
}

app.fit = () => {
  app.network.fit()
}
