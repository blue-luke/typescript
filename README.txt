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

Lesson 2 - functions

Function parameters can also have specified types

We can have functional parameters:

function greet(name?: string)

This means that typescript won't throw an error when the function is called without the parameter

We can provide default values using || or using PARAMETER = VALUE

Default values inform type inference 

Parameters with default values don’t need a ? after their name, since assigning a default value already implies that they’re optional parameters

We can assign a variable the value of a function call. The return type of the function call will be inferred to the be the type of the variable

We can specify the type of the return value using function( paramter : TYPE ): TYPE 

In the above, the second TYPE is the TYPE of the return value

This is true for both arrow functions as well

When a function doesn't return anything (but might do a console.log), we should set the return type as void

We can use documentation comments to attach comments to specific parts of the text

/**
* This is a documentation comment
*/

We can use special tags within the comment to highlight certain aspects of the function. We can use @param to describe each of the function’s parameters, and we can use @returns to describe what the function returns

@param, @returns

Lesson 3 - arrays and tuples

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
