import React from "react";
import {Table} from "react-bootstrap"

class Alunos extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            alunos : []
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/alunos")
        .then(resposta => resposta.json())
        .then(dados => {
            this.setState({alunos : dados})
        })
    }

    render() {
        return (
            <div>
                <p>Cadastro usuário</p>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            this.state.alunos.map((aluno) =>
                            <tr>
                                <td> {aluno.nome} </td>
                                <td> {aluno.email}</td>
                                <td>Alterar &nbsp; &nbsp;Excluir</td>
                            </tr>
                            )
                        }

                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Alunos;