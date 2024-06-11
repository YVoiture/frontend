import Table from "../../components/Table";

function UsersPage() {
    return (
        <>
            <h1 className="text-2xl font-medium">Liste des utilisateurs</h1>
            <Table dataName="un utilisateur" columns={["Nom", "Prénom", "Adresse e-mail", "Rôle"]} />
        </>
    )
}

export default UsersPage;