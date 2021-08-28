function MoreConditionalRendering(props) {
  return (
    props.someFlag ?
      <h3>I render for true conditions</h3>
      :
      <h3>I render for false conditions</h3>
  )
}

export default MoreConditionalRendering;
