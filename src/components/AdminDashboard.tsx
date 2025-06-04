
import { useState, useEffect } from 'react';
import { database } from '@/lib/firebase';
import { ref, push, set, onValue, remove } from 'firebase/database';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import { Trash2, Plus, Edit } from 'lucide-react';

interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

interface Order {
  id: string;
  email: string;
  timestamp: number;
  items: any[];
}

const AdminDashboard = () => {
  const [user] = useAuthState(auth);
  const [collections, setCollections] = useState<Collection[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [activeTab, setActiveTab] = useState('collections');
  
  // Form states
  const [newCollection, setNewCollection] = useState({ title: '', description: '', image: '' });
  const [newProduct, setNewProduct] = useState({ name: '', price: '', image: '' });

  useEffect(() => {
    if (!user) return;

    // Listen to collections
    const collectionsRef = ref(database, 'collections');
    onValue(collectionsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const collectionsArray = Object.entries(data).map(([id, collection]: [string, any]) => ({
          id,
          ...collection
        }));
        setCollections(collectionsArray);
      }
    });

    // Listen to products
    const productsRef = ref(database, 'products');
    onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const productsArray = Object.entries(data).map(([id, product]: [string, any]) => ({
          id,
          ...product
        }));
        setProducts(productsArray);
      }
    });

    // Listen to orders
    const ordersRef = ref(database, 'orders');
    onValue(ordersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const ordersArray = Object.entries(data).map(([id, order]: [string, any]) => ({
          id,
          ...order
        }));
        setOrders(ordersArray);
      }
    });
  }, [user]);

  const addCollection = async () => {
    if (!newCollection.title.trim()) return;
    
    const collectionsRef = ref(database, 'collections');
    await push(collectionsRef, newCollection);
    setNewCollection({ title: '', description: '', image: '' });
  };

  const addProduct = async () => {
    if (!newProduct.name.trim()) return;
    
    const productsRef = ref(database, 'products');
    await push(productsRef, newProduct);
    setNewProduct({ name: '', price: '', image: '' });
  };

  const deleteCollection = async (id: string) => {
    const collectionRef = ref(database, `collections/${id}`);
    await remove(collectionRef);
  };

  const deleteProduct = async (id: string) => {
    const productRef = ref(database, `products/${id}`);
    await remove(productRef);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-xl">Please log in as admin to access the dashboard.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold tracking-widest mb-8">ADMIN DASHBOARD</h1>
        
        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('collections')}
            className={`px-6 py-2 border ${activeTab === 'collections' ? 'bg-white text-black' : 'border-white text-white'}`}
          >
            COLLECTIONS
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`px-6 py-2 border ${activeTab === 'products' ? 'bg-white text-black' : 'border-white text-white'}`}
          >
            PRODUCTS
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-6 py-2 border ${activeTab === 'orders' ? 'bg-white text-black' : 'border-white text-white'}`}
          >
            ORDERS
          </button>
        </div>

        {/* Collections Tab */}
        {activeTab === 'collections' && (
          <div>
            <h2 className="text-2xl mb-4">Manage Collections</h2>
            
            {/* Add new collection */}
            <div className="bg-gray-900 p-6 rounded mb-6">
              <h3 className="text-lg mb-4">Add New Collection</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <Input
                  placeholder="Collection Title"
                  value={newCollection.title}
                  onChange={(e) => setNewCollection({...newCollection, title: e.target.value})}
                />
                <Input
                  placeholder="Description"
                  value={newCollection.description}
                  onChange={(e) => setNewCollection({...newCollection, description: e.target.value})}
                />
                <Input
                  placeholder="Image URL"
                  value={newCollection.image}
                  onChange={(e) => setNewCollection({...newCollection, image: e.target.value})}
                />
              </div>
              <Button onClick={addCollection}>
                <Plus className="h-4 w-4 mr-2" />
                Add Collection
              </Button>
            </div>

            {/* Collections list */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collections.map((collection) => (
                <div key={collection.id} className="bg-gray-900 p-4 rounded">
                  <img src={collection.image} alt={collection.title} className="w-full h-48 object-cover mb-4" />
                  <h3 className="font-bold mb-2">{collection.title}</h3>
                  <p className="text-gray-300 mb-4">{collection.description}</p>
                  <Button
                    onClick={() => deleteCollection(collection.id)}
                    variant="destructive"
                    size="sm"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div>
            <h2 className="text-2xl mb-4">Manage Products</h2>
            
            {/* Add new product */}
            <div className="bg-gray-900 p-6 rounded mb-6">
              <h3 className="text-lg mb-4">Add New Product</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <Input
                  placeholder="Product Name"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                />
                <Input
                  placeholder="Price (e.g., $299)"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                />
                <Input
                  placeholder="Image URL"
                  value={newProduct.image}
                  onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                />
              </div>
              <Button onClick={addProduct}>
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </Button>
            </div>

            {/* Products list */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-gray-900 p-4 rounded">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
                  <h3 className="font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-300 mb-4">{product.price}</p>
                  <Button
                    onClick={() => deleteProduct(product.id)}
                    variant="destructive"
                    size="sm"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div>
            <h2 className="text-2xl mb-4">Orders</h2>
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="bg-gray-900 p-4 rounded">
                  <p><strong>Email:</strong> {order.email}</p>
                  <p><strong>Date:</strong> {new Date(order.timestamp).toLocaleDateString()}</p>
                  <p><strong>Items:</strong> {order.items?.length || 0}</p>
                </div>
              ))}
              {orders.length === 0 && (
                <p className="text-gray-400">No orders yet.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
