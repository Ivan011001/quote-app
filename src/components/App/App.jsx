import { Component } from 'react';
import { AppWrapper } from './App.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as API from '../../services/api';
import Form from 'components/Form';
import List from 'components/List';

import { GlobalStyle } from 'components/GlobalStyle.styled';

export default class App extends Component {
  state = {
    quotes: [],
  };

  componentDidMount() {
    this.fetchAllQuotes();
  }

  fetchAllQuotes = async () => {
    try {
      const quotes = await API.getQuotes();
      this.setState({ quotes });
    } catch (error) {}
  };

  postQuote = async fields => {
    try {
      const newQuote = await API.createQuote(fields);
      this.setState(prevState => ({ quotes: [newQuote, ...prevState.quotes] }));
    } catch (error) {}
  };

  onQuoteDelete = async id => {
    try {
      await API.deleteQuote(id);
      this.setState(prevState => ({
        quotes: prevState.quotes.filter(quote => quote.id !== id),
      }));
    } catch (error) {}
  };

  render() {
    const { quotes } = this.state;

    return (
      <AppWrapper>
        <GlobalStyle />
        <Form onSubmit={this.postQuote} />
        <List quotes={quotes} onDelete={this.onQuoteDelete} />
        <ToastContainer />
      </AppWrapper>
    );
  }
}
