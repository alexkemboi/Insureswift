import React, { useEffect, useState } from 'react';
import getdta from './getdta';
const Register = () => {
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userProfile, setUserProfile] = useState('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState(false);
  const [usersdata, setUsersData] = useState<any | null>([{}]);


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/registercustomer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ UserName: userName, PhoneNumber: phoneNumber, UserProfile: userProfile }),
      });
      if (response.ok) {
        setSuccess(true)
        setError('')


        const smsData = {
          message: `Hi ${userName} you have been registered successfully`,
          phone: phoneNumber
        };

        const smsResponse = await fetch('http://localhost:3000/api/sendsms', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(smsData)
        });
        if (smsResponse.ok) {
          setSuccess(true);
        } else {
          setError('Failed to send sms');
        }
      } else {
        setError('Failed to register user');
      }
    } catch (error) {
      setError('Internal server error');
    }
  };
  useEffect(() => {
    // setUsersData(getdta());
  }, [])

  return (
    <div className='flex-col  p-4 w-4/5 border border-solid m-auto'>
      <div>{error && (<h1>{error}</h1>)}</div>
      <form onSubmit={handleSubmit} className="w-full">
        <h1 className='font-bold text-2xl'>Customer Registration</h1>
        <div className='flex-column md:flex '>
          <div className='w-full md:w-full lg:w-full border border-solid border-gray-500 m-2 p-2'>
            {success && (<h4 className='text-sm font-bold text-green-500 text-center'>Successfully saved</h4>)}
            <div className="mb-4 flex-col justify-between">
              <label>User Name</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Username"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4 flex-col justify-between">
              <label>Phone Number</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone Number"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6 flex-col justify-between">
              <label>User Profile</label>
              <input
                type="text"
                value={userProfile}
                onChange={(e) => setUserProfile(e.target.value)}
                placeholder="User Profile"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Register
              </button>
            </div>
          </div>
          <div className='hidden sm:w-full md:w-2/3 lg:w-3/4'>
            <table className="min-w-full divide-y divide-gray-500 border border-gray-500">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border border-gray-500">
                    User Id
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border border-gray-500">
                    Name
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border border-gray-500">
                    Phone Number
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border border-gray-500">
                    User Profile
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-500">
                {usersdata.map((item: any, index: any) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-no-wrap border border-gray-500">
                      {item?.UserId}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border border-gray-500">
                      {item?.UserName}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border border-gray-500">
                      {item?.PhoneNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border border-gray-500">
                      {item?.UserProfile}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </form>

    </div>
  );
};

export default Register;
