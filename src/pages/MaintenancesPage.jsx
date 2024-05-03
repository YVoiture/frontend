import Table from "../components/Table";

function MaintenancesPage() {
    return (
        <>
            <h1 className="text-2xl font-medium">Liste des maintenances</h1>
            <Table dataName="une maintenance" columns={["Nom", "Description"]} />
        </>
    );
}

export default MaintenancesPage;