window.addEventListener('DOMContentLoaded', ()=>{
    stickyBar();
    initTypeWriterFunction();
})

function stickyBar(){
    window.addEventListener("scroll", ()=>{
        const nav = document.querySelector('#navbar');
        nav.classList.toggle("sticky", window.scrollY>0)
    });
}

class TypeWriter{
    constructor(txtElement, words, wait= 2000){
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10); // base 10
        this.type();  // main method 
        this.isDeleting = false;
    }
    type(){
            //current index of word
        const current = this.wordIndex % this.words.length;

        //get the full text of the current word
        const fullTxt = this.words[current];

        //check if in deleting state
        if(this.isDeleting){
            //remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        }else{
            //add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        //insert txt into element
        this.txtElement.innerHTML = `<span class = "txt">${this.txt}</span>`;
        
        //initial type speed
        let typeSpeed = 300;

        if(this.isDeleting){
            typeSpeed /= 2;
        }
    
        //if word is completed
        if(!this.isDeleting && this.txt === fullTxt) {
            //make pause at end
            typeSpeed = this.wait;
            //set delete to true
            this.isDeleting = true;
        }
        else if(this.isDeleting && this.txt === ''){
            this.isDeleting = false;
            //move to the next word
            this.wordIndex++;
            //pause before start typing
            typeSpeed = 500;
        }

        setTimeout(()=> this.type(), typeSpeed) //recall the type function every 500ms
    }
}

//init new typewriter object
function initTypeWriterFunction(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    //init type writer
    new TypeWriter(txtElement, words, wait);
}