import Image from '../../images/illustration-stay-productive.png'
function Info() {
    return (
        <div className="info">
            <img src={Image} alt="imageLeft"/>
            <div className="info__texts">
                <h2>Stay productive, wherever you are</h2>
                <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
                    storage needs.</p>
                    <p> Securely share files and folders with friends, family and colleagues for live collaboration.
                    No email attachments required.</p>
                <a>See how Fylo works</a>
            </div>
        </div>
    )
}

export default Info
