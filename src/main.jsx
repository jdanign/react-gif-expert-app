import React from 'react'
import ReactDOM from 'react-dom/client'
import { GiftExpertApp } from './GiftExpertApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	/* El StrictMode solo se utiliza en desarrollo, no en producción */
	<React.StrictMode>
		<GiftExpertApp/>
	</React.StrictMode>
);