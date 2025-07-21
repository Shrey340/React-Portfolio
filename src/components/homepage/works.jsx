import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNV2eA91PK7-oiHC78VXUaXLs6rhJElyJmRQ&s"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">
								WEBBRAINS TECHNOLOGY
							</div>
							<div className="work-subtitle">
								MERN STACK DEVELOPER INTERN
							</div>
							<div className="work-duration"></div>
						</div>

						<div className="work">
							<img
								src="https://media.glassdoor.com/sqll/6655690/mewurk-technologies-squarelogo-1653382697010.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">MEWURK TECHNOLOGY</div>
							<div className="work-subtitle">
								FRONTEND DEVELOPER INTERN
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
