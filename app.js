function validateCreditCard(cardNumber) {
  // Define regex patterns for Visa and Mastercard
  const visaPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
  const mastercardPattern = /^5[1-5][0-9]{14}$/;

  // Test the input card number against each pattern
  if (visaPattern.test(cardNumber)) {
    return "Visa";
  } else if (mastercardPattern.test(cardNumber)) {
    return "Mastercard";
  } else {
    return "Invalid";
  }
}

// Function to prompt the user for input and test the credit card validation
function testCreditCardValidation() {
  const cardNumber = prompt("Enter your credit card number:");
  const cardType = validateCreditCard(cardNumber);
  alert(`The card type is: ${cardType}`);
}
