export default function Card(props) {



  // let my_burgers = 10;
  // function BurgerComponent(burgers) {
  //   return <h1>I have {burgers} Burgers</h1>;
  // };
  // let final_html = BurgerComponent(my_burgers);



  // console.log(component, BurgerComponent, final_html);



  return (
    <a href={props.link} className="card">
      <h2>{props.title} &rarr;</h2>
      <p>{props.text}</p>
    </a>
  );
}
