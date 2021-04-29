import React, {Component} from "react";
import '../css/nav.css';
import { motion } from 'framer-motion';
import {Link} from "react-router-dom";

export default class NavBar extends Component {
    render() {
        return (
                 <div>
                     <nav className="navcontainer">
                         <Link to="/">
                             <h1>|&nbsp;
                                 <motion.span whileHover={{scale: 1.1, color: "rgb(128,128,128)"}}>
                                     home
                                 </motion.span>
                             &nbsp;</h1>
                         </Link>
                         <Link to="/projects">
                             <h1>|&nbsp;
                                 <motion.span
                                     whileHover={{scale: 1.1, color: "rgb(128,128,128)"}}>
                                     projects</motion.span>
                                 &nbsp;|</h1>
                         </Link>
                         <Link to="/about">
                             <h1>&nbsp;
                                 <motion.span
                                     whileHover={{scale: 1.1, color: "rgb(128,128,128)"}}>
                                     about</motion.span>
                                 &nbsp;|</h1>
                         </Link>
                     </nav>
                 </div>
        );
    }
}

