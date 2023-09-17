export default function ListItem({ id, quote, author, description, onDelete }) {
  return (
    <div>
      <h4>{quote}</h4>
      <h5>{author}</h5>
      <p>{description}</p>
      <button type="button" onClick={() => onDelete(id)}>
        Delete quote
      </button>
    </div>
  );
}
