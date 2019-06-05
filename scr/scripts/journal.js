// Date of the journal entry.
// Concepts covered (which will be the title of the entry).
// The long-form contents of the journal entry.
// The mood of the journal entry.

/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
const JournalEntry = [{
    date: "June 4, 2019", 
    conceptsCovered: "objects and using the Dom",
    longFormContent: " Well this is an example ", 
    mood:["happy","sad","Ok"]
},]

 const entry1 = {
    date: "June 4, 2019", 
    conceptsCovered: "objects and using the Dom",
    longFormContent: " Well this is an example ", 
    mood:["happy","sad","Ok"]
}

JournalEntry.push(entry1);

console.log(JournalEntry);