
const renderJournalEntries = (entries) => {
      let selectDOM = document.querySelector(".entryLog")
      // select the DOM and add the create Journal 
      for (let i = 0; i < entries.length; i++) {
      selectDOM.innerHTML += createJournalEntry(entries[i])
    } 
}