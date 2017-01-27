import { addChildApplication, start } from "./director.js"

start()

addChildApplication('Menu', 'menu', 'menu', '/apps/Menu/workings.js')
