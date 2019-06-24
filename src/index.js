import React, {Component} from 'react';
import { render } from 'react-dom';

class Button extends Component {
    render() {
        return <a href="" onClick={this.props.onClick}>{this.props.children}</a>;
    }
}

class App extends Component {

    handlerClick(){
        alert('Botão Clicado')
    }

    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <Button onClick={this.handlerClick}>Enviar</Button>
            </div>
        );
    }
}

render(<App />, document.getElementById('app'));