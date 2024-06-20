import { useState, useEffect } from 'react';

const useApi = () => {
  const [fetchAPI, setFetchAPI] = useState(null);
  const [submitAPI, setSubmitAPI] = useState(null);

  useEffect(() => {
    const fetchAPIMock = async (date) => {
      console.log('Fetching data for date:', date);
      try {
        const response = await fetch('https://raw.githubusercontent.com/courseraap/capstone/main/api.js');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const scriptText = await response.text();
        eval(scriptText); // This is to simulate loading the API script
        const times = await window.fetchAPI(date); // Assuming fetchAPI is attached to window
        return times;
      } catch (error) {
        console.error('Fetch API error:', error);
        return [];
      }
    };

    const submitAPIMock = async (formData) => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/courseraap/capstone/main/api.js', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        return result;
      } catch (error) {
        console.error('Submit API error:', error);
        return false;
      }
    };

    setFetchAPI(() => fetchAPIMock);
    setSubmitAPI(() => submitAPIMock);
  }, []);

  return { fetchAPI, submitAPI };
};

export default useApi;