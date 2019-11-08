import { useState, useEffect } from "react";

function useHealthApi({ age, sex, pregnant, who }, defaultData) {
  const [data, updateData] = useState(defaultData);
  const healthApiUrl = `https://healthfinder.gov/api/v2/myhealthfinder.json?api_key=demo_api_key&lang=en&age=${age}&sex=${sex}&pregnant=${pregnant}`;

  useEffect(() => {
    async function fetchData() {
      const resp = await fetch(healthApiUrl, { referrerPolicy: "no-referrer" });
      const json = await resp.json();
      updateData(json);
    }
    fetchData();
  }, [age, sex, pregnant, who, healthApiUrl]);

  return data;
}

export default useHealthApi;
