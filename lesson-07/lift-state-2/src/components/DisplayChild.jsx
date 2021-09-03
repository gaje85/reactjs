function DisplayChild(props) {
  if (props.randomInput && props.randomInput.length > 0) {
    return <h4>
      {props.randomInput}
    </h4>
  }

  return <h4>No random input</h4>
}

export default DisplayChild;
