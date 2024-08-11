# User actions

## By pages

Public

- `/products`: List of available products
- `/products/[productId]`: Product detail page with customization options
- `/customization`: Page to build custom products based on the available part & options
- `/cart`: Summary of user selection and where order will be created

Private

- `/users/[userId]/profile`:
- `/users/[userId]/orders`:

Admin management

- `/dashboard`: Private page to manage different features of the store
- `/dashboard/products`: Private page to manage product creation and update
- `/dashboard/parts`: Private page to manage creation of part, part options & variations rules
- `/dashboard/users`: Private page to manage users
- `/dashboard/orders`: Private page to manage orders

### Product Page (`/products/[productId]`)

The product detail page is where users can view detailed information about a specific product, such as a bicycle, and customize it according to their preferences before making a purchase.

- Live view: [https://facto-store.vercel.app/products/7e2d7ac1-cc4d-4bca-8030-60b6b997fd3e](https://facto-store.vercel.app/products/7e2d7ac1-cc4d-4bca-8030-60b6b997fd3e)
- Code: [page.tsx](../app/products/[productId]/page.tsx)
- Mockup: [image](./assets/product-page.png)

#### UI Presentation

- **Product Overview**: At the top of the page, users are presented with a product image (or a placeholder if no image is available), the product name ("Mountain Bike"), a brief description, and the average customer rating based on reviews (not included in the database).
- **Pre-configured Setup**: Below the overview, there's a recommended setup section that highlights a pre-configured set of parts chosen by Marcus. This setup includes various components like brakes, chains, and wheels, with each part's name and price clearly displayed.
- **Customization Section**: Users are provided with the option to further customize the product. This section is visually structured with various part categories (e.g., Brakes, Chains, Handlebars) and displays the available options for each category. Selected options are highlighted, and prices are updated in real-time as users make changes (client side action).
- **Dynamic Price Update**: At the bottom of the customization section, the total price is displayed and dynamically updates based on the user's selections.

#### Calculating Available Options

- **Retrieving Parts and Options**: The system retrieves parts and options using the `getPartsWithOptions()` method. The options are displayed within each category (e.g., Brakes, Chains) as selectable items. Selected options are highlighted, providing clear feedback to the user.
- **Stock and Availability**: The system checks the availability of each part option. Out-of-stock items are either greyed out, ensuring that users can only select available options.
- **Compatibility Rules**: The system uses the `variation_rules` table to enforce compatibility between selected parts. For example, if a user selects a specific wheelset, only compatible frame options will remain selectable, while incompatible ones will be disabled or hidden.

#### Price Calculation

- **Base Price and Additional Costs**: The price calculation begins with the base price of the product. As users select or change part options, the additional costs of those options are added to the base price. This is reflected in the dynamically updating total price displayed beneath the customization options.
- **Real-time Updates**: The total price is recalculated in real-time as users modify their selections, ensuring transparency in pricing and helping users stay within their budget.

### Add to Cart Action

The "Add to Cart" button allows users to proceed with purchasing their customized product after finalizing their selections.

#### Process Overview

1. **Final Validation**:
   - **Re-validation**: Upon clicking "Add to Cart," the system re-validates the selected options to ensure they are still in stock and compatible. This is crucial if there have been changes in stock or compatibility rules during the user's session.
   - **Error Handling**: If any selected part option is no longer available or becomes incompatible, the system will notify the user and prompt them to make new selections.

2. **Persisting the Selection**:
   - **Order Creation**: If the user doesn't already have an active order, the system creates a new order entry in the `order` table.
   - **Saving Selections**: The system records each selected part option in the `order_part_option` table, associating these with the order ID. This ensures that the user's customizations are accurately stored and can be retrieved later.
   - **Database Entries**: The specific part options chosen by the user are linked to the order, with each option's details (e.g., part name, price) being recorded.

3. **Cart Update**:
   - **Cart Content Update**: The system updates the user's cart to reflect the newly added customized product, showing the product's name, selected options, and the final price.
   - **User Feedback**: After adding the item to the cart, the UI provides immediate feedback, confirming that the item has been successfully added. The user is then typically redirected to the `/cart` page to review their selections or continue shopping.

### Conclusion

The user actions on the product page and the "Add to Cart" functionality are carefully designed to provide an intuitive and seamless shopping experience. The UI effectively guides users through the customization process, with real-time updates on pricing and availability. The system ensures that all selections are valid before they are persisted in the database, reducing the likelihood of errors and enhancing the overall user experience.
