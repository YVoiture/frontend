import Table from "../components/Table";

function RolesPage() {
    return (
        <>
            <h1 className="text-2xl font-medium">Liste des rôles</h1>
            <Table dataName="un rôle" columns={["Nom", "Description"]} />
        </>
    );
}

export default RolesPage;