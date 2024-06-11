function myMenuFunction(){
    var menuBth = document.getElementById("myNavMenu")

    if(menuBth.className === "nav-menu"){
        menuBth.className += "responsive";
    }
    else{
        menuBth.className = "nav-menu"
    }
}



const body = document.querySelector("body"),
    toogleSwitch =document.getElementById("toggle-switch");

    toogleSwitch.addEventListener("click", ()=>{
        body.classList.toggle("dark");
    });

    var typingEffect = new Typed(".typedText", {
        strings: ["Designer", "Coder", "Developer"],

        loop:true,
        typeSpeed:100,
        backSpeed: 80,
        backDelay: 2000,
    });

    const sr = ScrollReveal({
        origin: "top",
        distance: "80px",
        //se ficar ruim voltar pros 2000 o duration
        duration: 1500,
        reset: true
    });

    sr.reveal(".featured-name", {delay:100});
    sr.reveal(".text-info", {delay:100});
    sr.reveal(".text-btn", {delay:100});
    sr.reveal(".social_icons", {delay:100});
    sr.reveal(".featured-image", {delay:220});
    sr.reveal(".project-box", {interval:100});
    sr.reveal(".top-header", {});

    const srLeft = ScrollReveal({
        origin: "left",
        distance:"80px",
        duration:2000,
        reset: true,
    })

    srLeft.reveal(".about-info",{delay: 100});
    srLeft.reveal(".contact-info",{delay: 100});

    
    const srRight = ScrollReveal({
        origin: "left",
        distance:"80px",
        duration:2000,
        reset: true,
    })

    srRight.reveal(".skill", {delay:100});
    srRight.reveal(".skill-box", {delay:100});


    const sections = document.querySelectorAll(".section[id]");

    function scrollActive(){
        const scrollY = window.scrollY;

        sections.forEach((current)=>{
            const sectionHeight = current.offsetHeight,

            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
            } else {
                document.querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
            }
        });
    }

    window.addEventListener("scroll", scrollActive);




