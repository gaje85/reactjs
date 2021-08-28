import ConditionalRendering from './ConditionalRendering';
import AnotherConditionalRendering from './AnotherConditionalRendering';
import MoreConditionalRendering from './MoreConditionalRendering';

function LearnConditionalRendering() {
  return (
    <div>
      <h4>We will learn conditional Rendering here</h4>
      <ConditionalRendering someFlag={true}/>
      <ConditionalRendering someFlag={false}/>
      <AnotherConditionalRendering someFlag={true}/>
      <AnotherConditionalRendering someFlag={false}/>
      <MoreConditionalRendering someFlag={true}/>
      <MoreConditionalRendering someFlag={false}/>
    </div>
  )
}

export default LearnConditionalRendering;
