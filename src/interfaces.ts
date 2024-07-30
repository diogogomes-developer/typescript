interface Person {
  firstName: string;
  lastName: string;
  age?: number;
}

function greet(person: Person): string {
  return `Hello ${person.firstName} ${person.lastName}`;
}

let person: Person = { firstName: "Diogo", lastName: "Gomes" };

console.log(greet(person));
