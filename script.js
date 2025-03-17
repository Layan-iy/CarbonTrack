// Requête pour les fruits et légumes
const reqFruits = new XMLHttpRequest();
reqFruits.open('get', 'https://impactco2.fr/api/v1/fruitsetlegumes?month=1');
reqFruits.onreadystatechange = function() {
    if (reqFruits.readyState === 4 && reqFruits.status === 200) {
        const donnees = JSON.parse(reqFruits.responseText);
        let listefruit = '<h2>Fruit & Légumes</h2><form id="formFruit"><label for="titre">Pour 1 kg</label><br/><select name="fruit">';
        console.log(donnees);

        for (const produit of donnees.data) {
            listefruit += '<option value="'+ produit.name + '">'+ produit.name + '</option>';
        }

        listefruit += '</select><br/><label for="quantite">Quantité (en kg) :</label><br/><input type="number" id="quantite" name="quantite" required min="1"/><br/><input type="submit" value="Générer" /></form>';
        document.querySelector("#listeF").innerHTML = listefruit;

        document.getElementById("formFruit").addEventListener("submit", function(event){
            event.preventDefault();
            const quantite = parseInt(document.getElementById("quantite").value);
            const fruitSelectionne = document.querySelector('select[name="fruit"]').value;
            const fruit = donnees.data.find(f => f.name === fruitSelectionne);
            const ecv = fruit.ecv * quantite;
            document.getElementById("resultat").innerText = `Pour ${quantite} kg de ${fruitSelectionne}, l'empreinte carbone est de ${ecv.toFixed(2)} kg CO2e.`;
        });
    }
};
reqFruits.send();

// Requête pour les transports
const reqTransports = new XMLHttpRequest();
reqTransports.open('get', 'https://impactco2.fr/api/v1/thematiques/ecv/4?detail=0');
reqTransports.onreadystatechange = function() {
    if (reqTransports.readyState === 4 && reqTransports.status === 200) {
        const donnees = JSON.parse(reqTransports.responseText);
        let listeTransport = '<h2>Transport</h2><form id="formTransport"><label for="titre">Pour 1 km</label><br/><select name="transport">';
        console.log(donnees);

        for (const transport of donnees.data) {
            listeTransport += '<option value="'+ transport.name + '">'+ transport.name + '</option>';
        }

        listeTransport += '</select><br/><label for="distance">Distance (en km) :</label><br/><input type="number" id="distance" name="distance" required min="1"/><br/><input type="submit" value="Générer" /></form>';
        document.querySelector("#listeT").innerHTML = listeTransport;

        document.getElementById("formTransport").addEventListener("submit", function(event){
            event.preventDefault();
            const distance = parseInt(document.getElementById("distance").value);
            const transportSelectionne = document.querySelector('select[name="transport"]').value;
            const transport = donnees.data.find(t => t.name === transportSelectionne);
            const ecv = transport.ecv * distance;
            document.getElementById("resultat").innerText = `Pour ${distance} km en ${transportSelectionne}, l'empreinte carbone est de ${ecv.toFixed(3)} kg CO2e.`;
        });
    }
};
reqTransports.send();


data = [
    {
      "name": "Pomme",
      "slug": "pomme",
      "months": [
        1,
        2,
        3,
        4,
        8,
        9,
        10,
        11,
        12
      ],
      "ecv": 0.396515083
    },
    {
      "name": "Orange",
      "slug": "orange",
      "months": [
        1,
        2,
        3
      ],
      "ecv": 0.633964319
    },
    {
      "name": "Citron",
      "slug": "citron",
      "months": [
        1,
        2
      ],
      "ecv": 0.711263074
    },
    {
      "name": "Betterave",
      "slug": "betterave",
      "months": [
        1,
        2,
        3,
        10,
        11,
        12
      ],
      "ecv": 0.3643210989999999
    },
    {
      "name": "Carotte",
      "slug": "carotte",
      "months": [
        1,
        2,
        3,
        9,
        10,
        11,
        12
      ],
      "ecv": 0.3643210989999999
    },
    {
      "name": "Céleri",
      "slug": "celeri",
      "months": [
        1,
        2,
        3,
        10,
        11,
        12
      ],
      "ecv": 0.6770180851000002
    },


  
    {
      "name": "Courge",
      "slug": "courge",
      "months": [
        1,
        9,
        10,
        11,
        12
      ],
      "ecv": 0.618848881
    },
    {
      "name": "Cresson",
      "slug": "cresson",
      "months": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12
      ],
      "ecv": 0.9410662189999999
    },
  
    {
      "name": "Mangue",
      "slug": "mangue",
      "months": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12
      ],
      "ecv": 10.641545366999999
    },
    {
      "name": "Mâche",
      "slug": "mache",
      "months": [
        1,
        2,
        10,
        11,
        12
      ],
      "ecv": 0.9410662189999999
    },
    {
      "name": "Navet",
      "slug": "navet",
      "months": [
        1,
        2,
        3,
        4,
        5,
        10,
        11,
        12
      ],
      "ecv": 0.364321099
    },
    {
      "name": "Oignon",
      "slug": "oignon",
      "months": [
        1,
        2,
        3,
        4,
        9,
        10,
        11,
        12
      ],
      "ecv": 0.38953612800000015
    },
    {
      "name": "Panais",
      "slug": "panais",
      "months": [
        1,
        2,
        3,
        10,
        11,
        12
      ],
      "ecv": 0.45782909000000005
    },
    {
      "name": "Poireau",
      "slug": "poireau",
      "months": [
        1,
        2,
        3,
        4,
        9,
        10,
        11,
        12
      ],
      "ecv": 0.768865685
    },
    {
      "name": "Potiron",
      "slug": "potiron",
      "months": [
        1,
        9,
        10,
        11,
        12
      ],
      "ecv": 0.618848881
    },
    {
      "name": "Clémentine",
      "slug": "clementine",
      "months": [
        1,
        2,
        11,
        12
      ],
      "ecv": 1.2214244939999999
    },
    {
      "name": "Poire",
      "slug": "poire",
      "months": [
        1,
        2,
        3,
        8,
        9,
        10,
        11,
        12
      ],
      "ecv": 0.36428259399999996
    },
    {
      "name": "Ananas",
      "slug": "ananas",
      "months": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12
      ],
      "ecv": 1.292282106
    },
    {
      "name": "Banane",
      "slug": "banane",
      "months": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12
      ],
      "ecv": 0.8806108929999997
    },
    {
      "name": "Avocat",
      "slug": "avocat",
      "months": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12
      ],
      "ecv": 1.4804702330000001
    },
    {
      "name": "Carambole",
      "slug": "carambole",
      "months": [
        1,
        11,
        12
      ],
      "ecv": 0.533048897
    },
    {
      "name": "Datte",
      "slug": "datte",
      "months": [
        1,
        10,
        11,
        12
      ],
      "ecv": 2.7601109879999997
    },
    {
      "name": "Fruit de la passion",
      "slug": "fruitdelapassion",
      "months": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12
      ],
      "ecv": 0.89281737
    },
    {
      "name": "Grenade",
      "slug": "grenade",
      "months": [
        1,
        2,
        11,
        12
      ],
      "ecv": 0.48557222170000003
    },
    {
      "name": "Kaki",
      "slug": "kaki",
      "months": [
        1,
        10,
        11,
        12
      ],
      "ecv": 0.9004313517
    },
    {
      "name": "Noix de coco",
      "slug": "noixdecoco",
      "months": [
        1,
        2,
        11,
        12
      ],
      "ecv": 2.493762422
    },

    
   
   
    {
      "name": "Champignon (morille crue)",
      "slug": "champignonmorille",
      "months": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12
      ],
      "ecv": 0.4937143989999999
    },
    {
      "name": "Chou",
      "slug": "chou",
      "months": [
        1,
        2,
        3,
        10,
        11,
        12
      ],
      "ecv": 0.862097522
    },
    {
      "name": "Chou de Bruxelles",
      "slug": "choudebruxelles",
      "months": [
        1,
        2,
        3,
        10,
        11,
        12
      ],
      "ecv": 0.5758186729
    },
    {
      "name": "Chou-fleur",
      "slug": "choufleur",
      "months": [
        1,
        2,
        3,
        9,
        10,
        11,
        12
      ],
      "ecv": 0.735512212
    },
    {
      "name": "Endive",
      "slug": "endive",
      "months": [
        1,
        2,
        3,
        4,
        5,
        10
      ],
      "ecv": 0.9380277949999998
    },
    {
      "name": "Épinard",
      "slug": "epinard",
      "months": [
        1,
        2,
        3,
        4,
        5,
        9,
        10,
        11,
        12
      ],
      "ecv": 0.3912991521
    },
  
    {
      "name": "Mâche",
      "slug": "mache",
      "months": [
        1,
        2,
        10,
        11,
        12
      ],
      "ecv": 0.9410662189999999
    },
    
   
    {
      "name": "Pamplemousse",
      "slug": "pamplemousse",
      "months": [
        2,
        3,
        4,
        5,
        6
      ],
      "ecv": 0.8728596140000001
    },
    {
      "name": "Kiwi",
      "slug": "kiwi",
      "months": [
        1,
        2,
        3,
        11,
        12
      ],
      "ecv": 0.9768151836999999
    },
    {
      "name": "Mandarine",
      "slug": "mandarine",
      "months": [
        1,
        2,
        11,
        12
      ],
      "ecv": 0.42273830129999995
    } ,
    {
      "name": "Radis",
      "slug": "radis",
      "months": [
        3,
        4,
        5,
        6
      ],
      "ecv": 0.6018473451
    },
    {
      "name": "Asperge",
      "slug": "asperge",
      "months": [
        4,
        5,
        6
      ],
      "ecv": 1.559309081
    },
    {
      "name": "Fenouil",
      "slug": "fenouil",
      "months": [
        4,
        6,
        7,
        8,
        9,
        10,
        11
      ],
      "ecv": 0.962528871
    },
    {
      "name": "Rhubarbe",
      "slug": "rhubarbe",
      "months": [
        4,
        5,
        6
      ],
      "ecv": 0.7167486917
    },
    {
      "name": "Fraise",
      "slug": "fraise",
      "months": [
        5,
        6,
        7
      ],
      "ecv": 0.47706577790000004
    },
    {
      "name": "Artichaut",
      "slug": "artichaut",
      "months": [
        5,
        6,
        7,
        8,
        9
      ],
      "ecv": 3.876929068
    },
    {
    "name": "Concombre",
    "slug": "concombre",
    "months": [
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "ecv": 0.473201203
  },
  {
      "name": "Courgette",
      "slug": "courgette",
      "months": [
        5,
        6,
        7,
        8,
        9,
        10
      ],
      "ecv": 0.48351979
    },
    {
      "name": "Laitue",
      "slug": "laitue",
      "months": [
        5,
        6,
        7,
        8,
        9
      ],
      "ecv": 0.9410662189999999
    },
    {
      "name": "Petit pois",
      "slug": "petitpois",
      "months": [
        5,
        6,
        7
      ],
      "ecv": 0.6651291770000001
    },
    {
      "name": "Blette",
      "slug": "blette",
      "months": [
        6,
        7,
        8,
        9,
        10,
        11
      ],
      "ecv": 0.542753575
    },
    {
      "name": "Haricot vert",
      "slug": "haricotvert",
      "months": [
        6,
        7,
        8,
        9,
        10
      ],
      "ecv": 0.41306197199999994
    },
    {
      "name": "Poivron",
      "slug": "poivron",
      "months": [
        6,
        7,
        8,
        9
      ],
      "ecv": 1.1836197739999998
    },
    {
      "name": "Cassis",
      "slug": "cassis",
      "months": [
        6,
        7,
        8
      ],
      "ecv": 1.7963874969999998
    },
    {
      "name": "Groseille",
      "slug": "groseille",
      "months": [
        6,
        7,
        8
      ],
      "ecv": 1.7875465516999998
    },
    {
    "name": "Melon",
    "slug": "melon",
    "months": [
      6,
      7,
      8,
      9
    ],
    "ecv": 0.931394984
  },
  {
  "name": "Pêche",
  "slug": "peche",
  "months": [
    6,
    7,
    8,
    9
  ],
  "ecv": 0.5957366917
},
 
{
"name": "Cerise",
"slug": "cerise",
"months": [
  6,
  7
],
"ecv": 1.3353255069999996
},
{
"name": "Abricot",
"slug": "abricot",
"months": [
  6,
  7,
  8
],
"ecv": 0.8806383170000001
},
{
"name": "Framboise",
"slug": "framboise",
"months": [
  6,
  7,
  8
],
"ecv": 1.4750375679
},
{
"name": "Aubergine",
"slug": "aubergine",
"months": [
  6,
  7,
  8,
  9
],
"ecv": 0.4571093429
},
{
"name": "Tomate",
"slug": "tomate",
"months": [
  6,
  7,
  8,
  9
],
"ecv": 0.581556477
},
{
  "name": "Pastèque",
  "slug": "pasteque",
  "months": [
    6,
    7,
    8,
    9
  ],
  "ecv": 0.6414638217000002
},
{
  "name": "Ail",
  "slug": "ail",
  "months": [
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "ecv": 0.358042894
},
{
  "name": "Maïs",
  "slug": "mais",
  "months": [
    7,
    8,
    9
  ],
  "ecv": 0.810485801
},
{
  "name": "Figue",
  "slug": "figue",
  "months": [
    7,
    8,
    9,
    10
  ],
  "ecv": 0.6135498970000001
},
{
  "name": "Myrtille",
  "slug": "myrtille",
  "months": [
    7,
    8,
    9
  ],
  "ecv": 0.8815012491
},
{
  "name": "Prune",
  "slug": "prune",
  "months": [
    7,
    8,
    9
  ],
  "ecv": 0.9630279916999999
},
{
  "name": "Mûre",
  "slug": "mure",
  "months": [
    8,
    9
  ],
  "ecv": 1.2060856469999999
},
{
  "name": "Nectarine",
  "slug": "nectarine",
  "months": [
    8,
    9
  ],
  "ecv": 0.6373697500000002
},
{
  "name": "Reine Claude",
  "slug": "reineclaude",
  "months": [
    9
  ],
  "ecv": 0.971868937
},
{
  "name": "Raisin",
  "slug": "raisin",
  "months": [
    9,
    10
  ],
  "ecv": 0.45672809300000006
},
{
  "name": "Brocoli",
  "slug": "brocoli",
  "months": [
    9,
    10,
    11
  ],
  "ecv": 0.9025554719999999
},
{
  "name": "Coing",
  "slug": "coing",
  "months": [
    10
  ],
  "ecv": 0.5410901117000001
},
{
  "name": "Échalote",
  "slug": "echalote",
  "months": [
    10,
    11,
    12
  ],
  "ecv": 0.3648632602000001
}
  ]
