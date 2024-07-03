import useSubmit from "../../hooks/useSubmit";
import FormLayout from "../../components/FormLayout";
import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";

const CreateConsumable = () => {
    const preprocessData = (formState) => ({
        ...formState,
        quantity: parseInt(formState.quantity, 10),
        price: parseFloat(formState.price),
        supplierId: parseInt(formState.supplierId, 10),
    });

    const [formState, handleChange, handleSubmit] = useSubmit(
        "consumables",
        {
            name: '',
            serialNumber: '',
            quantity: '',
            category: '',
            price: '',
            supplierId: 3,
        },
        preprocessData
    );

    return (
        <FormLayout title="Ajouter un consommable" onSubmit={handleSubmit}>
            <TextInput label="Nom" name="name" value={formState.name} onChange={handleChange} placeholder="Nom du consommable" />
            <TextInput label="Numéro de série" name="serialNumber" value={formState.serialNumber} onChange={handleChange} placeholder="Numéro de série" />
            <SelectInput 
                label="Catégorie" 
                name="category" 
                value={formState.category} 
                onChange={handleChange} 
                options={[
                    { value: 'ELECTRONIC', label: 'Électronique' },
                    { value: 'MECHANIC', label: 'Mécanique' },
                    { value: 'HYDRAULIC', label: 'Hydraulique' },
                    { value: 'OTHER', label: 'Autre' },
                ]}
            />
            <TextInput label="Quantité" name="quantity" type="number" value={formState.quantity} onChange={handleChange} placeholder="Quantité" />
            <TextInput label="Prix" name="price" type="number" value={formState.price} onChange={handleChange} placeholder="Prix" />
            <TextInput label="ID du fournisseur" name="supplierId" type="number" value={formState.supplierId} onChange={handleChange} placeholder="ID du fournisseur" />
        </FormLayout>
    );
};

export default CreateConsumable;
