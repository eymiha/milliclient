import * as sspa from "single-spa"

let apps = []

function addChildApplication(app, name, id, appjs) {
  console.log(require)
  System.import(appjs).then((child) => {
    console.log(child)
    child.loadApp(name, id).then((appInstance) => {
      console.log(appInstance)
      console.log(sspa)
      apps.push(name, { app: appInstance, id: id })
      sspa.declareChildApplication(
        name,
        () => {
          console.log(`#${id} loading function called`)
          return new Promise((resolve, reject) => {
            resolve(child)
          })
        },
        () => {
          console.log(`#${id} activity function called`)
          return document.getElementById(id) != null
        }
      )
    })
  })
}

function start() {
  sspa.start()
}

export { start, addChildApplication }
