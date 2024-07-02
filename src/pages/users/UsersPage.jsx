import ListPageLayout from "../../components/ListPageLayout";
import useFetchData from "../../hooks/useFetchData";

const UsersPage = () => {
    const transformData = data => data.map(user => ({
        last_name: user.lastName,
        first_name: user.firstName,
        email: user.email,
        role: user.role.name
    }));

    const users = useFetchData('users', transformData);

    return (
        <ListPageLayout
            title="Liste des utilisateurs"
            dataName="un utilisateur"
            columns={["Nom", "Prénom", "Adresse e-mail", "Rôle"]}
            dataList={users}
        />
    )
}

export default UsersPage;