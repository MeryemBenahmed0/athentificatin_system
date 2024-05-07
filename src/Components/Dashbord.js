import React, { useState } from 'react';
import './Dashbord.css';
import { FaEye, FaShoppingCart, FaMoneyBill, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBriefcaseMedical } from "react-icons/fa6";



const Dashbord = () => {
  const history = useHistory();

  const [dailyViews, setDailyViews] = useState(1600);
  const [sales, setSales] = useState(76);
  const [revenue, setRevenue] = useState(7500);
  const [recentlySoldMedicines, setRecentlySoldMedicines] = useState([
    { id: 1, name: "Aspirine", family: "Analgesiques", date: "03-24-22", hours: "8:00AM", price: 150 },
    { id: 2, name: "Paracétamol", family: "Analgesiques", date: "03-24-22", hours: "9:00AM", price: 200 },
    { id: 3, name: "Ibuprofène", family: "Anti-inflammatoires", date: "03-24-22", hours: "8:00AM", price: 180 },
    { id: 4, name: "Amoxicilline", family: "Antibiotiques", date: "03-24-22", hours: "8:00AM", price: 300 },
    { id: 5, name: "Loratadine", family: "Antihistaminiques", date: "03-25-22", hours: "10:00AM", price: 250 },
    { id: 6, name: "Omeprazole", family: "Antiulcéreux", date: "03-25-22", hours: "11:00AM", price: 350 },
    { id: 7, name: "Mélatonine", family: "Sédatifs", date: "03-25-22", hours: "12:00PM", price: 180 },
    { id: 8, name: "Lévocétirizine", family: "Antiallergiques", date: "03-26-22", hours: "9:00AM", price: 280 },
    { id: 8, name: "Lévocétirizine", family: "Antiallergiques", date: "03-26-22", hours: "9:00AM", price: 280 },
    { id: 9, name: "Métronidazole", family: "Antibiotiques", date: "03-26-22", hours: "10:00AM", price: 400 },
    { id: 10, name: "Diazépam", family: "Sédatifs", date: "03-26-22", hours: "11:00AM", price: 320 }

  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Nombre de médicaments par page
  const [searchTerm, setSearchTerm] = useState('');
  const [searchActive, setSearchActive] = useState(false);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filteredMedicines = recentlySoldMedicines.filter(medicine =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const currentItems = filteredMedicines.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  }

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  }

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  }

  const toggleSearchActive = () => {
    setSearchActive(!searchActive);
  }

  const showMedicineDetails = (medicine) => {
    // Utilisez la méthode history.push pour naviguer vers la page des détails du médicament avec l'ID du médicament en tant que paramètre d'URL
    history.push(`/medicine-details/${medicine.id}`);
  }
  
  return ( 
    <div className='content'>
      <section className="main">
        <div className="content-container">
          <div className="cardBox">
          <div className="card">
    <div className="card-inner">
        <div>
            <div className="numbers">  {dailyViews}</div>
            <div className="cardName">  Vues quotidiennes</div>
        </div>
        <div className="iconBx">
            <FaEye />
        </div>
    </div>
</div>

            <div className="card">
            <div className="card-inner">
              <div>
                <div className="numbers">{sales}</div>
                <div className="cardName">Ventes</div>
              </div>
              <div className="iconBx">
                <FaShoppingCart />
              </div>
            </div></div>
            <div className="card">
            <div className="card-inner">
              <div>
                <div className="numbers">{revenue} DA</div>
                <div className="cardName">Revenus</div>
              </div>
              <div className="iconBx">
                <FaMoneyBill />
              </div>
            </div>
            </div>
          </div>
        </div>

        <section className="attendance">
          <div className="attendance-list">
            <h1>Liste des médicaments les plus récemment vendus</h1>
            <div className={`search-container ${searchActive ? 'active' : ''}`}>
              <input
                type="text"
                placeholder="Rechercher un médicament..."
                value={searchTerm}
                onChange={handleSearchChange}
                onClick={toggleSearchActive}
                onBlur={toggleSearchActive}
              />
              <div className="search-line"></div>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nom</th>
                  <th>Famille</th>
                  <th>Date</th>
                  <th>Heures de vente</th>
                  <th>Prix (DA)</th>
                  <th>Détails</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map(medicine => (
                  <tr key={medicine.id}>
                    <td>{medicine.id}</td>
                    <td>{medicine.name}</td>
                    <td>{medicine.family}</td>
                    <td>{medicine.date}</td>
                    <td>{medicine.hours}</td>
                    <td>{medicine.price} DA</td>
                    <td>
                      <span  onClick={() => showMedicineDetails(medicine)}  style={{ color:'#E36352'}}><FaBriefcaseMedical />

                        
                    
                      
                        
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination">
              <button className="btn" onClick={prevPage} disabled={currentPage === 1}><FaChevronLeft /></button>
              {[...Array(Math.ceil(filteredMedicines.length / itemsPerPage)).keys()].map(number => (
                <button key={number + 1} className={`btn ${currentPage === number + 1 ? 'active' : ''}`} onClick={() => setCurrentPage(number + 1)}>{number + 1}</button>
              ))}
              <button className="btn" onClick={nextPage} disabled={currentItems.length < itemsPerPage}><FaChevronRight /></button>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Dashbord;

