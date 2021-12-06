import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getJokes().map((joke) => {
      return db.joke.create({ data: joke });
    }),
  );
}

seed();

function getJokes() {
  // shout-out to https://icanhazdadjoke.com/

  return [
    {
      name: 'Cumbieros',
      content: `¿Qué necesita un programador para bailar? Algo-ritmo`,
    },
    {
      name: 'Traman algo',
      content: `¿Por qué los árboles parecen algo sospechosos en los días soleados? Porque son sombríos`,
    },
  ];
}
