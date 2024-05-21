/**
 * le code écrit sur ce fichier permet d'aller 
 * reccuperer les données dans notre database 
 */ 
import {useEffect,useState} from 'react';
import axios from 'axios';

const UseFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get('http://192.168.1.76:3000/api/products/');
            setData(response.data);
        } catch (error) {
            setError(error.response ? error.response.data : error.message);
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };

    return { data, isLoading, error, refetch };
};

export default UseFetch;
