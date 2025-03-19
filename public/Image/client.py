import socket

# Create socket object
client_socket = socket.socket()

# Define server host and port
host =socket.gethostname()  # Localhost
port = 65432        # Same port as the server

# Connect to the server
client_socket.connect((host, port))

# Communicate with the server
while True:
    message = input("Client: ")
    client_socket.sendall(message.encode())
    data = client_socket.recv(1024)
    print(f"Received from server: {data.decode()}")

    if message.lower() == 'exit':
        break

# Close the connection
client_socket.close()
