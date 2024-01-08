function MdBorderBtn(props: {
    link: string;
    text: string;
    onClick?: () => void;
    blankTarget?: boolean;
}) {
    return (
        <a
            className='text-2xl px-4 py-3 rounded border-solid border-gray-blue-900 border-2 text-gray-blue-950 hover:bg-gray-blue-500 hover:text-gray-blue-100 transition-colors duration-500'
            href={props.link}
            onClick={props.onClick}
            target={props.blankTarget ? '_blank' : ''}
        >
            {props.text}
        </a>
    );
}

export default MdBorderBtn;
