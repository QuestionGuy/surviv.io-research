Research log:
We start our research with the network protocol, websockets. (Can just sniff with wireshark and notice that immediately)
The javascript API to receive messages is WebSocket.onMessage, which brings us to line 35483. 
Lets put a trace point there and see what happens to the value a
What we will do in order to research is use grease monkey to replace the scripts and set breakpoints from within
<br>

Types: 1=player, 2=object, 3=weapons (I guess?)<br>
Wasn't able to find any references to my player position, perhaps the object positions that we get are already relative to my players position? Perhaps it's screen position?
