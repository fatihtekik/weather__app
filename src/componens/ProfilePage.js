import './Home.css';
export default function ProfilePage(){
  // const lcItems = () =>{
    let lcItems = JSON.parse(localStorage.getItem('history'))
    console.log(lcItems);
  // }
    return (
      <>
      <h2>Ваша история тут:</h2>
      {lcItems.map(item => {return <h1 className="dataMap">{item}</h1>})}
      </>
    )
  }
  