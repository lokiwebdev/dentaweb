import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            {/* <!-- Left Panel --> */}
            <aside id="left-panel" className="left-panel">
                <nav className="navbar navbar-expand-sm navbar-default">
                    <div id="main-menu" className="main-menu collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active">
                                {/* <a href="index.html"><i className="menu-icon fa fa-laptop"></i>Dashboard </a> */}
                                <NavLink className="nav-link" to="/dashboard">
                                    <i className="menu-icon fa fa-laptop"></i>Dashboard
                                </NavLink>
                            </li>
                            <li>
                                {/* <a href="form.html"><i className="menu-icon fa fa-building-o"></i>Form</a> */}
                                <NavLink className="nav-link" to="/form">
                                    <i className="menu-icon fa fa-building-o"></i>Form
                                </NavLink>
                            </li>
                            <li>
                                {/* <a href="grid.html"><i className="menu-icon fa fa-user"></i>Grid</a> */}
                                <NavLink className="nav-link" to="/grid">
                                    <i className="menu-icon fa fa-user"></i>Grid
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- /.navbar-collapse --> */}
                </nav>
            </aside>
            {/* <!-- /#left-panel --> */}
            {/* <!-- Right Panel --> */}
            <div id="right-panel" className="right-panel">
                {/* <!-- Header--> */}
                <header id="header" className="header">
                    <div className="top-left">
                        <div className="navbar-header">
                            <div className="navbar-brand" href="./"><span className="red">Denta</span>web</div>
                            <div className="navbar-brand hidden" href="./">Dentaweb</div>
                            <a id="menuToggle" className="menutoggle"><i className="fa fa-bars"></i></a>
                        </div>
                    </div>
                    <div className="top-right">
                        <div className="header-menu">
                            <div className="header-left">
                                <button className="search-trigger"><i className="fa fa-search"></i></button>
                                <div className="form-inline">
                                    <form className="search-form">
                                        <input className="form-control mr-sm-2" type="text" placeholder="Search ..."
                                            aria-label="Search" />
                                        <button className="search-close" type="submit"><i className="fa fa-close"></i></button>
                                    </form>
                                </div>

                                <div className="dropdown for-notification">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="notification"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fa fa-bell"></i>
                                        <span className="count bg-danger">3</span>
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="notification">
                                        <p className="red">You have 3 Notification</p>
                                        <a className="dropdown-item media" href="#">
                                            <i className="fa fa-check"></i>
                                            <p>Server #1 overloaded.</p>
                                        </a>
                                        <a className="dropdown-item media" href="#">
                                            <i className="fa fa-info"></i>
                                            <p>Server #2 overloaded.</p>
                                        </a>
                                        <a className="dropdown-item media" href="#">
                                            <i className="fa fa-warning"></i>
                                            <p>Server #3 overloaded.</p>
                                        </a>
                                    </div>
                                </div>

                                <div className="dropdown for-message">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="message"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fa fa-envelope"></i>
                                        <span className="count bg-primary">4</span>
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="message">
                                        <p className="red">You have 4 Mails</p>
                                        <a className="dropdown-item media" href="#">
                                            <span className="photo media-left"><img alt="avatar" src="images/avatar/1.jpg" /></span>
                                            <div className="message media-body">
                                                <span className="name float-left">Jonathan Smith</span>
                                                <span className="time float-right">Just now</span>
                                                <p>Hello, this is an example msg</p>
                                            </div>
                                        </a>
                                        <a className="dropdown-item media" href="#">
                                            <span className="photo media-left"><img alt="avatar" src="images/avatar/2.jpg" /></span>
                                            <div className="message media-body">
                                                <span className="name float-left">Jack Sanders</span>
                                                <span className="time float-right">5 minutes ago</span>
                                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                            </div>
                                        </a>
                                        <a className="dropdown-item media" href="#">
                                            <span className="photo media-left"><img alt="avatar" src="images/avatar/3.jpg" /></span>
                                            <div className="message media-body">
                                                <span className="name float-left">Cheryl Wheeler</span>
                                                <span className="time float-right">10 minutes ago</span>
                                                <p>Hello, this is an example msg</p>
                                            </div>
                                        </a>
                                        <a className="dropdown-item media" href="#">
                                            <span className="photo media-left"><img alt="avatar" src="images/avatar/4.jpg" /></span>
                                            <div className="message media-body">
                                                <span className="name float-left">Rachel Santos</span>
                                                <span className="time float-right">15 minutes ago</span>
                                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="user-area dropdown float-right">
                                <a href="#" className="dropdown-toggle active" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <img className="user-avatar rounded-circle" src="images/admin.jpg" alt="User Avatar" />
                                </a>

                                <div className="user-menu dropdown-menu">
                                    <a className="nav-link" href="#"><i className="fa fa- user"></i>My Profile</a>

                                    <a className="nav-link" href="#"><i className="fa fa- user"></i>Notifications <span
                                        className="count">13</span></a>

                                    <a className="nav-link" href="#"><i className="fa fa -cog"></i>Settings</a>

                                    <a className="nav-link" href="#"><i className="fa fa-power -off"></i>Logout</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Navbar