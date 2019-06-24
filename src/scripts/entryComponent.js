import { postNewJournal, getData } from "./data.js";
import { listJournal } from "./entriesDOM.js"
import { selectDOM } from "./helper.js"




function eventListener() {
  document.querySelector("#saveBtn").addEventListener("click", function () {
    // getting the value of the different fields 
    console.log("btn")
    let journalDateValue = document.querySelector("#journalDate").value
    let conceptsCoveredValue = document.querySelector("#conceptsCovered").value
    let journalEntryValue = document.querySelector("#journalEntry").value
    let moodOfDayID = document.getElementById("moodForTheDay")
    let valueMood = moodOfDayID.options[moodOfDayID.selectedIndex].text


    if (journalDateValue == "" || conceptsCoveredValue == "" || journalEntryValue == "") {
      alert("you need to fill out a field")
    }
    // Input journal from the buttons 
    let newJournalEntry = journalFactory(journalDateValue, conceptsCoveredValue, journalEntryValue, valueMood)
    postNewJournal(newJournalEntry)
    getData()
    selectDOM.innerHTML = ""
    getData()
    .then (journal => listJournal(journal))
      })
  }






// the journal factory function 
function journalFactory(date, concepts, entry, mood) {
  return {
    date: date,
    concept: concepts,
    entry: entry,
    mood: mood
  }
}


export { eventListener, journalFactory }

