import React,{useEffect,useState} from "react";
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Pusher from "pusher-js";
import axios from './axios';
import Login from './Login';
import {useStateValue} from './StateProvider';

function App() {
	
const [messages,setMessages]=useState([]);
const [{user},dispatch]=useStateValue();
	
 useEffect(()=>{
	axios.get('messages/sync')
	 .then(response=>{
		setMessages(response.data);
	  });
 },[]);
	
 useEffect(()=>{
	const pusher = new Pusher('bdda380e465474b93c9e', {
      cluster: 'ap2'
    });
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
	  setMessages([...messages,newMessage]);
    });
	 
	 return()=>{
		 channel.unbind_all();
		 channel.unsubscribe();
	 };
 },[messages]);
	
  return (
    <div className="app">
	      { !user ? (
		  <Login/>
		  ) : (
		  <div className="app_body">
	      <Sidebar/>
	      <Chat messages={messages}/>
	      </div>
		   )}
    </div>
  );
}

export default App;
