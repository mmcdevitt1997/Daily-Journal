import{getData} from "./data.js"
import{renderJournalEntries} from "./entriesDOM.js"
import{eventListener} from "./entryComponent.js"

getData()
.then ((journal) => renderJournalEntries(journal))
eventListener()