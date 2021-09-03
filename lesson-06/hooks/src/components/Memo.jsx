import {useMemo} from 'react';

function Memo() {
  const memoizedValue = useMemo(() => {
    return 3.14;
  });

  return (
    <div className="container">
      {memoizedValue}
    </div>
  )
}

export default Memo;
