// Code your solution in this file!

const returnFirstTwoDrivers = function (arr) {
  return newArr = [...arr.slice(0,2)]
}
const returnLastTwoDrivers = function (arr) {
  return newArr = [...arr.slice(-2)]
}


const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
];

function createFareMultiplier(num) {
  return function (fare) {
     return num * fare
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(arrayOfDrivers, fun) {
  return fun(arrayOfDrivers)
}
