// Import necessary modules and styles
import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
     // State to manage the emoji picker visibility
     const [open, setOpen] = useState(false);

     // State to manage the text input value
     const [text, setText] = useState("");

     const endRef= useRef(null)

     useEffect(()=>{
      endRef.current?.scrollIntoView({behaviour:"smooth"})
     },[])

     // Function to handle emoji selection
     const handleEmoji = (e) => {
          setText((prev) => prev + e.emoji); // Append the selected emoji to the current text
          setOpen(false) // Close the emoji picker
     };

     
     return (
          <div className='chat'>
               {/* Top section containing user info and action icons */}
               <div className="top">
                    <div className="user">
                         <img src="./avatar.png" alt="User Avatar" />
                         <div className="texts">
                              <span>Bala</span>
                              <p>Do until you Done</p>
                         </div>
                    </div>
                    <div className="icons">
                         <img src="./phone.png" alt="Phone Icon" />
                         <img src="./video.png" alt="Video Icon" />
                         <img src="./info.png" alt="Info Icon" />
                    </div>
               </div>

               {/* Center section displaying chat messages */}
               <div className="center">
                    {/* Received message */}
                    <div className="message">
                         <img src="./avatar.png" alt="User Avatar" />
                         <div className="texts">
                              <p>Just one small positive thought in the morning can change your whole day.</p>
                              <span>1 min ago</span>
                         </div>
                    </div>

                    {/* Sent message */}
                    <div className="message own">
                         <div className="texts">
                              <p>Just one small positive thought in the morning can change your whole day.</p>
                              <span>1 min ago</span>
                         </div>
                    </div>

                    {/* Repeated received message */}
                    <div className="message">
                         <img src="./avatar.png" alt="User Avatar" />
                         <div className="texts">
                              <p>Just one small positive thought in the morning can change your whole day.</p>
                              <span>1 min ago</span>
                         </div>
                    </div>
                    

                    {/* Repeated sent message with image */}
                    <div className="message own">
                         <div className="texts">
                              <img src="./cat.jpeg" alt="Favicon" />
                              <p>Just one small positive thought in the morning can change your whole day.</p>
                              <span>1 min ago</span>
                         </div>
                    </div>

                    <div className="message">
                         <img src="./avatar.png" alt="User Avatar" />
                         <div className="texts">
                              <p>Just one small positive thought in the morning can change your whole day.</p>
                              <span>1 min ago</span>
                         </div>
                    </div>

                    {/* Sent message */}
                    <div className="message own">
                         <div className="texts">
                              <p>Just one small positive thought in the morning can change your whole day.</p>
                              <span>1 min ago</span>
                         </div>
                    </div>

                    <div ref ={endRef}></div>
               </div>
               
               {/* Bottom section for input and action icons */}
               <div className="bottom">
                    <div className="icons">
                         <img src="./img.png" alt="Image Icon" />
                         <img src="./camera.png" alt="Camera Icon" />
                         <img src="./mic.png" alt="Microphone Icon" />
                    </div>

                    {/* Input field for typing messages */}
                    <input 
                         type="text" 
                         placeholder="Type a message..."
                         value={text}
                         onChange={(e) => setText(e.target.value)} 
                    />

                    {/* Emoji picker and toggle */}
                    <div className="emoji">
                         <img 
                              src="./emoji.png"
                              alt="Emoji Icon"
                              onClick={() => setOpen((prev) => !prev)} 
                         />
                         <div className="picker">
                         <EmojiPicker open={open} onEmojiClick={handleEmoji} />
                         </div>
                    </div>

                    {/* Send button */}
                    <button className="sendButton">Send</button>
               </div>
          </div>
     );
};

export default Chat;
