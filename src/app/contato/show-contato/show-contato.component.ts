import { Component, OnInit } from '@angular/core';
import { SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-contato',
  templateUrl: './show-contato.component.html',
  styleUrls: ['./show-contato.component.css']
})
export class ShowContatoComponent implements OnInit {

  constructor(private service:SharedService) { }

  ContatoList:any=[];

  ModalTitle:string;
  ActivateAddEditContato:boolean=false;

  contato:any;
  botoes:boolean;

  totalLength:any;
  page:number = 1;

  pesquisa:any

  ngOnInit(): void {
    this.refreshContatolist();
    
  }

  Search(){
    if (this.pesquisa == ""){
      this.ngOnInit();
    }else {
      this.ContatoList = this.ContatoList.filter(res =>{
        return res.nome.toLocaleLowerCase().match(this.pesquisa.toLocaleLowerCase())
      })
    }
  }

  addClick(){
    this.contato = {
      idPessoa:0,
      nome:"",
      dataNascimento:"",
      observacoes:"",
      telefone:"",
      email:"",
      showButton: true
    }
    this.ModalTitle="Add Contato";
    this.ActivateAddEditContato=true;
    this.botoes = true;
  }
  
  editClick(item){
    this.contato=item;
    this.botoes = true;
    this.ModalTitle="Edit Contato";
    this.ActivateAddEditContato=true;
  }

  detailClick(item){
    this.contato=item;
    this.botoes = false;
    this.ModalTitle="Detalhe Contato";
    this.ActivateAddEditContato=true;
  }

  deleteClick(item){
    if(confirm('Realmente deseja excluir esse contato?')){
      this.service.deleteContato(item.idPessoa).subscribe(data=>{
        this.refreshContatolist();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditContato=false;
    this.refreshContatolist();

  }

  refreshContatolist(){
    this.service.getContatoList().subscribe(data => {
      this.ContatoList=data;
      this.totalLength=data.length;
    });
  }

}
