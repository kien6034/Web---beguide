document.addEventListener('dblclick', event=>{
    const dbElement = event.target;
    
    if(dbElement.className === 'flipcard'){
        let paragraph = dbElement.dataset.paragraph;
        card = document.getElementById(paragraph);
       
        if(card.style.transform == "rotateY(180deg)")
        {
            card.style.transform = "rotateY(0deg)";
        }
        else {
            card.style.transform ="rotateY(180deg)";
        }
      
    }
})

document.addEventListener('DOMContentLoaded', ()=>{
    phoneBar();
})

function phoneBar(){
    const burger = document.querySelector('.burger');
    const sideNav = document.querySelector('.sideNav');
    burger.addEventListener('click', ()=>{
        burger.classList.toggle('toggle');
        if(sideNav.style.display == 'block'){
            sideNav.style.display = 'none';
        }
        else {
            sideNav.style.display = 'block';
        }
    })
}