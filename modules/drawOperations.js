/**
 * Created by gsrikumar on 12/14/2016.
 * Module to interpret the user input and pass the respective commands to generate the shapes
 */
'use strict';
const canvas = require('./canvas');
let myCanvas;
let command = "";

let operations = {

    /**
     * the command "C width height" will create the canvas with the specified width and height
     * @param width - width of the canvas
     * @param height - height of the canvas
     * @returns {Promise}
     * @constructor
     */
    C: function (width, height) {
        return new Promise(function(resolve,reject){
            if (!myCanvas) {
                myCanvas = new canvas(width, height)
                myCanvas.drawCanvas();
                resolve("Created the Canvas");
            } else {
                reject("Canvas already exists. Please exit and launch the program to redraw.");
            }
        });
    },
    /**
     * the command L X1 Y1 X2 Y2 drawletter will draw the line from X1,Y1 to X2,Y2 with the given character
     * @param x1 - x value of the starting line co-ordinate
     * @param y1 - y value of the starting line co-ordinate
     * @param x2 - x value of the ending line co-ordinate
     * @param y2 - y value of the ending line co-ordinate
     * @param drawLetter - the chaacter with which the line should be drawn
     * @returns {Promise}
     * @constructor
     */
    L: function (x1, y1, x2, y2, drawLetter) {
        return new Promise(function(resolve,reject){
            if (!myCanvas) {
                reject("Please create a canvas first");
            } else {
                myCanvas.drawLine(x1, y1, x2, y2, drawLetter);
                myCanvas.drawCanvas();
                resolve("Line drawn successfully");
            }
        });
    },
    /**
     * the command R X1 Y1 X2 Y2 drawletter will draw the rectangle which spans from X1,Y1 to X2,Y@ with the given character
     * @param x1 - x value of the starting line co-ordinate
     * @param y1 - y value of the starting line co-ordinate
     * @param x2 - x value of the ending line co-ordinate
     * @param y2 - y value of the ending line co-ordinate
     * @param drawLetter - the chaacter with which the line should be drawn
     * @returns {Promise}
     * @constructor
     */
    R: function (x1, y1, x2, y2, drawLetter) {
        return new Promise(function(resolve,reject){
            if (!myCanvas) {
                reject("Please create a canvas first");
            } else {
                myCanvas.drawRectangle(x1, y1, x2, y2, drawLetter);
                myCanvas.drawCanvas();
                resolve("Rectangle drawn successfully");
            }
        });
    },
 };

module.exports = operations;