import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-contato',
  templateUrl: './add-edit-contato.component.html',
  styleUrls: ['./add-edit-contato.component.css']
})
export class AddEditContatoComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input () contato:any;
  idPessoa:string;
  nome:string;
  dataNascimento:Date;
  observacoes:string;
  telefone:string;
  email:string;

  @Input () botoes:boolean;

  ngOnInit(): void {
    this.idPessoa=this.contato.idPessoa;
    this.nome=this.contato.nome;
    this.dataNascimento=this.contato.dataNascimento;
    this.observacoes=this.contato.observacoes;
    this.telefone=this.contato.telefone;
    this.email=this.contato.email;
    this.botoes=this.botoes;
  }

  addContato(){
    var val = {
      idPessoa:this.idPessoa,
      nome:this.nome,
      dataNascimento:this.dataNascimento,
      observacoes:this.observacoes,
      telefone:this.telefone,
      email:this.email
    }
    this.service.addContato(val).subscribe(res=>{
      alert(JSON.stringify(res));
    });
  }

  updateContato(){
    var val = {
      idPessoa:this.idPessoa,
      nome:this.nome,
      dataNascimento:this.dataNascimento,
      observacoes:this.observacoes,
      telefone:this.telefone,
      email:this.email
    }
    this.service.updateContato(val).subscribe(res=>{
      alert(JSON.stringify(res));
    });
  }

}
