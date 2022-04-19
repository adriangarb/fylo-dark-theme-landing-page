import Card from './Card'
import profile1 from '../../images/profile-1.jpg'
import profile2 from '../../images/profile-2.jpg'
import profile3 from '../../images/profile-3.jpg'

function Cards() {
    return (
        <div className="cards">
            <Card opinion="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine." image={profile1} name="Satish Patel" position="Founder & CEO, Huddle"/>
            <Card opinion="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine." image={profile2} name="Bruce McKenzie" position="Founder & CEO, Huddle"/>
            <Card opinion="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine." image={profile3} name="Iva Boyd" position="Founder & CEO, Huddle"/>
        </div>
    )
}

export default Cards
