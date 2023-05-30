import { Directive, ElementRef, Renderer2 } from '@angular/core'

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {
  constructor (
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2
  ) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow')
  }
}
