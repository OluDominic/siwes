import React from 'react';
import io from 'socket.io-client';

 class Messanger extends React.Component {
    
    render(){
        return(
        <div>
            <h1>Quick Message</h1>
            <form>
                <div>
                    <Messages messages={this.state.messages} />
                    <ChatInput onSend={this.sendHandler} />
                    <label className="to">To:</label>
                    <input type="text" name="to" id="to" />
                </div>
                <div>
                    <label className="body">Body:</label>
                    <textarea name="body" id="body"/>
                </div>
                <button type="submit">
                    Delete Message
                </button>
                <button type="submit">
                    Send
                </button>
            </form>
        </div>
        );
    }
 }

 class Messages extends React.Component {
     componentDidUpdate() {
         const objDiv = document.getElementById('messageList')
         objDiv.scrollTop = objDiv.scrollHeight;
     }
     render(){
         const messages = this.props.messages.map((messages, i) => {
             return (
                 <Messages key={i}
                 username={message.username}
                 message={message.message}
                 fromeMe={message.fromMe} />
             );
         })
         return (
             <div className='messages' id='messageList'>
                 { messages }
             </div>
         );
     }
 }

 Messages.defaultProps = {
     messages: []
 }

 class Message extends React.Component {
     render (){
         return (
             <div className={`message ${fromMe}`}>
                 <div className='username'>
                     { this.props.username }
                 </div>
                 <div className='message-body'>
                     { this.props.message }
                 </div>
             </div>
         )
     }
 }
Message.defaultProps = {
    message: '',
    username: '',
    fromMe: false
}
 class ChatInput extends React.Component {
     constructor(props){
         super(props)
     this.state={chatInput: ''}
     }
     textChangeHandler=(event)=>{
         this.setState({
             chatInput: event.target.value
         })
     }
    
     submitHandler=(event)=>{
         event.preventDefault();
         this.props.onSend(this.state.chatInput);
         this.setState({chatInput: ''})
     }
     render() {
         return (
             <form className="chat-input" 
             onSubmit={this.submitHandler}>
                 <input type="text" 
                 onChange={this.textChangeHandler}
                 value={this.state.chatInput}
                 placeholder="Write a message..."
                 required/>
             </form>
         );
     }
 }

class ChatApp extends React.Component {
    constructor(props){
        super(props);
        this.state={ messages: [] };
        this.socket.on('server:message', message=>{
            this.addMessage (Message);
        })
        this.socket = io(config.api).connect();
    }
    sendHandler=(message)=>{
        const messageObject = {
            username: this.props.username,
            message
        }
        
    this.socket.emit('client:message',messageObject);
    
    messageObject.fromMe = true;
    this.addMessage(messageObject);
    }

    addMessage=(message)=>{
        const messages = this.state.messages;
        messages.push(message);
        this.setState({ messages })
    }

}


export default Messanger;