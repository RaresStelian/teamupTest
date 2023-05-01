# React Native Test Description
The project goal is to build a small part of an E-commerce App using React Native with the following screens: Register, Login, List products and Product details.

## Implementation Details

### Backend API
The native app **MUST** consume the following API: https://test-api.updivision.work/docs/1.0/overview

### Registration screen
The registration screen/form will have the following fields: Name, Email, Education start date, Education end date, Password, Confirm password and a check for “I agree terms and conditions”.

All the fields are required and should display the error messages from the API. Optionally should be validated in the frontend (rules: Minimum 2 characters for name, Valid email, Education start date < Education end date, Password with min 6 characters characters and check to contain at least one uppercase, one lowercase and a number).


### Login screen
The login screen will contain only email and password and should display the error messages from the API.

For the optional validation the same rules as for registration are applied.


### Product listing screen
Display a list of products with name, image, price and details button. When the button is pressed a pop-up will be opened that contains the product description and add to cart button. To view the products list you must be authenticated.

Optionally the product listing will have pagination / infinite loading.

The cart button doesn’t need to work.

### Wireframes
The wireframes should be used **only as a visual guideline** for the implementation.

## Note
The usage of component libraries and tools from the React Native ecosystem is allowed and encouraged.

## Project Tasks
**1. Implement with React Native "Registration screen" and send request to the API.**

DETAILED EXPLANATION:
The registration screen/form will have the following fields: Name, Email, Education start date, Education end date, Password, Confirm password and a check for “I agree terms and conditions”. 

All the fields are required and should display the error messages from the API. 

Optionally, should be validated in the frontend (rules: Minimum 2 characters for name, Valid email, Education start date < Education end date, Password with min 6 characters characters and check to contain at least one uppercase, one lowercase and a number).

API Documentation: https://test-api.updivision.work/docs/1.0/register

**2. Implement with React Native "Login screen" and send request to the API.**

DETAILED EXPLANATION: 
The login screen will contain only email and password and should display the error messages from the API. For the optional validation the same rules as for registration are applied.

API Documentation: https://test-api.updivision.work/docs/1.0/login

**3. Implement with React Native "Products list screen" and send request to the API.**

DETAILED EXPLANATION:
Display a list of products with name, image, price and details button. When the button is pressed a new screen stack should be added that contains the product description and add to cart button.

To view the products list you must be authenticated. Optionally the product listing will have pagination / infinite loading. The cart button doesn’t need to work.

API Documentation: https://test-api.updivision.work/docs/1.0/list

**4. Implement Products detail on the "List of products screen"**

DETAILED EXPLANATION:
Add a new screen stack when clicking "Details", on product listing, that contains the image, title, price, product description and add to cart button. The cart button doesn’t need to work.

You already have all the details needed in the API response for listing.

API Documentation: https://test-api.updivision.work/docs/1.0/list

**5. (Optional) Add validation on login and registration forms**

**6. (Optional) Products list with pagination or infinite loading**
