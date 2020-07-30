# Practiced topics

### Configuaration
- Execute files:
  - Go to directory containing the file in Terminal: ``` Ctrl+Shift+` ``` and chose the project
  - Transpliling: ```tsc <file>.ts``` to compile and generate JavaScript file ```<file>.js``` {only ```tsc``` if configuration file ```tsconfig.json``` is available}
  - Run the JavaScript file: ```node <file>.js```
  - Transpliling for every change
  - Add flag ```--noEmitOnError``` to avoid generating js when error compiling
- Add ```tsconfig.json``` in the root to define compiler options and project settings manually or by CLI: ```tsc --init``` 
[[tsconfig.json](https://github.com/cpulover-practice/typescript/blob/master/tsconfig.json)]
  - Compile all ```*.ts``` files by default

### Basic
- Data types: boolean, number, string, any
[[data-types.ts](https://github.com/cpulover-practice/typescript/blob/master/data-types.ts)]
  - String interpolation: ``` `${var}` ``` for string concatenation
  - Use ```any``` type only for generic methods ???
- Loop & array 
[[loop-array.ts](https://github.com/cpulover-practice/typescript/blob/master/loop-array.ts)]
  - Simplified ```for loop```: ```let _ of _```
  - TypeScript array is dynamic/growable
  - Add new element to array: ```push()```

### Class
[[Customer.ts]()]
- Property
  - Modifier: public, proteted, private
  - Public by default
  - Naming convention: prefix ```_```
- Constructor
  - Keyword ```this``` is required
- Accessor vs Normal Getter/Setter
  - Public by default
  - Accessor is only supported in ES5+ (use ```--target ES5``` flag to fix)
- Shortcut constructor: include properties and tradictional constructor
[[Person.ts]()]

### Inheritance & Interface
[[Person.ts]()] [[Student.ts]()] [[Driver]()]
- Single inheritance, multipe interfaces
- Support abtract & overriding
- Sub-classes must implement all abstract methods of the supper abstract class

### Terminal Commands
- ```tsc --build --clean```: removes all compiled js files
- ```tsc --init```: generate template for configuration file ```tsconfig.json```
