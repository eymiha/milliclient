import { addChildApplication, start } from "./director.js"

start()

addChildApplication('menu', 'menu', '/apps/Menu/workings.js')
