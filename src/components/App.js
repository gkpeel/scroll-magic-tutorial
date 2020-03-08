import React, { Component } from 'react';
import ScrollMagic from 'scrollmagic';
import '../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import '../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

class App extends Component {
	constructor(props) {
		super(props);
		// this.controller = new ScrollMagic.Controller();
	}
	controller = new ScrollMagic.Controller();

	componentDidMount() {
		new ScrollMagic.Scene({
			triggerElement: '#scroll-start',
			duration: 200,
			offset: 50
		})
			.setTween('#myElement', {
				scale: 0.5,
				color: 'red'
			})
			.setPin('#myElement')
			.addTo(this.controller);
	}

	render() {
		return (
			<div>
				<div className="header" style={{ height: '800px', backgroundColor: 'lightgray' }}></div>
				<div id="scroll-start"></div>
				<div style={{ height: '1000px', backgroundColor: 'brown' }}>
					<div id="wrapper" style={{ height: '1600px', backgroundColor: 'khaki' }}>
						<h1 id="myElement">Hello World</h1>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
