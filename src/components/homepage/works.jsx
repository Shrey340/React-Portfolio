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
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCT60R5YVuz_qypA0MLTgmho5ThwG1HV5Pkg&s"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">
								Drs. Kiran & Pallavi Patel Global University
							</div>
							<div className="work-subtitle">Lecturer</div>
							<div className="work-duration"></div>
						</div>

						<div className="work">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDTYwXAOAVVliQC5sPNR2OAA7mAJmiqgxAuQ&s"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Arth Technology</div>
							<div className="work-subtitle">
								Web Development Intern
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
