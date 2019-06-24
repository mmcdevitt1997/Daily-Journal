export {getData} from "./data.js"
export {listJournal} from "./entriesDOM.js"

let selectDOM = document.querySelector(".entryLog");

// function getAndDisplayJournal(){
//     selectDOM.innerHTML = ""
//     getData()
//     .then (journal => listJournal(journal))
// }

export{selectDOM}