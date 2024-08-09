import { Route, Routes } from 'react-router-dom';

// importing the component from the library
import { Products } from '@react-monorepo/products';
import { Orders } from '@react-monorepo/orders';


function Home() {
  return <h1>Home</h1>;
}

export function App() {
  return (

    <Routes>
      <Products />
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/orders" element={<Orders />} />
    </Routes>
  );
}

export default App;