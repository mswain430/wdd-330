//ToLocaleDateString
const dt = new Date();
const options = {weekday: 'long' , day: 'numeric', month: 'long', year: 'numeric'};
const year = {year: 'numeric'}
document.getElementById('year').textContent = new Date().toLocaleDateString('en-us', year);
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-us', options);

//String Literal
//currentdate3 = `current Date: ${dayName}, ${monthName} ${d.getDate()}, ${year}`
//document.getElementById('currentdate3').textContent = currentdate3

// If day is equal to 0-7, 1 or 2 then display message (dybanner)
const d = new Date();
const dayOfWeek = d.getDay()
let dybanner;
if (dayOfWeek === 1 || dayOfWeek === 2) {
   dybanner = "🤝🏼Come join us for garden club Saturday at 8:00am";
}
document.querySelector('#dybanner').textContent = dybanner;