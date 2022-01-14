const personneArray = [
  {
    name: "name1",
    role: "Teacher",
  },
  {
    name: "name2",
    role: "Student",
  },
  {
    name: "name3",
    role: "Student",
  },
  {
    name: "name4",
    role: "Student",
  },
];

function filteredRoles(personneArray, role = "Teacher"){
  let newArray = [];
  // Code the function here.
  //console.log((personneArray.filter(element => element.role === "Student")).lenght);
  if((personneArray.filter(element => element.role === role)).lenght === 0){
    console.log("toto");
  }
  else{
    if(role !== "Teacher"){
      newArray = personneArray.filter(element => element.role === "Student");
      return newArray;
    }
    else{
      newArray = personneArray.filter(element => element.role === "Teacher");
      return newArray;
    }
  }
}
filteredRoles(personneArray, "toto");
// Do not remove lines below, it is for tests
module.exports = filteredRoles;
