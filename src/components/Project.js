import React, {Component} from "react";
import '../css/project.css';
import {motion} from 'framer-motion';

class Project extends Component {
    render() {




        return (
            <motion.div whileHover={{scale: 1.1}}>
                <a href={this.props.url} target="_blank" rel="noreferrer">
                    <div className="card">
                        <img src={this.props.src}/>
                        <h2>{this.props.title}</h2>
                    </div>
                </a>
            </motion.div>
        );
    }
}

export default Project;