const findTheOldest = function(people) {
  const byLifeTime = people.sort((personA, personB) => {
    const date = (new Date()).getFullYear();
    return findAge(personA) - findAge(personB);
  });
  
  return byLifeTime[byLifeTime.length - 1];
};

const findAge = function(person) {
  return (person.hasOwnProperty('yearOfDeath') ? person.yearOfDeath - person.yearOfBirth : date - person.yearOfBirth);
}

// Do not edit below this line
module.exports = findTheOldest;
