import React from "react";
import {Table, Button, Form} from "react-bootstrap"

class Alunos extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            nome: '',
            email: '',
            alunos : []
        }
    }

    componentDidMount() {
        this.buscarAluno();
    }

    buscarAluno() {
        fetch("http://localhost:3000/alunos")
        .then(resposta => resposta.json())
        .then(dados => {
            this.setState({alunos : dados})
        })
    }

    deletarAluno = (id) => {
        fetch("http://localhost:3000/alunos/"+id, { method: 'DELETE'})
        .then(resposta => {
            if(resposta.ok){
                this.buscarAluno();
            }
        })
    }

    adicionarAluno = (aluno) => {
        fetch("http://localhost:3000/alunos", 
        { 
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(aluno)
        }
        )
        .then(resposta => {
            if(resposta.ok) {
                this.buscarAluno();
            } else {
                alert ("Não foi possível adicionar o usuário")
            }
        })
    }

    



    renderTabela() {
        return (
            <div>
                <p className="mt-4">Cadastro usuário</p>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Opção</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            this.state.alunos.map((aluno) =>
                            <tr>
                                <td> {aluno.nome} </td>
                                <td> {aluno.email}</td>
                                <td>Alterar &nbsp; &nbsp;<Button variant="danger" onClick={ () => this.deletarAluno(aluno.id) }>DELETAR</Button></td>
                            </tr>
                            )
                        }

                    </tbody>
                </Table>
            </div>
        )
    }

    atualizaNome = (e) => {
        this.setState(
            {
                nome: e.target.value
            }
        )
    }

    atualizaEmail = (e) => {
        this.setState(
            {
                email: e.target.value
            }
        )
    }
        
    
    submit () {
        const aluno = {
            nome: this.state.nome,
            email: this.state.email
        }
        this.adicionarAluno(aluno);
    }


    render() {
        return (
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Seu nome" value={ this.state.nome } onChange={ this.atualizaNome }/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Seu email" value={ this.state.email } onChange= { this.atualizaEmail } />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={ this.submit }>
                        CADASTRAR
                    </Button>
                </Form>
                {this.renderTabela()}
            </div>
        )
    }
}

export default Alunos;