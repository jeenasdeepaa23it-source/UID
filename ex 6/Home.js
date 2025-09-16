import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const products = [
    { name: 'Knitted Scarf', description: 'Soft and cozy, perfect for winter.', price: '₹499', image: 'scarf.png' },
    { name: 'Scented Candle', description: 'Lavender aroma for relaxation.', price: '₹299', image: 'candle.png' },
    { name: 'Hand-painted Canvas', description: 'Original art to brighten your space.', price: '₹899', image: 'canvas.png' },
    { name: 'Custom Gift Box', description: 'Personalized gifts for loved ones.', price: '₹699', image: 'giftbox.png' },
    { name: 'Handmade Coasters', description: 'Set of 4 handmade coasters.', price: '₹349', image: 'crochets.png' },
    { name: 'Wooden Jewelry Box', description: 'Hand-carved with floral patterns.', price: '₹799', image: 'jewellery.png' },
    { name: 'Macrame Wall Hanging', description: 'Boho-style decor piece.', price: '₹599', image: 'wallhanging.png' },
    { name: 'Handmade Journal', description: 'Eco-friendly paper with stitched binding.', price: '₹399', image: 'journal.png' },
    { name: 'Marbled Bead Tassel Bracelet', description: 'Elegant bracelet with gray and gold marbled beads & tassel accent.', price: '₹549', image: 'bracelet.png' }
  ];

  const features = [
    { title: "Handmade with Love", description: "Every product is crafted with passion and care by artisans." },
    { title: "Eco-Friendly Materials", description: "We use sustainable, eco-conscious materials in all our crafts." },
    { title: "Unique & Personalized", description: "Each piece is one-of-a-kind and can be customized for you." }
  ];

  const handleAddToCart = (item) => {
    console.log("Added to cart:", item);
    navigate("/add-item");
  };

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      {/* Navbar */}
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '15px 20px', backgroundColor: '#4bc8eeff', borderBottom: '1px solid #fff'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="logo.png" alt="CraftsyNest Logo" style={{ height: '60px', borderRadius: '8px' }} />
          <h1 style={{ fontSize: '28px', color: '#040505ff' }}>CraftsyNest</h1>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link to="/Home" style={{ textDecoration: 'none', color: '#070808ff', fontWeight: 'bold' }}>Home</Link>
          <Link to="/about" style={{ textDecoration: 'none', color: '#070808ff', fontWeight: 'bold' }}>About</Link>
          <Link to="/contact" style={{ textDecoration: 'none', color: '#070808ff', fontWeight: 'bold' }}>Contact</Link>
          <Link to="/add-item" style={{ textDecoration: 'none', color: '#070808ff', fontWeight: 'bold' }}>Shop Cart</Link>
        </div>
      </nav>

      {/* Intro */}
      <div style={{ textAlign: 'center', padding: '40px 20px' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '10px', color: '#1faabcff', fontWeight: 'bold' }}>
          Celebrate Handmade Elegance
        </h2>
        <p style={{ fontSize: '18px', color: '#222' }}>
          Discover timeless treasures crafted with care, creativity, and sustainability.
        </p>
      </div>

      {/* Features Section */}
      <section style={{ padding: '30px 20px', backgroundColor: '#bde1ebff' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '25px' }}>Why Choose Us?</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '25px',
          maxWidth: '850px',
          margin: '0 auto'
        }}>
          {features.map((feature, index) => (
            <div key={index} style={{
              border: '1px solid #ddd',
              borderRadius: '12px',
              padding: '20px',
              textAlign: 'center',
              backgroundColor: '#fff',
              boxShadow: '0 3px 6px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#1faabcff', fontSize: '20px', marginBottom: '10px' }}>{feature.title}</h3>
              <p style={{ color: '#555', fontSize: '15px' }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section style={{ padding: '40px' }}>
        <h2 style={{ textAlign: 'center', color: '#1faabcff', marginBottom: '30px' }}>Shop Our Handmade Collection</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {products.map((item, index) => (
            <div key={index} style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '12px',
              boxShadow: '0 3px 6px rgba(0,0,0,0.1)',
              textAlign: 'center',
              backgroundColor: '#fff',
              width: '100%',
              maxWidth: '260px',
              height: '340px', // medium fixed card height
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              margin: 'auto'
            }}>
              <img src={item.image} alt={item.name} style={{
                width: '100%',
                borderRadius: '8px',
                height: '150px',
                objectFit: 'cover'
              }} />
              <div>
                <h3 style={{ margin: '10px 0', color: '#007b8a', fontSize: '17px' }}>{item.name}</h3>
                <p style={{ color: '#555', fontSize: '13px', minHeight: '45px' }}>{item.description}</p>
                <p style={{ fontWeight: 'bold', fontSize: '15px' }}>{item.price}</p>
              </div>
              <button
                onClick={() => handleAddToCart(item)}
                style={{
                  marginTop: '8px',
                  padding: '8px 12px',
                  backgroundColor: '#03ac1fff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: 'bold'
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#8dd0eaff', textAlign: 'center', padding: '20px', fontSize: '14px' }}>
        <p>© 2025 CraftsyNest. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
