function NoBorderBtn(props: {link: string, text: string}) {
    return (
        <a className='ml-2 mr-2 border-2 border-gray-blue-400 transition-all duration-500 hover:pb-2 hover:border-b-gray-blue-700' href={props.link}>{props.text}</a>
    )
}

export default NoBorderBtn