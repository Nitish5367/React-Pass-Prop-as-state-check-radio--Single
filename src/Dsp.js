let Dsp=(props )=>{
    return(
        <div>
            <h1>name:{props.data.name}</h1>
            <h1>gender:{props.data.gen}</h1>
            <h1>lang:{props.lang.toString()}</h1>
        </div>
    )
}
export default Dsp