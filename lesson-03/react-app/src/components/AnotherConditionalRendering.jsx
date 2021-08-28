import React from 'react';

function AnotherConditionalRendering(props) {
  return (
    <React.Fragment>
      {
        props.someFlag &&
          <h4>
            I show up when its true as well
          </h4>
      }
      {
        !props.someFlag &&
          <h4>
            I show up when its false as well
          </h4>
      }
    </React.Fragment>
  )
}

function FragmentExample() {
  /*
   * A React fragment is a common pattern followed in React when you have to return multiple sibling elements without a common
   * parent element - we can add a parent element like a div or a span but that may affect how the layout is done depending on context
   *
   *
   * We can make use of <React.Fragment></React.Fragment> or the newer <></> syntax
   **/
  return (
    <React.Fragment>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci consequatur dolorem enim error, excepturi,
        facere fugit id iusto laboriosam laborum mollitia perspiciatis praesentium quaerat qui quisquam quos similique unde?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci consequatur dolorem enim error, excepturi,
        facere fugit id iusto laboriosam laborum mollitia perspiciatis praesentium quaerat qui quisquam quos similique unde?
      </p>
    </React.Fragment>
  )
}

export default AnotherConditionalRendering;
