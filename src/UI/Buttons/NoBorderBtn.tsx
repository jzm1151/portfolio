function NoBorderBtn(props: {
    link: string
    text: string
    onClick?: () => void
    blankTarget?: boolean
}) {
    return (
        <a
            className='ml-2 mr-2 border-2 border-gray-blue-400 text-gray-blue-950 font-bold transition-all duration-500 hover:pb-2 hover:border-b-gray-blue-700'
            href={props.link}
            onClick={props.onClick}
            target={props.blankTarget ? '_blank' : ''}
        >
            {props.text}
        </a>
    )
}

export default NoBorderBtn
