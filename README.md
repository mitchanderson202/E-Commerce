# E-Commerce Store

## Demo & Snippets

<img width="973" alt="e-commerce-home-page" src="https://user-images.githubusercontent.com/78459081/224606026-054c0366-6628-4250-ad7e-8e59e73fa0a0.png">
<img width="887" alt="e-commerce-store-single-item" src="https://user-images.githubusercontent.com/78459081/224606046-3d0570fd-4d04-49d7-b063-5a280609d47e.png">

---

## Requirements

- Grid of products.
- Carousel of features products.
- Product page that allows you to add to cart and select a variation of the product (color, size, etc).
- Data from Firebase that shows: name, price, image url, favourited or not. All data is stored in Firestore and fetched, nothing to be stored in the react app.

## Stack

- React
- SCSS
- Firebase-Firestore
- React Router

---

## Build Steps

This is a Vite app using React.

- Fork this repo
- npm install

---

## Design Goals

- I wanted a Nav bar that didn't change based on each page.
- I have a description area that probably isn't necessary, but hypothetically a marketing team would like to write something for it.
- I love the idea of the Carousel on the main page where you can scroll through "hot products" and having an "All Products" page to check everything out. In this case it's only t-shirts, but if the store was to grow it could be categorized.
- Cart page and checkout to show individual items with a quantity.

---

## Known issues

- Nothing to let the user know something has been "Added to cart".
- The cart doesn't stack items, just shows everything individually which can lead to a huge page and look silly.

---

## Future Goals

- Add another product
- Make the Cart interactive and show quantity and have sizes.
- Add tests

---

## Change logs

- 13/03/22. Updated Readme.
- 14/04/2023. Updated the Add to cart button to display text with a 2 second timeout.
