import React from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom"
import "react-bootstrap";
export default class Nav extends React.Component{
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-xl w-100 bg-success ">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-white" >
                        <div class="navbar-nav">
                            <Link to="/Home">
                                <a className="nav-item nav-link text-white">Home </a>
                            </Link>
                            <Link to="/Api">
                                  <a className="nav-item nav-link text-white">Data API</a>
                            </Link>
                               
                            <Link to="/register">
                               <a className="nav-item nav-link text-white" >Register</a>
                            </Link>
                            <Link to = "/Login">
                                <a className="nav-item nav-link text-white">Log In</a>  
                            </Link>
                            <Link to = "/ScrollAPI">
                                <a className="nav-item nav-link text-white">Test Scroll Api</a>  
                            </Link>
                                              
                        </div>                        
                    </div>                 
                   
                </nav>
            </>
        )
    }
}