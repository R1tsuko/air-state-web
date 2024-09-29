import logo from '../assets/Logo.svg'

/** 
 * Просто лого
 * 
 * @component
 * @returns {JSX.Element}
 */
export const Logo = () => {
    return (
        <article className="relative flex h-[338px] w-full items-end justify-end overflow-hidden laptop:h-auto laptop:w-[306px] laptop:rounded-[20px] laptop:border laptop:border-black desktop:w-[336px]">
            <img className="absolute -bottom-[49px] -right-[50px]" src={logo} alt="logo" />
        </article>
    )
}
