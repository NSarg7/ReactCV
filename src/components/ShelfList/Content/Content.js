import React from "react";

const content = ({ link, img, name, text, styles }) => {
	return (
		<div className={styles ? `Content_container ${styles}` : "Content_container"}>
			<div className='Content'>
				<a target='_blank' rel='noopener noreferrer' href={link} className='pic'>
					<img src={img} alt={`Project ${name}`} />
				</a>
				<div className='text'>
					<p className='inline-text'>{text}</p>
				</div>
			</div>
		</div>
	);
};

export default React.memo(content);
