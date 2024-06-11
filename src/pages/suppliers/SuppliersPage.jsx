import Table from "../../components/Table";

function SupliersPage() {
    return (
        <>
            <h1 className="text-2xl font-medium">Liste des fournisseurs</h1>
            <Table dataName="un fournisseur" columns={["Nom", "Type", "Adresse postale", "Adresse e-mail", "Numéro de téléphone"]} />
        </>
    );
}

export default SupliersPage;