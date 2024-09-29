import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { AppDispatch } from '../store/store'
import { getAirCondition } from '../store/airConditionSlice'
import { AirMeasurments } from '../components/AirMeasurments'
import { AirStatus } from '../components/AirStatus'
import { AirHistory } from '../components/AirHistory'
import { Logo } from '../components/Logo'

/** 
 * Главная страница, диспатчит getAirCondition для обновления состояния воздуха
 * в глобальном стейте раз в 60 секунд
 * 
 * @component
 * @returns {JSX.Element}
 */
export const MainPage = () => {

    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        const POLL_TIME = 60000
        dispatch(getAirCondition())
        const ptr = setInterval(() => dispatch(getAirCondition()), POLL_TIME)
        return () => clearInterval(ptr)
    }, [])

    return (
        <section className="size-full flex-col items-center justify-start">
            <h3 className="flex h-[80px] w-full items-center justify-center laptop:col-span-3">
                <div className="w-[312px] overflow-hidden text-[37px] font-bold tracking-[0.5em] laptop:w-[484px] laptop:tracking-[1.27em]">ДУШНИЛА</div>
            </h3>

            <div className="h-[calc(100%-80px)] w-full laptop:box-border laptop:grid laptop:grid-cols-[1fr,auto,3fr] laptop:grid-rows-[4fr,3fr] laptop:gap-6 laptop:px-6 laptop:pb-4 desktop:gap-10 desktop:px-10 desktop:pb-5">
                <AirStatus />
                <AirMeasurments />
                <AirHistory />
                <Logo />
            </div>
        </section>
    )
}
