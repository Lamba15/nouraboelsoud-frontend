import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import rehypeVideo from "rehype-video";

function MarkdownModal(props: {show: boolean, handleClose: () => void, markdown: string }) {

	return (
		<div className="modal" style={{display: props.show ? "flex" : "none", justifyContent: "flex-end"}} onClick={props.handleClose}>
			<section className="modal-main" onClick={(e) => {
				e.stopPropagation()
			}
			}>
				<MDEditor.Markdown
					source={props.markdown}
					linkTarget="_blank"
					rehypePlugins={[[rehypeVideo]]}
				/>
				<button onClick={props.handleClose} className={"button"}>Close</button>
			</section>
		</div>
	);
}

export default MarkdownModal;
