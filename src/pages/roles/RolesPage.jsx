import ListPageLayout from "../../components/ListPageLayout";
import useDeleteData from "../../hooks/useDeleteData";
import useFetchData from "../../hooks/useFetchData";

const transformData = data => data.map(role => ({
    id: role.id,
    name: role.name,
    position: role.position
}));

const RolesPage = () => {
    const roles = useFetchData('roles', transformData);
    const deleteData = useDeleteData('roles', () => {
        window.location.reload();
    });

    return (
        <ListPageLayout
            title="Liste des rôles"
            dataName="un rôle"
            columns={["ID", "Nom", "Position"]}
            dataList={roles}
            onDelete={deleteData}
        />
    );
};

export default RolesPage;
