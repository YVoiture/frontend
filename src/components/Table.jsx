import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

function Table({ canCreate, dataName, columns, dataList }) {
    const location = useLocation();
    const createLink = `${location.pathname}/create`;

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="py-4">
                <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                        <div className="w-full md:w-1/2">
                            <form className="flex items-center">
                                <label htmlFor="simple-search" className="sr-only">Rechercher</label>
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-rose-500 focus:border-rose-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500" placeholder="Rechercher" required="" />
                                </div>
                            </form>
                        </div>
                        {canCreate && (
                            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                                <Link to={createLink} className="flex items-center justify-center text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-rose-600 dark:hover:bg-rose-700 focus:outline-none dark:focus:ring-rose-800">
                                    <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                    </svg>
                                    Ajouter {dataName}
                                </Link>
                            </div>
                        )}
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    {columns.map((column, index) => (
                                        <th key={index} scope="col" className="px-4 py-3">{column}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {dataList && dataList.length > 0 ? (
                                    dataList.map((item, index) => (
                                        <tr key={index} className="border-b dark:border-gray-700">
                                            {Object.values(item).map((value, subIndex) => (
                                                <td key={subIndex} className="px-4 py-3">{value ? value : '-'}</td>
                                            ))}
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={columns.length} className="text-center py-4">Aucune donnée disponible</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}

Table.propTypes = {
    canCreate: PropTypes.bool,
    dataName: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.string).isRequired,
    dataList: PropTypes.arrayOf(PropTypes.object),
}

Table.defaultProps = {
    canCreate: true,
}

export default Table;