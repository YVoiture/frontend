import { useEffect, useState } from "react";
import Table from "../../components/Table";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

const CarsPage = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await fetch(`${BACKEND_URL}/cars`);
                const data = await response.json();
                
                const filteredData = data.map(car => ({
                    plate: car.plate,
                    brand: car.brand,
                    model: car.model,
                    year: car.year
                }));

                setCars(filteredData);
            } catch (error) {
                console.error('Error fetching cars:', error);
            }
        };

        fetchCars();
    })

    return (
        <>
            <h1 className="text-2xl font-medium">Liste des voitures</h1>
            <Table dataName="une voiture" columns={["Plaque d'immatriculation", "Marque", "Modèle", "Année"]} dataList={cars} />
        </>
    )
}

export default CarsPage;