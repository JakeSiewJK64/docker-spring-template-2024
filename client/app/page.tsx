const geHelloWorldResponse = async () => {
  const res = await fetch("http://localhost:8080/hello");
  return res.text();
};

export default async function Home() {
  const data = geHelloWorldResponse();

  return <div>{data}</div>;
}
