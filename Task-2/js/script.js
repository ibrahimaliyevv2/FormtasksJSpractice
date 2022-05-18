let titles = document.querySelectorAll(".title");

titles.forEach(title=>{
    title.addEventListener("click",function(){
        let description = document.getElementById(title.dataset.id);
        // description.classList.toggle("active");
        console.log(description);
    })
})