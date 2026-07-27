import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'item-formulario',
  imports: [ReactiveFormsModule],
  templateUrl: './item-formulario.component.html',
  styleUrl: './item-formulario.component.css',
})
export class ItemFormularioComponent {

  @Input({required: true}) Titulo!: string;
  @Input({required: true}) Peso!: string;
  @Input({required: true}) Npa!: string;
  @Input({ required: true }) Controle!: FormControl<number | null>;

  public ExibirErro(): boolean{
    return (this.Controle.touched || this.Controle.dirty) && this.Controle.invalid;
  }

  public FormularioPreenchido(): boolean{
    if(this.Controle.value == null) return false;
    return true;
  }

  get MensagemErro(): string | null{
    if(!this.ExibirErro()) return null;
    
    if(this.Controle.hasError('required')) return 'Digite uma nota';

    if(this.Controle.hasError('min')) return 'Valor mínimo de 0'
    
    if(this.Controle.hasError('max')) return 'Valor mínimo de 10'

    return null;
  }
}
