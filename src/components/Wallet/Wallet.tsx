import React, { useEffect, useState } from 'react';
import fetchData from '../RegisterCustomer/getdta';

const Wallet: React.FC = () => {
    const [results, setResults] = useState<any>(null); // State to store the fetched data

    useEffect(() => {
        const fetchAndSetData = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/getbalances", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setResults(data);

                return data;
            } catch (error) {
                console.error('Error fetching data:', error);
                return 'Error fetching data:' + error;
            }
        };

        fetchAndSetData();
    }, []);
    const [selectedAccount, setSelectedAccount] = useState<string>('');
    const [balance, setBalance] = useState<number | null>(null);

    const handleAccountChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        // console.log(results)
        const selectedValue = event.target.value;
        setSelectedAccount(selectedValue);

        // Find the selected account in the results array
        const selectedAccountData = results.data.find((item: any) => item.AccountNumber === selectedValue);
        console.log(selectedAccountData)
        // Update the balance based on the selected account
        if (selectedAccountData) {
            setBalance(selectedAccountData.Balance);
        } else {
            setBalance(null); // Reset balance if the selected account is not found
        }
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-4 w-1/2 m-auto">
            <h2 className="text-lg font-bold mb-4">My Wallet</h2>
            <div className='flex-col p-4'>
                {results && (
                    <select className="mt-4" value={selectedAccount} onChange={handleAccountChange}>
                        <option value="">Select Account</option>
                        {results.data.map((item: any, index: any) => (
                            <option key={index} value={item.AccountNumber}>
                                {item.AccountNumber}
                            </option>
                        ))}
                    </select>
                )}
            </div>
            <div className="flex-col justify-between items-center mb-4 p-4">
                <p className="text-gray-600">Total Balance:</p>
                <p className="text-green-500 font-bold text-3xl">{balance}</p>
            </div>

        </div>
    );
};

export default Wallet;
