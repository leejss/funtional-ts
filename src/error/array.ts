const fetchAgeById = async (id: number) => {
  return {
    id,
    age: Math.floor(Math.random() * 100),
  };
};

const userIds = [1, 2, 3, 4, 5];

// ! Async callback has problem
const userWithAge = userIds.map(async (id) => {
  const user = await fetchAgeById(id);
  return user;
});

// map method does not wait for the async callback to finish

// ! Solution
// * Use Promise.all
const fetchUserWithAge = async (userIds: number[]) => {
  const users = await Promise.all(
    userIds.map(async (id) => {
      const user = await fetchAgeById(id);
      return user;
    }),
  );

  return users;
};
