import ListPageLayout from "../../components/ListPageLayout";
import useFetchData from "../../hooks/useFetchData";

const transformData = data => data.map(car => ({
    plate: car.plate,
    brand: car.brand,
    model: car.model,
    year: car.year
}));

const CarsPage = () => {
    const cars = useFetchData('cars', transformData);

    return (
        <ListPageLayout
            title="Liste des voitures"
            dataName="une voiture"
            columns={["Plaque d'immatriculation", "Marque", "Modèle", "Année"]}
            dataList={cars}
            canCreate={false}
        />
    )
}

export default CarsPage;