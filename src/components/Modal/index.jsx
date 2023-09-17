import { Component } from 'react';
import { Backdrop, ModalWindow } from './Modal.styled';

export default class Modal extends Component {
  state = {
    quote: '',
  };

  componentDidMount() {
    const { quote } = this.props;
    this.setState({ quote });
    document.addEventListener('keydown', this.escapeHandlePress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escapeHandlePress);
  }

  backdrophandleClick = evt => {
    const { toggleModal } = this.props;
    if (evt.target === evt.currentTarget) {
      toggleModal();
    }
  };

  escapeHandlePress = evt => {
    const { toggleModal } = this.props;
    if (evt.code === 'Escape') {
      toggleModal();
    }
  };

  onQuoteChange = evt => {
    const { id, onChange, toggleModal } = this.props;
    evt.preventDefault();
    onChange({ id, quote: evt.currentTarget.elements.newQuote.value });
    toggleModal();
  };

  handleQuoteChange = evt => {
    this.setState({ quote: evt.currentTarget.value });
  };

  render() {
    const { quote } = this.state;

    return (
      <Backdrop onClick={this.backdrophandleClick}>
        <ModalWindow>
          <h3>{quote}</h3>
          <form onSubmit={this.onQuoteChange}>
            <label>
              Change quote to:
              <textarea
                name="newQuote"
                id=""
                cols="30"
                rows="3"
                value={quote}
                onChange={this.handleQuoteChange}
              ></textarea>
            </label>
            <button>Change</button>
          </form>
        </ModalWindow>
      </Backdrop>
    );
  }
}
