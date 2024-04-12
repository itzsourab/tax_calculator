const annual_income = document.getElementById("annual_income");
const extra_income = document.querySelector("#extra_income");
const ageInput = document.querySelector("#age");
const total_salary = document.querySelector("#total_salary");
const submit_button = document.getElementById("submit_button");
const second_button = document.getElementById("second_button")
const popup = document.getElementById("popup");
const tax_result_popup = document.getElementById("tax_result_popup");

function calculateTax() {
    const gross_income = parseFloat(annual_income.value) + parseFloat(extra_income.value);
    const deductions = parseFloat(total_salary.value);
    let taxable_income = gross_income - deductions;

    const age = parseInt(ageInput.value);
    
    let tax_rate = 0;
    let tax_amount = 0;
    
    console.log("Gross Income:", gross_income);
    console.log("Deductions:", deductions);
    console.log("Taxable Income:", taxable_income);
    console.log("Age:", age);

   
      
    if (taxable_income > 800000) {
        const taxable_income_above_800000 = taxable_income - 800000;
        console.log("Taxable Income if more than 8 lakhs:", taxable_income_above_800000);
        
        //  taxable_income -= 800000;
        //  console.log("Taxable Income if more than 8 lakhs:", taxable_income);
         
    // } else {    
        if (age < 40) {
            tax_rate = 0.3;
        } else if (age >= 40 && age < 60) {
            tax_rate = 0.4;
        } else {
            tax_rate = 0.1;
        }
        console.log("Tax Rate:", tax_rate);
        tax_amount = taxable_income_above_800000 * tax_rate;
        console.log("Tax Amount:", tax_amount);

      
    } else if (taxable_income < 800000) {
        // Determine the tax rate based on age for taxable income less than or equal to 800000
         tax_result_popup.textContent =`Your overall income is  ${ taxable_income}`
    }
        // Calculate tax amount for taxable income less than or equal to 800000
 
    tax_result_popup.textContent =`Your overall income is  ${ taxable_income-tax_amount},Total tax is ${tax_amount.toFixed(2)}Ruppes`;
    
    popup.style.display = "block";
}

submit_button.addEventListener("click", function(event) {
     event.preventDefault(); 
    calculateTax();


});
second_button.addEventListener("click", function () {
    location.reload();
    
});


