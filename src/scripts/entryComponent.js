

// create the HTML that will go into the DOM 

const createJournalEntry = (taco)=> { 
    return `
  <h2> ${taco.concept} </h2> 
  <section> 
       <article>  
           <p> ${taco.entry} ${taco.mood}  ${taco.date} </p>
        </article> 
  </section>    `
  
  }