"use strict";

let grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Cyrus', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Jeff', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]

let isBoy = student => student.sex === "M";
let isGirl = student => student.sex === "F";

let getBoys = grades => (grades.filter(isBoy));
let getGirls = grades => (grades.filter(isGirl));

let average = grades => (grades.reduce((acc,curr) => (acc + curr.grade), 0) / grades.length);

let maxGrade = grades => (Math.max(...grades.map(student => student.grade)));
let minGrade = grades => (Math.min(...grades.map(student => student.grade)));

// Highest Grade
let highestGrade = maxGrade(grades);
console.log("Highest Grade: " + highestGrade);

//Lowest Grade
let lowestGrade = minGrade(grades);
console.log("Lowest Grade: " + lowestGrade);

// Highest Grade of Boys
let highestGradeBoys = maxGrade(getBoys(grades));
console.log("Highest Grade in Boys group: " + highestGradeBoys);

// Highest Grade of Girls
let highestGradeGirls = maxGrade(getGirls(grades));
console.log("Highest Grade in Girls group: " + highestGradeGirls);

// Lowest Grade of Boys
let lowestGradeBoys = minGrade(getBoys(grades));
console.log("Lowest Grade in Boys group: " + lowestGradeBoys);

// Lowest Grade of Girls
let lowestGradeGirls = minGrade(getGirls(grades));
console.log("Lowest Grade in Boys group: " + lowestGradeGirls)

