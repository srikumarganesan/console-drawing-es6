/**
 * Created by gsrikumar on 12/20/2016.
 */
let chai = require('chai');
let path = require('path');

chai.should();

const canvas = require('../modules/canvas');

describe('Should draw the canvas and draw the elements',() => {
    let myCanvas;

    beforeEach(() => {
        myCanvas = new canvas(30,10);
    });

    it('should return the width', () => {
        myCanvas.width.should.equal(30);
    });

    it('should have generated the canvas', () => {
        myCanvas.isCanvasGenerated();
    });

    it('should generate the line', () => {
        myCanvas.drawLine(20,3,20,5,'*');
        myCanvas.isLineGenerated(20,3,20,5,'*');
    });

    it('should generate the rectangle', () => {
        myCanvas.drawRectangle(10,1,15,3,'.');
        myCanvas.isRectangleGenerated(10,1,15,3,'.');
    });

});
