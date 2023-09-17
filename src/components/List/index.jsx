import ListItem from 'components/ListItem';

export default function List({ quotes, ...otherProps }) {
  return (
    <ul>
      {quotes.map(quote => (
        <li key={quote.id}>
          <ListItem
            id={quote.id}
            quote={quote.quote}
            author={quote.author}
            description={quote.description}
            {...otherProps}
          />
          <br />
        </li>
      ))}
    </ul>
  );
}
