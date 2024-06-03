import { Injectable } from '@angular/core';
import { fabric } from 'fabric';

@Injectable({
  providedIn: 'root'
})
export class FabricService {
  private canvas!: fabric.Canvas;

  initialize(canvasElement: HTMLCanvasElement): void {
    this.canvas = new fabric.Canvas(canvasElement, {
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  addRect(): void {
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 100,
      height: 100
    });
    this.canvas.add(rect);
  }

  addCircle(): void {
    const circle = new fabric.Circle({
      left: 200,
      top: 200,
      radius: 50,
      fill: 'green'
    });
    this.canvas.add(circle);
  }

  clearCanvas(): void {
    this.canvas.clear();
  }

  getCanvas(): fabric.Canvas {
    return this.canvas;
  }
}
