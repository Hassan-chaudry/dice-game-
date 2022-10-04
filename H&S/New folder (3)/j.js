
let tabs = document.querySelectorAll(".tabs-button");
let contents = document.querySelectorAll(".section")

tabs.forEach((tab, index) =>{
    tab.addEventListener("click",()=>{
        tabs.forEach((tab) => tab.classList.remove("active"))
        tab.classList.add("active")

        contents.forEach((c) => c.classList.remove("show"))
        contents[index].classList.add("show")
    })
})
let resp = document.querySelectorAll(".tabs-buttons");


resp.forEach((tab, index) =>{
    tab.addEventListener("click",()=>{
        resp.forEach((tab) => tab.classList.remove("active"))
        tab.classList.add("active")

        contents.forEach((c) => c.classList.remove("show"))
        contents[index].classList.add("show")
    })
})

jQuery(document).ready(function() {
  setInterval( function() {
      if(jQuery('.tabs-button.active').is(':last-child')) {
        jQuery('.tabs-button:first-child').trigger('click');
      } else {
       jQuery('.tabs-button.active').next().trigger('click');
      }
    
  },7000 )
});
jQuery(document).ready(function() {
  setInterval( function() {
      if(jQuery('.tabs-buttons.active').is(':last-child')) {
        jQuery('.tabs-buttons:first-child').trigger('click');
      } else {
       jQuery('.tabs-buttons.active').next().trigger('click');
      }
    
  },7000 )
});