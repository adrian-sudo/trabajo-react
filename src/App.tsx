import Card, { CardBody } from "./components/Card";
import Button from "./components/Button";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [data, setData] = useState(["Goku", "Adrian", "Felipe"]);

  // jsx -> React.CreateElement

  // const [isLoading, setIsLoading] = useState(false);
  // const handleClick = () => setIsLoading(!isLoading);

  // const list: string[] = ["Goku", "Adrian", "Felipe"];

  // const handleSelect = (elemento: string) => {
  //   console.log("Imprimiendo", elemento);
  // };

  // const contenido = list.length ? (
  //   <List data={list} onSelect={handleSelect} />
  // ) : (
  //   "Sin elementos para mostrar"
  // );

  // return (
  //   <Card>
  //     <CardBody title="Hola mundo" text="Este es el texto" />
  //     {contenido}
  //     <Button isLoading={isLoading} onClick={handleClick}>
  //       Hola Mundo
  //     </Button>
  //   </Card>
  // );
  const addMinion = () => setData([...data, "Minion"]);
  const delMinion = () => setData(data.slice(0, data.length - 1));
  return (
    <Card>
      <Button isLoading={true} onClick={addMinion}>
        Agregar
      </Button>
      <Button isLoading={false} onClick={delMinion}>
        Eliminar
      </Button>

      <List data={data} />
    </Card>
  );
}

export default App;
