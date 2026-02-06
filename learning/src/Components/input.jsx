export const Input = (prop) => {

    return <input style={{backgroundColor:"white",color:"black"}} type="text" onChange={e=>prop.setName(e.target.value)} />

}