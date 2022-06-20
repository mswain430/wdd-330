const links = [
    {
    label: "Week1 notes",
    url: "week1/index.html",
},
{
    label: "Week2 - Programming basics, Arrays, Logic, Loops, functions",
    url: "week02/index.html",
},
{
    label: "Week3 - Object Methods: this, Objects, DOM, Events",
    url: "week03/index.html",
},
{
    label: "Week4 - Forms, OOP, Modern Javascript",
    url: "week04/index.html",
},
{
    label: "Week5 - Testing, Debugging",
    url: "week05/index.html",
},
{
    label: "Week6 - Midterm Checkin",
    url: "week06/index.html",
},
{
    label: "Week7 - More Functions, AJAX",
    url: "week07/index.html",
},
{
    label: "Week8 - Transforms, transitions, Canvas, SVG, Drag And Drop",
    url: "week08/index.html",
},
{
    label: "Week09 - Window Object, HTML5 APIs",
    url: "week09/index.html",
},
{
    label: "Week10 - Validating Forms, Using Fetch",
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