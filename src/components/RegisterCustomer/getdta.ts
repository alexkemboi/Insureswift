const fetchData = async (table:any) => {
    try {
      const response = await fetch("http://localhost:3000/api/getdata", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ table: `${table}` }),
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return 'Error fetching data:' + error;
    }
  };
export default fetchData;