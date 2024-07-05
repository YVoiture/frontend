import Table from './Table';

const ListPageLayout = ({ title, dataName, columns, dataList, canCreate = true, onDelete }) => {
    return (
        <>
            <h1 className="text-2xl font-medium">{title}</h1>
            <Table dataName={dataName} columns={columns} dataList={dataList} canCreate={canCreate} onDelete={onDelete} />
        </>
    );
};

export default ListPageLayout;
