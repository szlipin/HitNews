slideIndex = 1;
auto_slide = setTimeout(showSlides, 5000);

// Slides
function cSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n = null) {
    
    var slides = document.getElementsByClassName("img_slide");

    if (n == null) {
        n = slideIndex += 1;
    }

    if (n > slides.length) { 
        slideIndex = 1 
    }
    else if (n < 1) { 
        slideIndex = slides.length 
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

    clearTimeout(auto_slide);
    auto_slide = setTimeout(showSlides, 5000);
}

function contact(event) {
    event.preventDefault();

    if (document.getElementById('name_inp') == null || document.getElementById('name_inp').value == '') {
        alert('Digite um Nome, Por Gentileza.');
    }
    else if(document.getElementById('email_inp') == null || document.getElementById('email_inp').value == ''){
        alert('Digite um Email, Por Gentileza.');
    }
    else {
        alert(
        `Cadastrado!
        Nome: ` + document.getElementById('name_inp').value + `
        Email: ` + document.getElementById('email_inp').value
        )
    }
    
}

document.getElementById('form_contact').addEventListener('submit', contact, false);