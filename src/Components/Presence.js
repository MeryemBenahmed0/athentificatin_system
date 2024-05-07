import React, { useState } from 'react';
import './Presence.css';
import './Dashbord.css';

const Presence = () => {
  const allMedicaments = [
    { id: 1, nom: "Aspirine", famille: "Analgesiques", prix: 150, stock: 100 },
    { id: 2, nom: "Paracétamol", famille: "Analgesiques", prix: 200, stock: 150 },
    { id: 3, nom: "Ibuprofène", famille: "Anti-inflammatoires", prix: 180, stock: 80 },
    { id: 4, nom: "Amoxicilline", famille: "Antibiotiques", prix: 300, stock: 200 },
    { id: 5, nom: "Loratadine", famille: "Antihistaminiques", prix: 220, stock: 120 },
    { id: 6, nom: "Omeprazole", famille: "Anti-ulcéreux", prix: 250, stock: 90 },
    { id: 7, nom: "Diazépam", famille: "Anxiolytiques", prix: 280, stock: 70 },
    // Ajoutez autant de médicaments que nécessaire
    { id: 8, nom: "Ciprofloxacine", famille: "Antibiotiques", prix: 350, stock: 150 },
    { id: 9, nom: "Prednisone", famille: "Corticoïdes", prix: 210, stock: 100 },
    { id: 10, nom: "Acétaminophène", famille: "Analgesiques", prix: 190, stock: 120 },
    { id: 11, nom: "Céfalexine", famille: "Antibiotiques", prix: 280, stock: 180 },
    { id: 12, nom: "Lansoprazole", famille: "Anti-ulcéreux", prix: 270, stock: 80 },
    { id: 13, nom: "Diazepam", famille: "Anxiolytiques", prix: 300, stock: 90 },
    { id: 14, nom: "Diphenhydramine", famille: "Antihistaminiques", prix: 240, stock: 110 },
    { id: 15, nom: "Naproxen", famille: "Anti-inflammatoires", prix: 220, stock: 70 },
    { id: 16, nom: "Codeine", famille: "Analgesiques", prix: 320, stock: 100 },
    { id: 17, nom: "Azithromycine", famille: "Antibiotiques", prix: 380, stock: 200 },
    { id: 18, nom: "Citalopram", famille: "Antidépresseurs", prix: 290, stock: 80 },
    { id: 19, nom: "Furosemide", famille: "Diurétiques", prix: 260, stock: 120 },
    { id: 20, nom: "Oxycodone", famille: "Analgesiques", prix: 400, stock: 150 },
    // Ajoutez autant de médicaments que nécessaire
  ];

  const [medicaments, setMedicaments] = useState(allMedicaments.slice(0, 7));
  const [panier, setPanier] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const ajouterAuPanier = (medicament) => {
    const index = panier.findIndex(item => item.id === medicament.id);
    if (index !== -1) {
      const nouveauPanier = [...panier];
      nouveauPanier[index].quantite += 1;
      setPanier(nouveauPanier);
    } else {
      setPanier([...panier, { ...medicament, quantite: 1 }]);
    }
    const updatedMedicaments = medicaments.map(item => {
      if (item.id === medicament.id) {
        return { ...item, stock: item.stock - 1 };
      }
      return item;
    });
    setMedicaments(updatedMedicaments);
  };

  const retirerDuPanier = (medicamentId) => {
    const medicament = panier.find(item => item.id === medicamentId);
    const nouveauPanier = panier.filter(item => item.id !== medicamentId);
    setPanier(nouveauPanier);
    const updatedMedicaments = medicaments.map(item => {
      if (item.id === medicamentId) {
        return { ...item, stock: item.stock + medicament.quantite };
      }
      return item;
    });
    setMedicaments(updatedMedicaments);
  };

  const totalPanier = panier.reduce((acc, item) => acc + (item.prix * item.quantite), 0);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filteredMedicaments = allMedicaments.filter(medicament =>
      medicament.nom.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setMedicaments(filteredMedicaments.slice(0, 7));
  };

  return (
     <div className='content'>
    <section className="main">
    <section className="attendance">
    <div className="attendance-list">
    <div className="container">
      <div className="medicaments">
        <h2>Médicaments disponibles</h2>
      <div className="search-container"> <input
          type="text"
          placeholder="Rechercher un médicament..."
          value={searchTerm}
          onChange={handleSearch}
        /></div>
        <table className='table'>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Famille</th>
              <th>Prix (DA)</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {medicaments.map(medicament => (
              <tr key={medicament.id}>
                <td>{medicament.nom}</td>
                <td>{medicament.famille}</td>
                <td>{medicament.prix}</td>
                <td>{medicament.stock}</td>
                <td>
                  <button onClick={() => ajouterAuPanier(medicament)} className='CartBtnn'><span class="IconContainer"> 
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#7e97b8" class="cart">
  <path d="M440 224H248V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v192H8c-13.3 0-24 10.7-24 24s10.7 24 24 24h176v192c0 17.7 14.3 32 32 32s32-14.3 32-32V272h192c17.7 0 32-14.3 32-32s-14.3-32-32-32z"/>
</svg>
  </span>
  <p class="text">Add to cart</p></button>
                </td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
      <div className="panier">
        <h2>Panier</h2>
        <table className='table'>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prix (DA)</th>
              <th>Quantité</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {panier.map(item => (
              <tr key={item.id}>
                <td>{item.nom}</td>
                <td>{item.prix}</td>
                <td>{item.quantite}</td>
                <td>
                  <button onClick={() => retirerDuPanier(item.id)}>Retirer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h3>Total: {totalPanier} DA</h3>
          <button className='btn' onClick={() => alert("Commande passée avec succès !")}>Finaliser la présence</button>
        </div>
      </div>
       </div></div></section></section></div>
  );
}

export default Presence;
