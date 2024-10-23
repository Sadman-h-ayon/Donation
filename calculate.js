
function calculateNewValues(donationAmount, cardNumber) {
    let currentDonationAmount;
    
    switch (cardNumber) {
        case 1:
            currentDonationAmount = getCurrentDonation1();
            break;
        case 2:
            currentDonationAmount = getCurrentDonation2();
            break;
        case 3:
            currentDonationAmount = getCurrentDonation3();
            break;
        default:
            alert("Invalid card number.");
            return;
    }

    
    const userBalanceElement = document.getElementById("my-taka");
    const currentUserBalance = parseFloat(userBalanceElement.innerText);

    
    if (donationAmount > currentUserBalance) {
        alert("Insufficient balance. Please enter a smaller donation amount.");
        return;
    }

    
    const newDonationAmount = currentDonationAmount + donationAmount;
    const newUserBalance = currentUserBalance - donationAmount;
    
    
    switch (cardNumber) {
        case 1:
            updateDonationAmount1(newDonationAmount);  
            updateDonationHistory(donationAmount, "famine-2024 at Feni, Bandladesh");
            document.getElementById("donate").value = "";
            break;
        case 2:
            updateDonationAmount2(newDonationAmount);
            updateDonationHistory(donationAmount, "Aid for Injured in the Quota Movement, Bandladesh");
            document.getElementById("donate2").value = "";
            break;
        case 3:
            updateDonationAmount3(newDonationAmount);
            updateDonationHistory(donationAmount, "Flood Relief in Feni, Bangladesh");
            document.getElementById("donate3").value = "";
            break;
    }

    updateUserAccount(newUserBalance);
    
    showThankYouModal();
}
console.log("Donation submitted with amount:", donationAmount);



















