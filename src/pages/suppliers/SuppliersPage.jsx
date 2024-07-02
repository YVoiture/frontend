import ListPageLayout from "../../components/ListPageLayout";
import useFetchData from "../../hooks/useFetchData";

const SuppliersPage = () => {
    const transformData = data => data.map(supplier => ({
        name: supplier.name,
        type: supplier.type,
        address: supplier.adress,
        email: supplier.email,
        phone: supplier.number
    }));

    const suppliers = useFetchData('suppliers', transformData);

    return (
        <ListPageLayout
            title="Liste des fournisseurs"
            dataName="un fournisseur"
            columns={["Nom", "Type", "Adresse postale", "Adresse e-mail", "Numéro de téléphone"]}
            dataList={suppliers}
        />
    );
};

export default SuppliersPage;
