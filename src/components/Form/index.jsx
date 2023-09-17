export default function Form({ onSubmit }) {
  const handleFormSubmit = evt => {
    const form = evt.currentTarget;
    evt.preventDefault();
    const { author, quote, description } = form.elements;

    const fileds = {
      author: author.value,
      quote: quote.value,
      description: description.value,
    };
    onSubmit(fileds);

    form.reset();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" name="author" autoComplete="off" required />
      <br />
      <input type="text" name="quote" autoComplete="off" required />
      <br />
      <textarea
        name="description"
        id=""
        cols="30"
        rows="5"
        autoComplete="off"
        required
        style={{ display: 'block', resize: 'none' }}
      ></textarea>
      <br />
      <button type="submit">Add</button>
    </form>
  );
}
