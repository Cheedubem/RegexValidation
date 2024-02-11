# Credit Card Validator

This JavaScript program validates credit card numbers and determines their types (Visa, Mastercard, or Invalid).

## Usage

To use this program:

1. Copy the provided JavaScript code into a `.js` file, such as `creditCardValidator.js`.

2. Run the program in a JavaScript environment that supports user input, such as a web browser.

3. When prompted, enter a credit card number.

4. The program will determine the type of the credit card (Visa, Mastercard, or Invalid) and display the result in an alert dialog.

## How It Works

The program utilizes regular expressions (regex) to validate credit card numbers. Here's how the regex patterns work:

- **Visa Pattern**: `^4[0-9]{12}(?:[0-9]{3})?$`

  - Explanation:
    - `^`: Asserts the start of the string.
    - `4`: Matches the first digit of Visa card numbers.
    - `[0-9]{12}`: Matches 12 digits following the first digit.
    - `(?:[0-9]{3})?`: Optionally matches an additional 3 digits, allowing for 15 or 16-digit Visa cards.
    - `$`: Asserts the end of the string.

- **Mastercard Pattern**: `^5[1-5][0-9]{14}$`
  - Explanation:
    - `^`: Asserts the start of the string.
    - `5`: Matches the first digit of Mastercard card numbers.
    - `[1-5]`: Matches the second digit, limited to the range 1 through 5.
    - `[0-9]{14}`: Matches 14 digits following the first two digits, for a total of 16 digits.
    - `$`: Asserts the end of the string.

The program validates the input credit card number against these regex patterns and returns the corresponding card type if a match is found.
