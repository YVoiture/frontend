import ListPageLayout from "../../components/ListPageLayout";
import useDeleteData from "../../hooks/useDeleteData";
import useFetchData from "../../hooks/useFetchData";

const transformData = data => data.map(maintenance => ({
    id: maintenance.id,
    startDate: maintenance.startDate,
    endDate: maintenance.endDate,
    type: maintenance.type,
}));

const MaintenancesPage = () => {
    const maintenances = useFetchData('maintenances', transformData);
    const deleteData = useDeleteData('maintenances', () => {
        window.location.reload();
    });

    return (
        <ListPageLayout
            title="Liste des maintenances"
            dataName="une maintenance"
            columns={["ID", "Date de début", "Date de fin", "Type"]}
            dataList={maintenances}
            onDelete={deleteData}
        />
    )
}

export default MaintenancesPage;