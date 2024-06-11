function CreateCar() {
    return (
        <>
            <h1 className="text-2xl font-medium mb-4">Ajouter une voiture</h1>
            <form action="#" className="bg-white relative shadow-md p-4 sm:rounded-lg overflow-hidden">
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div className="w-full">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nom</label>
                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-rose-600 block w-full p-2.5" placeholder="Nom de la voiture" required="" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Etat</label>
                        <select id="state" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-rose-500 focus:border-rose-500 block w-full p-2.5">
                            <option selected>Choisissez un état</option>
                            <option value="active">Active</option>
                            <option value="maintenance">En maintenance</option>
                            <option value="not_active">Non utilisé</option>
                            <option value="error">Erreur</option>
                        </select>
                    </div>
                    <div className="w-full">
                        <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900">Marque</label>
                        <input type="text" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-rose-600 block w-full p-2.5" placeholder="Marque" required="" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="model" className="block mb-2 text-sm font-medium text-gray-900">Modèle</label>
                        <input type="text" name="model" id="model" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-rose-600 block w-full p-2.5" placeholder="Modèle" required="" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="year" className="block mb-2 text-sm font-medium text-gray-900">Année de construction</label>
                        <input type="text" name="year" id="year" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-rose-600 block w-full p-2.5" placeholder="Année de construction" pattern="[0-9]{4}" required="" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="insuranceDate" className="block mb-2 text-sm font-medium text-gray-900">Date de l'assurance</label>
                        <input type="date" name="insuranceDate" id="insuranceDate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-rose-600 block w-full p-2.5" placeholder="" required="" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="plate" className="block mb-2 text-sm font-medium text-gray-900">Plaque d'immatriculation</label>
                        <input type="text" name="plate" id="plate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-rose-600 block w-full p-2.5" placeholder="AA-000-ZZ" required="" />
                    </div>
                </div>
                <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-rose-700 rounded-lg focus:ring-4 focus:ring-rose-200 hover:bg-rose-800">
                    Ajouter la voiture
                </button>
            </form>
        </>
    );
}

export default CreateCar;