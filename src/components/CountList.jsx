import React, {useState} from 'react';
import { Button } from 'react-bootstrap';


const CountList = () => {
    const [count, setCount] = useState(0)
    return (
    <div id='count'>
      <h2>Вы кликнули {count} раз(а)</h2>
      <Button onClick={() => setCount(count + 1)}>
        +1
      </Button>
      <Button onClick={() => setCount(count - 1)}>
        -1
      </Button>
    </div>

    );
};

export default CountList;