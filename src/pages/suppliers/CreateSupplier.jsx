function CreateSupplier() {
    return (
        <>
            <h1 className="text-2xl font-medium mb-4">Ajouter un fournisseur</h1>
            <form action="#" className="bg-white relative shadow-md p-4 sm:rounded-lg overflow-hidden">
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div className="w-full">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nom</label>
                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-rose-600 block w-full p-2.5" placeholder="Nom du fournisseur" required="" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="siret" className="block mb-2 text-sm font-medium text-gray-900">Siret</label>
                        <input type="text" name="siret" id="siret" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-rose-600 block w-full p-2.5" placeholder="Numéro de siret" pattern="[0-9]{14}" required="" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Adresse e-mail</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-rose-600 block w-full p-2.5" placeholder="Adresse e-mail de contact" required="" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Numéro de téléphone</label>
                        <input type="tel" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-rose-600 block w-full p-2.5" placeholder="Numéro de contact" pattern="[0-9]{10}" required="" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Adresse postale</label>
                        <input type="text" name="address" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-rose-600 block w-full p-2.5" placeholder="Adresse postale" required="" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="contract_date" className="block mb-2 text-sm font-medium text-gray-900">Date de contrat</label>
                        <input type="date" name="contract_date" id="contract_date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-rose-600 block w-full p-2.5" placeholder="Date du contrat" required="" />
                    </div>
                </div>
                <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-rose-700 rounded-lg focus:ring-4 focus:ring-rose-200 hover:bg-rose-800">
                    Ajouter le fournisseur
                </button>
            </form>
        </>
    );
}

export default CreateSupplier;