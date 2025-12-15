import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

const Card = ({ children, title, link, withIcon = false, icon = null }: any) => {

    //Funcion que advierte al usuario que sera redirigido
    const handleClick = () => {
        let message = `Seras redirigido a ${title}`;
        alert(message);
    };

    return (
        <div className="card">
            { (withIcon === true) && (
                <div className="card-header flex  flex-wrap">
                    <div className="w-1/3 text-center px-6 py-1">
                        <div className="bg-blue-950 text-4xl text-white px-2 py-4 rounded-full cursor-pointer hover:bg-indigo-700">
                            <FontAwesomeIcon 
                                icon={ icon ? icon : faInfo }
                            />
                        </div>
                    </div>
                    <div className="w-2/3 flex items-center px-4">
                        <h3 className="text-2xl font-bold text-center text-gray-500">
                            { title }
                        </h3>
                    </div>

                </div>
            )}
            { (icon === false) && (
                <div className="card-header">
                    <h3 className="text-2xl font-bold text-center text-gray-500">
                        { title }
                    </h3>
                </div>
            )}
            <div className="card-content">
                { children }
            </div>
            <div className="card-footer">
                <button 
                    className="text-base bg-blue-800 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700"
                    onClick={handleClick}
                >
                    Ver más
                </button>
            </div>
        </div>
    );
};

export default Card;