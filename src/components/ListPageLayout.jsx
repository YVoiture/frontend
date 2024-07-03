import Table from './Table';

const ListPageLayout = ({ title, dataName, columns, dataList, canCreate = true }) => {
    return (
        <>
            <h1 className="text-2xl font-medium">{title}</h1>
            <Table dataName={dataName} columns={columns} dataList={dataList} canCreate={canCreate} />
        </>
    );
};

export default ListPageLayout;
