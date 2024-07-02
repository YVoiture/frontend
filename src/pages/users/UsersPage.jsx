import { useEffect, useState } from "react";
import Table from "../../components/Table";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(`${BACKEND_URL}/users`);
                const data = await response.json();
                
                const filteredData = data.map(user => ({
                    last_name: user.lastName,
                    first_name: user.firstName,
                    email: user.email,
                    role: user.role.name
                }));

                setUsers(filteredData);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    })

    return (
        <>
            <h1 className="text-2xl font-medium">Liste des utilisateurs</h1>
            <Table dataName="un utilisateur" columns={["Nom", "Prénom", "Adresse e-mail", "Rôle"]} dataList={users} />
        </>
    )
}

export default UsersPage;