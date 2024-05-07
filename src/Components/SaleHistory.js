import React, { useState } from 'react';
import './SaleHistory.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const SaleHistory = () => {
  const [medicaments] = useState([
    { id: 1, name: "Paracétamol", date: "2023-03-01", quantity: 20, price: 250 },
    { id: 2, name: "Ibuprofène", date: "2023-03-05", quantity: 15, price: 200 },
    { id: 3, name: "Amoxicilline", date: "2023-03-10", quantity: 30, price: 300 },
    { id: 4, name: "Loratadine", date: "2023-03-15", quantity: 25, price: 220 },
    { id: 5, name: "Omeprazole", date: "2023-03-20", quantity: 10, price: 400 },
    { id: 6, name: "Diazépam", date: "2023-03-25", quantity: 12, price: 180 },
    { id: 7, name: "Mélatonine", date: "2023-03-28", quantity: 18, price: 210 },
    { id: 8, name: "Lévocétirizine", date: "2023-03-30", quantity: 22, price: 290 },
    // Ajout de 14 nouveaux médicaments
    { id: 9, name: "Aspirine", date: "2023-04-01", quantity: 25, price: 150 },
    { id: 10, name: "Diphenhydramine", date: "2023-04-05", quantity: 17, price: 280 },
    { id: 11, name: "Fexofenadine", date: "2023-04-08", quantity: 21, price: 320 },
    { id: 12, name: "Dextromethorphan", date: "2023-04-12", quantity: 14, price: 180 },
    { id: 13, name: "Fluticasone", date: "2023-04-15", quantity: 20, price: 350 },
    { id: 14, name: "Alprazolam", date: "2023-04-18", quantity: 8, price: 400 },
    { id: 15, name: "Atorvastatin", date: "2023-04-21", quantity: 30, price: 270 },
    { id: 16, name: "Cetirizine", date: "2023-04-24", quantity: 19, price: 200 },
    { id: 17, name: "Clarithromycin", date: "2023-04-27", quantity: 23, price: 320 },
    { id: 18, name: "Diclofenac", date: "2023-05-01", quantity: 16, price: 180 },
    { id: 19, name: "Famotidine", date: "2023-05-04", quantity: 12, price: 240 },
    { id: 20, name: "Gabapentin", date: "2023-05-07", quantity: 18, price: 300 },
    { id: 21, name: "Hydrocodone", date: "2023-05-10", quantity: 10, price: 380 },
    { id: 22, name: "Levothyroxine", date: "2023-05-13", quantity: 27, price: 250 },
    { id: 23, name: "Lisinopril", date: "2023-05-16", quantity: 15, price: 210 },
    { id: 24, name: "Metformin", date: "2023-05-19", quantity: 20, price: 180 },
    { id: 25, name: "Metoprolol", date: "2023-05-22", quantity: 22, price: 270 }
  ]);
  const [searchDate, setSearchDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(7); // Nombre de médicaments par page

  // Calcul des index du premier et du dernier élément de la page actuelle
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Filtrer les médicaments à afficher en fonction de la date de recherche
  const filteredMedicaments = searchDate ? medicaments.filter(medicament => medicament.date === searchDate) : medicaments;

  // Utiliser filteredMedicaments si la recherche par date est active, sinon utiliser medicaments
  const currentItems = filteredMedicaments.slice(indexOfFirstItem, indexOfLastItem);

  // Fonction pour passer à la page précédente
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Fonction pour passer à la page suivante
  const nextPage = () => {
    const totalPages = Math.ceil(filteredMedicaments.length / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Fonction pour passer à une page spécifique
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Générer les numéros de page pour la pagination
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredMedicaments.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Gérer le changement de date de recherche
  const handleSearchDateChange = (e) => {
    setSearchDate(e.target.value);
    setCurrentPage(1); // Réinitialiser la page actuelle lors de la recherche
  };

  return (
    <div className='content'>
    <section className="main">
    <section className="attendance">
    <div className="attendance-list">
    <div className="sale-history-container">
      <h1 >Historique des Ventes de Médicaments</h1>
      <div className="search-container">
        <input
          type="date"
          value={searchDate}
          onChange={handleSearchDateChange}
        />
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Date</th>
            <th>Quantité</th>
            <th>Prix Unité (DA)</th>
            <th>Total (DA)</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((medicament) => (
            <tr key={medicament.id}>
              <td>{medicament.id}</td>
              <td>{medicament.name}</td>
              <td>{medicament.date}</td>
              <td>{medicament.quantity}</td>
              <td>{medicament.price} DA</td>
              <td>{medicament.quantity * medicament.price} DA</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button className="btn" onClick={prevPage} disabled={currentPage === 1}>
          <FaChevronLeft />
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`btn ${currentPage === number ? 'active' : ''}`}
            onClick={() => goToPage(number)}
          >
            {number}
          </button>
        ))}
        <button
          className="btn"
          onClick={nextPage}
          disabled={currentPage >= Math.ceil(filteredMedicaments.length / itemsPerPage)}
        >
          <FaChevronRight />
        </button>
      </div>
    </div></div></section></section></div>
  );
};

export default SaleHistory;
