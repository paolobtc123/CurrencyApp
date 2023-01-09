import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
@WebSocketGateway()
export class WebSocketServiceService  {
    @WebSocketServer()
    public server: Server;
  
    
  public SendDataToClients(message:string,payload:any){
    console.log(payload); 
    this.server.emit(message, payload);
  }


}
