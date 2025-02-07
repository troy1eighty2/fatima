Fatima is an ecommerce website using the MERN stack. The website has a store that individual users can view items and add and remove items to and from their cart. then they can checkout using paypals payment gate.

Models
- cart
- product

Dataflow

Shop Collection
- contains product documents
- can be added to cart which is an array 

Order Collection
- user clicks on checkout button which generates a new order
- the order is populated with the items from cart array and sent to the database
- payment gate activates and user is redirected to paypal

user enters app -> cart json? gets created with a uuid
user shops -> cart json? gets manipulated
cart checkout -> cart json? is logged as an order object on database, cart is cleared

64x64
navbar shrink 90
price under name
price flush with name
quantity box eqaul to sizes
reviews

ADMIN
- config
    - description
    - homeright pictures
    - gif
    - testomonials
    - shop

- order
  - all orders

