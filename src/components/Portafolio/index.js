import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import React,{useState} from 'react'
import Loader from 'react-loaders'
import portafolioData from '../../data/portafolio.json'

const Portafolio = () => {
	console.log(portafolioData)
	const [letterClass, setLetterClass] = useState('text-animate text-animate-hover')

	const renderPortafolio = (portafolio) =>{
		return(
			<div className="images-container">
				{
					portafolio.map((port, idx) => {
					return(
						<div className="image-box" key={idx}>
							<img 
							src={port.cover}
							className="portafolio-image"
							alt="portafolio" 
							/>
							 <div className="content">
                 <p className="title">{port.title}</p>
                  <h4 className="description">{port.description}</h4>
                  <button
                  	className="btn"
                  	onClick={() => window.open(port.url)}
                  >View</button>
									<button
                  	className="btn"
                  	onClick={() => window.open(port.Code)}
                  >Code</button>
                </div>
						</div>
					)
				})}
			</div>
		)
	}

  return (
		<>
			<div className="container portafolio-page">
				<h1 className="page-title">
					<AnimatedLetters 
					letterClass={letterClass}
					strArray={"Portafolio".split("")}
					idx={15}
				/>
				</h1>
				<div>{renderPortafolio(portafolioData.portafolio)}</div>
			</div>
			<Loader type="pacman" />
		</>
	)
}

export default Portafolio