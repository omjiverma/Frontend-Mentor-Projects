// Selecting all buttons
const accBtns = document.querySelectorAll(".accordion--btn")
// Adding Event Listeners to each button
accBtns.forEach(accBtn => {
  accBtn.addEventListener('click', (event) => {
    // Toggling class with click
    accBtn.classList.toggle("accordion--btn--active")
    // Selecting Accordion Content bases on the button clicked
    const accContent = document.querySelector(`#${accBtn.target}`)
    // Changing height of accordion-content based on condtion
    if(accBtn.classList.contains("accordion--btn--active")){
      accContent.style.height = accContent.scrollHeight + 'px'
    }
    else{
      accContent.style.height = 0;
    }
  })
});