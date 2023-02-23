// Parent Component
import React, { useEffect, useState } from 'react';
import Introduction from './components/introduction';
import Profile from './components/profile';

function App() {
  const [ myFriend, setMyFriend ] = useState(1);
  const [ myFriendName, setMyFriendName ] = useState('');
  useEffect(()=> {
    if(myFriend === 1) setMyFriendName('Budi')
    else if(myFriend === 2) setMyFriendName('Joko')
    else {
      setMyFriendName('Joni')
    }
  }, [myFriend])
  return (
    <div>
      <h5>My friend name is {myFriendName}</h5>
      <h1> I have {myFriend} friend</h1>
      <button onClick={() => setMyFriend((prev) => prev + 1)} disabled={myFriend >= 10}>Add Friend</button>
      <button onClick={() => setMyFriend((prev) => prev - 1)} disabled={myFriend <= 0}>Remove Friend</button>
      {/* make a validation if friend less than zero cant press the button */}
      <Profile />
      <Introduction name="hendra lijaya"/>
      <Introduction name="jimmy lijaya"/>
    </div>
  );
}

export default App;
