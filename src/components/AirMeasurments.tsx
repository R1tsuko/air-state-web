import { useSelector } from "react-redux";
import clsx from "clsx";
import { selectAirMeasurments, selectAirStatus } from "../store/airConditionSlice";

/** 
 * Компонент, который выводит измерения воздуха
 * 
 * @component
 * @returns {JSX.Element}
 */
export const AirMeasurments = () => {

    const airMeasurments = useSelector(selectAirMeasurments)
    const { isCo2Good, isTemperatureGood } = useSelector(selectAirStatus)

    return (
        <article className={clsx(isCo2Good && isTemperatureGood ? "from-white from-30% to-[#00FF57]/60" : "from-white from-30% to-[#FF8A7A]/60", "space-y-[40px] bg-gradient-to-br px-1 py-2 mobile:space-y-[80px] mobile:p-10 laptop:row-span-2 laptop:rounded-[20px] laptop:border laptop:border-black")}>
            <div>
                <p className="text-[80px]/[57px] font-semibold tracking-[-0.06em] desktop:text-[200px]/[163px]">{airMeasurments.temperature.toFixed(1)} ℃</p>
                <p className="mt-[28px] text-[40px]/[32px] font-bold tracking-[-0.06em]">Температура</p>
            </div>
            <div className="text-[34px]/[34px]">
                <p className="text-[80px]/[57px] font-semibold tracking-[-0.06em] desktop:text-[200px]/[163px]">{Math.round(airMeasurments.co2ppm)} ppm</p>
                <p className="mt-[28px] text-[40px]/[36px] font-bold tracking-[-0.06em]">CO2</p>
            </div>
        </article>
    )
}
