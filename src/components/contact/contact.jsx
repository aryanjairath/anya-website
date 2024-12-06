import './contact.css'
import { BsInstagram } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { BiPhoneIncoming } from 'react-icons/bi'
const Contact  = () => {
    const info = [
        {type: "Phone Number", mean: "tel:609-516-8577", actual: "609-516-8577", icon: BiPhoneIncoming},
        {type: "Email", mean: "mailto:anyajairath@gmail.com", actual : "anyajairath@gmail.com", icon: MdEmail},
        {type: "Instagram/Messenger", mean: "https://www.instagram.com/anya_jairath/", actual: "@anya_jairath", icon: BsInstagram}


    ]

    return (

        <section id = "contact">
            <h1>Contact Me</h1>
            <div className="contact-container">
                {info.map(item => (
                    <div className='contact-item'>
                        <div className = "contact-logo">
                            {item.icon && <item.icon />}
                        </div>
                        {item.type}: 
                        <a href = {item.mean}>{item.actual}</a>
                    </div>
                ))}
            </div> 
        </section>
    )
}
export default Contact
