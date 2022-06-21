import React from "react";
import {Table} from "react-bootstrap"

class Alunos extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            alunos : [
                {'id':1, 'nome':'Iago Wesley', 'email': 'iagowesley234@gmail.com'},
                {'id':2, 'nome':'João Paulo', 'email': 'joaozindatr234@gmail.com'},
                {'id':3, 'nome':'José Marcos', 'email': 'jozesindadoze@gmail.com'}
            ]
        }
    }

    render() {
        return (
            <div>
                <p>Cadastro de alunos</p>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                       <tr>
                        <td> {this.state.alunos[0].nome} </td>
                        <td>iagowesley234@gmail.com</td>
                        <td>Alterar &nbsp; &nbsp;Excluir</td>
                        </tr>
                        <tr>
                        <td>João</td>
                        <td>joaozindatr234@gmail.com</td>
                        <td>Alterar &nbsp;&nbsp;  Excluir</td>
                        </tr>
                        <tr>
                        <td>José</td>
                        <td>jozesindadoze@gmail.com</td>
                        <td>Alterar &nbsp;&nbsp; Excluir</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Alunos;