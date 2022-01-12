import './formInput.css'

export const FormInput = (props) => {
    return (
        <div className="form-input">
            {/*<label>User name</label>*/}
            <input 
            name={props.name}
            placeholder={props.placeholder}/>
        </div>
    )
}
