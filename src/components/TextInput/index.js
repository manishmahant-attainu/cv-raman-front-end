const TextInput = (props) => {

    const { changeHandler, name, value, label, isSubmitting } = props;


    const onChangeHandler = (e) => {
        changeHandler(e.target.name, e.target.value);
    }

    return(
        <div>
            <label htmlFor={name}>
                {label} :
                <input
                    id={name}
                    type="text"
                    name={name}
                    value={value}
                    onChange={onChangeHandler}
                    placeholder={label}
                    disabled={isSubmitting}
                />
            </label>
        </div>
    )

};

export default TextInput;
