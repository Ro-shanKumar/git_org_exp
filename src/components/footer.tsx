import React from 'react';
import './footer.css';
import Git from '../assets/img/git3.webp';
const Footer = () => {
	const goToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
	return (
		<>
			<div className=' d-sm-flex d-md-none '>
				<div
					className='footer'
					style={{
						width: '100vw',
						height: 'calc( 903/1728*100vw)',
						backgroundColor: '#2B3467',
						backgroundSize: 'cover',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-around',
						alignItems: 'center',
						overflow: 'hidden',
					}}
				>
					<div className='git_logo' style={{ marginTop: '20px' }}>
						<img src={Git} alt='Git_Logo' onClick={goToTop} />
					</div>
					<div className='footer_text' style={{ width: '80%', fontSize: '0.8rem', color:'black' }}>
						CREATION BY ROSHAN
					</div>
					<div className='footer_text' style={{ width: '80%', fontSize: '0.8rem', color:'black' }}>
						JUST FETCH IT
					</div>
				</div>
			</div>
			<div className='d-none d-md-flex d-lg-flex d-xl-flex'>
				<div
					className='footer'
					style={{
						width: '100vw',
						height: 'calc(403/1728*100vw)',
						backgroundColor: '#2B3467',
						backgroundSize: 'cover',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-around',
						alignItems: 'center',
						overflow: 'hidden',
					}}
				>
					<div className='row' style={{ width: '95vw' }}>
						<div className='git_logo col-md-1' style={{ height: '80px', width: '100px' }}>
							<img src={Git} />
						</div>
						<div className='footer_text col-md-1' style={{ width: '20%', marginTop: '3%', color:'black'  }}>
							CREATION BY ROSHAN
						</div>
						<div className='col-md-5'></div>
						<div className='footer_text col-md-2' style={{ width: '20%', marginTop: '3%', color:'black'  }}>
							JUST FETCH IT
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
