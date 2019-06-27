import { deleteJournal, getData, updateJournal } from "./data.js";
import { journalFactory } from "./entryComponent.js";
import { selectDOM } from "./helper.js";




// add the edit form to the dom
function addEditFormDOM(editContainer, editForm) {
  document.querySelector(`#${editContainer}`).innerHTML = editForm;
  document.querySelector("#journal-edit-btn").addEventListener("click", () => {
    let date = document.querySelector("#dateEdit").value;
    let concepts = document.querySelector("#conceptEdit").value;
    let entry = document.querySelector("#entryEdit").value;
    let mood = document.querySelector("#moodEdit").value;
    let journalID = document.querySelector("#journal-id").value;
    let updatedJournal = journalFactory(date, concepts, entry, mood);
    updatedJournal.id = journalID;
    console.log(updatedJournal)
    updateJournal(updatedJournal)
      .then(() => {
        selectDOM.innerHTML = ""
        getData()
          .then(journal => listJournal(journal))
      });
  });
}

function createJournalEntry(journal) {
  let el = document.createElement("div");
  let div = document.createElement("div");
  let section = document.createElement("section");
  let deleteBtn = document.createElement("button");
  let editBtn = document.createElement("button");
  section.innerHTML = `<h2> ${journal.concept} </h2>
    <section>
         <article>
             <p> ${journal.entry} ${journal.mood}  ${journal.date} </p>
          </article>
    </section>`;

  el.appendChild(section);
  div.setAttribute("id", `editFormContainer-${journal.id}`);
  deleteBtn.setAttribute("id", `${journal.id}`);
  el.appendChild(div);
  deleteBtn.textContent = "delete";
  editBtn.textContent = "edit";
  // event listener for the delete button
  deleteBtn.addEventListener("click", () => {
    let id = event.target.id
    deleteJournal(id)
      .then(data => {
        console.log(data)
        selectDOM.innerHTML = ""
        getData()
          .then(journal => listJournal(journal))
      })
  })
  editBtn.addEventListener("click", () => {
    console.log("edit click");
    let editForm = createEditForm(journal);
    addEditFormDOM(div.id, editForm);
  })
  el.appendChild(deleteBtn);
  el.appendChild(editBtn);
  return el
}

// create journal edit form

function createEditForm(journal) {
  return ` <input type="text" name="journalDate" id="dateEdit" value= ${
    journal.date
    }>
  <input type="hidden" id="journal-id" value=${journal.id}>
<input type="text" name="conceptsCovered" id="conceptEdit" value= ${
    journal.concept
    }>
<textarea name="journalEntry" id="entryEdit" cols="40" rows="4" value= ${
    journal.entry
    }></textarea>
<select id = "moodEdit">
                <option value=1>Sad</option>
                <option value=2>Ok</option>
                <option value=3>Happy</option>
              </select>
              <button id="journal-edit-btn">save journal</button>
`;
}


// Add Journal data to the DOM
const listJournal = (journalArr) => {
  document.querySelector(".entryLog").innerHTML = ""
  journalArr.forEach(journal => {
    selectDOM.appendChild(createJournalEntry(journal));
  });

}

// Adding the filtering to the radio buttons
document.getElementsByName("mood").forEach(event => {
  event.addEventListener("click", event => {
    const radioMood = event.target.value;
    console.log(radioMood);
    getData().then(entries => {
      let moodInput = entries.filter(entry => entry.mood === radioMood);
      console.log(moodInput);
      listJournal(moodInput);
    });
  });
});





document.querySelector("#searchJournal").addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
      const searchTerm = event.target.value
           getData()
          .then(journalEntry => {
              const matchingEntries = []

              journalEntry.forEach(entry => {
                  let match = false
                  for (const prop of Object.values(entry)) {
                      if (!match && typeof prop === "string" && prop.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                          match = true
                          matchingEntries.push(entry)
                      }
                  }
              })
              // event.target.value = ""
              listJournal(matchingEntries)
          })
  }
})



export { createJournalEntry, listJournal }
