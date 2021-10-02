import { useRef, useState, useEffect } from 'react';
import WebRTC from '../WebRTC/WebRTC.jsx';
import io from 'socket.io-client';

const CallPage = () => {
  let caller = useRef();
  let callee = useRef();
  // const [mics, setMics] = useState(null);

  useEffect(async () => {
    const socket = io();
    console.log(caller, callee);
    const WR = new WebRTC(caller, callee);
    await WR.initCall();
    // await WR.getMics().then(arr => setMics(arr));

    socket.on('welcome', async () => {
      console.log('welcome');
      const offer = await WR.myPeerConnection.createOffer();
      WR.myPeerConnection.setLocalDescription(offer);
      socket.emit('offer', offer, '123');
    });

    socket.on('offer', async offer => {
      console.log('Received the offer');
      WR.myPeerConnection.setRemoteDescription(offer);
      const answer = await WR.myPeerConnection.createAnswer();
      WR.myPeerConnection.setLocalDescription(answer);
      socket.emit('answer', answer, '123');
      console.log('Sent the offer');
    });

    socket.on('answer', answer => {
      console.log('Received the answer', answer);
      WR.myPeerConnection.setRemoteDescription(answer);
    });

    socket.on('ice', ice => {
      WR.myPeerConnection.addIceCandidate(ice);
    });

    socket.emit('join_room', '123');
  }, [callee.current]);

  const micsOption = () => {
    return mics.mics.map(mic => (
      <option key={mic.deviceId} value={mic.deviceId} selected={mics.currentAudio.label === mic.label}>
        {mic.label}
      </option>
    ));
  };

  return (
    <div>
      <video ref={caller} autoPlay playsInline style={{ width: '400px', height: '400px', backgroundColor: 'black' }}></video>
      {/* <select>{mics && micsOption()}</select> */}
      <br></br>
      <video ref={callee} autoPlay playsInline style={{ width: '400px', height: '400px', backgroundColor: 'black' }}></video>
    </div>
  );
};

export default CallPage;
