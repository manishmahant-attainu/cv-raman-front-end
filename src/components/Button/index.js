import './Button.css';

const Button = (props) => {
    return (
        <div>
            <button
                className={`btn ${props.cls}`}
                type={props.type || 'button'}
                disabled={props.isSubmitting}
            >
                {props.title}
            </button>
        </div>
    )
};

export default Button;
