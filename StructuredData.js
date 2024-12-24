const data = [
  {
    name: "Rahul",
    age: 30,
    profession: "Software Engineer",
    city: "Pune",
    education: "Computer Science",
    hasVehicle: true,
    employmentStatus: true,
    hobbies: [
      {
        name: "chess",
        category: "",
      },
      {
        name: "gardening",
        category: "",
      },
    ],
    pets: [
      {
        name: "Max",
        age: 4,
        petType: "Dog",
        vaccinated: true,
        isFullVaccinated: true,
        favouriteActivity: ["loves playing fetch in the park"],
      },
    ],
  },
  {
    name: "Ananya",
    age: 30,
    profession: "",
    city: "Bangalore",
    education: "Computer Science",
    hasVehicle: false,
    employmentStatus: false,
    pets: [
      {
        name: "kiwi",
        age: 3,
        petType: "parrot",
        vaccinated: true,
        isFullVaccinated: false,
        favouriteActivity: ["mimics her voice"],
      },
    ],
    hobbies: [
      {
        name: "cooking",
        category: "Italian recipes",
      },
    ],
  },
  {
    name: "Ramesh",
    age: 45,
    profession: "Business Owner",
    city: "jaipur",
    pets: [
      {
        name: "bella",
        age: 3,
        petType: "cat",
        vaccinated: true,
        isFullVaccinated: true,
        favouriteActivity: ["loves lounging in the sun"],
      },
      {
        name: "leo",
        age: 3,
        petType: "cat",
        vaccinated: true,
        isFullVaccinated: true,
        favouriteActivity: ["loves lounging in the sun"],
      },
    ],
    hobbies: [
      {
        name: "gardening",
        catoegory: "rose garden",
      },
      {
        name: "reading",
        category: "historical fiction",
      },
    ],
    hasVehicle: false,
    employmentStatus: true,
  },
  {
    name: "kavya",
    age: 28,
    profession: "",
    city: "Chennai",
    pets: [
      {
        name: "snowy",
        age: 2,
        petType: "rabbit",
        vacinated: true,
        IsFullVaccinated: false,
        favouriteActivity: [
          "hopping around her backyard",
          "nibbling on carrots",
        ],
      },
    ],
    hobbies: [
      { name: "reading", category: "fantensy Novels" },
      { name: "binge-watching", category: "sci-fi shows" },
    ],
    hasVehicle: false,
    employmentStatus: false,
  },
];

//--------------------------------------------------------------------------------------------

console.log("1. How many individuals are currently employed?");
const noOfEmployed = (data) =>
  data.filter(({ employmentStatus }) => employmentStatus);
console.log(noOfEmployed(data).length);
//--------------------------------------------------------------------------------------------

console.log("2. How many people own a car?");
const totalPeopleHaveOwnCar = (data) =>
  data.filter(({ hasVehicle }) => hasVehicle);
console.log(totalPeopleHaveOwnCar(data).length);
//--------------------------------------------------------------------------------------------

console.log("3. How many pets are fully vaccinated?");

const allPets = data.flatMap(({ pets }) => pets);
const totalFullyVaccinatedPets = (allPets) =>
  allPets.filter(({ isFullVaccinated }) => isFullVaccinated).length;

console.log(totalFullyVaccinatedPets(allPets));
//--------------------------------------------------------------------------------------------

console.log(
  "What are the names of all the pets, and what type of animal is each?"
);

const personPetsDetails = (pets) => {
  return pets.map(({ name, petType }) => ({ name, petType }));
};

console.log(personPetsDetails(allPets));
//--------------------------------------------------------------------------------------------

console.log("5. Which cities do the individuals live in?");

const citiesDetails = function (data) {
  return data.flatMap(({ city }) => city);
};

console.log(citiesDetails(data));
//--------------------------------------------------------------------------------------------

console.log("6. How many hobbies are shared across the group? What are they?");

const allPeopleHobbies = (data) => data.flatMap(({ hobbies }) => hobbies);
const hobbiesName = (data) =>
  allPeopleHobbies(data).map(({ category }) => category);

// const totalHobbiesAndTheirNames = hobbiesName.reduce(
//   (uniquesHobbies, hobby) => {
//     return uniquesHobbies.includes(hobby)
//       ? uniquesHobbies
//       : [...uniquesHobbies, hobby];
//   },
//   []
// );

console.log(
  "Hobbies : ",
  hobbiesName(data),
  "total : ",
  hobbiesName(data).length
);
//--------------------------------------------------------------------------------------------

console.log("7. How many pets belong to people who are currently unemployed?");
const noUnemployedPerson = (data) =>
  data.filter(({ employmentStatus }) => !employmentStatus);

const numberOfPets = (data) =>
  noUnemployedPerson(data).flatMap(({ pets }) => pets).length;

console.log(numberOfPets(data));
//--------------------------------------------------------------------------------------------

console.log(
  "8. What is the average age of the individuals mentioned in the passage?"
);

const listOfAges = data.flatMap(({ age }) => age);

const averageAge = function (listOfAges) {
  return listOfAges.reduce((sum, element) => sum + element) / listOfAges.length;
};

console.log(averageAge(listOfAges));
//--------------------------------------------------------------------------------------------

console.log(
  "9. How many individuals have studied computer science, and how many of them have pets?"
);

const csGraduatedIndividuals = data.filter(
  ({ education }) => education === "Computer Science"
);

const totalIndividuals = csGraduatedIndividuals.length;
const totalPets = csGraduatedIndividuals.flatMap(({ pets }) => pets).length;

console.log(totalIndividuals, totalPets);
//------------------------------------------------------------------------------------------
console.log("10. How many individuals own more than one pet?");

const totalIndividualOwnPet = (data) => {
  return data.filter(({ pets }) => pets.length > 1).length;
};

console.log(totalIndividualOwnPet(data));

//--------------------------------------------------------------------------------------------

console.log("11. Which pets are associated with specific favorite activities?");
console.log(
  allPets.flatMap(({ name, favouriteActivity }) => [name, favouriteActivity])
);

//--------------------------------------------------------------------------------------------

console.log(
  "12. What are the names of all animals that belong to people who live in Bangalore or Chennai"
);

const peopleWhoBelongToBengalore = data.filter(
  ({ city }) => city === "Bangalore"
);
const animals = peopleWhoBelongToBengalore.flatMap(({ pets }) => pets);
const nameOfAnimals = animals.flatMap(({ name }) => name);

console.log(nameOfAnimals);

//---------------------------------------------------------------------------------------------

console.log(
  "13. How many vaccinated pets belong to people who do not own a car?"
);
const peopleHaveNoCar = data.filter((person) => !person.hasVehicle);
const totalPetsOfThosePeople = peopleHaveNoCar.flatMap(({ pets }) => pets);
const totalVacinatedPets = totalPetsOfThosePeople.filter(
  (isVaccinated) => isVaccinated
).length;

console.log(totalVacinatedPets);
//---------------------------------------------------------------------------------------------
console.log("14. What is the most common type of pet among the group?");
const getUniqueElementArray = (noDublicate, element) => {
  if (!noDublicate.includes(element)) {
    noDublicate.push(element);
  }

  return noDublicate;
};

const removeDublication = (array) => {
  return array.reduce(getUniqueElementArray, []);
};

const allPetsType = allPets.flatMap((pet) => pet.petType);
const uniquePetsType = removeDublication(allPetsType);

const collectOccurencesOf = (uniquePetType) => {
  return (occurencess, petType) => {
    return petType === uniquePetType ? occurencess + 1 : occurencess;
  };
};

const findOccurencessOf = (uniquePetType) => {
  return {
    type: uniquePetType,
    occurencess: allPetsType.reduce(collectOccurencesOf(uniquePetType), 0),
  };
};

const petsTypeAndOccurences = uniquePetsType.map(findOccurencessOf);
const mostCommonPet = petsTypeAndOccurences.reduce((mostCommonPet, pet) => {
  return mostCommonPet.occurencess > pet.occurencess ? mostCommonPet : pet;
});

const mostCommonPetName = mostCommonPet.name;
console.log(mostCommonPet);
//---------------------------------------------------------------------------------------------

console.log("15. How many individuals have more than two hobbies?");

const totalIndividualsHaveMoreThanTwoHobbies = data.filter(
  ({ hobbies }) => hobbies.length >= 2
).length;

console.log(totalIndividualsHaveMoreThanTwoHobbies);

//---------------------------------------------------------------------------------------------

console.log("16. How many individuals share at least one hobby with Ramesh?");

const rameshdata = data.filter((person) => {
  if (person.name === "Ramesh") return person;
});

const hobbiesOfRamesh = rameshdata
  .flatMap(({ hobbies }) => hobbies)
  .flatMap((hobby) => hobby.name);

const individualsShare = data.reduce((count, person) => {
  if (person.name === "Ramesh") {
    return count;
  }

  const isPersonHasShare = person.hobbies.some((hobby) =>
    hobbiesOfRamesh.includes(hobby.name)
  );

  return isPersonHasShare ? count + 1 : count;
}, 0);

console.log(individualsShare);
//---------------------------------------------------------------------------------------------

console.log("17. Which pet is the youngest, and what is its name?");

const sortedPetsInAscending = allPets.sort((a, b) => {
  return a.age - b.age;
});

console.log([sortedPetsInAscending[0].petType, sortedPetsInAscending[0].name]);

//---------------------------------------------------------------------------------------------

console.log(
  "18. What types of books are mentioned as interests, and who reads them?"
);

const peopleInterestInBooks = data.filter(({ hobbies }) =>
  hobbies.some((hobby) => hobby.name === "reading")
);
const bookNameAndReader = peopleInterestInBooks.map((person) =>
  [
    person.name,
    person.hobbies.filter((hobby) => hobby.name === "reading"),
  ].flat()
);

console.log(bookNameAndReader);

// console.log(allhobbies);
//---------------------------------------------------------------------------------------------

console.log(
  '19. How many individuals live in cities starting with the letter "B"?'
);
const allIndividualsWithCities = data.filter((person) => {
  if (person.city[0] === "B") {
    return person;
  }
}).length;
console.log(allIndividualsWithCities);

//---------------------------------------------------------------------------------------------

console.log("20. Which individuals do not own any pets?");

const individualsDoNotOwnAnyPets = data.filter((person) => {
  return person.pets.length === 0 ? person.name : "";
});

console.log(individualsDoNotOwnAnyPets);
