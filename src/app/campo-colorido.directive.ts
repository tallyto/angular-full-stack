import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core'

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  constructor (
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2
  ) {

  }

  @HostBinding('style.backgroundColor')
  corDeFundo: string | undefined

  @HostListener('focus')
  onFocus () {
    this.corDeFundo = 'green'
  }

  @HostListener('blur')
  onBlur () {
    this.corDeFundo = 'transparent'
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent')
  }
}
