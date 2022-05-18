let textBtns = document.querySelectorAll(".text");

let count = 0;
textBtns.forEach(
    btn=>{
        btn.addEventListener("click", function(){
            let image = document.getElementById(btn.dataset.id);
            image.style.filter = "none";
            count++;
            this.style.visibility = "hidden";
            if(count>=2){
                textBtns.forEach(button=>{
                    button.style.visibility = "hidden";
                })
            }
           
        })
})
