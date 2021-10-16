function Header(props) {
    return (
        <header>
            <PlusMinus id='header' section="header" handle={props.handle}/>
            <div className="section">Header: {props.data.header}</div>
            <Data data={props.data}/>
        </header>
    )
}