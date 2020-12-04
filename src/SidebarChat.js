import React,{useState,useEffect} from "react";
import './SidebarChat.css';
import {Avatar} from '@material-ui/core';

function SidebarChat({addNewChat,name,lastMsg}) {
	
const [id,setId]=useState(null);

useEffect(()=>{
 const randomNumber=Math.floor(Math.random() * 100) + 1;
 setId(randomNumber);
},[]);
	
const createChat=()=>{
	const roomName=prompt("Enter name for the Chat..");
	if(roomName){
		
	}
};
	
  return !addNewChat ? (
    <div className="sidebarChat">
	<Avatar src={`https://randomuser.me/api/portraits/thumb/men/${id}.jpg`}/>
		<div className="sidebarChat_info">
			<h2>{name}</h2>
			<p>{lastMsg}</p>
		 </div>
	</div>
  ):(
	 <div onClick={createChat} className="sidebarChat">
			<h2>Add new Chat</h2>
	</div> 
	);
}

export default SidebarChat;
