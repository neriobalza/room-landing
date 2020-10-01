const burgerButton = document.getElementById('burgerButton');
const closeNavbar = document.getElementById('closeNavbar');
const navbar = document.getElementById('navbar');
burgerButton.onclick = () => navbar.classList.toggle('show');
closeNavbar.onclick = () => navbar.classList.toggle('show');

const arrowLeft = document.getElementById('arrowLeft');
const arrowRight = document.getElementById('arrowRight');
const imageHero = document.getElementsByClassName('hero__image');
const heroTitle = document.getElementById('hero-title');
const heroInfo = document.getElementById('hero-info');
let sliderPosition = 0;
arrowLeft.onclick = () => slider(-1);
arrowRight.onclick = () => slider(1);
document.onkeyup = slideWithKey;
let valor = 1;

function slideWithKey (e){
    if(e.keyCode === 37){
        slider(-1)
    }
    if(e.keyCode === 39){
        slider(1);
    }
}

function slider (contador){
    if(sliderPosition>0 && contador < 0 || contador > 0 && sliderPosition < 2){
        sliderPosition += contador;
    }
    for (let index = 0; index < imageHero.length; index++) {
        switch(sliderPosition){
            case 0:
                imageHero[index].style.left = '0';
                heroTitle.innerHTML = `Discover innovative <br> ways to decorate`;
                heroInfo.innerHTML = `we provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`;
                break;
            case 1:
                imageHero[index].style.left = '-100%';
                heroTitle.innerHTML = `We are available<br> all across globe`;
                heroInfo.innerHTML = `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest your using our store locator. Any questions? Don't hesisitate to contact us today.`;
                break
            case 2:
                imageHero[index].style.left = '-200%';
                heroTitle.innerHTML = `Manufactured with<br> the best materials`;
                heroInfo.innerHTML = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`;
                break;   
        }
    }
}
setInterval( () => {
    if(sliderPosition==2){
        valor = -1;
    } 
    if(sliderPosition==0){
        valor = 1;
    }
    slider(valor);
}, 5000);