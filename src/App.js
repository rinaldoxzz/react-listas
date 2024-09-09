import logo from './logo.svg';
import './App.css';
import React from 'react';

//Lista de objetos
const textos = [
  {id: 1, texto: 'Teste 1'},
  {id: 2, texto: 'Teste 2'},
  {id: 3, texto: 'Teste 3'},
  {id: 4, texto: 'Teste 4'},
  {id: 5, texto: 'Teste 5'}
];


function App() {

  return (
   <div>
    <ul>
      {
        //Renderiza a LI com a key do id e texto relacionado a cada posição da lista
        textos.map (item => 
          <li key={item.id}>{item.texto}</li>
        )
      }
    </ul>
   </div>
  );
}

//Tambem funcionaria dessa maneira
/*
<ul>

  //A key precisa ser colocada na estrutura de repetição e não na função
  textos.map (x => <Item key={x.id} item = {x}/>)
</ul>

*/

function Item({item}){
  return <li>{item.texto}</li>
}

export default App;
