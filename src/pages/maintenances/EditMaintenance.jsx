import useSubmit from "../../hooks/useSubmit";
import FormLayout from "../../components/FormLayout";
import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const EditMaintenance = () => {
    const { id } = useParams();
    const [initialFormState, setInitialFormState] = useState({
        startDate: '',
        endDate: '',
        type: '',
    });
    const [formState, handleChange, handleSubmit] = useSubmit(`maintenances/${id}`, initialFormState, true);

    useEffect(() => {
        const fetchMaintenance = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/maintenances/${id}`);
                const data = await response.json();
                setInitialFormState(data);
            } catch (error) {
                console.error('Error fetching maintenance data:', error);
            }
        };

        fetchMaintenance();
    }, [id]);

    useEffect(() => {
        setInitialFormState(formState);
    }, [formState]);

    return (
        <FormLayout title="Modifier la maintenance" isUpdate={true} onSubmit={handleSubmit}>
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

export default EditMaintenance;
