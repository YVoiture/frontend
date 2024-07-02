import { useEffect, useState } from "react"

const useFetchData = (endpoint, transformData) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/${endpoint}`);
                const data = await response.json();
                setData(transformData(data));
            } catch (error) {
                console.error(`Error fetching ${endpoint}:`, error);
            }
        };

        fetchData();
    }, [endpoint, transformData]);

    return data;
};

export default useFetchData;