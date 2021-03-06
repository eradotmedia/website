import React, { Component } from 'react';
import Quote from '../../data/quote.js';

class QuoteColumn extends Component {
    constructor(props) {
        super(props);
        let data = Quote;
        this.state = {
            data: data,
            text: data.text,
            name: data.name,
            position: data.position,
        };
    }

    render() {
        const container = {
            backgroundColor: '#ED1C7F',
            margin: '0',
            width: 'inherit',
            height: 'inherit',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            display: '-webkit-flex',
            WebkitFlexDirection: 'row',
            WebkitJustifyContent: 'center',
            WebkitAlignContent: 'center',
        };

        const row = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            display: '-webkit-flex',
            WebkitFlexDirection: 'row',
            WebkitJustifyContent: 'center',
            width: '95%',
            padding: '5px',
        };

        const col = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignContent: 'center',
            display: '-webkit-flex',
            WebkitFlexDirection: 'column',
            WebkitJustifyContent: 'space-around',
            WebkitAlignContent: 'center',
            margin: '10px auto',
            padding: '15px',
            color: '#fff',
            textAlign: 'left',
        };

        const quote = {
            fontFamily: 'Texta Heavy',
            letterSpacing: '1px',
            fontStyle: 'Italic',
            fontSize: '2.6em',
        };

        const name = {
            fontFamily: 'Texta Heavy',
            fontStyle: 'Italic',
            fontSize: '2.0em',
            color: '#0A2037',
        };

        const position = {
            fontFamily: 'Texta Light',
            fontStyle: 'Italic',
            color: '#0A2037',
            fontSize: '2.0em',
        };

        return (
            <div className="container" style={container}>
                <div className="row" style={row}>
                    <div className="col" style={col}>
                        <div className="row">
                            <div className="col">
                                <h1 style={quote}>"{this.state.text}"</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h2 style={name}>- {this.state.name}</h2>
                                <h3 style={position}>{this.state.position}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default QuoteColumn;
