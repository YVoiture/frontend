import ListPageLayout from "../../components/ListPageLayout";
import useFetchData from "../../hooks/useFetchData";

const RolesPage = () => {
    const transformData = data => data.map(role => ({
        name: role.name,
        position: role.position
    }));

    const roles = useFetchData('roles', transformData);

    return (
        <ListPageLayout
            title="Liste des rôles"
            dataName="un rôle"
            columns={["Nom", "Position"]}
            dataList={roles}
        />
    );
};

export default RolesPage;
