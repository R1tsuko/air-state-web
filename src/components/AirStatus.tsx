import { useSelector } from "react-redux";
import clsx from "clsx";
import { selectAirStatus } from "../store/airConditionSlice";
import finger from "../assets/finger.png"

/** 
 * Компонент, который выводит состояние воздуха
 * 
 * @component
 * @returns {JSX.Element}
 */
export const AirStatus = () => {

    const { isCo2Good, isTemperatureGood } = useSelector(selectAirStatus)

    return (
        <article className={clsx(isCo2Good && isTemperatureGood ? "bg-[#7AFFA7]" : "bg-[#FF8A7A]", "space-y-[40px] px-1 py-2 mobile:space-y-[80px] mobile:px-10 mobile:pb-10 mobile:pt-4 laptop:col-span-2 laptop:flex laptop:flex-col laptop:justify-between laptop:gap-2 laptop:-space-y-0 laptop:rounded-[20px] laptop:p-[60px]")}>
            <h3 className="text-[50px]/[48px] font-medium tracking-[-0.06em] desktop:text-[89px]/[84px]">
                <p>Душнила</p>
                <p>{isCo2Good && isTemperatureGood
                    ? "доволен вами"
                    : (<>недоволен вами <img src={finger} className="inline-block size-[1em]" /></>)}</p>
            </h3>
            <div className="text-[34px]/[34px]">
                {isCo2Good ?
                    isTemperatureGood ? "Все показатели в норме" : "Температура превышает норму"
                    : "CO2 превышает норму"}
            </div>
        </article>
    )
}
