const links = [
    {
    label: "Week1 notes",
    url: "week1/index.html",
},
{
    label: "Week2 notes",
    url: "week02/index.html", 
},
{
    label: "Week3 notes",
    url: "week03/index.html", 
},
{
    label: "Week4 notes",
    url: "week04/index.html", 
},
{
    label: "Wee5 notes",
    url: "week05/index.html", 
},
{
    label: "Week6 notes",
    url: "week06/index.html", 
},
{
    label: "Week7 notes",
    url: "week07/index.html", 
},
{
    label: "Week8 notes",
    url: "week08/index.html", 
},
{
    label: "Week09 notes",
    url: "week9/index.html", 
},
{
    label: "Week10 notes",
    url: "week10/index.html", 
},
{
    label: "Week11 notes",
    url: "week11/index.html", 
},
{
    label: "Week12 notes",
    url: "week12/index.html", 
},

]

function loadIndex() {
    const ol = document.querySelector("#linksList");

    links.forEach( link => {
        const li = document.createElement("li");
        const href = document.createElement("a");
        href.setAttribute("href", link.url);
        href.innerText = link.label;

        li.appendChild(href);
        ol.appendChild(li)
    })
}