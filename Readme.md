This is a console drawing program developed using ES6.
The unit tests have been written using chai and mocha.
To execute the program, Please execute the myDraw.js using the command "node myDraw.js".
To execute the tests, Please run "npm install" so that the dependencies mentioned in package.json get downloaded.

Example:
````
E:\ConsoleDrawing>node myDraw.js
Enter command: C 20 4
----------------------
|                    |
|                    |
|                    |
|                    |
----------------------
Enter command: L 1 2 6 2 *
----------------------
|                    |
|******              |
|                    |
|                    |
----------------------
Enter command: L 6 3 6 4 *
----------------------
|                    |
|******              |
|     *              |
|     *              |
----------------------
Enter command: R 16 1 20 3 ~
----------------------
|               ~~~~~|
|******         ~   ~|
|     *         ~~~~~|
|     *              |
----------------------
Enter command: Q
