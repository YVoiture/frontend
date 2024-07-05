import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const useSubmit = (endpoint, initialState, isUpdate = false, preprocessData) => {
    const navigate = useNavigate();
    const [formState, setFormState] = useState(initialState);

    useEffect(() => {
        setFormState(initialState);
    }, [initialState]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const resetForm = () => {
        setFormState(initialState);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const dataToSubmit = preprocessData ? preprocessData(formState) : formState;

        try {
            const response = await fetch(`${BACKEND_URL}/${endpoint}`, {
                method: isUpdate ? 'PUT' : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSubmit),
            });

            if (response.ok) {
                resetForm();
                navigate(`/${endpoint.split('/')[0]}`);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return [formState, handleChange, handleSubmit];
};

export default useSubmit;
