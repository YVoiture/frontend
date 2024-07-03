import useSubmit from "../../hooks/useSubmit";
import FormLayout from "../../components/FormLayout";
import TextInput from "../../components/TextInput";

const CreateSupplier = () => {
    const preprocessData = (formState) => ({
        ...formState,
        siret: parseInt(formState.siret, 10),
        number: parseInt(formState.number, 10),
        conctractDate: formState.contractDate
    });

    const [formState, handleChange, handleSubmit] = useSubmit(
        "suppliers",
        {
            name: '',
            siret: '',
            email: '',
            number: '',
            adress: '',
            contractDate: '',
            type: '',
        },
        preprocessData
    );

    return (
        <FormLayout title="Ajouter un fournisseur" onSubmit={handleSubmit}>
            <TextInput label="Nom" name="name" value={formState.name} onChange={handleChange} placeholder="Nom du fournisseur" />
            <TextInput label="Siret" name="siret" value={formState.siret} onChange={handleChange} placeholder="Numéro de siret" />
            <TextInput label="Adresse e-mail" name="email" type="email" value={formState.email} onChange={handleChange} placeholder="Adresse e-mail de contact" />
            <TextInput label="Numéro de téléphone" name="number" type="tel" value={formState.number} onChange={handleChange} placeholder="Numéro de contact" />
            <TextInput label="Adresse postale" name="adress" value={formState.adress} onChange={handleChange} placeholder="Adresse postale" />
            <TextInput label="Date de contrat" name="contractDate" type="date" value={formState.contractDate} onChange={handleChange} placeholder="Date du contrat" />
            <TextInput label="Type" name="type" value={formState.type} onChange={handleChange} placeholder="Type du contrat" required={false} />
        </FormLayout>
    );
};

export default CreateSupplier;
