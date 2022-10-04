let buttons =   document.querySelectorAll("button")[0]
       buttons.addEventListener("click", function(){
        buttons.classList.add("btn-opacity")
        document.querySelector("img").classList.add("img-back")
        document.querySelectorAll("div")[1].classList.add("display-none")

        })