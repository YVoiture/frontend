import ListPageLayout from "../../components/ListPageLayout";
import useDeleteData from "../../hooks/useDeleteData";
import useFetchData from "../../hooks/useFetchData";

const transformData = data => data.map(user => ({
    id: user.id,
    last_name: user.lastName,
    first_name: user.firstName,
    email: user.email,
    role: user.role.name
}));

const UsersPage = () => {
    const users = useFetchData('users', transformData);
    const deleteData = useDeleteData('users', () => {
        window.location.reload();
    })

    return (
        <ListPageLayout
            title="Liste des utilisateurs"
            dataName="un utilisateur"
            columns={["ID", "Nom", "Prénom", "Adresse e-mail", "Rôle"]}
            dataList={users}
            canCreate={false}
            onDelete={deleteData}
        />
    )
}

export default UsersPage;