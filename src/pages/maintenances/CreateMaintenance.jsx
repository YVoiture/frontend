import useSubmit from "../../hooks/useSubmit";
import FormLayout from "../../components/FormLayout";
import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";
import { useEffect, useState } from "react";

const CreateMaintenance = () => {
    const [initialFormState, setInitialFormState] = useState({
        startDate: '',
        endDate: '',
        type: '',
        car: '',
    })
    const [formState, handleChange, handleSubmit] = useSubmit("maintenances", initialFormState);
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/cars`);
                const data = await response.json();
                setCars(data);
            } catch (error) {
                console.error('Error fetching cars data:', error);
            }
        };

        fetchCars();
    }, []);

    const carOptions = cars.map(car => ({ value: car.id, label: `${car.brand} ${car.model}` }));

    return (
        <FormLayout title="Ajouter une maintenance" onSubmit={handleSubmit}>
            <SelectInput label="Voiture" name="car" value={formState.car} onChange={handleChange} options={carOptions} />
            <TextInput label="Date de début" name="startDate" type="date" value={formState.startDate} onChange={handleChange} />
            <TextInput label="Date de fin" name="endDate" type="date" value={formState.endDate} onChange={handleChange} />
            <SelectInput label="Type" name="type" value={formState.type} onChange={handleChange} options={[
                { value: 'PREVENTIVE', label: 'Préventif' },
                { value: 'CORRECTIVE', label: 'Correctif' },
                { value: 'PREDICTIVE', label: 'Prédictif' }
            ]} />
        </FormLayout>
    );
};

export default CreateMaintenance;
