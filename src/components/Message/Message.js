import './Message.css';
import message_icon from '../../assets/logo-message.jpg';

function Message ({content, visible}) {
    
    return (
        <div className={(visible) ? 'container-message-active' : 'container-message-inactive'}>
            <div className="message-content">
                <img className="message-icon" src={message_icon} alt="logo-message" />
                <p className="message">{content}</p>
            </div>
        </div>
    );
}

export default Message;