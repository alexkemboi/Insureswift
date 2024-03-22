import ConnectMysql from "./mysql";

const updateItem = async (req: any, res: any) => {
  const { id, newName } = req.body;
  try {
    const connectionPromise = ConnectMysql();
    const connection = await connectionPromise;
    //const result: any = await connection.promise().query('UPDATE items SET name = ? WHERE id = ?', [newName, id]);
    await connection.promise().query("update Users set PhoneNumber='+254726837210' where UserId=4");
    res.status(200).json({ message: 'Item updated successfully' });
    console.log({ message: 'Item updated successfully' })
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
    console.log({ message: 'An error occurred' })
  }
};

export default updateItem;
