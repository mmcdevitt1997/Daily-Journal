import{getData} from "./data.js"
import{listJournal} from "./entriesDOM.js"
import{eventListener} from "./entryComponent.js"

getData()
.then (journal => listJournal(journal))
eventListener()
