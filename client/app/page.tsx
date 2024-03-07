const geHelloWorldResponse = async () => {
  const res = await fetch("http://localhost:8080/hello");
  return await res.text();
};

export default async function Home() {
  const data = await geHelloWorldResponse();

  return <div>{data}</div>;
}
