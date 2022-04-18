const Fcard = ({image,name,position})=>{
    return (<div>
      <img src={image}></img>
      <h4>{name}</h4>
      <p>{position}</p>
     </div>)
  }
  export default Fcard;
// 