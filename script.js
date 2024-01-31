/** @copyright January 2024 Designed By Irshad Khan (Star infotech College Ajmer (Mewar University)) MCA */

document.addEventListener("DOMContentLoaded", function () {
    /* header-image */
    window.onload = () => {

        printName();
        getPreviousTheme();
        setTimeout(() => {document.querySelector(".header-img").classList.add("header-img-show-with-fade");},100);
    }

    /* text-slider */
    let a = "Software Developer  ".split('');
    let b = ["Programmer  "];
    let c = ["Web Designer  "];
    
    b = b[0].split('');
    c = c[0].split('');
    let flag = 1;

    function printName() {
        let i = 0;
        let outputs = document.querySelector(".text-slider div p span");

        let x = setInterval(() => {
            if (flag == 1) {
                outputs.innerHTML += a[i];
            }
            else if (flag == 2) {
                outputs.innerHTML += b[i];
            }
            else {
                outputs.innerHTML += c[i];
            }
            if(i == a.length - 1 && flag == 1){
                clearInterval(x);
                eraseName();
                flag = 2;
            }
            else if (i == b.length - 1 && flag == 2){
                clearInterval(x);
                eraseName();
                flag = 3;
            }
            else if (i == c.length - 1 && flag == 3){
                clearInterval(x);
                eraseName();
                flag = 1;
            }
            i++;
        },150)
    }
    function eraseName () {
        let outputs = document.querySelector(".text-slider div p span");
        let xxx = document.querySelector(".text-slider div p span");

        outputs = outputs.innerHTML.split('');
        let x = setInterval(() => {

            outputs.pop();

            xxx.innerHTML = outputs.join('');
            if (xxx.innerHTML == '') {

                printName();
                clearInterval(x)
            }
        },50);
    }

    /* dark-and-white-theme */
    function applyTheme(theme){
        const themes = document.body.classList;

        const icons = document.querySelector(".change-theme-sun a i").classList;

        const navBg = document.querySelector("nav").classList;

        if (theme === 'theme-black'){
            themes.remove("theme-white");
            icons.add("fa-moon");
            navBg.add("navbar-dark");
            
        }
        else {
            navBg.remove("navbar-dark");
            themes.add("theme-white");
            icons.remove("fa-moon");
        }
    }
    function getPreviousTheme() {

        let currentSelectedTheme = localStorage.getItem('theme');
        
        if(currentSelectedTheme){
            applyTheme(currentSelectedTheme);
        }
    }
    function setCurretTheme(theme,currentSelectedTheme) {
        localStorage.setItem(theme, currentSelectedTheme);
    }
    document.querySelector(".change-theme-sun").addEventListener("click", function () {

        const currentSelectedTheme = document.body.classList.contains('theme-white') ? 'theme-black': 'theme-white';
        setCurretTheme('theme', currentSelectedTheme);
        applyTheme(currentSelectedTheme);
    });

    /* hire me button */
    const hireMe = document.querySelector(".hire-me-button");
    hireMe.addEventListener("mousemove",(e) => {

        hireMe.style.setProperty("--x", e.pageX - hireMe.offsetLeft + 'px');
        hireMe.style.setProperty("--y", e.pageY - hireMe.offsetTop + 'px');
    });

    window.addEventListener ("scroll", () => {

        const scroll_Y = window.scrollY;

        /* nav-link highlight on scroll */
        document.querySelectorAll("section[id]").forEach( currentSection => {

            const sectionHeight = currentSection.offsetHeight;
            const sectionTop = (currentSection.getBoundingClientRect().top + window.scrollY - 40);
            const classLists = document.querySelector(".nav-item a[href*=" + currentSection.getAttribute("id") + "]").classList;
            
            scroll_Y >= sectionTop && scroll_Y <= sectionTop + sectionHeight ? classLists.add('active-link') : classLists.remove('active-link');
        });
        
        /* navbar visible on scroll */
        let navs = document.querySelector("nav").classList;
        scroll_Y > 200 ? navs.add("nav-visible-on-scroll") : navs.remove("nav-visible-on-scroll") ;

        /* about-section-patrs show */
        if (scroll_Y >= document.querySelector("#about-sec-parent").offsetTop - window.innerHeight / 1.7){

            document.querySelectorAll(".about-sec-2-parts").forEach ( parts => {

                parts.classList.add("about-sec-2-parts-show");
                parts.style.setProperty("--about-sec-parts-transition-delay", `${parts.dataset.aboutsecpartstransitiondelay}s`);
            });
        }

        /* education-information-card-show */
        if (scroll_Y >= document.querySelector(".education-information").offsetTop - window.innerHeight / 1.2) {

            document.querySelectorAll(".education-information-card").forEach (infoCard => {

                infoCard.classList.add("education-information-card-show");
                infoCard.style.setProperty("--infoCard-transition-delay", `${infoCard.dataset.educationcardtransitiondelay}s`);
            });
        }

        /* progressbar width increase */
        if (scroll_Y >= document.querySelector(".skills-section").offsetTop - window.innerHeight / 1.7) {

            document.querySelectorAll(".progress-bars").forEach(function(progressbar) {
                progressbar.style.setProperty("--widths", `${progressbar.dataset.progresswidth}%`);
            });
        }

        /* cards slides */
        if (scroll_Y >= document.querySelector(".cards_section").offsetTop - window.innerHeight / 2 - 250) {

            document.querySelectorAll(".work-cards").forEach(card => {
                card.classList.add('show-cards-with-fade');

                card.style.setProperty("--tra-delay", `${card.dataset.trandelay}s`);
            });
        }

        /* contact_section_parts-show */
        if (scroll_Y >= document.querySelector(".contact_section").offsetTop - window.innerHeight / 1.7) {

            document.querySelectorAll(".contact_section_parts").forEach(contactParts => {
                
                contactParts.classList.add("contact_section_parts-show");
                contactParts.style.setProperty("--contactParts-transition-delay", `${contactParts.dataset.contactpartstransitiondelay}s`);
            });
        }

    });

    /* navbar collapse when click a navbar link on small screen */
    document.querySelectorAll(".nav-link").forEach(navLink => {

        navLink.addEventListener("click", function () {
            document.querySelector('#navbars').classList.remove('show');
        });
    });
    
});
  