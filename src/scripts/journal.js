// const renderJournalEntries = (entries) => {
//   let selectDOM = document.querySelector(".entryLog")
//   // select the DOM and add the create Journal 
//   selectDOM.innerHTML += createJournalEntry(entries)
// };

// create the HTML that will go into the DOM 

// const createJournalEntry = (taco)=> { 
//   return `
// <h2> ${taco.concept} </h2> 
// <section> 
//      <article>  
//          <p> ${taco.entry} ${taco.mood}  ${taco.date} </p>
//       </article> 
// </section>    `

// }

// fetch(`http://localhost:3000/entries`) // Fetch from the API
// .then(response => response.json())  // Parse as JSON
// .then(entries => {
//     console.log(entries)
//     // looping through json elements
//     entries.forEach((journalEntry) => {
//         console.log(journalEntry)
//         //sending one object to the funtion
//         renderJournalEntries(journalEntry) 
//     })
// })


/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
API.getJournalEntries().then(renderJournalEntries)