// const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const VITE_API_BASE_URL = "https://localhost:7133/api";

export const fetchWithoutToken = async (endpoint, method, request) => {
    
  const response = await fetch(`${VITE_API_BASE_URL}/${endpoint}`, {
    method: method,
    body: request,
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    console.error(response);
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  return data;
};


export const getWithoutToken = async (endpoint) => {
    console.log(`${import.meta.env.VITE_API_BASE_URL}/${endpoint}`);
    
    const response = await fetch(`${VITE_API_BASE_URL}/${endpoint}`, {
      method: "GET",      
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (!response.ok) {
      console.error(response);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const data = await response.json();
    return data;
  };
  
