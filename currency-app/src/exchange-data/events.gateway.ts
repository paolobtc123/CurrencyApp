import { OnGatewayConnection, OnGatewayInit, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
@WebSocketGateway(3002,{cors:"*"})
export class EventsGateway implements OnGatewayConnection , OnGatewayInit  {
  afterInit(server: any) {
    console.log("websocket init");
    console.log(server);
  }
  handleConnection(client: any, ...args: any[]) {
    console.log("socket connection");
    console.log(client);
  }

  @WebSocketServer()
  public server: Server;
  
    
  public SendDataToClients(message:string,payload:any){
    //console.log(payload); 
    this.server.sockets.emit(message, payload);
  }


}
