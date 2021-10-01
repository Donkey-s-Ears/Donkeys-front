import io from 'socket.io-client';

export default class WebRTC {
  constructor(caller, callee, socket) {
    this.caller = caller;
    this.callee = callee;
    this.myPeerConnection;
    this.myStream;
    this.socket = socket;
  }

  makeConnection() {
    this.myPeerConnection = new RTCPeerConnection({
      iceServers: [
        {
          urls: ['stun:stun.l.google.com:19302']
        }
      ]
    });
    this.myPeerConnection.addEventListener('icecandidate', this.handleIce);
    this.myPeerConnection.addEventListener('addstream', this.handleAddStream);
    this.myStream.getTracks().forEach(track => this.myPeerConnection.addTrack(track, this.myStream));
  }

  handleIce(data) {
    console.log('handleIce');
    this.socket.emit('ice', data.candidate, '123');
  }

  handleAddStream(data) {
    console.log(data);
    this.callee.current.srcObject = data.stream;
  }

  // async handleMicsChange() {
  //   await this.getMedia(micsSelect.value);
  //   if (myPeerConnection) {
  //     const audioTrack = this.myStream.getAudioTracks()[0];
  //     const audioSender = this.myPeerConnection.getSenders().find(sender => sender.track.kind === 'audio');
  //     audioSender.replaceTrack(audioTrack);
  //   }
  // }

  async initCall() {
    await this.getMedia();
    this.makeConnection();
  }

  async getMedia() {
    const initialConstrains = {
      audio: true,
      video: false
    };
    try {
      this.myStream = await navigator.mediaDevices.getUserMedia(initialConstrains);
      // 처음 접속했을 때 미디어를 off 상태로 시작하게 해줌
      // this.myStream.getVideoTracks().forEach(track => (track.enabled = !track.enabled));
      // this.caller.current.srcObject = this.myStream;
    } catch (e) {
      console.log(e);
    }
  }

  async getMics() {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const mics = devices.filter(device => device.kind === 'audioinput');
      const currentAudio = this.myStream.getAudioTracks()[0];
      return { mics, currentAudio };
    } catch (e) {
      console.log(e);
    }
  }

  async handleWelcomeSubmit(e) {
    e.preventDefault();
    await initCall();
    this.socket.emit('join_room', '123');
  }
}
