import React,{Component} from 'react';
import './NavSuperior.css'

export default class NavSuperior extends Component{
    render(){
        return(
            <>            
            <div class="nav">
                <input type="checkbox" id="nav-check"/>
                <div class="nav-header">
                    <div class="nav-title">
                    <img src= "https://upload.wikimedia.org/wikipedia/commons/c/c9/Campus_Party_New_Logo.png" width= "90px"></img>
                    </div>
                </div>
                <div class="nav-btn">
                    <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                    </label>
                </div>
                
                <div class="nav-links">
                    <a href="//github.io/jo_geek" target="_blank"> TIMELINE </a>
                    <a href="http://stackoverflow.com/users/4084003/" target="_blank"> PROFILE </a>
               
                </div>
            </div>
            </>
        )
    }
}
