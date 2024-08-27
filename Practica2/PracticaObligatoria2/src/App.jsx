import React from 'react';
import Table from './components/table/Table';


const App = () =>{
  const netIncomes = [
    {brand: 'McDonalds',income: 1291283}, 
    {brand: 'Burger King', income: 1927361},
     {brand: 'KFC', income: 1098463}];

  const sumIncome = netIncomes.reduce((num, sig) =>{
    return num + sig.income;
  },0);
  console.log(sumIncome);
  const averageIncome = sumIncome / netIncomes.length;

  return(
    <div>
     <Table information = {netIncomes}/>
     <p style={{ display: "flex", justifyContent: "center" }}>Promedio de ingresos neto: $ {averageIncome.toFixed(2)}</p>
    </div>

  )

}



export default App


// Escribir un componente Table.jsx que
//  arme una tabla de HTML donde las columnas sean el nombre de la marca y el ingreso neto.

// Escribir una etiqueta p que muestre el promedio de ingreso neto entre todas las marcas. 
// Utilizar obligatoriamente la función reduce para calcular el promedio.