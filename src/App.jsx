import { useEffect,useState } from "react";
function App(){
  const [notifications,setNotifications]=useState([]);
const fetchNotifications=async()=>{
  const response=await fetch("http://localhost:5000/notifications");
  const data=await response.json();
  setNotifications(data.notifications);
}
useEffect(()=>{
  fetchNotifications();
},[]);
return(
  <div>
    <h1>Notifications</h1>
    {
      notifications.map(
        (notification)=>(
          <div 
          key={notification.ID}
          >
            <h3>{notification.Type}</h3>
            <p>{notification.Message}</p>
            </div>
        )
      )
    }
  </div>
);
}
export default App;