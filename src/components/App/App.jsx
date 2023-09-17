import { Component } from 'react';
import { AppWrapper } from './App.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Audio } from 'react-loader-spinner';

import * as API from '../../services/api';
import Section from 'components/Section';
import Form from 'components/Form';
import List from 'components/List';

import { GlobalStyle } from 'components/GlobalStyle.styled';

export default class App extends Component {
  state = {
    quotes: [],
    isLoading: false,
  };

  componentDidMount() {
    this.fetchAllQuotes();
  }

  fetchAllQuotes = async () => {
    try {
      this.setState({ isLoading: true });
      const quotes = await API.getQuotes();
      this.setState({ quotes });
    } catch (error) {
    } finally {
      this.setState({ isLoading: false });
    }
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

  onQuoteChange = async fields => {
    try {
      const updatedQuote = await API.updateQuote(fields);
      console.log(updatedQuote);
      this.setState(prevState => ({
        quotes: prevState.quotes.map(quote =>
          quote.id === fields.id ? updatedQuote : quote
        ),
      }));
    } catch (error) {}
  };

  render() {
    const { quotes, isLoading } = this.state;

    return (
      <AppWrapper>
        <GlobalStyle />
        <Section title="Add new quote">
          <Form onSubmit={this.postQuote} />
        </Section>

        <Section title="All quotes">
          {isLoading ? (
            <Audio />
          ) : (
            <List
              quotes={quotes}
              onDelete={this.onQuoteDelete}
              onChange={this.onQuoteChange}
            />
          )}
        </Section>

        <ToastContainer />
      </AppWrapper>
    );
  }
}
