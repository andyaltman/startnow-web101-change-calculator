$('#calculate-change').on('click',calculateChange);

function calculateChange() {
    var amountDue = $('#amount-due').val();
    var amountReceived = $('#amount-received').val();
    var change = Math.round((amountReceived-amountDue)*100)/100;
    var dollars = Math.floor(change);
    change = Math.round((change-dollars)*100)/100;
    var quarters = Math.floor(change/0.25);
    change = Math.round((change - quarters*0.25)*100)/100;
    var dimes = Math.floor(change/0.1);
    change = Math.round((change - dimes*0.1)*100)/100;
    var nickels = Math.floor(change/0.05);
    change = Math.round((change-nickels*.05)*100)/100;
    var pennies = Math.floor(change/0.01);
    change = Math.round((change - pennies*0.01)*100)/100;
    displayChange(dollars,quarters,dimes,nickels,pennies);
}

function displayChange(dollars,quarters,dimes,nickels,pennies) {
    $('#dollars-output').text(dollars);
    $('#quarters-output').text(quarters);
    $('#dimes-output').text(dimes);
    $('#nickels-output').text(nickels);
    $('#pennies-output').text(pennies);
}


// // Write your JavaScript here

//     Integration
//       10) should display correct change
//       11) should display correct change