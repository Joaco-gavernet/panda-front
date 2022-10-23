import ItemList from "./ItemList";

const List = ({ data }) => {
  return (
    <ul className="g-list flex flex-col justify-around px-2">
      {
        data.map(({ img, title, text }, i) => <ItemList key={i} img={img} title={title} text={text} />)
      }
    </ul>
  );
}

export default List;