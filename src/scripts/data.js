
 function getData() {
        return fetch("http://localhost:8088/entries")
            .then(response => response.json())
    }

    function deleteJournal(id) {
        return fetch(`http://localhost:8088/entries/${id}`, {
          method: "DELETE",
          headers:{
            "Content-Type": "application/json"
          }
        })
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
export{getData, postNewJournal, deleteJournal}