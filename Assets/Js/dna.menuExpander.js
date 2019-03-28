OnLoad(function(){
    var menu=document.querySelectorAll("[href='#topmenu']");

    ForEach(menu,function(item){
        item.addEventListener("click",function(e){
            
            // Cancel anchor navigation
            e.preventDefault();

            // Get all element with "data-topmenu-class"
            var topMenu=document.querySelectorAll("[data-topmenu-class]");

            ForEach(topMenu,function(menu){

                // Get class value
                var menuClass=menu.getAttribute("data-topmenu-class");

                // Apply value to calss
                menu.classList.toggle(menuClass);
            })
        })
    })
})