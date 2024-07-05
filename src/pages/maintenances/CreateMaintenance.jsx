import useSubmit from "../../hooks/useSubmit";
import FormLayout from "../../components/FormLayout";
import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";
import { useState } from "react";

const CreateMaintenance = () => {
    const [initialFormState, setInitialFormState] = useState({
        startDate: '',
        endDate: '',
        type: '',
    })
    const [formState, handleChange, handleSubmit] = useSubmit("maintenances", initialFormState);

    return (
        <FormLayout title="Ajouter une maintenance" onSubmit={handleSubmit}>
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
