import Table from './Table';

const ListPageLayout = ({ title, dataName, columns, dataList }) => {
    return (
        <>
            <h1 className="text-2xl font-medium">{title}</h1>
            <Table dataName={dataName} columns={columns} dataList={dataList} />
        </>
    );
};

export default ListPageLayout;
