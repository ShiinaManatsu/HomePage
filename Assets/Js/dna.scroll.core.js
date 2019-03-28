var scrollCallbacks=[];

var scrollTimerCallbackId=null;

var lastScrollTime=0;

var scrollUptadaInterval=1000;

function OnScroll(callback)
{
    scrollCallbacks.push(callback);
}

function ProcessOnScroll()
{
    ForEach(scrollCallbacks,function(item)
    {
        item();
    })
}

function ScrollPositionY()
{
    return window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
}

window.addEventListener("scroll",function()
{
    if(!scrollTimerCallbackId)
    {
        if(lastScrollTime==0)
        {
            lastScrollTime=new Date().getTime();

            ProcessOnScroll();
        }

        scrollTimerCallbackId=setTimeout(function()
        {
            scrollTimerCallbackId=null;

            lastScrollTime=new Date().getTime();

            ProcessOnScroll();

        },scrollUptadaInterval);
    }
})