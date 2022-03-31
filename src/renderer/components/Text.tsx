import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/actionCreators';

const Text = () => {
  const [localText, setLocalText] = useState('');

  //* REDUX STUFF
  const dispatch = useDispatch();
  const { sendMessage, deleteMessage } = bindActionCreators(
    actionCreators,
    dispatch
  );

  //* EVENT HANDLERS
  const handleChangeText = (event: any) => {
    setLocalText(event.target.value);
  };
  const handleSendMessage = async (event: any) => {
    // const result = await ipc.sendSync('publish_message', 'lobby', localText);
    // if (result === -1) {
    //   throw new Error('something went wrong. try again');
    // }

    //* Two messages just to keep them on screen (in two lines)
    // sendMessage(`${result}:`);
    sendMessage('lobby', localText);
    setLocalText('');
  };

  return (
    <>
      <input id="textarea" value={localText} onChange={handleChangeText} />
      <button id="send-message" type="button" onClick={handleSendMessage}>
        Send
      </button>
    </>
  );
};

export default Text;
