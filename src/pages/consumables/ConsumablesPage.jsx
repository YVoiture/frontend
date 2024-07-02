import { useEffect, useState } from "react";
import Table from "../../components/Table";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const ConsumablesPage = () => {
    const [consumables, setConsumables] = useState([]);

    useEffect(() => {
        const fetchConsumables = async () => {
            try {
                const response = await fetch(`${BACKEND_URL}/consumables`);
                const data = await response.json();

                const filteredData = data.map(consumable => ({
                    name: consumable.name,
                    serialNumber: consumable.serialNumber,
                    price: consumable.price + "€",
                    category: consumable.category,
                    quantity: consumable.quantity,
                }));

                setConsumables(filteredData);
            } catch (error) {
                console.error('Error fetching consumables:', error);
            }
        };

        fetchConsumables();
    }, []);

    return (
        <>
            <h1 className="text-2xl font-medium">Liste des consommables</h1>
            <Table dataName="un consommable" columns={["Nom", "Numéro de série", "Prix", "Catégorie", "Quantité"]} dataList={consumables} />
        </>
    );
}

export default ConsumablesPage;