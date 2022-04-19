import Service from './Service'
import accessImage from '../../images/icon-access-anywhere.svg'
import anyFileImage from '../../images/icon-any-file.svg'
import securityImage from '../../images/icon-security.svg'
import collaborationImage from '../../images/icon-collaboration.svg'
function Services() {
    return (
        <div className="services">
            <Service img={accessImage} tittle="Access your files, anywhere" text="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."/>
            <Service img={securityImage} tittle="Security you can trust" text=" 2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."/>
            <Service img={collaborationImage} tittle="Real-time collaboration" text="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."/>
            <Service img={anyFileImage} tittle="Store any type of file" text="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."/>
        </div>
    )
}

export default Services
