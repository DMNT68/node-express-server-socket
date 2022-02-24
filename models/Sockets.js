class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
  }

  socketEvents() {
    //   On connection
    this.io.on('connection', (socket) => {
      // socket.emit('mensaje-bienvenida', {
      //   msg: 'Bienvenido al server',
      //   date: new Date(),
      // });
      // Escuchar el evento
      // mensaje-cliente
      // {msg:'cliente', nombre: 'Fernando'}
      // socket.on('mensaje-cliente', (data) => {
      //   console.log('el cliente emitio algo', data);
      // });

      //   Escuchar evento: mensaje-to-server
      socket.on('mensaje-to-server', (data) => {
        console.log(data);
        this.io.emit('mensaje-from-server', data);
      });
    });
  }
}

module.exports = Sockets;
