const FormLayout = ({ title, children, onSubmit }) => (
    <>
        <h1 className="text-2xl font-medium mb-4">{title}</h1>
        <form onSubmit={onSubmit} className="bg-white dark:bg-gray-800 relative shadow-md p-4 sm:rounded-lg overflow-hidden">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                {children}
            </div>
            <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-rose-700 rounded-lg focus:ring-4 focus:ring-rose-200 hover:bg-rose-800">
                Ajouter
            </button>
        </form>
    </>
);

export default FormLayout;
