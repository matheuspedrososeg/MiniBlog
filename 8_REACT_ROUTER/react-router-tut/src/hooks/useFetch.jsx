import { useEffect, useState } from "react";

// 4 - custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // 5 - refatorando post e delete
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  // 6 - estado de loading
  const [loading, setLoading] = useState(false);

  // 8 - tratando erros
  const [error, setError] = useState(null);

  // 9 - desafio
  const [itemId, setItemId] = useState(null);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setMethod("POST");
    } else if (method === "DELETE") {
      setConfig({
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      setMethod("DELETE");
      setItemId(data);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      // 6 - estado de loading
      setLoading(true);

      // 8 - tratando erros
      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

        const json = await res.json();

        setData(json);
        setMethod(null);

        // 8 - tratando erros
        setError(null);
      } catch (error) {
        setError("Houve um erro ao carregar os dados!");
      }

      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  // 5 - refatorando post e delete
  useEffect(() => {
    const httpRequest = async () => {
      if (method) {
        setLoading(true);

        try {
          let fetchOptions = [url, config];

          if (method === "DELETE") {
            fetchOptions[0] = `${url}/${itemId}`;
          }

          const res = await fetch(...fetchOptions);

          if (!res.ok) {
            throw new Error("Failed to fetch");
          }

          const json = await res.json();

          setCallFetch(json);
          setMethod(null);
          setError(null);
        } catch (error) {
          setError("Houve um erro ao processar a solicitação!");
        }

        setLoading(false);
      }
    };

    httpRequest();
  }, [config, url, itemId, method]);

  return { data, httpConfig, loading, error };
};
