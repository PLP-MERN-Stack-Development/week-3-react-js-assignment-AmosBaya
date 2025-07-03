import { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// Custom debounce hook
function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}

const Api = () => {
    const [searchValue, setSearchValue] = useState(""); // user input
    const name = useDebounce(searchValue, 500); // debounced search term

    const { isLoading, isError, data, error } = useQuery({
        queryKey: ["university", name],
        queryFn: async () => {
            const response = await axios.get(
                `http://universities.hipolabs.com/search?name=${name}`
            );
            console.log("Fetched Data:", response.data);
            return response.data;
        },
        enabled: !!name, // only fetch when name is not empty
    });

 return (
    <div className="p-4 max-w-2xl mx-auto w-full bg-white dark:bg-gray-800 rounded-xl shadow">
        <input
            type="text"
            placeholder="Search university"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-400 dark:border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {isLoading && <p className="mt-2 text-blue-400 dark:text-blue-200">Loading...</p>}
        {isError && <p className="mt-2 text-red-600 dark:text-red-400">Error: {error.message}</p>}

        {data && data.length > 0 ? (
        <ul className="mt-4 list-disc pl-6 text-white dark:text-white space-y-1">
            {data.map((uni, index) => (
                <li key={index}>{uni.name}</li>
            ))}
        </ul>
        ) : name && !isLoading ? (
            <p className="mt-2 text-red-400 dark:text-white">No results found.</p>
        ) : null}
    </div>
  );
};

export default Api;
