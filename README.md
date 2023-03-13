# E-Commerce Store

{add test badges here, all projects you build from here on out will have tests, therefore you should have github workflow badges at the top of your repositories: [Github Workflow Badges](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge)}

## Demo & Snippets

![Home-Page-Photo-Example](images\e-commerce home page.png)
![Single-Item-Photo-Example](images\e-commerce store single item.png)

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
