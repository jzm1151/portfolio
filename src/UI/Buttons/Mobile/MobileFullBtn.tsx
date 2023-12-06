function MobileFullBtn(props: {link: string, text: string, onClick?: () => void, blankTarget?: boolean}) {
    return (
        <a className='p-2 w-9/12 rounded bg-gray-blue-950 text-gray-blue-100 text-center text-2xl'
           href={props.link}
           onClick={props.onClick}
           target={props.blankTarget ? '_blank' : ''}
        >
            {props.text}
        </a>
    )
}

export default MobileFullBtn