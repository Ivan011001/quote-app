import { Component } from 'react';
import Modal from 'components/Modal';

export default class ListItem extends Component {
  state = {
    modalIsOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ modalIsOpen: !prevState.modalIsOpen }));
  };

  render() {
    const { modalIsOpen } = this.state;
    const { id, quote, author, description, onDelete, onChange } = this.props;
    return (
      <div>
        <h4>{quote}</h4>
        <h5>{author}</h5>
        <p>{description}</p>
        <button type="button" onClick={() => onDelete(id)}>
          Delete quote
        </button>
        <button type="button" onClick={this.toggleModal}>
          Change quote
        </button>

        {modalIsOpen && (
          <Modal
            toggleModal={this.toggleModal}
            onChange={onChange}
            quote={quote}
            id={id}
          />
        )}
      </div>
    );
  }
}
