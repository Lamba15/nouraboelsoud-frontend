import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import rehypeVideo from "rehype-video";
import {NavLink, useOutletContext} from "react-router-dom";

function MarkdownModal() {

	// @ts-ignore
	const [markdownDescription] = useOutletContext();

	console.log(markdownDescription)
	return (
		<div className="modal" style={{display: "flex", justifyContent: "flex-end"}}>
			<section className="modal-main" onClick={(e) => {
				e.stopPropagation()
			}
			}>
				<MDEditor.Markdown
					// @ts-ignore
					source={markdownDescription}
					linkTarget="_blank"
					rehypePlugins={[[rehypeVideo]]}
				/>
				<NavLink to={"/"} className={"button"}>Close</NavLink>
			</section>
		</div>
	);
}

export default MarkdownModal;
