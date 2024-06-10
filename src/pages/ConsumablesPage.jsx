import Table from "../components/Table";

function ConsumablesPage() {
    return (
        <>
            <h1 className="text-2xl font-medium">Liste des consommables</h1>
            <Table dataName="un consommable" columns={["Nom", "Fournisseur", "Catégorie", "Prix", "Quantité"]} />
        </>
    );
}

export default ConsumablesPage;