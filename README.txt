Codeacademy course on TS

Lesson 1 - types

There is a ts transpiler that checks the code adheres to ts standards

Download typescript

Run $ tsc - this will convert .ts to .js

$ node FILE.js - this runs .js in the node js runtime

We can explicitly declare types or let ts infer variable type

Once declared or inferred, the type can't be reassigned

The shape of a variable is the functions that is responds to - its interface

Run tsc on the ts file - this will outline the ts errors in that file

You can just declare a variable without assigning a type. This is bad practice, but it will result in the variable having the 'any' type

We can use type annotations to limit the type that a variable can be, without giving it an initial value (from which type could be inferred)

Type annotations get removed when the ts gets compiled to js

The tsconfig.json file allows us to specify what aspects of ts we want to use and what things we want to be checked

["**/*.ts"] means the compiler should check every single file that has a .ts extension

There is a codeacademy pro version of this course
