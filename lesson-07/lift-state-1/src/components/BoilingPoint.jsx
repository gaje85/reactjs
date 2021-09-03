

function BoilingPoint(props) {
  if(props.temperature > 100) {
    return <h4>This is very very hot</h4>
  }

  return <h4>This is not very hot</h4>
}

export default BoilingPoint;
