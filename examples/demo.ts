import Hetzner from 'hetzner';

async function main() {
  const hetzner = new Hetzner();

  console.log('creating a cx11 server');

  const { server } = await hetzner.servers.create({
    image: 'ubuntu-20.04',
    name: 'my-server',
    server_type: 'cx11',
  });
  console.log(`created server with id: ${server.id}`);
}

main();
