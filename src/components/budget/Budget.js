import React,{useState} from 'react'

export default function Budget() {


  // calculate form
  const [fixedExpensesfinal, setFixedExpensesFinal] = useState(0);
  const [variableExpensesfinal, setVariableExpensesFinal] = useState(0);
  const [savingExpensesfinal, setSavingExpensesFinal] = useState(0);
  const [remainingExpensesfinal, setRemainingExpensesFinal] = useState(0);


  const [income, setIncome] = useState('');
  const [fixedExpenses, setFixedExpenses] = useState([{ id: 1, name: '', amount: '' }]);
  const [variableExpenses, setVariableExpenses] = useState([{ id: 1, name: '', amount: '' }]);
  const [savingsGoals, setSavingsGoals] = useState([{ id: 1, name: '', amount: '' }]);

  const handleFixedExpenseChange = (id, name, value) => {
    const updatedExpenses = fixedExpenses.map((expense) =>
      expense.id === id ? { ...expense, [name]: value } : expense
    );
    setFixedExpenses(updatedExpenses);
  };

  const handleVariableExpenseChange = (id, name, value) => {
    const updatedExpenses = variableExpenses.map((expense) =>
      expense.id === id ? { ...expense, [name]: value } : expense
    );
    setVariableExpenses(updatedExpenses);
  };

  const handleSavingsGoalChange = (id, name, value) => {
    const updatedGoals = savingsGoals.map((goal) =>
      goal.id === id ? { ...goal, [name]: value } : goal
    );
    setSavingsGoals(updatedGoals);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform budget calculations and generate output

    // Calculate the total fixed expenses
    const totalFixedExpenses = fixedExpenses.reduce(
      (acc, expense) => acc + Number(expense.amount),
      0
    );

    // Calculate the total variable expenses
    const totalVariableExpenses = variableExpenses.reduce(
      (acc, expense) => acc + Number(expense.amount),
      0
    );

    // Calculate the total savings goals
    const totalSavingsGoals = savingsGoals.reduce(
      (acc, goal) => acc + Number(goal.amount),
      0
    );

    // Calculate the remaining budget
    const remainingBudget = Number(income) - totalFixedExpenses - totalVariableExpenses - totalSavingsGoals;

    // Generate the output
    const output = {
      income: Number(income),
      fixedExpenses: totalFixedExpenses,
      variableExpenses: totalVariableExpenses,
      savingsGoals: totalSavingsGoals,
      remainingBudget,
    };


    setFixedExpensesFinal(totalFixedExpenses);
    setVariableExpensesFinal(totalVariableExpenses);
    setSavingExpensesFinal(totalSavingsGoals);
    setRemainingExpensesFinal(remainingBudget);

  };

  const addFixedExpense = () => {
    const newId = fixedExpenses.length + 1;
    setFixedExpenses([...fixedExpenses, { id: newId, name: '', amount: '' }]);
  };

  const addVariableExpense = () => {
    const newId = variableExpenses.length + 1;
    setVariableExpenses([...variableExpenses, { id: newId, name: '', amount: '' }]);
  };

  const addSavingsGoal = () => {
    const newId = savingsGoals.length + 1;
    setSavingsGoals([...savingsGoals, { id: newId, name: '', amount: '' }]);
  };

  const deleteFixedExpense = (id) => {
    const updatedExpenses = fixedExpenses.filter((expense) => expense.id !== id);
    setFixedExpenses(updatedExpenses);
  };

  const deleteVariableExpense = (id) => {
    const updatedExpenses = variableExpenses.filter((expense) => expense.id !== id);
    setVariableExpenses(updatedExpenses);
  };

  const deleteSavingsGoal = (id) => {
    const updatedGoals = savingsGoals.filter((goal) => goal.id !== id);
    setSavingsGoals(updatedGoals);
  };
  // calculate form end



  return (
    <div>
         <div className='all container'>
                <form onSubmit={handleSubmit}>
                  <div className="in">Income</div>
                  <input type="number" className='inin' placeholder='eg.5000' value={income} onChange={(e) => setIncome(e.target.value)} />
                  <div className="row">
                    <div className="col-6">


                      <h4 className='mt-4'>Fixed Expenses</h4>

                      {fixedExpenses.map((expense) => (
                        <div key={expense.id}>
                          <input
                            type="text"
                            value={expense.name}
                            onChange={(e) => handleFixedExpenseChange(expense.id, 'name', e.target.value)}
                            placeholder="Expense Name "
                          />
                          <input
                            type="text"
                            value={expense.amount}
                            onChange={(e) => handleFixedExpenseChange(expense.id, 'amount', e.target.value)}
                            placeholder="Expense Amount"
                          />
                          <button type="button" className='bud-del' onClick={() => deleteFixedExpense(expense.id)}>
                            Delete
                          </button>
                        </div>
                      ))}

                      <button type="button" className='bud-add' onClick={addFixedExpense}>
                        Add Fixed Expense
                      </button>
                    </div>
                    <div className="col-6">


                      <h4 className='mt-4'>Variable Expenses</h4>

                      {variableExpenses.map((expense) => (
                        <div key={expense.id}>
                          <input
                            type="text"
                            value={expense.name}
                            onChange={(e) => handleVariableExpenseChange(expense.id, 'name', e.target.value)}
                            placeholder="Expense Name"
                          />
                          <input
                            type="text"
                            value={expense.amount}
                            onChange={(e) => handleVariableExpenseChange(expense.id, 'amount', e.target.value)}
                            placeholder="Expense Amount"
                          />
                          <button type="button" className='bud-del' onClick={() => deleteVariableExpense(expense.id)}>
                            Delete
                          </button>
                        </div>
                      ))}
                      <button type="button" className='bud-add' onClick={addVariableExpense}>
                        Add Variable Expense
                      </button>
                    </div>

                    <div className="col-6">


                      <h4 className='mt-4'>Savings Goals</h4>

                      {savingsGoals.map((goal) => (
                        <div key={goal.id}>
                          <input
                            type="text"
                            value={goal.name}
                            onChange={(e) => handleSavingsGoalChange(goal.id, 'name', e.target.value)}
                            placeholder="Goal Name"
                          />
                          <input
                            type="text"
                            value={goal.amount}
                            onChange={(e) => handleSavingsGoalChange(goal.id, 'amount', e.target.value)}
                            placeholder="Goal Amount"
                          />
                          <button type="button" className='bud-del' onClick={() => deleteSavingsGoal(goal.id)}>
                            Delete
                          </button>
                        </div>
                      ))}
                      <button type="button" className='bud-add' onClick={addSavingsGoal}>
                        Add Savings Goal
                      </button>
                    </div>
                    <div className="clbtn col-6">
                      <hr />


                      <div className="container-fluid">
                        <button type='submit' className='bud-cal'>Calculate Bugdet</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>










              <div className='mt-5'>
                <div class="container">
                  <div class="row mb-2">
                    <h1 className='ch'>Your Budget Plan</h1>
                  </div>
                  <div class="row mb-3">
                    <table class="table table-hover">
                      <tbody>
                        <tr >
                          <th scope="row">Fixed Expenses</th>
                          <td>{fixedExpensesfinal}</td>
                        </tr>
                        <tr>
                          <th scope="row">Variable Expenses</th>
                          <td>{variableExpensesfinal}</td>
                        </tr>
                        <tr>
                          <th scope="row">Saving Amount</th>
                          <td >{savingExpensesfinal}</td>
                        </tr>
                        <tr>
                          <th scope="row">Remaining Amount</th>
                          <td >{remainingExpensesfinal}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                </div>
              </div>


    </div>
  )
}
