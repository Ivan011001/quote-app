import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyle } from 'components/GlobalStyle.styled';

export default class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <ToastContainer />
      </div>
    );
  }
}
