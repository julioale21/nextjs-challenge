
<p align="center">
    <img width="400" src="https://www.minutentag.com/build/icons/logo-blanco.b2802349.svg">
   </p>

# Nextjs Challenge

In this challenge we want to build a beer e-commerce.

We have a file with all the products information (products.js), and the images we want to show for each product (one image per product).

We also have a separate file with stock and price information, which is in a different file because that information gets updated more frequently.

We want to build a Next.js 13 app with two pages: a Product Listing Page (PLP) that displays the brand and image of all the products (this page should be the home page); a Product Detail Page (PDP) that displays all the information for a single product.

Technical requirements:
 - Build an API endpoint that returns stock and price information for a given product SKU code.
 - The PDP must update the stock and price information every 5 seconds using the API endpoint.
 - The products.js file should not be modified.
 - The stock-price.js file should only be modified to test the update every 5 seconds requirement.
 - The PLP should be the home page
 - The PDP should be accessible through the URL /productId-productBrand (i.e. for a product with id 5 and brand "Modelo Especial", the URL should be /5-modelo-especial)
 - The API endpoint to get the stock and price information should be GET /api/stock-price/code (i.e. for a product SKU with code 123, the URL should be /api/stock-price/123)

Keep in mind that the prices are stored in cents, but should be displayed in dollars with 2 digits cents (e.g. if a product's price is 4350, then it should be shown as $43.50).


### Desktop Design

<div>
  <img src="./docs/screenshot-1.png">
</div>

<div>
  <img src="./docs/screenshot desktop detail.png">
</div>



### Mobile Design

<p align="center">
  <img src="./docs/mobile.png">
</p>

<p align="center">
  <img src="./docs/detail mobile.png">
</p>


### Project Structure

### Tools
- Nextjs 13
- React
- Typescript
- Chakra UI
- Axios
- React Slugify
- React Markdown

The files are structured as follow:

    ├── docs                 # doc for the readme
    ├── public               # Static files
    ├── src
        ├── app
          ├── components       # Stateless components
          ├── bd                Static files that work as database
          ├── api              # Backend files
          ├── models
          ├── services         # Servicios para conectar la App con el backend
          ├── constants
          ├── utils
    └── README.md            # The first page that the user will view when will visit the repository.
    .env
    

 
   
## Local Deployment
```
Clone repository

Excecute command npm install

Excecute command npm run dev
```

