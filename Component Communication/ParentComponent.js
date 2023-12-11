const { useState } = React;
const { render } = ReactDOM;

const ParentComponent = () => {
  const [messageFromParent, setMessageFromParent] = useState("Hello from Parent Component!");

  const handleMessageChange = (newMessage) => {
    setMessageFromParent(newMessage);
  };

  return (
    <div className="parent-container">
      <h2>Parent Component</h2>
      <p>{messageFromParent}</p>
      <ChildComponent onMessageChange={handleMessageChange} />
    </div>
  );
}

render(<ParentComponent />, document.getElementById('root'));