import { useEffect, useState } from "react";
import Table from "../../components/Table";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

const RolesPage = () => {
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const response = await fetch(`${BACKEND_URL}/roles`);
                const data = await response.json();
                
                const filteredData = data.map(role => ({
                    name: role.name,
                    position: role.position
                }));

                setRoles(filteredData);
            } catch (error) {
                console.error('Error fetching roles:', error);
            }
        };

        fetchRoles();
    }, [])

    return (
        <>
            <h1 className="text-2xl font-medium">Liste des rôles</h1>
            <Table dataName="un rôle" columns={["Nom", "Position"]} dataList={roles} />
        </>
    );
}

export default RolesPage;