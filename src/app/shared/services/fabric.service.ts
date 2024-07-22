import { Renderer2 } from '@angular/core';
import { Injectable } from '@angular/core';
import { fabric } from 'fabric';

@Injectable({
  providedIn: 'root'
})
export class FabricService {
  private canvas!: fabric.Canvas;
  private renderer!: Renderer2;

  initialize(
    canvasElement: HTMLCanvasElement,
    renderer: Renderer2
  ): void {
    this.renderer = renderer;
    console.log(window.innerHeight);
    this.canvas = new fabric.Canvas(canvasElement, {
      width: window.innerWidth,
      height: window.innerHeight - 60
    });
  }

  addTable(): any {
    const div = this.renderer.createElement('div');
    this.renderer.setStyle(div, 'position', 'absolute');
    this.renderer.setStyle(div, 'top', '100px');
    this.renderer.setStyle(div, 'left', '100px');
    this.renderer.setStyle(div, 'width', '100px');
    this.renderer.setStyle(div, 'height', '50px');
    this.renderer.setStyle(div, 'background', 'yellow');
    this.renderer.setProperty(div, 'innerHTML', 'HTML Element');

    return div;
  }

  clearCanvas(): void {
    this.canvas.clear();
  }

  getCanvas(): fabric.Canvas {
    return this.canvas;
  }
}
