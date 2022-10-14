const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

//navigation

//storing elements in variables
let nav = document.querySelector("nav");
let navItems = nav.querySelectorAll("a");

//manipulating elements
navItems[0].innerHTML = siteContent.nav['nav-item-1'];
navItems[0].setAttribute('class', 'italic');
navItems[1].innerHTML = siteContent.nav['nav-item-2'];
navItems[1].setAttribute('class', 'italic');
navItems[2].innerHTML = siteContent.nav['nav-item-3'];
navItems[2].setAttribute('class', 'italic');
navItems[3].innerHTML = siteContent.nav['nav-item-4'];
navItems[3].setAttribute('class', 'italic');
navItems[4].innerHTML = siteContent.nav['nav-item-5'];
navItems[4].setAttribute('class', 'italic');
navItems[5].innerHTML = siteContent.nav['nav-item-6'];
navItems[5].setAttribute('class', 'italic');
console.log(nav)
//cta

//storing elements in variables
let ctaElem = document.querySelector('.cta');
let ctaH1 = ctaElem.querySelector('h1');
let ctaButton = ctaElem.querySelector('button');

//manipulating elements
ctaH1.innerHTML = siteContent.cta.h1;
ctaButton.innerHTML = siteContent.cta.button;

//main-content 
let mainContentElem = document.querySelector('.main-content');
let contentsElem = mainContentElem.querySelectorAll('.text-content');

//manipulating elements
contentsElem[0].querySelector('h4').innerHTML = siteContent["main-content"]["features-h4"];
contentsElem[0].querySelector('p').innerHTML = siteContent["main-content"]["features-content"];
contentsElem[1].querySelector('h4').innerHTML = siteContent["main-content"]["about-h4"];
contentsElem[1].querySelector('p').innerHTML = siteContent["main-content"]["about-content"];
contentsElem[2].querySelector('h4').innerHTML = siteContent["main-content"]["services-h4"];
contentsElem[2].querySelector('p').innerHTML = siteContent["main-content"]["services-content"];
contentsElem[3].querySelector('h4').innerHTML = siteContent["main-content"]["product-h4"];
contentsElem[3].querySelector('p').innerHTML = siteContent["main-content"]["product-content"];
contentsElem[4].querySelector('h4').innerHTML = siteContent["main-content"]["vision-h4"];
contentsElem[4].querySelector('p').innerHTML = siteContent["main-content"]["vision-content"];

//contact
let contactElem = document.querySelector('.contact');
let contactH4 = contactElem.querySelector('h4');
let contactP = contactElem.querySelectorAll('p');
console.log(contactElem)
//manipulating elements
contactH4.innerHTML = siteContent.contact["contact-h4"];
contactP[0].innerHTML = siteContent.contact.address;
contactP[1].innerHTML = siteContent.contact.phone;
contactP[2].innerHTML = siteContent.contact.email;

//footer

let footerElem = document.querySelector('footer');
footerElem.querySelector('a').innerHTML = siteContent.footer.copyright;
footerElem.querySelector('a').setAttribute('class', 'bold');

//images
let accentImg = document.querySelector('#middle-img');
let ctaImg = document.querySelector('#cta-img');
let logoImg = document.querySelector('#logo-img');

accentImg.setAttribute('src', siteContent.images["accent-img"]);
ctaImg.setAttribute('src', siteContent.images["cta-img"]);
logoImg.setAttribute('src', siteContent.images["logo-img"]);