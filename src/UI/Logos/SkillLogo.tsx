function SkillLogo(props: {
    logoText: string
    logoHeight: number
    logoWidth: number
    logoViewBox: string
    logoPathElement: JSX.Element
}) {
    return (
        <div className='w-full h-20 bg-gray-blue-900 overflow-hidden flex justify-around align-items gap-2 backdrop-blur-3xl shadow rounded text-gray-blue-200 bold lg:p-10 text-xl lg:text-base xl:text-xl 2xl:text-2xl'>
            <svg
                className='self-center'
                width={props.logoWidth}
                height={props.logoHeight}
                viewBox={props.logoViewBox}
                xmlns='http://www.w3.org/2000/svg'
            >
                {props.logoPathElement}
            </svg>
            <span className='self-center'>{props.logoText}</span>
        </div>
    )
}

export default SkillLogo
