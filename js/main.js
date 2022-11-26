//Realizado por Manuel Alexander Ajanel Jeróninmo

//Función keysAndValues que tiene como parámetro a un objeto
function keysAndValues(obj) {
  //Se definen nuevos arrays para almacenar valores y claves
    let claves = [];
    let valores = [];
    //Ciclo for para incluir elementos en cada array definido anteriormente
    for (let elemento in obj) {
      //Corresponde a las keys
      claves.push(elemento);
      //Corresponde a los values
      valores.push(obj[elemento]);
    }
    //La variable resultado almacena cada uno de los valores dentro de un array a la vez que se clasifican alfabéticamente con .sort()
    let resultado = [claves.sort(), valores.sort()];
    //Muestra en consola el array resultante
    console.log({resultado});
  }
  
  //Se indican los objetos para ser procesados dentro de la función
  keysAndValues({ a: 1, b: 2, c: 3 });
  keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" });
  keysAndValues({ key1: true, key2: false, key3: undefined });
