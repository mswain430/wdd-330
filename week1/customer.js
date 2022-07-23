function addAndSaveCustomer(){
    const aName = document.getElementById("name_input").value;
    const anAge = document.getElementById("age_input").value * 1;
    const anInseam = document.getElementById("inseam_input").value * 1;
    let aClothingCustomer = {
        "name":aName,
        "age":anAge,
        "inseam":anInseam
    }
    let allCustomers = null;
    let storedCustomersString = localStorage["all_customers"];
    if(storedCustomersString == null){
      allCustomers = []
    }
    else{
      allCustomers = JSON.parse(storedCustomersString);
    }
    allCustomers.push(aClothingCustomer);
    let allCusomersString = JSON.stringify(allCustomers);
    localStorage["all_customers"] = allCusomersString;
    showAllCustomers();
}

document.getElementById("name_input").value = null;
document.getElementById("age_input").value  = null;
document.getElementById("inseam_input").value = null;

function showAllCustomers(){
  let storedCustomersString = localStorage["all_customers"];
  if(storedCustomersString != null){
    let allCustomers = JSON.parse(storedCustomersString);
    let customerDisplayer = document.getElementsByClassName("all_customers_display");
    customerDisplayer.innerHTML = null;
    let numberOfCustomers = allCustomers.length;
  for (let i = 0; i < allCustomers.length; i++) {
        let aClothingCustomer = allCustomers[i]
        customerDisplayer.innerHTML += `<hr><p>Customer: ${aClothingCustomer["name"]}</p>
        <p>Age:${aClothingCustomer["age"]}</p>
        <p>Inseam: ${aClothingCustomer["inseam"]}</p>`;
        }
  }
}