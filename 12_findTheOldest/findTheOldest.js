const findTheOldest = function(people) {
  return people.reduce((oldest, currentPerson) =>{
    const oldestAge = yearsLived(oldest.yearOfDeath, oldest.yearOfBirth);
    const currentAge = yearsLived(currentPerson.yearOfDeath, currentPerson.yearOfBirth);
    return (oldestAge > currentAge) ? oldest: currentPerson;
  });
};


const yearsLived = ((deathYear, birthYear) => {
  if (!deathYear) { deathYear = new Date().getFullYear(); }  
  return deathYear - birthYear;
});
// Do not edit below this line
module.exports = findTheOldest;


/* const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

const getAges = people.sort(function(a,b) {
  const lastGuy = a.yearOfDeath - a.yearOfBirth;
  const nextGuy = b.yearOfDeath - b.yearOfBirth;
  return (lastGuy > nextGuy) ? -1 : 1;
})

const getOldest = getAges.at(0);
const getOldestName = getOldest.name; */