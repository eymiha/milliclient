import { addChildApplication, start } from "./director"

start()

addChildApplication('menu', '/apps/menuApp.js')
