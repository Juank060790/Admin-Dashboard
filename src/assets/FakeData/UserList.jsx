import faker from "faker";

// Create user profile using faker with the following fields: id, profile picture, name, email, phone, number between 1 - 300, total spend in $, location

// Create a list of user using the above function and return it

export const UserList = () => {
  const list = [];
  let index = 1;
  const user = () => {
    return {
      id: index++,
      profilePicture: faker.image.avatar(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      total_order: faker.datatype.number({ min: 1, max: 300 }),
      totalSpend: faker.datatype.number({ min: 1, max: 30000 }),
      location: faker.address.city(),
    };
  };

  for (let i = 0; i < 40; i++) {
    list.push(user());
  }

  return list;
};
