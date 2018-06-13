import React, { Component } from 'react';
import './App.css';

import { Button } from 'react-bootstrap';
import ModalTask from './components/ModalTask';

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      smShow: false
    };
  }
  
  render() {
    let smClose = () => this.setState({ smShow: false });

    return (
      <div className="container">
        <Button
          bsStyle="primary"
          onClick={() => this.setState({ smShow: true })}
        >
          Launch large demo modal
        </Button>

        <ModalTask show={this.state.smShow} onHide={smClose} />
        {/* <modal>taks title</modal> */}
        {/* <modal>new task</modal>
        <modal>select date</modal>   */}
        <header className="App-header">
          1. header ( Home & login )
          2. tabs & search
        </header>
        <section>
          3.contents
            <p>task card</p>
        </section>
        <footer>
          4.footer
        </footer>
      </div>
    );
  }
}

export default App;
