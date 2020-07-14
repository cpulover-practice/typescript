# List of practiced topics

- Execute files:
  - Go to directory containing the file in Terminal: ``` Ctrl+Shift+` ``` and chose the project
  - Transpliling: ```tsc <file>.ts``` to generate JavaScript file ```<file>.js```
  - Run the JavaScript file: ```node <file>.js```
  - Transpliling for every time change is made
  - Add tag ```-noEmitOnError``` to prevent generate js when error compiling.
- Data types: boolean, number, string, any
[[data-types.ts]()]
  - Template strings ``` `${var}` ``` for long concatenation
  - Use any type for only generic methods
- Loop & array 
[[loop-array.ts]()]
  - Simplified ```for loop```
  - TypeScript array is dynamic/growable
  - Add new element to array: ```push```