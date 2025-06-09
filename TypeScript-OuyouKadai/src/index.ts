//1
// interface Person {
//   id: number;
//   name: string;
//   age: number;
// }
// type StringifiedPerson = {
//   [K in keyof Person]: string//Personの全プロパティKに対して、値をすべてstringにします
// };
//2
type IsString<T> = T extends string ? true : false;
type A = IsString<string>; // true
type B = IsString<number>; // false
//3　分からなかった
// 型定義してから
const response = {
  id: 1,
  name: "John",
  age: 30,
};
type Keys = keyof typeof response
// 代入してる
const keys: Keys[] = ["id","name","age"];
console.log(keys);
//4
type Greeting = "Hello";
type Name = "John";
type wazUp = `${Greeting},${Name}!`;
const whatsup: wazUp = "Hello,John!";
//5
type Flatten<T> = T extends Array<infer U> ? Flatten<U> : T;//Tの配列を展開して、配列のUを参照してUにする。Flattenを適用、配列でなければそのままTを返す
type Test = Flatten<[1, [2, [3, 4]], 5]>;