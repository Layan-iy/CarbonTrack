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
        console.log(document.body.innerHTML);

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


