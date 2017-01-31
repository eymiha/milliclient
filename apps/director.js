import * as sspa from "single-spa"

let apps = []

function addChildApplication(name, id, appjs, context) {
  return new Promise((resolve, reject) => {
    System.import(appjs).then((child) => {
      child.loadApp(name, id).then((appInstance) => {
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
        if (context !== undefined) {
          appInstance.setContext(context)
        }
        resolve(appInstance)
      })
    })
  })
}

function start() {
  sspa.start()
}

export { start, addChildApplication }
