/**
 * Created by GSrikumar on 12/11/2016.
 * This class creates the canvas
 */
'use strict';

class Canvas {
    constructor (width, height) {
        this.width = width;
        this.height = height;
        this.canvasArea = [];
        this.drawLine(0,0,this.width-1,0,'-');
        this.drawLine(0, this.height-1, this.width-1, this.height-1, '-');
        this.drawLine(0, 1, 0, this.height-2, '|');
        this.drawLine(this.width-1, 1, this.width-1, this.height-2, '|');
        this.drawLine(1,1,this.width-2,this.height-2,' ');
    }

    /**
     * Setter method to set the width of the canvas
     * @param width - Should be number, throws error otherwise
     */
    set width(width) {
        width = parseInt(width);
        if (typeof width !== 'number') {
            throw new Error("width must be a number");
        } else if (this._width) {
            throw new Error("Canvas already exists.");
        }
        this._width = width + 2;
    }

    /**
     * Setter method to set the height of the canvas
     * @param height - Should be number, throws error otherwise
     */
    set height(height) {
        height = parseInt(height);
        if (typeof height !== 'number') {
            throw new Error("height must be a number");
        }
        this._height = height + 2;
    }

    /**
     * Getter method to return the width of the canvas
     * @returns {*}
     */
    get width() {
        return this._width;
    }

    /**
     * Getter method to return the height of the canvas
     * @returns {*}
     */
    get height() {
        return this._height;
    }

    /**
     * Method to draw the canvas on the console
     */
    drawCanvas (){
        this.canvasArea.forEach((outerArr) => {
            outerArr.forEach((innerArr) => {
                process.stdout.write(`${innerArr}`);
            })
            process.stdout.write("\n");
        })
    }

    /**
     * Method to generate the line based on the provided co-ordinates
     * @param x1 - x value of the starting line co-ordinate
     * @param y1 - y value of the starting line co-ordinate
     * @param x2 - x value of the ending line co-ordinate
     * @param y2 - y value of the ending line co-ordinate
     * @param drawLetter - the character with which the line should be drawn
     */
    drawLine (x1,y1,x2,y2,drawLetter) {
        x1 = parseInt(x1);
        y1 = parseInt(y1);
        x2 = parseInt(x2);
        y2 = parseInt(y2);
        for (let i = y1; i <= y2; i++) {
            if (!this.canvasArea[i]) {
                this.canvasArea[i] = new Array();
            }
            for (let j = x1; j <= x2; j++) {
                this.canvasArea[i][j] = drawLetter;
            }
        }
    }

    /**
     * Method to generate the rectangle based on the provided co-ordinates
     * @param x1 - x value of the starting line co-ordinate
     * @param y1 - y value of the starting line co-ordinate
     * @param x2 - x value of the ending line co-ordinate
     * @param y2 - y value of the ending line co-ordinate
     * @param drawLetter - the character with which the line should be drawn
     */
    drawRectangle (x1,y1,x2,y2,drawLetter) {
        this.drawLine(x1,y1,x2,y1,drawLetter);
        this.drawLine(x1,y1,x1,y2,drawLetter);
        this.drawLine(x2,y1,x2,y2,drawLetter);
        this.drawLine(x1,y2,x2,y2,drawLetter);
    }

    /**
     * Method to check if the canvas has been generated
     */
    isCanvasGenerated () {
        this.isLineGenerated(0,0,this.width-1,0,'-');
        this.isLineGenerated(0, this.height-1, this.width-1, this.height-1, '-');
        this.isLineGenerated(0, 1, 0, this.height-2, '|');
        this.isLineGenerated(this.width-1, 1, this.width-1, this.height-2, '|');
        this.isLineGenerated(1,1,this.width-2,this.height-2,' ');
    }

    /**
     * Method to check if the line has been generated
     * @param x1 - x value of the starting line co-ordinate
     * @param y1 - y value of the starting line co-ordinate
     * @param x2 - x value of the ending line co-ordinate
     * @param y2 - y value of the ending line co-ordinate
     * @param drawLetter - the character with which the line should be drawn
     */
    isLineGenerated(x1,y1,x2,y2,drawletter) {
        for (let i = y1; i <= y2; i++) {
            for (let j = x1; j <= x2; j++) {
                if (this.canvasArea[i][j] !== drawletter) {
                    throw new Error("Line not generated or the drawletter is not matching");
                }
            }
        }
    }

    /**
     * Method to check if the rectangle has been generated
     * @param x1 - x value of the starting line co-ordinate
     * @param y1 - y value of the starting line co-ordinate
     * @param x2 - x value of the ending line co-ordinate
     * @param y2 - y value of the ending line co-ordinate
     * @param drawLetter - the character with which the line should be drawn
     */
    isRectangleGenerated(x1,y1,x2,y2,drawLetter) {
        this.isLineGenerated(x1,y1,x2,y1,drawLetter);
        this.isLineGenerated(x1,y1,x1,y2,drawLetter);
        this.isLineGenerated(x2,y1,x2,y2,drawLetter);
        this.isLineGenerated(x1,y2,x2,y2,drawLetter);
    }


}
module.exports = Canvas;
