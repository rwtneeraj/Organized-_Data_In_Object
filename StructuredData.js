const data = [
  {
    name: "Rahul",
    age: 30,
    profession: "Software Engineer",
    city: "Pune",
    education: "Computer Science",
    hasVehicle: true,
    isEmployed: true,
    hobbies: [
      {
        name: "playing",
        category: "chess",
      },
      {
        name: "gardening",
        category: "gardening",
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
    isEmployed: false,
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
        category: "rose garden",
      },
      {
        name: "reading",
        category: "historical fiction",
      },
    ],
    hasVehicle: false,
    isEmployed: true,
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
    isEmployed: false,
  },
];

//--------------------------------------------------------------------------------------------

console.log("1. How many individuals are currently employed?");
const noOfEmployed = (data) => data.filter(({ isEmployed }) => isEmployed);
console.log(noOfEmployed(data).length);

//--------------------------------------------------------------------------------------------

console.log("2. How many people own a car?");
const totalPeopleHaveOwnCar = (data) =>
  data.filter(({ hasVehicle }) => hasVehicle);
console.log(totalPeopleHaveOwnCar(data).length);
//--------------------------------------------------------------------------------------------

console.log("3. How many pets are fully vaccinated?");

const totalFullyVaccinatedPets = (data) => {
  const allPets = data.flatMap(({ pets }) => pets);
  return allPets.filter(({ isFullVaccinated }) => isFullVaccinated).length;
};

console.log(totalFullyVaccinatedPets(data));
//--------------------------------------------------------------------------------------------

console.log(
  "4 .What are the names of all the pets, and what type of animal is each?"
);

const personPetsDetails = (data) => {
  const allPets = data.flatMap(({ pets }) => pets);
  return allPets.map(({ name, petType }) => ({ name, petType }));
};

console.log(personPetsDetails(data));
//--------------------------------------------------------------------------------------------

console.log("5. Which cities do the individuals live in?");

const citiesDetails = function (data) {
  return data.flatMap(({ city }) => city);
};

console.log(citiesDetails(data));
//--------------------------------------------------------------------------------------------

console.log("6. How many hobbies are shared across the group? What are they?");
const hobbiesName = (data) => {
  const allPeopleHobbies = data.flatMap(({ hobbies }) => hobbies);
  return allPeopleHobbies.map(({ category }) => category);
};

const totalHobbiesAndTheirName = (data) => {
  const allHobbies = hobbiesName(data);
  return { hobbies: allHobbies, total: allHobbies.length };
};

console.log(totalHobbiesAndTheirName(data));
//--------------------------------------------------------------------------------------------

console.log("7. How many pets belong to people who are currently unemployed?");

const totalPetsBelongsToUnemployed = (data) => {
   return  data.filter(({ isEmployed }) => !isEmployed).flatMap(({ pets }) => pets).length;;
}

console.log(totalPetsBelongsToUnemployed(data));
//--------------------------------------------------------------------------------------------

console.log(
  "8. What is the average age of the individuals mentioned in the passage?"
);

const averageAge = function (data) {
  const listOfAges = data.flatMap(({ age }) => age);
  return listOfAges.reduce((sum, element) => sum + element) / listOfAges.length;
};

console.log(averageAge(data));
//--------------------------------------------------------------------------------------------

console.log(
  "9. How many individuals have studied computer science, and how many of them have pets?"
);

const totalCsGraduatedIndividuals = (data) => {
  const csIndividuals = data.filter(({ education }) => education === "Computer Science")
  const totalIndividuals = csIndividuals.length;
  const totalPets = csIndividuals.flatMap(({ pets }) => pets).length;
  return [totalIndividuals, totalPets];
}

console.log(totalCsGraduatedIndividuals(data));
//------------------------------------------------------------------------------------------
console.log("10. How many individuals own more than one pet?");

const totalIndividualOwnPet = (data) => {
  return data.filter(({ pets }) => pets.length > 1).length;
};

console.log(totalIndividualOwnPet(data));

//--------------------------------------------------------------------------------------------

console.log("11. Which pets are associated with specific favorite activities?");

const petsWithSpecificActivity = () => {
  const allPets = data.flatMap(({ pets }) => pets);

  return allPets.flatMap(({ name, favouriteActivity }) => [
    name,
    favouriteActivity,
  ]);
};

console.log(petsWithSpecificActivity(data));
//--------------------------------------------------------------------------------------------

console.log(
  "12. What are the names of all animals that belong to people who live in Bangalore or Chennai"
);
const getNameOfAnimals = (data) => {
  const peopleWhoLiveInBengaloreAndChennai = data.filter(
    ({ city }) => city === "Bangalore" || city === "Chennai"
  );

  const animals = peopleWhoLiveInBengaloreAndChennai.flatMap(
    ({ pets }) => pets
  );

  return animals.flatMap(({ name }) => name);
};

console.log(getNameOfAnimals(data));

//---------------------------------------------------------------------------------------------

console.log(
  "13. How many vaccinated pets belong to people who do not own a car?"
);

const totalVaccinatedPetsTheirOwnerHaveNoCar = (data) => {
  const peopleHaveNoCar = data.filter((person) => !person.hasVehicle);
  const totalPetsOfThosePeople = peopleHaveNoCar.flatMap(({ pets }) => pets);
  return totalPetsOfThosePeople.filter((isVaccinated) => isVaccinated).length;
};

console.log(totalVaccinatedPetsTheirOwnerHaveNoCar(data));
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

const collectOccurencesOf = (uniquePetType) => {
  return (occurencess, petType) => {
    return petType === uniquePetType ? occurencess + 1 : occurencess;
  };
};

const findOccurencessOf = (allPetsType) => {
  return (uniquePetType) => {
    return {
      type: uniquePetType,
      occurencess: allPetsType.reduce(collectOccurencesOf(uniquePetType), 0),
    };
  };
};

const getMostCommonType = (data) => {
  const allPetsType = data
    .flatMap(({ pets }) => pets)
    .map(({ petType }) => petType);
  const uniquePetsType = removeDublication(allPetsType);
  const petsTypeAndOccurences = uniquePetsType.map(
    findOccurencessOf(allPetsType)
  );

  return petsTypeAndOccurences.reduce((mostCommonPet, pet) => {
    return mostCommonPet.occurencess > pet.occurencess ? mostCommonPet : pet;
  });
};

console.log(getMostCommonType(data));
//---------------------------------------------------------------------------------------------

console.log("15. How many individuals have more than two hobbies?");

const totalIndividualsHaveMoreThanTwoHobbies = (data) => data.filter(
  ({ hobbies }) => hobbies.length >= 2
).length;

console.log(totalIndividualsHaveMoreThanTwoHobbies(data));

//---------------------------------------------------------------------------------------------

console.log("16. How many individuals share at least one hobby with Ramesh?");

const totalIndividualShareHobbyWithRamesh = (data) => {
  const rameshData = data.find(({ name }) => name === "Ramesh");
  const hobbiesOfRamesh = rameshData.hobbies.map(({ name }) => name);
  
  return data.reduce((count, person) => {
    if (person.name === "Ramesh") {
      return count;
    }

    const isPersonHasShare = person.hobbies.some(({ name }) =>
      hobbiesOfRamesh.includes(name)
    );

    return isPersonHasShare ? count + 1 : count;
  }, 0);
};

console.log(totalIndividualShareHobbyWithRamesh(data));
//---------------------------------------------------------------------------------------------

console.log("17. Which pet is the youngest, and what is its name?");

const sortInAscending = (pets) => {
  return pets.sort((a, b) => {
    return a.age - b.age;
  });
};

const getYoungestPetNameAndType = (data) => {
  const allPets = data.flatMap(({ pets }) => pets);
  const petSortInAscending = sortInAscending(allPets);
  return [petSortInAscending[0].petType, petSortInAscending[0].name];
};

console.log(getYoungestPetNameAndType(data));

//---------------------------------------------------------------------------------------------

console.log(
  "18. What types of books are mentioned as interests, and who reads them?"
);

const getBookTypeAndReader = (data) => {
  const peopleInterestInBooks = data.filter(({ hobbies }) =>
    hobbies.some(({ name }) => name === "reading")
  );

  return peopleInterestInBooks.map((person) =>
    [
      person.name,
      person.hobbies
        .filter(({ name }) => name === "reading")
        .map(({ category }) => category),
    ].flat()
  );
};

console.log(getBookTypeAndReader(data));

//---------------------------------------------------------------------------------------------

console.log(
  '19. How many individuals live in cities starting with the letter "B"?'
);

const allIndividualsWithCities = (data) => data.filter((person) => {
  if (person.city[0] === "B") {
    return person;
  } 
})

console.log(allIndividualsWithCities(data).length);

//---------------------------------------------------------------------------------------------

console.log("20. Which individuals do not own any pets?");

const individualsDoNotOwnAnyPets = (data) => data.filter((person) => {
  return person.pets.length === 0 ? person.name : "";
});

console.log(individualsDoNotOwnAnyPets(data));
