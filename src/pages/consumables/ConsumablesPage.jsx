import ListPageLayout from "../../components/ListPageLayout";
import useDeleteData from "../../hooks/useDeleteData";
import useFetchData from "../../hooks/useFetchData";

const transformData = data => data.map(consumable => ({
    id: consumable.id,
    name: consumable.name,
    serialNumber: consumable.serialNumber,
    price: consumable.price + "€",
    category: consumable.category,
    quantity: consumable.quantity,
}));

const ConsumablesPage = () => {
    const consumables = useFetchData('consumables', transformData);
    const deleteData = useDeleteData('consumables', () => {
        window.location.reload();
    })

    return (
        <ListPageLayout
            title="Liste des consommables"
            dataName="un consommable"
            columns={["ID", "Nom", "Numéro de série", "Prix", "Catégorie", "Quantité"]}
            dataList={consumables}
            onDelete={deleteData}
        />
    )
}

export default ConsumablesPage;