import Table from "../components/Table";

function CarsPage() {
    return (
        <>
            <h1 className="text-2xl font-medium">Liste des voitures</h1>
            <Table dataName="une voiture" columns={["Identifiant", "Localisation", "Autre"]} />
        </>
    )
}

export default CarsPage;