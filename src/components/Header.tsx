import ScrollNavigation from 'react-single-page-navigation';

function Header(props: any) {

	return (
		<div className="header">
			<img src="/logos/my-logo-squared-144.png" alt="logo" />

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
