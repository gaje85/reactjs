// Importing stylesheets is one option
import './styles.css';

function LearnStyling() {
  const styles = {
    color: "#12345",
    fontSize: "24px",
    border: "1px solid blue"
  };

  return (
    <div className="learn-styling">
      <p>How does this work?</p>
      <p style={{color: "pink", fontSize: "24px"}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur corporis cumque distinctio dolorem enim facilis,
        incidunt libero maiores modi nesciunt nostrum obcaecati praesentium quisquam quos rerum sunt ut! Nihil?
      </p>

      <p style={styles}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae corporis dolore doloribus dolorum
        eaque excepturi facilis illum impedit ipsum iusto, magnam nemo quibusdam sed, similique vel velit voluptates voluptatibus.
      </p>
    </div>
  );
}

export default LearnStyling;
