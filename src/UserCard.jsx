import  './App.jsx';
import './App.css';
function UserCard(props) {
  return (
    <div className='user'style={{backgroundColor:props.bgcolor}}>
      <h2>User Card</h2>
      <p>Name:{props.name}</p>
      <p>Email:{props.email}</p>
      <p>Age:{props.age}</p>
    </div>
  );
}
export default UserCard