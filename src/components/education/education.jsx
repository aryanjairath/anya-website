import './education.css'
const Education = () => {
    const schools = [
        {name: "South Brunswick High School", courses: "AP Calculus-BC, AP Computer Science Principles, AP Environmental Science, College Accounting I/II", GPA: "4.1"},
        {name: "South Brunswick High School", courses: "AP Calculus-BC, AP Computer Science Principles, AP Environmental Science, College Accounting I/II", GPA: "4.1"}

    ];
    return (
        <section id = "education">
            <h1>Education</h1>
            <div className = "education-container">
                {schools.map(item =>(
                    <div className="schoolbox">
                        <h3>School: {item.name}</h3>
                        <h3>Courses Taken: {item.courses}</h3>
                        <h3>GPA: {item.GPA}</h3>
                    </div>                

                ))}
            </div>

        </section>
    )
}
export default Education