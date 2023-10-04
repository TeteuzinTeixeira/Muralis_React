import React, { Component } from 'react';
import EstadosCidades from './EstadoCidade';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      curso: '',
      estado: '',
      cidade: '',
    };

    this.estadosCidadesRef = React.createRef();
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleGravar = () => {
    console.log('Dados gravados:');
    console.log('Nome:', this.state.nome);
    console.log('Curso:', this.state.curso);
    console.log('Estado:', this.state.estado);
    console.log('Cidade:', this.state.cidade);

    this.setState({
      nome: '',
      curso: '',
      estado: '',
      cidade: '',
    });

    this.estadosCidadesRef.current.resetFields();
  };

  handleVoltar = () => {
    window.location.reload();
  };

  handleSelectEstado = (selectedEstado) => {
    this.setState({ estado: selectedEstado });
  };

  handleSelectCidade = (selectedCidade) => {
    this.setState({ cidade: selectedCidade });
  };

  render() {
    const { nome, curso, estado, cidade } = this.state;

    return (
      <div className="App">
        <form className='form'>
          <h1>Cadastro de Ingressantes</h1>

          <div className='input'>
            <label htmlFor='nome'>Nome</label>
            <input
              name='nome'
              id='nome'
              value={nome}
              onChange={this.handleInputChange}
            />
          </div>

          <div className='input'>
            <label htmlFor='curso'>Curso</label>
            <select
              name='curso'
              id='curso'
              value={curso}
              onChange={this.handleInputChange}
            >
              <option value=""></option>
              <option value="matemática">Matemática</option>
              <option value="letras">Letras</option>
              <option value="geografia">Geografia</option>
            </select>
          </div>

          <EstadosCidades
            selectedState={estado}
            selectedCity={cidade}
            onSelectEstado={this.handleSelectEstado}
            onSelectCidade={this.handleSelectCidade}
            ref={this.estadosCidadesRef}
          />

          <div className='buttons'>
            <button
              name='voltar'
              id='voltar'
              type="button"
              onClick={this.handleVoltar}
              className='button_gravar'
            >
              Voltar
            </button>

            <button
              name='gravar'
              id='gravar'
              type="button"
              onClick={this.handleGravar}
              className='button_voltar'
            >
              Gravar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;