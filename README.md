# How to using rabbitmq with docker on localhost

I have followed document of rabbitmq on https://www.rabbitmq.com/documentation.html

I took note of some essentials when I setting up the environment and running rabbitmq. 

### 1. Install Docker (for Windows)

    https://docs.docker.com/docker-for-windows/install/
    
    Note: Hyper-V and Containers Windows features must be enabled. You can use this script here: 
        | bcdedit /set hypervisorlaunchtype auto
        | shutdown /r /t 0

### 2. Rabbitmq

After setup the environment, I follow docs on rabbitmq (https://www.rabbitmq.com/getstarted.html) to write the Hello World with Javascript

To download and install the Rabbitmq, you use
    
    docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management

Run it on Chrome

    http://localhost:15672/
    Username: guest
    Password: guest

