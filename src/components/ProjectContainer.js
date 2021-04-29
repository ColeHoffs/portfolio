import React, {Component} from "react";
import Project from "./Project";
import '../css/project.css';
import {AnimatePresence, motion} from "framer-motion";

class ProjectContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    }

    async componentDidMount() {
        await fetch('https://api.github.com/users/ColeHoffs/repos')
            .then(result => result.json())
            .then(data => data.filter(function (project) {
                return project.description === "include";
            }))
            .then((result) => {
                let elements = [];
                let delayTime = 0;
                for (let i = 0; i < result.length; i++) {
                    let title = result[i].name;
                    let imgSrc = "https://raw.githubusercontent.com/ColeHoffs/" + result[i].name + "/main/thumbnail.PNG";
                    let url = result[i].html_url;
                    delayTime += .09;
                    elements.push(
                        <AnimatePresence>
                            <motion.div initial={{ opacity: 0}}
                                        transition={{ ease: "easeIn", delay: delayTime }}
                                        animate={{ opacity: 1}}>
                                <Project src={imgSrc} title={title} url={url} key={i}/>
                            </motion.div>
                        </AnimatePresence>);
                }
                this.setState({projects: elements});
            });
    }

    render() {
        return (
                <div className="container">
                    {this.state.projects}
                </div>
        );
    }
}

export default ProjectContainer;