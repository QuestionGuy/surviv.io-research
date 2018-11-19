Research log:
We start our research with the network protocol, websockets. (Can just sniff with wireshark and notice that immediately)
The javascript API to receive messages is WebSocket.onMessage, which brings us to line 35483. 
Lets put a trace point there and see what happens to the value a
What we will do in order to research is use grease monkey to replace the scripts and set breakpoints from within
