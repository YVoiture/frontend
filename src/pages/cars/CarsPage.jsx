import ListPageLayout from "../../components/ListPageLayout";
import useDeleteData from "../../hooks/useDeleteData";
import useFetchData from "../../hooks/useFetchData";

const transformData = data => data.map(car => ({
    id: car.id,
    plate: car.plate,
    brand: car.brand,
    model: car.model,
    year: car.year
}));

const CarsPage = () => {
    const cars = useFetchData('cars', transformData);
    const deleteData = useDeleteData('cars', () => {
        window.location.reload();
    });

    return (
        <ListPageLayout
            title="Liste des voitures"
            dataName="une voiture"
            columns={["ID", "Plaque d'immatriculation", "Marque", "Modèle", "Année"]}
            dataList={cars}
            onDelete={deleteData}
        />
    )
}

export default CarsPage;