import experience from "./workdata"
import './work.css'
const Work = () => {
    return (
        <section id = "work">
            <h1>Volunteer and Work Experience</h1>
            {experience.map(item => (
                    <div className="work-container">
                        <div className="work-item">
                            <h1 className="title">{item.title}</h1>
                            <h2 className = "description">{item.description}</h2>
                        </div>
                    </div>
                )
            )   
            }   
        </section>
    )
}
export default Work