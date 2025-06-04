// //1
// const age: number = 25;
// //2
// const greeting: string = "Hello, TypeScript!";
// //3
// const names: string[] = ["Alice", "Bob", "Charlie"];
// //4
// const user: { name: string; age: number } = {
//   name: "Taro",
//   age: 30
// };
// //5
// let value: string | number;
// value = "Hello";
// value = 42;
// //6
// function add(x: number, y: number): number {
//   return x + y;
// }
// //7
// interface Person {
//   firstName: string;
//   lastName: string;
//   age: number;
// }

// const person: Person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 28
// };
// //8
// enum Weekday {
//   Monday = "Monday",
//   Tuesday = "Tuesday",
//   Wednesday = "Wednesday",
//   Thursday = "Thursday",
//   Friday = "Friday",
//   Saturday = "Saturday",
//   Sunday = "Sunday"
// }
// //9
// const point: [number, number, string] = [10, 20, 'text'];
// //10
// type NumberArray = number[];
// const scores: NumberArray = [90, 80, 70];
// //11
// const count: number = 10;
// const isActive: boolean = true;
// const message: string = "Welcome!";
// //12
// interface UserProfile {
//   name: string;
//   age?: number;
// }
// //13
// function printValue(value: string | number): void {
//   console.log(value);
// }
// //14
// function throwError(message: string): never {
//   throw new Error(message);
// }
//15
type StringOrNumber = string | number;

function display(value: StringOrNumber): void {
  console.log(value);
}

display("こんにちは");
display(123);