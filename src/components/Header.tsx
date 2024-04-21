// import ScrollNavigation from 'react-single-page-navigation';

import React from "react";

function Header(props: any) {

	return (
		<div className="header">
			<img src="/logos/my-logo-squared-144.png" style={{marginTop: 12}} alt="logo"/>

			<svg style={{width: "100%", position: "absolute", top: "calc(var(80px) * -1)", left: 0, zIndex: -1}}
				 data-name="BottomWaves" className="BottomWaves " xmlns="http://www.w3.org/2000/svg"
				 viewBox="0 0 1440 320">
				<path fill="#fff" fill-opacity="1"
					  d="M0,32L60,26.7C120,21,240,11,360,37.3C480,64,600,128,720,133.3C840,139,960,85,1080,80C1200,75,1320,117,1380,138.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
			</svg>

			<div className="navigation">
				{/*<ScrollNavigation elements={{ TopOfThePage: {}, BottomOfThePage: {} }}>*/}
				{/*	{({ refs, activeElement, goTo }) => (*/}
				{/*		<div>*/}
				{/*			<div ref={refs.TopOfThePage} onClick={() => goTo('BottomOfThePage')}>*/}
				{/*				Top Element {activeElement === 'TopOfThePage' && 'is active!'}*/}
				{/*			</div>*/}
				{/*			<div ref={refs.BottomOfThePage} onClick={() => goTo('TopOfThePage')}>*/}
				{/*				Bottom Element {activeElement === 'BottomOfThePage' && 'is active!'}*/}
				{/*			</div>*/}
				{/*		</div>*/}
				{/*	)}*/}
				{/*</ScrollNavigation>*/}
			</div>

		</div>
	);
}

export default Header;
