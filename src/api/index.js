import axios from 'axios'

const URL = "https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary"

const options = {
  params: {
    tr_longitude: "12.838442",
    tr_latitude: "109.149359",
    bl_longitude: "109.095887",
    bl_latitude: "11.847676",
  },
  headers: {
    "x-rapidapi-key": "db53d1bd5emshdb99660b919845ap12145djsna9597be65b4a",
    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
  },
}

export const getPlacesData = async () => {
    try {
        const { data: { data } } = await axios.get(URL, options);

        return data;
    } catch (error) {
        console.log(error);
    }
}
