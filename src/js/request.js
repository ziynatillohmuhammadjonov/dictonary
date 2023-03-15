import notPages from "./notFound";

const getData = async (url) => {
  const req = await fetch(url);
  if (!req.ok) {
    notPages(false);
    const err = await req.json();
    throw new Error(err.json());
  }
  const data = await req.json();
  notPages(true);
  return data;
};
export default getData;
