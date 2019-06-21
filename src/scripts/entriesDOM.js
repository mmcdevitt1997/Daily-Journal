import{deleteJournal, getData} from "./data.js"


//  function createJournalEntry(taco) { 
//     return `
//   <h2> ${taco.concept} </h2> 
//   <section> 
//        <article>  
//            <p> ${taco.entry} ${taco.mood}  ${taco.date} </p>
//         </article> 
//   </section>    `
  
//   }



 function createJournalEntry(journal) { 
    let el = document.createElement("div")
    let section = document.createElement("section")
    // let h2 = document.createElement("h2")
    // let article = document.createElement("article")
    // let p = document.createElement("p")
    let btn = document.createElement("button")
    section.innerHTML = `<h2> ${journal.concept} </h2> 
    <section> 
         <article>  
             <p> ${journal.entry} ${journal.mood}  ${journal.date} </p>
          </article> 
    </section>`

  // h2.innerHTML=`${journal.concepts}`
  // p.innerHTML = `${journal.entry} ${journal.mood}  ${journal.date}`
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





export{createJournalEntry, selectDOM, listJournal}