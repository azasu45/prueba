import { useState } from 'react';

let array = [
  {
    title: 78,
  },
  {
    title: 7,
  },
  {
    title: 1,
  },
  {
    title: 2,
  },
  {
    title: 3,
  },
  {
    title: 4,
  },
  {
    title: 5,
  },
];

function LinearSearch({ value, array }) {
  let encontrado = false;
  let index = 0;
  let position = -1;

  while (!encontrado && index < array.length) {
    console.log(array.length);

    if (array[index].title == value) {
      encontrado = true;

      position = index;
    } else {
      index += 1;
    }
  }

  return (
    <div className="containt-linearSearch">
      <h1>Busqueda Secuencial</h1>
      <h2 className={position === -1 ? 'n' : 'e'}>
        {position === -1 ? 'no encontrado' : 'encontrado'}
      </h2>
      <textarea
        cols="50"
        rows="15"
        value={`
let encontrado = false;
let index = 0;
let position = -1;

while(!encontrado && index < array.length){
  if (array[index].title == value) {
    encontrado = true;
    position = index;
    } else {
      index += 1;
  }
}
return position`}
      ></textarea>
    </div>
  );
}

function BinarieSearch({ value, array }) {
  let primero = 0;
  let ultimo = array.length - 1;
  let position = -1;
  let found = false;
  let mitad;

  return (
    <>
      <div className="Binariesearch">
        <h1 className="binarie-title">Busqueda Binaria</h1>
        <h2>Primer Elemento {array[primero].title}</h2>
        <h2>Ultimo Elemento {array[ultimo].title}</h2>
        <h2>Elemento del Medio {mitad}</h2>
      </div>
    </>
  );
}

function App() {
  const [inputValue, setInputValue] = useState(0);

  function handleValueChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div className="App">
      <input id="search" type="number" onChange={handleValueChange} />

      <h1>Valor Buscado es : {inputValue}</h1>

      <LinearSearch value={inputValue} array={array} />

      <BinarieSearch value={inputValue} array={array} />

      <h1>
        Elementos del arreglo{' '}
        {array.map((item, index) => {
          return <div key={index}>{item.title}</div>;
        })}
      </h1>
    </div>
  );
}

export default App;
