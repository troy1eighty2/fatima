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

