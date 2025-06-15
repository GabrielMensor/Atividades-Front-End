import { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../index.css'

console.log("Chat")
export default function Chat() {
    const { name } = useParams();
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const sendMessage = () => {
        console.log("Entrei sem querer")
        if (message.trim() === '') {
            return;
        }
        setMessages([...messages, message]);
        setMessage('');
    }

    return (
        <div className="main">
            <div className="chat-screen">
                <header>
                    <h1>Olá {decodeURIComponent(name)}</h1>
                    <h2>Atendimento on-line</h2>
                </header>
                <div className="messages-list">
                    <div className="message-item">
                        <div className="msg-user"><strong>Atendente diz:</strong></div>
                        <div className="msg-chat">Olá Sr. Blabla</div>
                    </div>
                    <div className="message-item">
                        <div className="msg-user"><strong>Atendente diz:</strong></div>
                        <div className="msg-chat">Blabla blabla blabla?</div>
                    </div>
                    <div className="message-item message-user">
                        <div className="msg-user"><strong>Você diz:</strong></div>
                        <div className="msg-chat">Blablaaaa Bla</div>
                    </div>
                    <div className="message-item message-user">
                        <div className="msg-user"><strong>Você diz:</strong></div>
                        <div className="msg-chat">Bla blabla Ba</div>
                    </div>
                    <div className="message-item">
                        <div className="msg-user"><strong>Atendente diz:</strong></div>
                        <div className="msg-chat">KKKKKKKKKKK blabla?</div>
                    </div>
                    <div className="message-item">
                        <div className="msg-user"><strong>Atendente diz:</strong></div>
                        <div className="msg-chat">Blabla Blaaba </div>
                    </div>
                    {messages.map((msg, index) => (
                        <div key={index}>
                            <div className="msg-user"><strong>Você diz:</strong></div>
                            <div className="msg-chat">{msg}</div>
                        </div>
                    ))}

                    <input type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => {         /* enviar mensagens clicando na tecla Enter */
                            if (e.key === 'Enter') sendMessage();
                        }} />
                    <button onClick={sendMessage} className='submit-button'>Enviar</button>

                </div>
            </div>
        </div>
    )
}