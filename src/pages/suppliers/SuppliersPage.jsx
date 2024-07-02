import { useEffect, useState } from "react";
import Table from "../../components/Table";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const SupliersPage = () => {
    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        const fetchSuppliers = async () => {
            try {
                const response = await fetch(`${BACKEND_URL}/suppliers`);
                const data = await response.json();
                
                const filteredData = data.map(supplier => ({
                    name: supplier.name,
                    type: supplier.type,
                    address: supplier.adress,
                    email: supplier.email,
                    phone: '0' + supplier.number
                }));

                setSuppliers(filteredData);
            } catch (error) {
                console.error('Error fetching suppliers:', error);
            }
        };

        fetchSuppliers();
    })

    return (
        <>
            <h1 className="text-2xl font-medium">Liste des fournisseurs</h1>
            <Table dataName="un fournisseur" columns={["Nom", "Type", "Adresse postale", "Adresse e-mail", "Numéro de téléphone"]} dataList={suppliers} />
        </>
    );
}

export default SupliersPage;