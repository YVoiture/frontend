import useSubmit from "../../hooks/useSubmit";
import FormLayout from "../../components/FormLayout";
import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const EditCar = () => {
    const { id } = useParams();
    const [initialFormState, setInitialFormState] = useState({
        plate: '',
        brand: '',
        model: '',
        year: '',
        codeId: ''
    });
    const [formState, handleChange, handleSubmit] = useSubmit(`cars/${id}`, initialFormState, true);

    useEffect(() => {
        const fetchCar = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/cars/${id}`);
                const data = await response.json();
                setInitialFormState(data);
            } catch (error) {
                console.error('Error fetching car data:', error);
            }
        };

        fetchCar();
    }, [id]);

    useEffect(() => {
        setInitialFormState(formState);
    }, [formState]);

    return (
        <FormLayout title="Modifier la voiture" isUpdate={true} onSubmit={handleSubmit}>
            <TextInput label="Plaque d'immatriculation" name="plate" type="text" value={formState.plate} onChange={handleChange} placeholder="Plaque d'immatriculation" />
            <SelectInput 
                label="Marque" 
                name="brand" 
                value={formState.brand} 
                onChange={handleChange} 
                options={[
                    { value: 'Subaru', label: 'Subaru' },
                    { value: 'Kia', label: 'Kia' },
                    { value: 'Mazda', label: 'Mazda' },
                    { value: 'Audi', label: 'Audi' },
                    { value: 'Volvo', label: 'Volvo' },
                    { value: 'Chevrolet', label: 'Chevrolet' },
                ]}
            />
            <TextInput label="Modèle" name="model" type="text" value={formState.model} onChange={handleChange} placeholder="Modèle" />
            <TextInput label="Année" name="year" type="number" value={formState.year} onChange={handleChange} placeholder="Année" />
            <TextInput label="Code" name="codeId" type="text" value={formState.codeId} onChange={handleChange} placeholder="Code" />
        </FormLayout>
    );
};

export default EditCar;