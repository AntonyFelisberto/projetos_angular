import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]' /* VOCE PODE ALTERAR O NOME */
})
export class ForDirective implements OnInit{

  /*
    myForEm
      myFor é o nome do seletor da diretiva
      Em é o valor que foi colocado dentro do seletor, a diretiva vai buscar por ele e pegar o valor após ele,
        na hora de colocar no html ele é minusculo, mas no TS ele é case Sensitive ou seja vai Começar com maiusculo
        let n em [1,2,3]  -> vai pegar 1,2,3
      Usando é o valor que foi colocado dentro do seletor, a diretiva vai buscar por ele e pegar o valor após ele,
        na hora de colocar no html ele é minusculo, mas no TS ele é case Sensitive ou seja vai Começar com maiusculo
        let n em [1,2,3] usando 'testes'  -> vai pegar testes

  */
  @Input("myForEm") numero:number[] = []
  @Input("myForUsando") texto:string = ""


  private showLog(){
    console.log("MyFor")
    console.log(this.numero)
    console.log(this.texto)
  }

  constructor(private container:ViewContainerRef,
      private template:TemplateRef<any>) {
  }

  ngOnInit(): void {
    for(let number of this.numero){
      this.container.createEmbeddedView(this.template, {$implict:number}) //$implict vai passar o valor para a variavel a
    }
  }

}
