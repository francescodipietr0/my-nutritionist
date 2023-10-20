export const API_BASE_URL = "http://localhost:3000";

export const API_ENDPOINTS = {
    // Esempio di endpoint per ottenere la lista dei prodotti
    getProducts: () => `${API_BASE_URL}/products`,
    getAvailableProducts: () => `${API_BASE_URL}/available-products`,
    updateProduct: (id: number) => `${API_BASE_URL}/products/${id}`,
    
    // // Esempio di endpoint per ottenere un singolo prodotto per ID
    // getProductById: (productId: number) => `${API_BASE_URL}/products/${productId}`,
    
    // // Esempio di endpoint per aggiungere un nuovo prodotto
    // addProduct: `${API_BASE_URL}/products`,
    
    // // Esempio di endpoint per aggiornare un prodotto esistente
    // updateProduct: (productId: number) => `${API_BASE_URL}/products/${productId}`,
    
    // // Esempio di endpoint per eliminare un prodotto
    // deleteProduct: (productId: number) => `${API_BASE_URL}/products/${productId}`,

    getUsers: `${API_BASE_URL}/users`,
  };
  