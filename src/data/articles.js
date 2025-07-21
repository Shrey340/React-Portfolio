import React from "react";

function article_1() {
	return {
		date: "1 FEB 2023 - 1 AUG 2023",
		title: "MERN STACK DEVELOPER INTERN",
		description:
			"I immersed myself in the MERN stack, contributing significantly to the front-end development of a dynamic admin panel. I focused on creating modular and reusable React.js components, which not only enhanced the user experience but also streamlined development processes. I ensured seamless data flow by integrating these components with a robust Node.js and Express.js back-end, creating a fully functional application.",
	};
}

function article_2() {
	return {
		date: "8 JULY 2024 - 8 OCT 2024",
		title: "FRONTEND DEVELOPER INTERN",
		description:
			"Building upon this experience, I further honed my skills in a project centered on an HRMS portal. Specifically, I worked on the crucial Action module, where I leveraged React.js and Redux to optimize component performance and state management. My efforts directly resulted in a more responsive and efficient user interface. I'm driven by a desire to understand and implement cutting-edge technologies, and I excel in collaborative environments. My core strengths are my problem-solving abilities and my capacity to adapt quickly to new challenges.",
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
