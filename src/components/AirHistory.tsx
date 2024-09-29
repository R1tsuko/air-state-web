/** 
 * Простой виджет, который должен вести на страницу с историей 
 * и показывать число дней без превышений допустимых значений,
 * но не делает этого
 * 
 * @component
 * @returns {JSX.Element}
 */
export const AirHistory = () => {

    return (
        <article className="box-border space-y-[50px] bg-black px-1 py-2 mobile:p-10 laptop:flex laptop:flex-col laptop:justify-between laptop:space-y-0 laptop:rounded-[20px] laptop:px-5 laptop:pt-[52px]">
            <h3 className="text-[55px]/[52px] font-medium tracking-[-0.06em] text-white">
                <p>Дней без</p>
                <p>душноты 0</p>
            </h3>
            <div className="w-full">
                <button className="flex h-[64px] w-full min-w-[150px] max-w-[296px] items-center justify-between rounded-full border border-white bg-white stroke-black px-[30px] hover:bg-black hover:stroke-white hover:text-white">
                    <span className="text-[25px] font-medium tracking-[-0.06em]">История</span>
                    <svg width="28" height="29" viewBox="0 0 28 29" fill="none" stroke="inherit" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.5 14.2521L18.6667 8.41879M24.5 14.2521L18.6667 20.0855M24.5 14.2521H3.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </article>
    )
}
