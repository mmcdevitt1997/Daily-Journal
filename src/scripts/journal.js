function eventListener() {
    document.querySelector("#saveBtn").addEventListener("click", function () {
        let journalDateValue = document.querySelector("#journalDate").value
        let conceptsCoveredValue = document.querySelector("#conceptsCovered").value
        let journalEntryValue = document.querySelector("#journalEntry").value
        let moodOfDayID = document.getElementById("moodForTheDay")
        let valueMood = moodOfDayID.options[moodOfDayID.selectedIndex].text
        if (journalDateValue == "" || conceptsCoveredValue == "" || journalEntryValue == "") {
            alert("you need to fill out a field")
        }
        const newJournalEntry = journalFactory(journalDateValue, conceptsCoveredValue, journalEntryValue, valueMood)
        postNewJournal(newJournalEntry)
    })
}

function journalFactory(date, concepts, entry, mood) {
    return {
        date: date,
        concept: concepts,
        entry: entry,
        mood: mood
    }
}



// Use `fetch` with the POST method to add your entry to your API

function postNewJournal(newJournalEntry) {
    return fetch("http://localhost:8088/entries", { // Replace "url" with your API's URL
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJournalEntry)
    })
}

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
API.getJournalEntries().then(renderJournalEntries)
eventListener()