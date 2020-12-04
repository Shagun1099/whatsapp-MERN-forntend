import React from "react";
import './Sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import {Avatar,IconButton} from '@material-ui/core';
import SidebarChat from './SidebarChat';

function Sidebar() {
	
  return (
    <div className="sidebar">
    <div className="sidebar_header">
		<Avatar src="https://pbs.twimg.com/media/Dult6eRW0AA9Ly3.jpg"/>
		<div className="sidebar_headerRight">
			<IconButton>
				<DonutLargeIcon/>
			</IconButton>
			<IconButton>
				<ChatIcon/>
			</IconButton>
			<IconButton>
				<MoreVertIcon/>
			</IconButton>
		</div>
	</div> 
	<div className="sidebar_search">
		<div className="sidebar_searchContainer">
		<SearchOutlinedIcon/>
		<input placeholder="search or start a new chat" type="text"/>
		</div>
	</div>
	<div className="sidebar_chats">
	    <SidebarChat addNewChat/>
		<SidebarChat name="Stiles Stilinski" lastMsg="Where are You?"/>
		<SidebarChat name="Berlin" lastMsg="Call me ASAP.."/>
		<SidebarChat name="Lucifer Morningstar" lastMsg="okayy detective...?"/>
		<SidebarChat name="Rio" lastMsg="get me a Maserati..hehe"/>
		<SidebarChat name="Professor " lastMsg="So,this is gonna be my next plan"/>
	</div>
    </div>
  );
}

export default Sidebar;
