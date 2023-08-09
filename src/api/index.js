import axios from "axios"

export const getPlacesData = async (type, sw, ne) => {
  try {
    const options = {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "X-RapidAPI-Key": "21e17baf28msh5fe880547cbcc52p16a01djsne44d5942f556",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    }

    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      options
    )
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}

export default getPlacesData
