import '../styles/form.css'
export function FormField(props){
    return (
      <>
        <div className = 'form-field'>
          <label> {props.label} </label>
          <input type = {props.type} name = {props.desc}/>
        </div>
      </>
    )
}

export function MyForm(props){
    function handleSubmit(e){
        e.preventDefault();
        const form = e.target
        const myForm = new FormData(form);
        const options = {
            method: 'POST',
            body: myForm
        }
        fetch('https://Test.com/post-user', options).then(res => console.log(res));
    }
    return(
        <>
            <form onSubmit = {handleSubmit}>
                {props.children}
                <button type = 'submit'> Cadastrar </button>
            </form>
        </>
    )
}
