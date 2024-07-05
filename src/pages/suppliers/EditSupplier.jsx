import useSubmit from "../../hooks/useSubmit";
import FormLayout from "../../components/FormLayout";
import TextInput from "../../components/TextInput";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const EditSupplier = () => {
    const { id } = useParams();
    const preprocessData = (formState) => ({
        ...formState,
        siret: parseInt(formState.siret, 10),
        number: parseInt(formState.number, 10),
        conctractDate: formState.contractDate
    });
    const [initialFormState, setInitialFormState] = useState({
        name: '',
        siret: '',
        email: '',
        number: '',
        adress: '',
        contractDate: '',
        type: '',
    });
    const [formState, handleChange, handleSubmit] = useSubmit(`suppliers/${id}`, initialFormState, true, preprocessData);

    useEffect(() => {
        const fetchSupplier = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/suppliers/${id}`);
                const data = await response.json();
                setInitialFormState(data);
            } catch (error) {
                console.error('Error fetching supplier data:', error);
            }
        };

        fetchSupplier();
    }, [id]);

    useEffect(() => {
        setInitialFormState(formState);
    }, [formState]);

    return (
        <FormLayout title="Modifier le fournisseur" isUpdate={true} onSubmit={handleSubmit}>
            <TextInput label="Nom" name="name" value={formState.name} onChange={handleChange} placeholder="Nom du fournisseur" />
            <TextInput label="Siret" name="siret" value={formState.siret} onChange={handleChange} placeholder="Numéro de siret" />
            <TextInput label="Adresse e-mail" name="email" type="email" value={formState.email} onChange={handleChange} placeholder="Adresse e-mail de contact" />
            <TextInput label="Numéro de téléphone" name="number" type="tel" value={formState.number} onChange={handleChange} placeholder="Numéro de contact" />
            <TextInput label="Adresse postale" name="adress" value={formState.adress} onChange={handleChange} placeholder="Adresse postale" required={false} />
            <TextInput label="Date de contrat" name="contractDate" type="date" value={formState.contractDate} onChange={handleChange} placeholder="Date du contrat" />
            <TextInput label="Type" name="type" value={formState.type} onChange={handleChange} placeholder="Type du contrat" required={false} />
        </FormLayout>
    );
};

export default EditSupplier;
