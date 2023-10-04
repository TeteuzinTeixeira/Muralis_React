import React, { Component } from 'react';
import './EstadoCidade.css';

class EstadosCidades extends Component {

    resetFields = () => {
        this.setState({
            selectedState: '',
            selectedCity: '',
            cities: [],
        });
    };

    constructor(props) {
        super(props);
        this.state = {
            selectedState: props.selectedState || '',
            selectedCity: props.selectedCity || '',
            cities: [],
        };
    }

    handleStateChange = (event) => {
        const selectedState = event.target.value;
        this.setState({ selectedState });

        const cityMap = {
            'São Paulo': ['Mogi das Cruzes', 'Suzano', 'Poá', 'Guararema'],
            'Rio de Janeiro': ['Angra dos Reis', 'Niterói', 'Itaboraí'],
            'Minas Gerais': ['Belo Horizonte', 'Monte Azul', 'Muzambinho'],
        };

        const cities = cityMap[selectedState] || [];
        this.setState({ cities, selectedCity: '' });

        if (this.props.onSelectEstado) {
            this.props.onSelectEstado(selectedState);
        }
    };

    handleCityChange = (event) => {
        const selectedCity = event.target.value;
        this.setState({ selectedCity });

        if (this.props.onSelectCidade) {
            this.props.onSelectCidade(selectedCity);
        }
    };

    render() {
        const { selectedState, selectedCity, cities } = this.state;

        return (
            <div className='main'>
                <div className='inputCity'>
                    <label>Estado</label>
                    <select value={selectedState} onChange={this.handleStateChange}>
                        <option value="branco"></option>
                        <option value="São Paulo">São Paulo</option>
                        <option value="Rio de Janeiro">Rio de Janeiro</option>
                        <option value="Minas Gerais">Minas Gerais</option>
                    </select>
                </div>

                <div className='inputCity'>
                    <label>Cidade</label>
                    <select value={selectedCity} onChange={this.handleCityChange}>
                        <option value="branco"></option>
                        {cities.map((city, index) => (
                            <option key={index} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        );
    }
}

export default EstadosCidades;
