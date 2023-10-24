import React from "react";


function useLocalStorage(itemName, initialValue){
  //En este custom hook, nos referimos a los "todos" como "item", para hacerla más genérica y porque el locaStorage trata a todos sus elementos como "items".
  
  const [item, setItem] = React.useState(initialValue); //hasta que se ejecute useEffect y obtenga la información de localStorage, establecer valor inicial

  const [loading, setLoading] = React.useState(true); //Se envía el valor por defecto a true
  const [error, setError] = React.useState(false);  //Se envía el valor por defecto a false

  React.useEffect(() =>{
    //envolvemos toda la lógica try-catch en una función setTimeout, para que sólo se ejecute una vez cada cierto tiempo.
    setTimeout(() => {
      try {
        //Ahora los elementos "TODOs" se van a obtener del localStorage.
        //Se los obtiene previamente en una variable
  
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem; // parsedItem es lo que se va a enviar como estado inicial a nuestra aplicación.  
      
        if (!localStorageItem){
          localStorage.setItem(itemName,JSON.stringify(initialValue));
          parsedItem = initialValue;
        }else{
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);//comentar para probar "TodosEmpty"
        }
  
        setLoading(false);
        //prueba con error
        //setError(true); //indicar que ocurrió un error
        
      } catch (error) {
        setLoading(false);//indicar que terminó de cargar
        setError(true); //indicar que ocurrió un error
      }
    }, 2000);
  },[]);

  

  const saveItem = (newItem) =>{
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
   };

   //console.log(item);

  // retornamos los estados/función que vamos a utilizar
  // Si tenemos más de un elemento a retornar por array, es mejor devolver un objeto
   return {
    item, 
    saveItem, 
    loading, 
    error
   };
}

export { useLocalStorage };



{/* Array de elementos */}
/*
// localStorage.removeItem('TODOS_V1') // LocalStorage suele dar muchos problemas, en ese caso, es necesario limpiar el elemento y volver a empezar.
const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de introducción a React.js', completed: false },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'Proyecto final', completed: false },
  { text: 'Usar estados derivados', completed: false },
]
//localStorage.setItem('TODOS_V1', defaultTodos)
localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
*/