let calculateLoan = () => {
    let LoanAmountBox = document.querySelector('#amount');
    let interestToBePaidBox = document.querySelector('#interest');
    let emiToBePaidBox = document.querySelector('#emi');
    let rangeBox = document.querySelector('#loan'); // Ensure it's within the function scope

    LoanAmountBox.value = rangeBox.value; // lowercase 'value'
    interestToBePaidBox.value = rangeBox.value * 0.15;

    let a = Number(rangeBox.value);
    let b = Number(interestToBePaidBox.value);
    
    emiToBePaidBox.value = Math.round((a + b) / 24); // Correct use of Math object
}

let rangeBox = document.querySelector('#loan');
rangeBox.addEventListener("input", function() {
    calculateLoan();
});
