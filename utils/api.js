const api = (() => {
  const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}:${process.env.NEXT_PUBLIC_API_PORT}`

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

  async function register({ username, password, name, email, birthdate,phone, thumbnail,role=1 }) {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        phone,
        role : role,
        name,
        email,
        birthdate,
        thumbnail
      }),
    });

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return responseJson;
  }
  async function updateUser({ username, password, name, email, birth_date,phone, thumbnail,id }) {
    const response = await fetchWithToken(`${BASE_URL}/user`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        phone,
        role : 1,
        name,
        email,
        birth_date,
        thumbnail,
        id
      }),
    });

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return responseJson;
  }

  async function updateUserWithRole({ username, password, name, email, birth_date,phone, thumbnail, role, id }) {
    const response = await fetchWithToken(`${BASE_URL}/user`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        phone,
        role : role,
        name,
        email,
        birth_date,
        thumbnail,
        id
      }),
    });

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return responseJson;
  }
  async function deleteUser(id) {
    const response = await fetchWithToken(`${BASE_URL}/user/${id}`, {
      method: 'DELETE',
    });
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      
    }

    return responseJson;
  }

  async function deleteArticle(id) {
    const response = await fetchWithToken(`${BASE_URL}/articles/${id}`, {
      method: 'DELETE',
    });
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      
    }

    return responseJson;
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
  
  async function postAttribute(attribute) {
    try {
      const response = await fetchWithToken(`${BASE_URL}/attribute`, {
        method: 'POST',
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
  async function getUsers() {
    const response = await fetchWithToken(`${BASE_URL}/users`, {
      method: 'GET',
    });
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      throw new Error(responseJson.message);
    }

    return responseJson.data;
  }
  
  async function createArticle(article) {
    
    const response = await fetchWithToken(`${BASE_URL}/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    , body: JSON.stringify(article)
    });

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      throw new Error(responseJson.message);
    }
  }

  async function updateArticle(article) {
    const response = await fetchWithToken(`${BASE_URL}/articles/${article.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(article),
    });

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      throw new Error(responseJson.message);
    }
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

  async function getAttributeMaster() {
    const response = await fetch(`${BASE_URL}/attributes_master`, {
      method: 'GET',
    });
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      throw new Error(responseJson.message);
    }
    console.log(responseJson.data);
    return responseJson.data;

  }


  async function getAttribute(id) {
    const response = await fetch(`${BASE_URL}/attributes/${id}`, {
      method: 'GET',
    });

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      throw new Error(responseJson.message);
    }

    return responseJson.data;

  }


  async function getArticleByAttribute(id) {
    const response = await fetch(`${BASE_URL}/articles/attributes/${id}`, {
      method: 'GET',
    });
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      throw new Error(responseJson.message);
    }

    return responseJson.data;
  }

  async function completeArticle(id) {
    const response = await fetchWithToken(`${BASE_URL}/articles/complete/${id}`, {
      method: 'POST',
    });
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      throw new Error(responseJson.message);
    }

    return responseJson;
  }

  async function getCompleteArticle(id) {
    const response = await fetchWithToken(`${BASE_URL}/articles/complete/${id}`, {
      method: 'GET',
    });
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      throw new Error(responseJson.message);
    }

    return responseJson;
  }

  return {
    login,
    register,
    getAccessToken,
    putAccessToken,
    getUserLoggedIn,
    getPlayer,
    updateAttribute,
    postAttribute,
    getArticle,
    getArticles,
    getPositions,
    createArticle,
    updateArticle,
    getAttributeMaster,
    getAttribute,
    getArticleByAttribute,
    completeArticle,
    getCompleteArticle,
    updateUser,
    getUsers,
    updateUserWithRole,
    deleteArticle,
    deleteUser

  };
})();

export default api;