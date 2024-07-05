const useDeleteData = (endpoint, onSuccess) => {
    const deleteData = async (id) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/${endpoint}/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                onSuccess();
            }
        } catch (error) {
            console.error(`Error deleting ${endpoint}:`, error);
        }
    };

    return deleteData;
}

export default useDeleteData;