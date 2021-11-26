// select *  from customers where _id = 'taopik'
db.customers.find({
    _id: "taopik"
});

// select * from customers where name = 'Muhamad Taopik'
db.customers.find({
    name: "Muhamad Taopik"
});

// select * from products where price = 2000
db.products.find({
    price: 2000
});

// select * from orders where items.product_id = 1
db.orders.find({
    "items.product_id": 1
});
