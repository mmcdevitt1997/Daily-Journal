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
    let h2 = document.createElement("h2")
    let article = document.createElement("article")
    let p = document.createElement("p")
    let btn = document.createElement("button")
  h2.innerHTML=`${journal.concepts}`
  p.innerHTML = `${journal.entry} ${journal.mood}  ${journal.date}`
  el.appendChild(h2)
  btn.setAttribute("id", `${journal.id}`)
  btn.addEventListener("click", () => {
  let id = event.target.id
    deleteJournal(id)
    .then (data => {
   selectDOM.innerHTML = ""
  getData()
    .then( journal => renderJournalEntries(journal))
    })
  })
el.appendChild(btn)
return el

  }

let selectDOM = document.querySelector(".entryLog")

function renderJournalEntries (entries) {
      // select the DOM and add the create Journal 
      for (let i = 0; i < entries.length; i++) {
      selectDOM.innerHTML += createJournalEntry(entries)
    } 
}

export{renderJournalEntries, selectDOM}