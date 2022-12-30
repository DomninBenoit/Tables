# Tables

Une librairie pour afficher des données dans un tableau avec une barre de recherche et une pagination.

## Installation

_npm install tables_

## Utilisation

```javascript
import Tables from "tables";

const columns = [
  {
    title: "Nom",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Ville",
    dataIndex: "city",
  },
];

const data = [
  {
    key: "1",
    name: "John",
    age: 32,
    city: "New York",
  },
  {
    key: "2",
    name: "Jane",
    age: 27,
    city: "Chicago",
  },
  {
    key: "3",
    name: "Bob",
    age: 35,
    city: "Los Angeles",
  },
];

<Tables columns={columns} data={data} />;
```

## Propriétés

columns (obligatoire) : un tableau d'objets définissant les colonnes du tableau et leurs données correspondantes. Chaque objet doit avoir une propriété title et dataIndex.

data (obligatoire) : un tableau de données à afficher dans le tableau. Chaque élément doit avoir une propriété key unique.

## Exemple

Voici un exemple complet d'utilisation de la librairie :

```JAVASCRIPT
import React from "react";
import Tables from "tables";

const columns = [{
title: 'Nom',
dataIndex: 'name',
}, {
title: 'Age',
dataIndex: 'age',
}, {
title: 'Ville',
dataIndex: 'city',
}];

const data = [{
key: '1',
name: 'John',
age: 32,
city: 'New York',
}, {
key: '2',
name: 'Jane',
age: 27,
city: 'Chicago',
}, {
key: '3',
name: 'Bob',
age: 35,
city: 'Los Angeles',
}];

function App() {
return (

<div className="App">
<Tables
        columns={columns}
        data={data}
      />
</div>
);
}

export default App;
```
