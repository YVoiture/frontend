import useSubmit from "../../hooks/useSubmit";
import FormLayout from "../../components/FormLayout";
import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";

const CreateCarPage = () => {
    const [formState, handleChange, handleSubmit] = useSubmit("cars", {
        plate: '',
        brand: '',
        model: '',
        year: '',
        codeId: ''
    });

    return (
        <FormLayout title="Ajouter une voiture" onSubmit={handleSubmit}>
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

export default CreateCarPage;