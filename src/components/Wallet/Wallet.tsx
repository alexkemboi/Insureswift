import React from 'react';

const Wallet: React.FC = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4  w-1/2 m-auto">
            <h2 className="text-lg font-bold mb-4">My Wallet</h2>
            <div className="flex justify-between items-center mb-4">
                <p className="text-gray-600">Total Balance:</p>
                <p className="text-green-500 font-bold">$5000</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-gray-600">Available Balance:</p>
                <p className="text-green-500 font-bold">$3000</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Add Funds
            </button>
        </div>
    );
};

export default Wallet;
