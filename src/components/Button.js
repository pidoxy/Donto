export default function Button({ onClick, type, disabled, text, Bg, span}) {
    // const Bg = '#430D27'

    return (
        <div className="text-center">{
            <button disabled={disabled} onClick={onClick} style={{backgroundColor: Bg, color: '#fff', border: 'none'}} type={type} className={`btn my-3 col-${span} btn-light `}>{text}</button>}
        </div>
    )
}
