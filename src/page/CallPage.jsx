import { useRef, useState, useEffect } from 'react';
import WebRTC from '../WebRTC/WebRTC.jsx';
import io from 'socket.io-client';

const CallPage = () => {
  const caller = useRef();
  const callee = useRef();
  const socket = io.connect('http://localhost:3000/');
  const [WR, setWR] = useState(null);
  const [mics, setMics] = useState(null);

  useEffect(() => {
    setWR(new WebRTC(caller, callee, socket));
  }, []);

  useEffect(async () => {
    if (!WR) return;
    await WR.initCall();
    await WR.getMics().then(arr => setMics(arr));
    socket.emit('join_room', '123');
    caller.current.srcObject = WR.myStream;
  }, [WR]);

  const micsOption = () => {
    return mics.mics.map(mic => (
      <option key={mic.deviceId} value={mic.deviceId} selected={mics.currentAudio.label === mic.label}>
        {mic.label}
      </option>
    ));
  };

  socket.on('connect', () => {
    console.log('connected!');
  });

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
    console.log('Received the answer');
    WR.myPeerConnection.setRemoteDescription(answer);
  });

  socket.on('ice', ice => {
    WR.myPeerConnection.addIceCandidate(ice);
  });

  if (!WR || !mics) return <div>Loading 중..</div>;

  return (
    <div>
      <video ref={caller} autoPlay playsInline style={{ width: '400px', height: '400px', backgroundColor: 'black' }}></video>
      <select>{WR && micsOption()}</select>
      <br></br>
      <video ref={callee} autoPlay playsInline style={{ width: '400px', height: '400px', backgroundColor: 'black' }}></video>
    </div>
  );
};

export default CallPage;
