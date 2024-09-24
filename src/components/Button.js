export default function Button(props) {
    return(
        <>
            <button 
                type="button" 
                className={`${props.style ? props.style : 'rounded-xl bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'}`}
            >
                {props.startIcon}
                &nbsp;
                {props.name}
                &nbsp;
                {props.endIcon}
            </button>
        </>
    );
}