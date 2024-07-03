import ListPageLayout from "../../components/ListPageLayout";
import useFetchData from "../../hooks/useFetchData";

const transformData = data => data.map(maintenance => ({
    startDate: maintenance.startDate,
    endDate: maintenance.endDate,
    type: maintenance.type,
}));

const MaintenancesPage = () => {
    const maintenances = useFetchData('maintenance', transformData);

    return (
        <ListPageLayout
            title="Liste des maintenances"
            dataName="une maintenance"
            columns={["Date de début", "Date de fin", "Type"]}
            dataList={maintenances}
        />
    )
}

export default MaintenancesPage;