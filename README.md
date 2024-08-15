# React + Vite

Event Management Application

DB Design:
  objects:
   events:
    name
    venue
    images
    description
    price

    cart:
     cart_id
     events
     price
     subtotal
     grandtotal

    Users:
     name
     userId
     phone
     email
     address
     userType: seller | customer

Front End:
1.Normal customer:
   customer can view all events like wedding mahal and resots and photography somthing and add to cart then book the events but customer doesnot create a any new events and edit or delete 
2.Seller:
   seller only can create a new events and modify  

Back End:
   API 
1.Users:
   Register
   Login   
2.Events:
   Create and display all the events details with images.

DB- mongoDb Cloud:
  store the all data.   
   
    