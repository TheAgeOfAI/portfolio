import React from 'react';
import './App.css';

function Header({ buttons }) {
  return (
    <div className="container-fluid absolute-head py-3 fixed-top">
		<div className="row align-items-center justify-content-between">
			{/* <div className="col-3 my-1"> */}
			<div className="col-lg-3 col-md-4 col-12 my-1"> 
				<div className="d-flex flex-row">
					{buttons.left.map((button, index) => (
						<div className="d-flex p-2 mx-3">
							<a className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 text-light" href="#" key={index}>{button}</a>
						</div>
					))}
				</div>
			</div>
			<div className="col-lg-3 col-md-4 col-12 text-center my-1"> 
				<a className="link-offset-2 text-light link-offset-3-hover link-underline link-underline-opacity-0" href="/" >Portfolio</a>
			</div>
			<div className="col-lg-3 col-md-4 col-12 my-1">
				<div className="d-flex flex-rwo justify-content-end">
					<div className="mx-3">
						<a className="link-offset-2 link-info link-offset-3-hover link-underline link-underline-opacity-0" href="#" >Portfolio</a>
					</div>
				</div>
			</div>
		</div>
	</div>
  );
}

export default Header;