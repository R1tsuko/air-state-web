import axios from "axios";

type getAirDataResponseData = {
    co2: string
    temp: string
}

/** 
 * Функция для обращения к апи,
 * получает данные о состоянии воздуха
 * 
 * @function
 * @async
 */
export const getAirData = async () => {
    return await axios.get<getAirDataResponseData>("http://dushnila.gooddelo.com/data")
}