import { faker } from "@faker-js/faker";

const GENRES = {
  CLASSICAL: "Classical",
  ROCK: "Rock",
  POP: "Pop",
  REGGAE: "Reggae",
  ELECTRO_SWING: "Electro Swing",
};

const musicianGenerator = () => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const genre = faker.helpers.arrayElement([
    GENRES.CLASSICAL,
    GENRES.ROCK,
    GENRES.POP,
    GENRES.REGGAE,
    GENRES.ELECTRO_SWING,
  ]);
  const producer = faker.company.name();
  return {
    firstName,
    lastName,
    genre,
    producer
  };
};

export default musicianGenerator;
