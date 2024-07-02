import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const CreateSupplier = () => {
    const navigate = useNavigate();
    const [formState, setFormState] = useState({
        name: '',
        siret: '',
        email: '',
        number: '',
        adress: '',
        contract_date: '',
        type: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newSupplier = {
            name: formState.name,
            siret: parseInt(formState.siret, 10),
            email: formState.email,
            number: parseInt(formState.number, 10),
            adress: formState.adress,
            conctractDate: formState.contract_date,
            type: formState.type
        };

        try {
            const response = await fetch(`${BACKEND_URL}/suppliers`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newSupplier),
            });

            if (response.ok) {
                setFormState({
                    name: '',
                    siret: '',
                    email: '',
                    number: '',
                    adress: '',
                    conctract_date: '',
                    type: '',
                });

                navigate("/suppliers");
            }
        } catch (error) {
            console.error('Error adding supplier:', error);
        }
    }

    return (
        <>
            <h1 className="text-2xl font-medium mb-4">Ajouter un fournisseur</h1>
            <form onSubmit={handleSubmit} className="bg-white relative shadow-md p-4 sm:rounded-lg overflow-hidden">
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div className="w-full">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nom</label>
                        <input type="text" name="name" id="name" value={formState.name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-rose-600 block w-full p-2.5" placeholder="Nom du fournisseur" required="" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="siret" className="block mb-2 text-sm font-medium text-gray-900">Siret</label>
                        <input type="text" name="siret" id="siret" value={formState.siret} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-rose-600 block w-full p-2.5" placeholder="Numéro de siret" required="" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Adresse e-mail</label>
                        <input type="email" name="email" id="email" value={formState.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-rose-600 block w-full p-2.5" placeholder="Adresse e-mail de contact" required="" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900">Numéro de téléphone</label>
                        <input type="tel" name="number" id="number" value={formState.number} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-rose-600 block w-full p-2.5" placeholder="Numéro de contact" required="" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="adress" className="block mb-2 text-sm font-medium text-gray-900">Adresse postale</label>
                        <input type="text" name="adress" id="adress" value={formState.adress} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-rose-600 block w-full p-2.5" placeholder="Adresse postale" required="" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="contract_date" className="block mb-2 text-sm font-medium text-gray-900">Date de contrat</label>
                        <input type="date" name="contract_date" id="contract_date" value={formState.contract_date} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-rose-600 block w-full p-2.5" placeholder="Date du contrat" required="" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900">Type</label>
                        <input type="text" name="type" id="type" value={formState.type} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-rose-600 block w-full p-2.5" placeholder="Type du contrat" required="" />
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