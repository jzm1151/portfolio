function BorderBtn(props: {link: string, text: string}) {
    return (
        <a className='ml-2 mr-2 p-2 rounded border-solid border-gray-blue-900 border-2 hover:bg-gray-blue-700 hover:text-gray-blue-100 transition-colors duration-500' href={props.link}>{props.text}</a>
    )
}

export default BorderBtn