import { useState } from 'react';

export default function AdminDashboard() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_URL}/api/admin/orders`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-password': password,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setOrders(data);
        setIsAuthenticated(true);
      } else {
        setError('Incorrect password or unauthorized access');
      }
    } catch (err) {
      console.error(err);
      setError('Error connecting to the server. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-8 sm:p-10 rounded-xl shadow-lg w-full max-w-md text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Administrator Panel</h2>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 rounded-lg border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-black transition-shadow"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="p-3 rounded-lg bg-black text-white font-medium text-base transition-colors hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Loading...' : 'Login'}
            </button>
          </form>
          {error && <p className="text-red-500 mt-4 text-sm font-medium">{error}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Insomnia Course - Orders</h2>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors shadow-sm"
          >
            Logout
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-max">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-4 text-sm font-semibold text-gray-700 tracking-wider">Date</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-700 tracking-wider">Name</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-700 tracking-wider">Email</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-700 tracking-wider">Phone</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-700 tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                      {new Date(order.createdAt).toLocaleDateString('pl-PL', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{order.customerName}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{order.customerEmail}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{order.customerPhone}</td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          order.status === 'paid'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {order.status.toUpperCase()}
                      </span>
                    </td>
                  </tr>
                ))}
                {orders.length === 0 && (
                  <tr>
                    <td colSpan="5" className="px-6 py-8 text-center text-gray-500 text-sm">
                      No orders found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}