export default function Home(props){
    return(
        <div>
            <h1>Home page</h1>
            <div className='buttons'>
                <button name="CreateNote" key="CreateNote" className='newnote' onClick={props.handleClick}>+</button>
            </div>
        </div>
    )
}