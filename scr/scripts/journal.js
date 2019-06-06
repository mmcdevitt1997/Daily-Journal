// Date of the journal entry.
// Concepts covered (which will be the title of the entry).
// The long-form contents of the journal entry.
// The mood of the journal entry.

/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
const journalEntries = [
  {
    date: "June 4, 2019",
    conceptsCovered: "objects and using the Dom",
    longFormContent: " Well this is an example ",
    mood: ["happy", "sad", "Ok"]
  },

  {
    date: "June 4, 2019",
    conceptsCovered: "objects and using the Dom",
    longFormContent: " Well this is an example ",
    mood: ["happy", "sad", "Ok"]
  }
];


/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/
const makeJournalEntryComponent = (
  date,
  conceptsCovered,
  longFormContent,
  mood
) => {
  // Create your own HTML structure for a journal entry
  return ` 
    <p>
    ${date} we learned about ${conceptsCovered} and
    other notes include ${longFormContent} and I was feeling ${mood}
    <p/>   `;
};

/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
let entryContainer = document.querySelector(".entryLog");


for (let i = 0; i < journalEntries.length; i++) {
  entryContainer.innerHTML += makeJournalEntryComponent(
    journalEntries[i].date,
    journalEntries[i].entryContainer,
    journalEntries[i].longFormContent,
    journalEntries[i].mood
  );
}




