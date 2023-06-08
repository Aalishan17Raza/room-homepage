const shopBtn = document.querySelector('.shopBtn');
const arrowIcon = document.querySelector('.arrowIcon');

shopBtn.addEventListener("mouseover", (e) => {
    arrowIcon.style.marginLeft = '30px';
    shopBtn.style.filter = 'invert(67%) sepia(40%) saturate(0%) hue-rotate(240deg) brightness(90%) contrast(81%)';
})

shopBtn.addEventListener("mouseout", (e) => {
    arrowIcon.style.marginLeft = '5px';
    shopBtn.style.filter = 'invert(0%) sepia(8%) saturate(31%) hue-rotate(345deg) brightness(109%) contrast(106%)';
})

const iconAngles = document.querySelector('.iconAngles');
const iconAnglesStyle = window.getComputedStyle(iconAngles);
const bgImg = document.querySelector('.bg-img');
const bgImgStyles = window.getComputedStyle(bgImg);

iconAngles.style.left = bgImgStyles.width
iconAngles.style.top = (parseInt(bgImgStyles.height)
    - parseInt(iconAnglesStyle.height)) + "px";

const imgNos = [1, 2, 3]

const rightAngleBtn = document.querySelector('.right')
const leftAngleBtn = document.querySelector('.left')
const rightPartContentTitle = document.querySelector('.rightPartContentTitle')
const rightPartContent = document.querySelector('.rightPartContent')

function helper(pos,screenSize) {
    if (pos === 1) {
        bgImg.style.backgroundImage = `url(./images/${screenSize}-image-hero-2.jpg)`;
        rightPartContentTitle.textContent = 'We are available all across the globe';
        rightPartContent.textContent = "With stores all over the world, it's easy for you to find furniture for your home or place of business.Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";
    } else if (pos === 2) {
        bgImg.style.backgroundImage = `url(./images/${screenSize}-image-hero-3.jpg)`;
        rightPartContentTitle.textContent = 'Manufactured with the best materials'
        rightPartContent.textContent = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    } else {
        bgImg.style.backgroundImage = `url(./images/${screenSize}-image-hero-1.jpg)`;
        rightPartContentTitle.textContent = 'Discover innovative ways to decorate'
        rightPartContent.textContent = "We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    }
}

let pos = 0;
rightAngleBtn.addEventListener('click', (e) => {
    pos = (pos + 1) % 3;
    helper(pos,'desktop');
})

leftAngleBtn.addEventListener('click', (e) => {
    if (pos == 0) pos = 2;
    else pos = pos - 1;
    helper(pos,'desktop');
})

if (screen.width < 376) {
    iconAngles.style.left = (screen.width - parseInt(iconAnglesStyle.width)) +"px" ;
    iconAngles.style.top = (parseInt(bgImgStyles.height)
        - parseInt(iconAnglesStyle.height)) + "px";

    const mobileHamSignIcon=document.querySelector('.mobileHamSignIcon');
    const navbarLink=document.querySelector('.navbarLink');
    mobileHamSignIcon.addEventListener('click',(e)=>{
        navbarLink.style.display='block';
    })
    const closeIconImg=document.querySelector('.closeIconImg');
    closeIconImg.addEventListener('click',(e)=>{
        navbarLink.style.display='none';
    })


    rightAngleBtn.addEventListener('click', (e) => {
        pos = (pos + 1) % 3;
        helper(pos,'mobile');
    })
    
    leftAngleBtn.addEventListener('click', (e) => {
        if (pos == 0) pos = 2;
        else pos = pos - 1;
        helper(pos,'mobile');
    })
}
