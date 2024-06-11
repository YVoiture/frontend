function CreateUser() {
    return (
        <>
            <h1 className="text-2xl font-medium mb-4">Ajouter un utilisateur</h1>
            <form action="#" className="bg-white dark:bg-gray-800 relative shadow-md p-4 sm:rounded-lg overflow-hidden">
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div className="w-full">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Adresse e-mail</label>
                        <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-rose-600 block w-full p-2.5" placeholder="john.doe@example.com" required="" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Mot de passe</label>
                        <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-rose-600 block w-full p-2.5" placeholder="**********" required="" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900">Nom</label>
                        <input type="text" name="last_name" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-rose-600 block w-full p-2.5" placeholder="Doe" required="" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">Prénom</label>
                        <input type="text" name="first_name" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-rose-600 block w-full p-2.5" placeholder="John" required="" />
                    </div>
                </div>
                <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-rose-700 rounded-lg focus:ring-4 focus:ring-rose-200 hover:bg-rose-800">
                    Ajouter l'utilisateur
                </button>
            </form>
        </>
    );
}

export default CreateUser;