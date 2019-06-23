import{deleteJournal, getData} from "./data.js"


 function createJournalEntry(journal) { 
    let el = document.createElement("div")
    let section = document.createElement("section")
    let btn = document.createElement("button")
    section.innerHTML = `<h2> ${journal.concept} </h2> 
    <section> 
         <article>  
             <p> ${journal.entry} ${journal.mood}  ${journal.date} </p>
          </article> 
    </section>`

  el.appendChild(section)

  btn.setAttribute("id", `${journal.id}`)
  btn.textContent = "delete"
  btn.addEventListener("click", () => {
  let id = event.target.id
    deleteJournal(id)
    .then (data => {
   selectDOM.innerHTML = ""
  getData()
    .then( journal => listJournal(journal))
    })
  })
el.appendChild(btn)
return el

  }
  
  let selectDOM = document.querySelector(".entryLog")

  // Add Lego data to the DOM
function listJournal(journalArr) {
journalArr.forEach( journal => {
    selectDOM.appendChild(createJournalEntry(journal))
  })
}
// Adding the filtering to the radio buttons 

document.getElementsByName("mood").forEach(event => {
  event.addEventListener("click",event => {
    const radioMood = event.target.value 
    console.log (radioMood)
    getData()
    .then(entries => {
      let moodInput = entries.filter(entry => entry.mood === radioMood)
      console.log (moodInput)
     listJournal(moodInput)
    })
  })
})





export{createJournalEntry, selectDOM, listJournal}