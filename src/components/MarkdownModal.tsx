import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import rehypeVideo from "rehype-video";
import {NavLink, useNavigate, useOutletContext} from "react-router-dom";
import {Skill} from "../types/Types";

function MarkdownModal() {

    const navigate = useNavigate();

    // @ts-ignore
    const [markdownDescription, skills, title] = useOutletContext();

    return (
        <div className="modal" style={{display: "flex", justifyContent: "flex-end"}} onClick={() => navigate("/")}>
            <section className="modal-main"
                     style={{borderRadius: 12}}
                     onClick={(e) => {
                         e.stopPropagation()
                     }
                     }>

                <div style={{overscrollBehavior: "contain", width: "-webkit-fill-available"}} >

                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <h1 style={{marginTop: 0}}>
                            {title}
                        </h1>

                    </div>


                    <NavLink to={"/"} style={{position: "absolute", display: "flex", alignItems: "center", justifyContent: "center", right: -60, top: 0, background: "white", padding: 16, borderRadius: 9999, height: 16}}>
                        <img src={"/svgs/cross.png"} alt={"close"} style={{width: 16}} />
                    </NavLink>

                    <div className={"tech-used-container"}>
                        <h3 style={{marginRight: 6}}>
                            Tech used:
                        </h3>

                        <div className="skills-project-container">
                            {skills?.map((skill: Skill, index: number) => {
                                return (
                                    <div key={index} className="skill" title={skill.name}>
                                        <img src={skill.icon} alt={skill.name}/>
                                    </div>
                                );
                            })}
                        </div>
                    </div>


                    <MDEditor.Markdown
                        // @ts-ignore
                        source={markdownDescription}
                        linkTarget="_blank"
                        rehypePlugins={[[rehypeVideo]]}
                    />

                    <div style={{float: "right", display: "flex", justifyContent: "end"}}>
                        <NavLink to={"/"} className={"button"}>Close</NavLink>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MarkdownModal;
