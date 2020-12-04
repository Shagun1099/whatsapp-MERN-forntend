import React,{useState} from "react";
import './Chat.css';
import {Avatar,IconButton} from "@material-ui/core";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from './axios';
import {useStateValue} from './StateProvider';

function Chat({messages}) {
	
  const [input,setInput] =useState(" ");
  const [{user},dispatch]=useStateValue();
	
  const sendMessage= async(e)=>{
	 e.preventDefault();
	 await  axios.post('/messages/new',{
		    name:user.displayName,
		    message:input,
		    timestamp:"just now",
		    received:true
	    });
	  setInput(" ");
     }
	
  return (
    <div className="chat">
	<div className="chat_header">
	 <Avatar src={user?.photoURL}/>
	<div className="chat_headerInfo">
	 <h3>{user?.displayName}</h3>
	 <p>{`Last seen at ...${user?.metadata?.lastSignInTime}`}</p>
	</div>
	<div className="chat_headerRight">
	        <IconButton>
				<SearchOutlinedIcon/>
			</IconButton>
			<IconButton>
				<AttachFileIcon/>
			</IconButton>
			<IconButton>
				<MoreVertIcon/>
			</IconButton>
	</div>
	</div>
	<div className="chat_body">
	{messages.map(message=>(
	<p className={`chat_message ${message.received && "chat_receiver"}`}>
	<span className="chat_name">{message.name}</span>
	{message.message}
	<span className="chat_timestamp">{message.timestamp}</span>
	</p>
	))}
	</div>
	<div className="chat_footer">
	<InsertEmoticonIcon/>
	<form>
	 <input 
		 value={input}
		 onChange={(e)=>setInput(e.target.value)}
		 placeholder="type a message" 
		 type="text"/>
	 <button onClick={sendMessage} type="submit">Send a message</button>
	</form>
	<MicIcon/>
	</div>
    </div>
  );
}

export default Chat;
