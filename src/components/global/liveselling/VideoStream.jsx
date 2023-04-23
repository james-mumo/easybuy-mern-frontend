import React, { useEffect, useRef } from "react"
import Peer from "peerjs"

const VideoStream = ({ remotePeerId }) => {
  const videoRef = useRef()
  const peerRef = useRef(null)

  useEffect(() => {
    // create a new Peer object with a unique ID
    const peer = new Peer()
    peerRef.current = peer

    // when the Peer object is open and ready to use, log its ID to the console
    peer.on("open", (peerId) => {
      console.log(`My peer ID is: ${peerId}`)
    })

    // when a remote peer calls us, answer the call and start streaming video
    peer.on("call", (call) => {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          // display the remote stream in our video element
          videoRef.current.srcObject = call.peerConnection.remoteStream

          // answer the call and send our stream to the remote peer
          call.answer(stream)
          call.on("stream", (remoteStream) => {
            videoRef.current.srcObject = remoteStream
          })
        })
        .catch((error) => {
          console.error("Error getting user media:", error)
        })
    })

    // call the remote peer and start streaming video
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        // display our local stream in our video element
        videoRef.current.srcObject = stream

        // call the remote peer and send our stream to them
        const call = peer.call(remotePeerId, stream)
        call.on("stream", (remoteStream) => {
          videoRef.current.srcObject = remoteStream
        })
      })
      .catch((error) => {
        console.error("Error getting user media:", error)
      })

    // cleanup function that disconnects from the remote peer and closes the Peer object
    return () => {
      peerRef.current.disconnect()
      peerRef.current.destroy()
    }
  }, [remotePeerId])

  return (
    <div className="h-full">
      <video ref={videoRef} autoPlay muted playsInline className="h-full border border-gray-700 rounded-md"/>
    </div>
  )
}

export default VideoStream
