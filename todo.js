const todoList = () => {
  let alll = [];
  const add2 = (todoItem) => {
    alll.push(todoItem);
  };
  const markAsComplete1 = (index) => {
    alll[index].completed = true;
  };

  const overdue = () => {
    return alll.filter(
      (item) => item.dueDate < new Date().toLocaleDateString("en-CA")
    );
  };

  const dueToday = () => {
    return alll.filter(
      (item) => item.dueDate === new Date().toLocaleDateString("en-CA")
    );
  };

  const dueLater = () => {
    return alll.filter(
      (item) => item.dueDate > new Date().toLocaleDateString("en-CA")
    );
  };
  return { alll, add2, markAsComplete1, overdue, dueToday, dueLater };
};

module.exports = todoList;
