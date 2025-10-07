
import axios from 'axios';
import { useEffect, useState } from 'react';

export const getNameById = async (id, type) => {

    if (!id || !type) {
        return "";
    }

    switch (type) {
        case "Location": {
            try {
                url = `http://localhost:5000/api/location/selectone/${id}`;
                const response = await axios.get(url);
                return response.data?.location_name
            } catch (err) {
                console.error("Error fetching location:", err);
                return "";
            }
        }
        default: {
            return
        }
    }

}

 