const { useState } = React;

const ChildComponent = ({ onMessageChange }) => {
  const [newMessage, setNewMessage] = useState('');
  const [messageFromChild, setMessageFromChild] = useState("Hello from Child Component!");

  const handleChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageFromChild(newMessage);
    onMessageChange(newMessage);
  };

  return (
    <div className="child-container">
      <h3>Child Component</h3>
      <p>{messageFromChild}</p>
      <form onSubmit={handleSubmit}>
        <label>
          New Message:
          <input
            type="text"
            value={newMessage}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Update Message</button>
      </form>
    </div>
  );
}