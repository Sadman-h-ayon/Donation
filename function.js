

function getCurrentDonation1() {
    const donationText = document.getElementById("donation-1").innerText;
    return parseFloat(donationText);
}

function getCurrentDonation2() {
    const donationText = document.getElementById("donation-2").innerText;
    return parseFloat(donationText);
}

function getCurrentDonation3() {
    const donationText = document.getElementById("donation-3").innerText;
    return parseFloat(donationText);
}


function getUserDonationAmount1() {
    const inputField = document.getElementById("donate");
    return parseFloat(inputField.value);
}

function getUserDonationAmount2() {
    const inputField = document.getElementById("donate2");
    return parseFloat(inputField.value);
}

function getUserDonationAmount3() {
    const inputField = document.getElementById("donate3");
    return parseFloat(inputField.value);
}

function updateDonationAmount1(newAmount) {
    const donationElement = document.getElementById("donation-1");
    donationElement.innerText = newAmount.toFixed(2);  
}

function updateDonationAmount2(newAmount) {
    const donationElement = document.getElementById("donation-2");
    donationElement.innerText = newAmount.toFixed(2);
}

function updateDonationAmount3(newAmount) {
    const donationElement = document.getElementById("donation-3");
    donationElement.innerText = newAmount.toFixed(2);
}


function updateUserAccount(newBalance) {
    const userBalanceElement = document.getElementById("my-taka");
    userBalanceElement.innerText = newBalance.toFixed(2); 
}


document.getElementById("act").addEventListener("click", function() {
    const donationAmount = getUserDonationAmount1();  
    if (!isNaN(donationAmount) && donationAmount > 0) {
        calculateNewValues(donationAmount, 1);  
    } else {
        alert("Please enter a valid donation amount for card 1.");
    }
});

document.getElementById("act2").addEventListener("click", function() {
    const donationAmount = getUserDonationAmount2();  
    if (!isNaN(donationAmount) && donationAmount > 0) {
        calculateNewValues(donationAmount, 2); 
    } else {
        alert("Please enter a valid donation amount for card 2.");
    }
});

document.getElementById("act3").addEventListener("click", function() {
    const donationAmount = getUserDonationAmount3(); 
    if (!isNaN(donationAmount) && donationAmount > 0) {
        calculateNewValues(donationAmount, 3); 
    } else {
        alert("Please enter a valid donation amount for card 3.");
    }
});





///////////
function getCurrentDateTime() {
    const currentDate = new Date();
    
    // Convert to Bangladesh Standard Time (UTC+6)
    const bangladeshOffset = 6 * 60 * 60 * 1000;
    const bangladeshTime = new Date(currentDate.getTime() + bangladeshOffset);

    return bangladeshTime.toString();
}
// History
function updateDonationHistory(amount, cause) {
    const historyElement = document.getElementById("amount-history");
    
    const newHistoryEntry = `
        <div class="my-16 mx-auto w-3/4 border bg-white rounded p-4">
            <p class="font-bold text-black">${amount} Taka is Donated for ${cause}</p>
            <p class="text-sm text-gray-500">Date: ${getCurrentDateTime()} (Bangladesh Standard Time)</p>
        </div>
    `;

   
    historyElement.insertAdjacentHTML('beforeend', newHistoryEntry);
}





function showThankYouModal() {
    const modal = document.getElementById('thank-you-modal');
    modal.classList.remove('hidden');  // Remove the hidden class to display the modal

    const closeModalButton = document.getElementById('close');
    closeModalButton.addEventListener('click', function() {
        modal.classList.add('hidden');  // Add the hidden class to hide the modal when closing
    });
}



