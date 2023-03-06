export default function Card(props) {
  return (
    <a href={props.link} className="card">
      <h2>{props.title} &rarr;</h2>
      <p>{props.text}</p>
    </a>
  );
}
