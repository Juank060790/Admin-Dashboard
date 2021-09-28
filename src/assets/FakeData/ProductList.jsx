import faker from "faker";

// Create user profile using faker with the following fields: id, profile picture, name, email, phone, number between 1 - 300, total spend in $, location

// Create a list of user using the above function and return it

export const ProductList = () => {
  const list = [];
  let index = 1;
  const user = () => {
    return {
      id: index++,
      category: faker.commerce.department(),
      item: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(),
      in_stock: faker.datatype.number({ min: 1, max: 300 }),
      item_sold: faker.datatype.number({ min: 1, max: 300 }),
    };
  };

  for (let i = 0; i < 40; i++) {
    list.push(user());
  }

  return list;
};
