import React from 'react';

class ChildrenProp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="some-container">
        <table>
          <FancyTr color="black">
            <td>Row 1 Cell 1</td>
            <td>Row 1 Cell 2</td>
            <td>Row 1 Cell 3</td>
          </FancyTr>
          <FancyTr color="red">
            <td>Row 1 Cell 1</td>
            <td>Row 1 Cell 2</td>
            <td>Row 1 Cell 3</td>
          </FancyTr>
        </table>
      </div>
    );
  }
}

function FancyTr(props) {

  const rowStyle = {
    color: "white",
    backgroundColor: props.color || "black"
  };

  return (
    <tr style={rowStyle}>
      {props.children}
    </tr>
  )
}


export default ChildrenProp;
