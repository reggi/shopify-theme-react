# Shopify Theme / React

The two main files:

* [Fetching product json](https://github.com/reggi/shopify-theme-react/blob/master/assets/test.jsx)
* [Routing every template](https://github.com/reggi/shopify-theme-react/blob/master/snippets/routes.liquid)

What was really cool was the polling on the ajax request to automatically update the state of a set JSON variable. For instance if I had a product type set as "Shirt" and changed it to "Pants" in the admin, it would automatically update on the page without refreshing.

