function MobileNoBorderBtn(props: {link: string, text: string, onClick?: () => void, blankTarget?: boolean}) {
    return (
        <a className='mb-4 text-gray-blue-950 font-bold text-2xl' 
           href={props.link}
           onClick={props.onClick}
           target={props.blankTarget ? '_blank' : ''}
        >
            {props.text}
        </a>
    )
}

export default MobileNoBorderBtn