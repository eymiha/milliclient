import { addChildApplication } from "../director.js"

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
    resolve()
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

app.bind = (bindPoint) => {
  $(bindPoint).click((event) => {
    if ($("#teamview").length === 0) {
      $("body").append(`<div id="teamview"><div class="vis-network"><canvas></canvas></div></div>`)
      addChildApplication('TeamView', 'teamview', '/apps/Team/view.js', app).
        then((view) => {
          app.view = view
        })
    } else {
      app.view.fit()
    }
  })
}

app.getGraph = () => {
  return {
    data: {
      nodes: [
        { id: 0, label: 'Crossroads IT Applications Service Line' },
        { id: 1, label: 'AMP' },
        { id: 2, label: 'Funtional Falcons' },
        { id: 3, label: 'Loading...' },
        { id: 4, label: 'Scrummy Bears' },
        { id: 5, label: 'Digital Product'},
        { id: 6, label: 'Ample', color: "#ffaaaa" },
        { id: 7, label: 'Analog' },
        { id: 8, label: 'Bearsharktopus' },
      ], edges: [
        { from: 0, to: 1 },
        { from: 0, to: 5 },
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 5, to: 4 },
        { from: 5, to: 6 },
        { from: 5, to: 7 },
        { from: 5, to: 8 },
      ]
    }
  }
}
