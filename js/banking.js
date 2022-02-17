//handle deposit button
document.getElementById('diposit-button').addEventListener('click', function(){
    //get the amount deposited
    const depositInput = document.getElementById('diposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);
    
    // update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = parseFloat(previousDepositAmount + newDepositAmount);
    
    depositTotal.innerText = newDepositTotal;


    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previoousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previoousBalanceTotal + newDepositAmount; 
    balanceTotal.innerText = newBalanceTotal;
    



    //clear the deposit field
    depositInput.value = '';


});

//handle withdraw evet handler

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);

    //set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithDrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotal.innerText = newWithDrawTotal;


    //Update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal; 

    //clear withdraw input
    withdrawInput.value = '';
})