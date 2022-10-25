/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

/**
 * End Global Variables
 * Start Helper Functions
// *//*\\*/
const ul = document.getElementById('navbar__list');
const sections = document.getElementsByTagName('section')
const d= document.createDocumentFragment();
function createnavbar(){
    for(let section of sections){
        let sectionid = section.getAttribute('id')
        let datanav = section.getAttribute('data-nav')
        let li = document.createElement('li')
        let link = li.appendChild(document.createElement('a'))
        link.appendChild(document.createTextNode(datanav))
        link.setAttribute('href','#'+sectionid)
d.appendChild(li)

link.classList.add("menu__link")
link.addEventListener('click',function(e){
    e.preventDefault();
    section.scrollIntoView({behavior :'smooth'});
})

    }
ul.appendChild(d)
}

 createnavbar();

/***************************************************************************************UP TO SECTION 1******** */
let toplink = document.querySelector(".top");
let topsec= document.getElementsByTagName("section")[0];
toplink.addEventListener('click',function(e){
    e.preventDefault();
    topsec.scrollIntoView();
})
window.addEventListener('scroll',function(){
    for(let section of sections){
        let clientrect = section.getBoundingClientRect().top;
        if(clientrect>=0&&clientrect<748){
            for(let section of sections){
                section.classList.remove("your-active-class")
            }
            section.classList.add("your-active-class");

        } }
        let pageheight = window.pageYOffset
        if(pageheight>550){
            toplink.classList.add('showTopLink')
        }
        else{
            toplink.classList.remove('showTopLink')
        }

    })






























/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


