let text = "Software Engineering Student";
let index = 0;

function typingEffect(){

    if(index < text.length){

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typingEffect,100);
    }
}

typingEffect();
let sections = document.querySelectorAll("section");

window.addEventListener("scroll", revealSection);

function revealSection(){

    sections.forEach((section) => {

        let sectionTop = section.getBoundingClientRect().top;

        let screenPosition = window.innerHeight / 1.3;

        if(sectionTop < screenPosition){

            section.classList.add("show");
        }
    });
}
let topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.documentElement.scrollTop > 200){

        topBtn.style.display = "block";
    }
    else{

        topBtn.style.display = "none";
    }
};

topBtn.onclick = function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
};