function CreateRole() {
    return (
        <>
            <h1 className="text-2xl font-medium mb-4">Ajouter un rôle</h1>
            <form action="#" className="bg-white dark:bg-gray-800 relative shadow-md p-4 sm:rounded-lg overflow-hidden">
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div className="w-full">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nom</label>
                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-rose-600 block w-full p-2.5" placeholder="Administrateur" required="" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="position" className="block mb-2 text-sm font-medium text-gray-900">Position</label>
                        <input type="number" name="position" id="position" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-rose-600 block w-full p-2.5" placeholder="1" required="" />
                    </div>
                </div>
                <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-rose-700 rounded-lg focus:ring-4 focus:ring-rose-200 hover:bg-rose-800">
                    Ajouter le rôle
                </button>
            </form>
        </>
    );
}

export default CreateRole;