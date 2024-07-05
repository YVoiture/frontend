import ListPageLayout from "../../components/ListPageLayout";
import useDeleteData from "../../hooks/useDeleteData";
import useFetchData from "../../hooks/useFetchData";

const transformData = data => data.map(supplier => ({
    id: supplier.id,
    name: supplier.name,
    type: supplier.type,
    address: supplier.adress,
    email: supplier.email,
    phone: supplier.number
}));

const SuppliersPage = () => {
    const suppliers = useFetchData('suppliers', transformData);
    const deleteData = useDeleteData('suppliers', () => {
        window.location.reload();
    })

    return (
        <ListPageLayout
            title="Liste des fournisseurs"
            dataName="un fournisseur"
            columns={["ID", "Nom", "Type", "Adresse postale", "Adresse e-mail", "Numéro de téléphone"]}
            dataList={suppliers}
            onDelete={deleteData}
        />
    );
};

export default SuppliersPage;
