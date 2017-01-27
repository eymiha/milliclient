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
    $(`#${app.id}`).html("Menu")
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
