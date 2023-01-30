window.onload = () => {
    let acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        toggleAccordion(this);
    });
}
toggleAccordion(acc[0]);
}


function toggleAccordion(accordion) {
    let acc = document.getElementsByClassName("accordion");
  
    for (var i = 0; i < acc.length; i++) {
      if (acc[i] !== accordion && acc[i].classList.contains('active')) {
        closeAccordion(acc[i]);
      }
    }
  
    if (!accordion.classList.contains('disabled')) {
      accordion.classList.toggle('active');
      accordion.nextElementSibling.classList.toggle('hidden');
    }
  }
  


function closeAccordion(accordion) {
accordion.classList.remove('active');
accordion.nextElementSibling.classList.add('hidden');
}


function resetAccordions(accordion) {
let acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
    closeAccordion(acc[i]);
}

toggleAccordion(accordion);
}