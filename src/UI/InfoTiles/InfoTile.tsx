function InfoTile(props: {
    info: string;
    icon: JSX.Element;
    className?: string;
}) {
    return (
        <div
            className={
                'h-20 bg-gray-blue-300 flex flex-col gap-2 justify-content items-center rounded border-t-4 border-gray-blue-500 py-3 lg:h-24 lg:py-5 xl:text-xl ' +
                props.className
            }
        >
            <div>{props.icon}</div>
            <div>{props.info}</div>
        </div>
    );
}

export default InfoTile;
