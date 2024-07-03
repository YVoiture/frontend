import useSubmit from "../../hooks/useSubmit";
import FormLayout from "../../components/FormLayout";
import TextInput from "../../components/TextInput";

const CreateRole = () => {
    const [formState, handleChange, handleSubmit] = useSubmit("roles", {
        name: '',
        position: '',
    });

    return (
        <FormLayout title="Ajouter un rôle" onSubmit={handleSubmit}>
            <TextInput label="Nom" name="name" value={formState.name} onChange={handleChange} placeholder="Nom" />
            <TextInput label="Position" name="position" value={formState.position} onChange={handleChange} placeholder="Position" />
        </FormLayout>
    )
}

export default CreateRole;