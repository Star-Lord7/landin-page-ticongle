const CustomInput = ({ type, id, name, placeholder, required = false, label, errors }: any) => {
    return(
        <>
            <label 
                className="input-label">
                    {label}
            </label>

            {type === "textarea" && (
                <textarea
                    id={id || ""} 
                    name={name || ""}
                    placeholder={placeholder || ""}
                    className="input-field input-textarea"
                ></textarea>
            ) }

            {(type !== "text" || type !== "email") && (
                <input 
                type={type || "text"} 
                id={id || ""} 
                name={name || ""} 
                placeholder={placeholder || ""}
                className="input-field"
            />
            )}
            
            {errors.map((error: any, index: any) => {
                if(error.field === name){
                    return (
                        <span key={index} className="text-red-500 text-sm mt-1">
                            {error.message}
                        </span>
                    );
                }
                return <span>&nbsp;</span>
            })}
        </>
    )
}

export default CustomInput;