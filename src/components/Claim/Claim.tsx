const MakeClaim = () => {
  return (
    <div className="p-4 w-full border border-solid m-10">
      <h1 className="text-2xl font-bold mb-4">Make a Claim</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Policy Number</label>
          <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Claim Details</label>
          <textarea className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" rows={3}></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Amount</label>
          <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit Claim</button>
      </form>
    </div>
  );
};

export default MakeClaim;
