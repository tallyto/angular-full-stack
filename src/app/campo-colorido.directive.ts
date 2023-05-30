import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core'

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {
  constructor (
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2
  ) {

  }

  @HostListener('focus')
  onFocus() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow')
  }

  @HostListener('blur')
  onBlur() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'white')
  }
}
