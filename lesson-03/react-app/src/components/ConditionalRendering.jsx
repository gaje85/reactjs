function ConditionalRendering(props) {
  if (props.someFlag) {
    return <TrueFlag/>
  }
  return <FalseFlag/>
}

export default ConditionalRendering;

function TrueFlag() {
  return (
    <div>
      <h3>I show up when its true</h3>
    </div>
  );
}


function FalseFlag() {
  return (
    <div>
      <h3>I show up when its false</h3>
    </div>
  );
}
