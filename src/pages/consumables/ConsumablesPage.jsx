import ListPageLayout from "../../components/ListPageLayout";
import useFetchData from "../../hooks/useFetchData";

const transformData = data => data.map(consumable => ({
    name: consumable.name,
    serialNumber: consumable.serialNumber,
    price: consumable.price + "€",
    category: consumable.category,
    quantity: consumable.quantity,
}));

const ConsumablesPage = () => {
    const consumables = useFetchData('consumables', transformData);

    return (
        <ListPageLayout
            title="Liste des consommables"
            dataName="un consommable"
            columns={["Nom", "Numéro de série", "Prix", "Catégorie", "Quantité"]}
            dataList={consumables}
        />
    )
}

export default ConsumablesPage;