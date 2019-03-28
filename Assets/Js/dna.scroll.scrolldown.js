var scrollDownDetectStart = 50;

OnScroll(function()
{
    var scrollDownItems=document.querySelectorAll("[data-scrolldown-class]");

    var scrollDown = false;

    OnScroll(function()
    {
        var windowTop = ScrollPositionY();

        if(!scrollDown && windowTop > scrollDownDetectStart)
        {
            scrollDown = true;

            ForEach(scrollDownItems,function(item)
            {
                item.classList.add(item.getAttribute("data-scrolldown-class"));
            })
        }
        if(scrollDown && windowTop <= scrollDownDetectStart)
        {
            scrollDown = false;

            ForEach(scrollDownItems,function(item)
            {
                item.classList.remove(item.getAttribute("data-scrolldown-class"));
            })
        }
    })
})