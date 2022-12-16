Codeacademy course on TS







Lesson 1 - types

There is a ts transpiler that checks the code adheres to ts standards

Download typescript

Run $ tsc - this will convert .ts to .js

$ node FILE.js - this runs .js in the node js runtime

We can explicitly declare types or let ts infer variable type

Once declared or inferred, the type can't be reassigned

The shape of a variable is the functions that it responds to - its interface

Run tsc on the ts file - this will outline the ts errors in that file

You can just declare a variable without assigning a type. This is bad practice, but it will result in the variable having the 'any' type

We can use type annotations to limit the type that a variable can be, without giving it an initial value (from which type could be inferred)

Type annotations get removed when the ts gets compiled to js

The tsconfig.json file allows us to specify what aspects of ts we want to use and what things we want to be checked

["**/*.ts"] means the compiler should check every single file that has a .ts extension

There is a codeacademy pro version of this course







Lesson 2 - functions

Function parameters can also have specified types

We can have function parameters:

function greet(name?: string)

This means that typescript won't throw an error when the function is called without the parameter

We can provide default values using || or using PARAMETER = VALUE

Default values inform type inference 

Parameters with default values don’t need a ? after their name, since assigning a default value already implies that they’re optional parameters

We can assign a variable the value of a function call. The return type of the function call will be inferred to the be the type of the variable

We can specify the type of the return value using function( parameter : TYPE ): TYPE 

In the above, the second TYPE is the TYPE of the return value

This is true for both arrow functions as well

When a function doesn't return anything (but might do a console.log), we should set the return type as void

We can use documentation comments to attach comments to specific parts of the text

/**
* This is a documentation comment
*/

We can use special tags within the comment to highlight certain aspects of the function. We can use @param to describe each of the function’s parameters, and we can use @returns to describe what the function returns

@param, @returns





Lessons 3. - custom types

Lesson 3.1 - arrays and tuples

let customersArray = ['Custy Stomer', 'C. Oostomar', 'C.U.S. Tomer', 3432434, 'Custo Mer', 'Custopher Ustomer', 3432435, 'Kasti Yastimeur'];

Issue with checking the types in an array using js looping

let customersArray = ['Custy Stomer', 'C. Oostomar', 'C.U.S. Tomer', 3432434, 'Custo Mer', 'Custopher Ustomer', 3432435, 'Kasti Yastimeur'];

function checkCustomersArray(customers) {
    for (var i = 0; i < customers.length; i++) {
        if (typeof customers[i] != 'string') {
            console.log(`Type error: ${customers[i]} should be a string!`)
        }
    }
}

checkCustomersArray(customersArray)

Basically, enforcing a typed array is laborious if done manually (ie only in js)

We can do it easily in ts:

let names: string[] = ['bananas', 'oranges']
or
let names: Array<string> = ['bananas', 'oranges']

This was a difficult one: let numbersMulti: number[][][] = [ [[1],[2,3]], [[7],bestNumbers] ]; 

My confusion is this: when you have mutlti-dimensioanal arrarys, the number of arrays in the type is about the depth, rather than the width

Ie, how many opening square brackets are there? 

In TypeScript, when an array is typed with elements of specific types, it’s called a tuple. Tuple types specify both the lengths and the orders of compatible tuples, and will cause an error if either of these conditions are not met

let ourTuple: [string, number, string, boolean] = ['Is', 7 , 'our favorite number?' , false]; 

We can’t assign an array to a tuple variable, even when the elements are of the correct type

Array type inference is always to the least restrictive type - boolean[] not [boolean, boolean, boolean], so that the array can be expanded

Rest parameters should also be typed, ie 
function blah(firstParameter: string, ...otherParameters: string[]){

}

Rest parameters use the spread syntax (...)

We can use the spread syntax to pass an array of elements as individual parameters to a function:

let codecademyCoordinates: [number, number, string, number, number, string] = [40, 43.2, 'N', 73, 59.8, 'W'];
gpsNavigate(...codecademyCoordinates)

This is how you specify an array of tuples
let danceMoves: [string, number, boolean][] = [
  ['chicken beak', 4, false],
  ['wing flap', 4, false],
  }






Lesson 3.2 - complex types

They are an extension of types, building on the primitive types

Some complex types are built in, while the user can define others 

The enum type is built in. We use it when we want to enumerate the possible values a variable can take

enum Direction {
  North,
  South,
  East,
  West
}

We can then refer to Direction.North, etc 

TypeScript processes these kinds of enum types using numbers. Enum values are assigned a numerical value according to their listed order. The first value is assigned a number of 0, etc 

We can specify the numbers that the enum values evaluate to (but I'm not sure why that's desireable)

enum Direction {
  North = 8,
  South = 2,
  East = 6,
  West = 4
}

In the above instance, we have created a Direction type: let way: Direction = Direction.North

We can then use this in a tuple array typed object

***
We recommend to always use string enums because numeric enums allow for some behaviors that can let bugs sneak into our code, ie:
***

Bad:
enum DirectionNumber { North, South, East, West }
Better:
enum DirectionString { North = 'NORTH', South = 'SOUTH', East = 'EAST', West = 'WEST' }

We can also have custom object types. They are the most common custom type used in ts

TypeScript places no restrictions on the types of an object’s properties. They can be enums, arrays, and even other object types!

let aCompany: {
  companyName: string, 
  boss: {name: string, age: number}, 
  employees: {name: string, age: number}[], 
  employeeOfTheMonth: {name: string, age: number},  
  moneyEarned: number
};

Running $ tsc FILE.ts will only tell you if there are errors in the ts, not if you are missing some types altogether - unless this is an option in the tsconfig file

We can give our types (cutom types) aliases to make them clearer to refer and therefore easier to use

type MyString = string;
Or
type Coord = [number, number, string, number, number, string];

Then, we can just refer to our type alias, rather than its definition

We can also have function types, limiting the kind of function that can be assigned to a variable

let myFavoriteFunction = console.log; // Note the lack of parentheses.
myFavoriteFunction('Hello World'); // Prints: Hello World

type StringsToNumberFunction = (arg0: string, arg1: string) => number;
When we assign this type to a function, it will only accept two string arguments and only return a number

let myFunc: StringsToNumberFunction;
myFunc = function(firstName: string, lastName: string) {
  return firstName.length + lastName.length;
};

We can reuse this type elsewhere. It is used in addition to typing parameters and return values

Function types are most useful when applied to callback functions - where you pass function x as an argument to function y, then call function x part way through function y 

***
Issue here at 6/9, function types - can't get the function name for a typed function
***

Generics allow for collections of types
type Family<T> = {
  parents: [T, T], mate: T, children: T[]
};
The T is a placeholder - we could call in Bananas if we wanted to
The generic Family<T> cannot actually be used as a type in a type annotation. Instead, we must substitute T with some type of our choosing, for example string
Then, Family<string> is exactly the same as the object type given by setting T to string: {parents:[string,string], mate:string, children: string[]}

Come back to generics? I need to consolidate my knowledge and skills before attempting this topic
Actually, generics seem okay. See exercise 7/9
We can make generic types, as above
We can also make generic functions

Generics mean we don't have to account for all possible types being passed. We simply set up a structure that allows us to pass whatever type we want, and the generic will ensure the structure of the object is consistent

function getFilledArray<T>(value: T, n: number): T[] {
  return Array(n).fill(value);
}
In the above, we use a generic type to indicate what the return type should be. The type can be complex, eg:
numberArray = getFilledArray<number>(9, 6)
personArray = getFilledArray<{name: string, age: number}>({name: 'J. Dean', age: 24}, 6)




Lesson 4: union types

These allow us to specify that a variable has properties that are a combination of two or more types
let ID: string | number;
function getMarginLeft(margin: string | number) {
  return { 'marginLeft': margin };
}

Type narrowing:
We can combine union typed functions with type guarding, so that the function does different things for different types:
if (typeof margin === 'string') {

Since TypeScript can infer the function’s return type, there’s no need for us to manually define it. This also applies to union return types.

const timesList: (string | number)[] = [dateNumber, dateString];
When we put type members in a union, TypeScript will only allow us to use the common methods and properties that all members of the union share.

We can use literal types with TypeScript unions. Literal type unions are useful when we want to create distinct states within a program.
type Color = 'green' | 'yellow' | 'red';
function changeLight(color: Color) {
  // ...
}

Lesson 5: Type narrowing

Tsc evaluates the code at compile-time. But it can also pick up on run-time issues.

Type guards allow type narrowing. We use the 'in' operator:
function play(sport: Tennis | Soccer) {
  if ('serve' in sport) {
    return sport.serve();
  }
 
  if ('kick' in sport) {
    return sport.kick();
  }
}

Is it best to type the variables and the parameters, or just the parameters?

The typeof operator is useful when writing type guards. It can check if a variable is a 'string', 'number', 'boolean', or 'symbol'
So, type of can't check for custom or complex types


Lesson 6: Advanced object types

This is a class with a type-safe method
class Robot {
  identify(id: number) {
    console.log(`beep! I'm ${id}`);
  }
}
Types should always help make our code safer, without imposing restrictions on how we write and organize our code.

There’s another way to define types with the interface keyword
The biggest difference between interface and type is that interface can only be used to type objects, while type can be used to type objects, primitives, and more. 
As it turns out, type is more versatile and functional than interface. So why would we use interface?
Because interfaces are only used for objects, which are integral to object oriented programming (OOP)

The interface keyword in TypeScript is especially good for adding types to a class,
since interface is constrained to typed objects and using class is a way to program with objects
We use interface with the implements keyword
This helps us apply oject typing to all objects instantiated by a class

interface Directory {
  addFile: (name: string) => void;
}

class DesktopDirectory implements Directory {
  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

const Desktop = new DesktopDirectory();

We can also type-safe nested objects, eg constructor props (things that class objects are initialised with)

Generally - we us colons to type things and = to instantiate things

We can also compose types of smaller sub-types, making it easier to pick and choose how we type out classes

This is composed types;
interface About {
  general: General;
}
 
interface General {
  id: number;
  name: string;
  version: Version;
}
 
interface Version {
  versionNumber: number;
}

We can also extend one interface, copying all of its types and extending them

Questions:
- Do we have a prescriptive hierarchy of types in our codebase?
- Do we have a visual hierarchy?
- Do we have a list of basic custom types implemented across the codebase?

This tutorial uses an old version of js, not using the Promise syntax

TypeScript allows us to make some type members optional:
interface OptionsType {
  name: string;
  size?: string;
}

We can then combine this with type guards to execute a function only if it is there

We can define variable property names within an object type with an index signature
An index signature uses syntax like: [propertyName: string]: string.