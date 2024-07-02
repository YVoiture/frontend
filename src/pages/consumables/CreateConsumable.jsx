import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const CreateConsumable = () => {
    const navigate = useNavigate();
    const [formState, setFormState] = useState({
        name: '',
        serialNumber: '',
        quantity: '',
        category: '',
        price: '',
        supplierId: '',
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
        const newConsumable = {
            name: formState.name,
            serialNumber: formState.serialNumber,
            quantity: formState.quantity,
            category: formState.category,
            price: formState.price,
            supplierId: 3,
        }

        try {
            const response = await fetch(`${BACKEND_URL}/consumables`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newConsumable)
            });

            if (response.ok) {
                setFormState({
                    name: '',
                    serialNumber: '',
                    quantity: '',
                    category: '',
                    price: '',
                    supplierId: 3,
                });

                navigate("/consumables");
            }
        } catch (error) {
            console.error('Error adding consumable:', error);
        }
    }

    return (
        <>
            <h1 className="text-2xl font-medium mb-4">Ajouter un consommable</h1>
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 relative shadow-md p-4 sm:rounded-lg overflow-hidden">
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div className="w-full">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nom</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            value={formState.name}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-rose-600 block w-full p-2.5" 
                            placeholder="Nom du consommable" 
                            required="" 
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="serialNumber" className="block mb-2 text-sm font-medium text-gray-900">Numéro de série</label>
                        <input 
                            type="text" 
                            name="serialNumber" 
                            id="serialNumber" 
                            value={formState.serialNumber}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-rose-600 block w-full p-2.5" 
                            placeholder="Numéro de série" 
                            required=""
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">Catégorie</label>
                        <select id="category" name="category" value={formState.category} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-rose-500 focus:border-rose-500 block w-full p-2.5">
                            <option>Choisissez une catégorie</option>
                            <option value="ELECTRONIC">Eléctronique</option>
                            <option value="MECHANIC">Méchanique</option>
                            <option value="HYDRAULIC">Hydraulique</option>
                            <option value="OTHER">Autre</option>
                        </select>
                    </div>
                    <div className="w-full">
                        <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900">Quantité</label>
                        <input 
                            type="number" 
                            name="quantity" 
                            id="quantity" 
                            value={formState.quantity}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-rose-600 block w-full p-2.5" 
                            placeholder="Quantité" 
                            required=""
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Prix</label>
                        <input 
                            type="number" 
                            name="price" 
                            id="price" 
                            value={formState.price}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-rose-600 block w-full p-2.5" 
                            placeholder="Prix" 
                            required=""
                        />
                    </div>
                </div>
                <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-rose-700 rounded-lg focus:ring-4 focus:ring-rose-200 hover:bg-rose-800">
                    Ajouter le consommable
                </button>
            </form>
        </>
    )
}

export default CreateConsumable;