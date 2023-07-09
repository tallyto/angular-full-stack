import {Component, OnInit} from '@angular/core';
import {CidadeService} from "./cidade.service";

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css'],
  providers: [CidadeService]
})
export class CidadeComponent implements OnInit {
  public cidades: any = []
  public error: any

  constructor(private cidadeService: CidadeService) {
  }

  ngOnInit(): void {
    this.cidadeService.consultar().subscribe(
      {
        next: (value) => {
          this.cidades = value;
        },
        error: (error) => {
          this.error = error
        }
      }
    )
  }

}
