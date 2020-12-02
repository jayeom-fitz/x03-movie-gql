const jayeom = {
  name: "JayEom",
  age: 28,
  gender: "male"
}

const resolvers = {
  Query : {
    person: () => jayeom
  }
};

export default resolvers;