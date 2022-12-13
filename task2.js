const biodata = {
  name: "Rheza",
  age: 22,
  hobbies: ["Sepakbola", "Ngoding", "Ngegame"],
  isMarried: false,
  schoolList: {
    name: ["SDN 29 Dangin Puri", "SMP Budi Utomo", "SMA Budi Utomo"],
    yearIn: [2006, 2012, 2015],
    yearOut: [2012, 2015, 2018],
    major: [null, null, "IPA"],
  },
  skills: {
    skillName: ["Frontend", "Backend"],
    level: ["Advanced", "Beginner"],
  },
  interestInCoding: true,
};

console.log(biodata);
console.log(biodata.schoolList.name[0]);
console.log(biodata.schoolList.yearIn[0]);
