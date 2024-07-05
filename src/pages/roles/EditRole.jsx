import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSubmit from "../../hooks/useSubmit";
import FormLayout from "../../components/FormLayout";
import TextInput from "../../components/TextInput";

const EditRole = () => {
    const { id } = useParams();
    const [initialFormState, setInitialFormState] = useState({ name: '', position: '' });
    const [formState, handleChange, handleSubmit] = useSubmit(`roles/${id}`, initialFormState, true);

    useEffect(() => {
        const fetchRole = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/roles/${id}`);
                const data = await response.json();
                setInitialFormState(data);
            } catch (error) {
                console.error('Error fetching role data:', error);
            }
        };

        fetchRole();
    }, [id]);

    useEffect(() => {
        setInitialFormState(formState);
    }, [formState]);

    return (
        <FormLayout title="Modifier le rôle" isUpdate={true} onSubmit={handleSubmit}>
            <TextInput label="Nom" name="name" value={formState.name} onChange={handleChange} placeholder="Nom" />
            <TextInput label="Position" name="position" value={formState.position} onChange={handleChange} placeholder="Position" />
        </FormLayout>
    );
};

export default EditRole;
