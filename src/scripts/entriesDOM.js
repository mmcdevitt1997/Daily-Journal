import { deleteJournal, getData, updateJournal } from "./data.js";

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
    let id = event.target.id;
    deleteJournal(id).then(data => {
      selectDOM.innerHTML = "";
      getData().then(journal => listJournal(journal));
    });
  });
  editBtn.addEventListener("click", () => {
    console.log("edit click");
  });
  el.appendChild(deleteBtn);
  el.appendChild(editBtn);
  return el;
}

// create journal edit form

function createEditForm(journal) {
  return ` <input type="date" name="journalDate" id="DateEdit" value= {$journal.date}>
<input type="text" name="conceptsCovered" id="conceptEdit" value= {$journal.concept}>
<textarea name="journalEntry" id="entryEdit" cols="40" rows="4" value= {$journal.entry}> ></textarea>
<select id = "moodEdit">
                <option value=1>Sad</option>
                <option value=2>Ok</option>
                <option value=3>Happy</option>
              </select>
              <button id="journal-edit-btn">save journal</button>
`;
}

let selectDOM = document.querySelector(".entryLog");

// Add Journal data to the DOM
function listJournal(journalArr) {
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

export { createJournalEntry, selectDOM, listJournal };
