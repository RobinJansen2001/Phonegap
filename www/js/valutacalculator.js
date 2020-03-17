const objectFromEntries = entries => [...entries]
    .reduce((obj, [key, val]) => ({ ...obj, [key]: val }), {});

const formToObject = form => objectFromEntries(new FormData(form).entries());

const rates = {
    PLN: 1,
    USD: 3.3442,
    EUR: 4.1461,
};

const convert = (amount, from, to) => rates[from] / rates[to] * amount;

const output = document.getElementById('output');

document
    .getElementById('converter')
    .addEventListener('submit', event => {
        event.preventDefault();

        const { amount, from, to } = formToObject(event.target);
        const result = convert(amount, from, to);

        output.textContent = `${amount} ${from} = ${result.toFixed(2)} ${to}`
    });