import { addChildApplication, start } from "./director"

start()

addChildApplication('app1', '/apps/app1.js')
