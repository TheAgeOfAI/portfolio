import React from 'react';
import './App.css';

function Header({ buttons }) {
  return (
    <div class="container-fluid">
		<nav class="navbar navbar-expand-lg">
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
			<ul class="navbar-nav mr-auto mt-2 mt-lg-0">
				<li class="nav-item active">
					<a class="nav-link" href="#">Home <span class="sr-only">*</span></a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Content</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">About me</a>
				</li>
			</ul>
			<div class="mx-auto">
				<a href="#" class="navbar-brand">Portfolio</a>
			</div>
			<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
			</div>
		</nav>
	</div>
  );
}

export default Header;