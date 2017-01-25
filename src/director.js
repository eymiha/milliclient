import * as sspa from "single-spa"

function addChildApplication(name, appjs) {
  sspa.declareChildApplication(
    name,
    () => System.import(appjs),
    () => window.location.hash === ''
  )
}

function start() {
  sspa.start()
}

export { start, addChildApplication }
