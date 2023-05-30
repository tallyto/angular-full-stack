import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {
  /**
   * Diretiva que adiciona cor de fundo a um elemento quando recebe o foco e remove quando perde o foco.
   * A cor de fundo pode ser personalizada usando a propriedade 'cor'.
   */

  /**
   * Cor de fundo padrão. O valor padrão é 'gray'.
   */
  @Input()
  cor = 'gray';

  /**
   * Propriedade de ligação ao host para definir a cor de fundo do elemento.
   */
  @HostBinding('style.backgroundColor')
  corDeFundo: string | undefined;

  /**
   * Ouvinte de evento que é acionado quando o elemento recebe o foco.
   * Define a cor de fundo do elemento com base na propriedade 'cor'.
   */
  @HostListener('focus')
  onFocus() {
    this.corDeFundo = this.cor;
  }

  /**
   * Ouvinte de evento que é acionado quando o elemento perde o foco.
   * Remove a cor de fundo do elemento, definindo-a como 'transparent'.
   */
  @HostListener('blur')
  onBlur() {
    this.corDeFundo = 'transparent';
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }

  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2
  ) {}
}
