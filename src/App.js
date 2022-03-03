import './App.css';
import QrCode from './images/image-qr-code.jpg';

function App() {
	return (
		<section className="App">
			<div className="card">
				<div className="card-image-holder">
					<div className="card-image">
						<img src={QrCode} alt="QR Code for Frontend.io website" />
					</div>
				</div>
				<div className="card-desc-holder">
					<div className="card-title">Improve your front-end skills by building projects</div>
					<div className="card-desc">
						Scan the QR Code to visit Front-end mentor and take coding skills to next level
					</div>
				</div>
			</div>
		</section>
	);
}

export default App;
