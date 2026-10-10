import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './components/ProductCard';
import Home from './components/Home';
import PatronLogin from './pages/PatronLogin';

function AppContent() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/products');
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load products from server');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {/* Material Symbols Outlined Icon Font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      {/* Quick Navigation Header */}
      <nav
        style={{
          padding: '12px 24px',
          backgroundColor: '#fff8f3',
          borderBottom: '1px solid #e7e1dc',
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
          fontFamily: "'Plus Jakarta Sans', sans-serif"
        }}
      >
        <Link to="/" style={{ textDecoration: 'none' }}>
          <strong style={{ color: '#012d1d', letterSpacing: '-0.01em' }}>
            Pazhama Sanctum
          </strong>
        </Link>

        <Link to="/">
          <button
            style={{
              padding: '6px 14px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: location.pathname === '/' ? '#1b4332' : 'transparent',
              color: location.pathname === '/' ? '#ffffff' : '#414844',
              cursor: 'pointer',
              fontWeight: location.pathname === '/' ? '600' : 'normal',
              fontSize: '13px'
            }}
          >
            Home
          </button>
        </Link>

        <Link to="/products">
          <button
            style={{
              padding: '6px 14px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: location.pathname === '/products' ? '#1b4332' : 'transparent',
              color: location.pathname === '/products' ? '#ffffff' : '#414844',
              cursor: 'pointer',
              fontWeight: location.pathname === '/products' ? '600' : 'normal',
              fontSize: '13px'
            }}
          >
            Products Catalog ({products.length})
          </button>
        </Link>

        <Link to="/login">
          <button
            style={{
              padding: '6px 14px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: location.pathname === '/login' ? '#1b4332' : 'transparent',
              color: location.pathname === '/login' ? '#ffffff' : '#414844',
              cursor: 'pointer',
              fontWeight: location.pathname === '/login' ? '600' : 'normal',
              fontSize: '13px'
            }}
          >
            Patron Login
          </button>
        </Link>
      </nav>

      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<PatronLogin />} />
        <Route
          path="/products"
          element={
            <div style={{ padding: '24px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              <h1 style={{ fontFamily: "'Playfair Display', serif", color: '#012d1d', marginBottom: '1rem' }}>
                Pazhama Products
              </h1>

              {loading && <p style={{ color: '#717973' }}>Loading products...</p>}
              {error && <p style={{ color: '#ba1a1a' }}>{error}</p>}

              {!loading && !error && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                  {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </div>
              )}
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default function App() {
  return <AppContent />;
}