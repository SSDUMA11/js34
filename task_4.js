let userVisits = new Map();
function createUserVisits(user) {
    return function (){
      let visits = userVisits.get(user) || 0;
      userVisits.set(user, visits + 1);
    };
}

let mike = {name: 'Mike', age: 18};
let bob = {name: 'Bob', age: 25};
let nikola = {name: 'Nikola', age: 32};
  
let mikeVisits = createUserVisits(mike);
let bobVisits = createUserVisits(bob);
let nikolaVisits = createUserVisits(nikola);
  
mikeVisits(mike);
mikeVisits(mike);
mikeVisits(mike);
  
bobVisits(bob);
  
nikolaVisits(nikola);
nikolaVisits(nikola);
  
console.log(userVisits.get(mike)); // 3
console.log(userVisits.get(bob)); // 1
console.log(userVisits.get(nikola)); // 2