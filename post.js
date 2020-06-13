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