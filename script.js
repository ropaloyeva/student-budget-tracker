const form = document.getElementById('expense-form'); const nameInput = document.getElementById('expense-name'); const amountInput = document.getElementById('expense-amount'); const categorySelect = document.getElementById('expense-category'); const expenseList = document.getElementById('expense-list'); const totalAmountDisplay = document.getElementById('total-amount');
let expenses = [];
form.addEventListener('submit', function(e) { e.preventDefault();
const name = nameInput.value;
const amount = parseFloat(amountInput.value);
const category = categorySelect.value;

if (!name || isNaN(amount)) return;

const expense = {
    id: Date.now(),
    name,
    amount,
    category
};

expenses.push(expense);
updateUI();

nameInput.value = '';
amountInput.value = '';});
function updateUI() { expenseList.innerHTML = ''; let total = 0;
expenses.forEach(item => {
    total += item.amount;

    const li = document.createElement('li');
    li.innerHTML = `
        <span><strong>￼{item.category})</span>
        <span>${item.amount} Kč</span>
    `;
    expenseList.appendChild(li);
});

totalAmountDisplay.textContent = `${total} Kč`;}