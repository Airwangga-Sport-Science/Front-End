const api = (() => {
  const BASE_URL = 'http://127.0.0.1:5000';

  function getAccessToken() {
    return localStorage.getItem('accessToken')
  }
   
  function putAccessToken(accessToken) {
    return localStorage.setItem('accessToken', accessToken);
  }

  async function fetchWithToken(url, options = {}) {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `${getAccessToken()}`
      }
    });
  }
   

  async function login({ username, password }) {
    const response = await fetch(`${BASE_URL}/authenticate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const responseJson = await response.json();

    const { status, message } = responseJson;
    console.log(status)
    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { token } } = responseJson;

    return token;
  }

  async function getUserLoggedIn() {
    const response = await fetchWithToken(`${BASE_URL}/user`, {
      method: 'GET',
    });
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      
    }
    return responseJson.data;
  }

  async function getPlayer() {
    const response = await fetchWithToken(`${BASE_URL}/player`, {
      method: 'GET',
    });
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      throw new Error(responseJson.message);
    }
    return responseJson.data;
  }

  // async function getPlayerAttribute() {
  //   const response = await fetchWithToken(`${BASE_URL}/player/attribute`, {
  //     method: 'OPTIONS',
  //   });
  //   const responseJson = await response.json();

  //   if (responseJson.status !== 'success') {
  //     throw new Error(responseJson.message);
  //   }

  //   return responseJson.data;
    
  // }

  async function updateAttribute(attribute) {
    try {
      const response = await fetchWithToken(`${BASE_URL}/attribute`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ attributes: attribute }), // Assuming the server expects an 'attributes' field
      });
  
      // Check if the response status is OK (200)
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
  
      const responseJson = await response.json();
  
      // Check if the response status is 'success'
      if (responseJson.status !== 'success') {
        throw new Error(responseJson.message);
      }
  
      // Return any relevant data from the response if needed
      return responseJson;
    } catch (error) {
      // Handle errors gracefully
      console.error('Error updating attribute:', error.message);
      throw error; // Rethrow the error for further handling upstream
    }
  }
  
  async function getArticle(id) {
    const response = await fetch(`${BASE_URL}/articles/${id}`, {
      method: 'GET',
    });
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      throw new Error(responseJson.message);
    }

    return responseJson.data;
  }

  async function getArticles() {
    const response = await fetch(`${BASE_URL}/articles`, {
      method: 'GET',
    });
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      throw new Error(responseJson.message);
    }

    return responseJson.data;
  }

  async function getPositions() {
    const response = await fetch(`${BASE_URL}/positions`, {
      method: 'GET',
    });
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      throw new Error(responseJson.message);
    }

    return responseJson.data;
  }



  return {
    login,
    getAccessToken,
    putAccessToken,
    getUserLoggedIn,
    getPlayer,
    updateAttribute,
    getArticle,
    getArticles,
    getPositions
  };
})();

export default api;