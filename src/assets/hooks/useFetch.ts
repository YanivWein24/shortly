const useFetch = async (url: string) => {
  try {
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const data = await res.json();
    if (data.error) return data.error;

    return data;
  } catch (err) {
    return err;
  }
};

export default useFetch;
