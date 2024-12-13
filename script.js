function calculatePremium() {
    const targetAmount = parseFloat(document.getElementById('targetAmount').value);
    const timePeriod = parseFloat(document.getElementById('timePeriod').value);
    const rateOfReturn = parseFloat(document.getElementById('rateOfReturn').value);

    // Input validation
    if (isNaN(targetAmount) || isNaN(timePeriod) || isNaN(rateOfReturn) || targetAmount <= 0 || timePeriod <= 0 || rateOfReturn <= 0) {
        document.getElementById('premiumResult').textContent = "Please enter valid positive values for all fields.";
        return;
    }

    // Convert rate of return to monthly rate (in decimal)
    const monthlyRate = (rateOfReturn / 100) / 12;

    // Calculate the total number of months
    const months = timePeriod * 12;

    // Calculate the monthly premium using the formula
    const premium = targetAmount * monthlyRate / (Math.pow(1 + monthlyRate, months) - 1);

    // Display the result
    document.getElementById('premiumResult').textContent = `Monthly Premium: ₹${premium.toFixed(2)}`;
}
