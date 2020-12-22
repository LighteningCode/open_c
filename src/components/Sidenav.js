
function SideItem(props) {
    return (
        <li className="text-white text-xs mb-4 px-3 py-2 rounded-lg transition-all hover:bg-blue-400 cursor-pointer"><i className={`mr-2 fa ${props.icon}`}></i>{props.name}</li>
    );
}

function Sidenav() {
    return (
        <nav className="flex flex-col bg-blue-700 h-full py-12 px-3 w-48">

            <div className="flex flex-col transition-all hover:bg-blue-600 rounded-md self-start p-2">
                <div className="h-0.5 w-5 rounded-lg bg-white my-0.5"></div>
                <div className="h-0.5 w-5 rounded-lg bg-white my-0.5"></div>
                <div className="h-0.5 w-5 rounded-lg bg-white my-0.5"></div>
            </div>

            <ul className="list-none mt-16">
                <SideItem name="News" icon="fa-home" />
                <SideItem name="Topics" icon="fa-book" />
                <SideItem name="Questions" icon="fa-question-circle" />
                <SideItem name="Responses" icon="fa-undo" />
                <SideItem name="Favorites" icon="fa-heart" />
            </ul>
        </nav>
    );
}


export default Sidenav;