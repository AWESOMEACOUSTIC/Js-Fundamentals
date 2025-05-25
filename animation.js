// const sidebar = document.querySelector(".sidebar");
// const btn = document.querySelector("button");

// btn.addEventListener('click',() =>{
//     sidebar.classList.toggle("hide");
// })

// twin - a single moment in the animation
// gsap.method(Element, vars obj)

gsap.set(".box",{
    opacity:0,
    background: "yellow"
});

gsap.to(".box",{
    opacity:1,
    background: "crimson",
    y:-200,
    duration:2,
    repeat: -1,
    yoyo: true
});

// in from method ou don't have to specify the initial of 
// the state (it will figure out by itself)

gsap.from(".box1",{
    y:-200,
    duration:3,
    ease: "linear",
    repeat: -1
});

gasp.fromTo(".box2",{
    y: 200, 
    opacity:0
},
{
    opacity:1,
    y:-200,
    duration:3,
    ease:"linear",
    borderRadius:0,
    yoyo: true
})
