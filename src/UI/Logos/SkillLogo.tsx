function SkillLogo(props: {logoText: string, logoHeight:number, logoWidth:number, logoViewBox:string, logoPathElement:JSX.Element}) {
    return (
        <div className='w-full h-20 bg-gray-blue-900 flex justify-content align-items gap-2 backdrop-blur-3xl shadow rounded text-xl text-gray-blue-200 bold p-4 md:p-10 md:text-2xl'>
            <svg className='self-center' width={props.logoWidth} height={props.logoHeight} viewBox={props.logoViewBox} xmlns="http://www.w3.org/2000/svg">{props.logoPathElement}</svg>
            <span className='self-center'>{props.logoText}</span>
        </div>
    )
}

export default SkillLogo