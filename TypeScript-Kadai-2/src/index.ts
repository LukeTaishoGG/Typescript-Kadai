// interface User {
//   name: string;
//   age: number;
//   email: string;
// }


// const user: Partial<User> = {
//   name: "LukeWood",
//   // age: 21,
//   // email: "luke@example.com"
// };
// console.log(user);

//1
interface User {
  name: string;
  age: number;
  email: string;
}

const user: Partial<User> = { //Partialは任意。一つでもいい
  name: "Lucas"
}

//2
interface Profile {
  firstName?: string;
  lastName?: string;
  age?: number;
}

const profile: Required<Profile> = {
  firstName: "Luke",
  lastName: "Wood",
  age: 30,
}

// console.log(profile);

//3
interface Book {
  title?: string;
  autho?: string;
  published?: number;
}

const book: Readonly<Book> = {//読み取り専用
  title: "夜のピクニック",
  autho: "恩田陸",
  published: 2004
}
// console.log(book);
//4
interface Student {
  name: string;
  grade: number;
}

const students: Record<number, Student> = {// "1" と "{ name: "Alice", grade: 1 }" で分かれてる
  1: { name: "Alice", grade: 1 },
  2: { name: "Bob", grade: 2 },
  3: { name: "Carol", grade: 3 }
};
// console.log(students);

//5
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

const product: Pick<Product, "name" | "price"> = {//配列からPickup
  name: "coffee",
  price: 500
};
// console.log(product);

//6
interface Employee {
  id: number;
  name: string;
  salary: number;
  department: string;
}

const employee: Omit<Employee,"salary" | "department"> = {//salary と department を取り除く
  id: 22,
  name: "taisho"
}
// console.log(employee);

//7
// type Primitive = string | number | boolean;
// type primitive = Exclude<Primitive, number>;//ナンバーだけ除く

//8
type Primitive = string | number | boolean;
type primitive = Extract<Primitive, string | boolean>;//string | boolean のみを抽出

//9
type MaybeString = string | null | undefined;
type maybestring = NonNullable<MaybeString>;// Null と undefined を抽出

//10
function getUser() {
  return {
    id: 1,
    name: "Alice",
    age: 25
  };
}
type UserType = ReturnType<typeof getUser>;//getUserという関数の型 を取得,関数で戻り値の方を抽出
