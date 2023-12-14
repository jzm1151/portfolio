import './ProjectsSection.css'

function ProjectsSection() {


    return (
        <div>
        <div>
        <div className='grid grid-cols-2'>
            <div className="cube-container">
                <div className="cube initial-position">
                    <img className="cube-face-image image-1" src="https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=300&h=300&fit=crop" />
                    <img className="cube-face-image image-2" src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=300&h=300&fit=crop" />
                    <img className="cube-face-image image-3" src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=300&h=300&fit=crop" />
                    <img className="cube-face-image image-4" src="https://images.unsplash.com/photo-1514041181368-bca62cceffcd?w=300&h=300&fit=crop" />
                    <img className="cube-face-image image-5" src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=300&h=300&fit=crop" />
                    <img className="cube-face-image image-6" src="https://images.unsplash.com/photo-1486334803289-1623f249dd1e?w=300&h=300&fit=crop" />
                </div>
            </div>

            <div className="image-buttons">
                <input type="image" className="show-image-1" src="https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=100&h=100&fit=crop"></input>
                <input type="image" className="show-image-2" src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=100&h=100&fit=crop"></input>
                <input type="image" className="show-image-3" src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=100&h=100&fit=crop"></input>
                <input type="image" className="show-image-4" src="https://images.unsplash.com/photo-1514041181368-bca62cceffcd?w=100&h=100&fit=crop"></input>
                <input type="image" className="show-image-5" src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=100&h=100&fit=crop"></input>
                <input type="image" className="show-image-6" src="https://images.unsplash.com/photo-1486334803289-1623f249dd1e?w=100&h=100&fit=crop"></input>
            </div>
        </div>
        </div>
        </div>
    )
}

export default ProjectsSection