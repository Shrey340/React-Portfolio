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
								src="https://cdn-ilanecp.nitrocdn.com/SYytQhchfhrPOLMXmCxzpooleDMkGgpw/assets/images/optimized/rev-33e7f68/www.webbrainstechnologies.com/wp-content/uploads/2022/03/weblogo-e1629894882198.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">
								Mewurk Technology Pvt Ltd
							</div>
							<div className="work-subtitle">
								FrontEnd Developer Intern
							</div>
							<div className="work-duration"></div>
						</div>

						<div className="work">
							<img
								src="https://cdn-ilanecp.nitrocdn.com/SYytQhchfhrPOLMXmCxzpooleDMkGgpw/assets/images/optimized/rev-33e7f68/www.webbrainstechnologies.com/wp-content/uploads/2022/03/weblogo-e1629894882198.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">
								Webbrains Technology Pvt Ltd
							</div>
							<div className="work-subtitle">
								MERN Stack Developer Intern
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
