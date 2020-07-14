# List of practiced topics

### Configuaration
- Execute files:
  - Go to directory containing the file in Terminal: ``` Ctrl+Shift+` ``` and chose the project
  - Transpliling: ```tsc <file>.ts``` to compile and generate JavaScript file ```<file>.js``` (```tsc``` if the configuration file is available)
  - Run the JavaScript file: ```node <file>.js```
  - Transpliling for every time change is made
  - Add flag ```--noEmitOnError``` to prevent generate js when error compiling.
- Add ```tsconfig.json``` in the root the define compiler options and project settings 
[[tsconfig.json]()]
  - Run ```tsc --init``` to generate a template for this file instead of adding manually
  - Compile all ```*.ts``` files by default


### Basic
- Data types: boolean, number, string, any
[[data-types.ts]()]
  - Template strings ``` `${var}` ``` for long concatenation
  - Use any type for only generic methods
- Loop & array 
[[loop-array.ts]()]
  - Simplified ```for loop```
  - TypeScript array is dynamic/growable
  - Add new element to array: ```push```

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
  - 
### Terminal Commands
- ```tsc --build --clean```: removes all compiled js files