// const names: string = "Taro";
// const age: number = 25;
// const isStudent: boolean = true;

// console.log(`${names} (${age}) - Student: ${isStudent}`);

// function greet(name: string): string {
//   return `Hello, ${name}!`;
// }

// console.log(greet("Hanako"));

// type User = {
//   id: number;
//   name: string;
//   email: string;
// };

// const user: User = {
//   id: 1,
//   name: "Ichiro",
//   email: "ichiro@example.com",
// };

// console.log(user);

// const age: number = "twenty"; //

//Utility Types

// interface Person {
//   firstName: string;
//   lastName: string;
//   age: number;
// }

// const taro: Partial<Person> = {
//   firstName: 'Taro',
// };
// console.log(taro); // { firstName: 'Taro' }

// interface Person {
//   firstName?: string;
//   lastName?: string;
// }

// const jiro: Required<Person> = {
//   firstName: 'Taro',
// };
// // エラー: property 'lastName' is missing.

// xinterface Todo {
//   title: string;
// }

// const todo: Readonly<Todo> = {
//   title: '掃除',
// };
// todo.title = '買い物'; // エラー: 'title' は読み取り専用です。

// interface User {
//   name: string;
// }

// type UserList = Record<number, User>;

// const list: UserList = {
//   0: { name: 'Taro' },
//   1: { name: 'Jiro' }
// };
// console.log(list); // { '0': { name: 'Taro' }, '1': { name: 'Jiro' } }

// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
// }

// type TodoPreview = Pick<Todo, 'title' | 'completed'>;

// const preview: TodoPreview = {
//   title: '掃除',
//   completed: false,
// };

// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
// }

// type TodoPreview = Omit<Todo, 'description'>;

// const preview: TodoPreview = {
//   title: '掃除',
//   completed: false,
// };

// type ExcludedType = Exclude<string | number, number>; // string

// type ExtractedType = Extract<string | number, number>; // number

// type TypeA = NonNullable<string | number | undefined>; // string | number

