let order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  function customerInfo(order) {
    // Adicione abaixo as informações necessárias.
    let deliveryPerson = order.order.delivery.deliveryPerson;
    let name = order.name;
    let telefone = order.phoneNumber;
    let street = order.address.street;
    let number = order.address.number;
    let apartment = order.address.apartment;

    console.log(`Olá, ${deliveryPerson}, entrega para: ${name}, Telefone: ${telefone}, R. ${street}, N°: ${number}, AP: ${apartment}`);
  }
  
  customerInfo(order);
  
  function orderModifier(order) {
    // Adicione abaixo as informações necessárias.
    order.name = 'Luiz Silva';
    order.payment.total = 50;
    let pizzas = Object.keys(order.order.pizza);

    console.log(`Olá, ${order.name}, o valor total de seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${order.order.drinks.coke.type} é de R$ ${order.payment.total},00`);
  }
  
  orderModifier(order);