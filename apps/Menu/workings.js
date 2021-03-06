import { addChildApplication } from "../director.js"
import _ from "underscore"

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
    $(`#${app.id}`).html("Menu <ul></ul>")
    $(`#${app.id}`).show()
    addChildApplication('IT Applications Team', 'team', '/apps/Team/workings.js').then((item) => {
      app.items.push(item)
      $(`#${app.id} ul`).append(`<li id="${item.id}_item">${item.name}</li>`)
      item.bind(`#${item.id}_item`)
    })
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
    app.items = []
    console.log(`${app.name} is loaded`)
    resolve(app)
  })
}
