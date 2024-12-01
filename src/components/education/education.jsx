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
                        <h2>School: {item.name}</h2>
                        <h2>Courses Taken: {item.courses}</h2>
                        <h2>GPA: {item.GPA}</h2>
                    </div>                

                ))}
            </div>

        </section>
    )
}
export default Education