/* ---------- DATABASE ---------- */

// Cria um array para armazenamento dos produtos
const tbClientes = (() => {
	const fieldValue = localStorage.getItem("tbClientes");
	return fieldValue === null ? [] : JSON.parse(fieldValue);
})();

/* ---------- FUNCIONALIDADES ---------- */

const btnForm = document.getElementById("btn-submit");
const nameForm = document.getElementById("name-input");
const cpfForm = document.getElementById("cpf-input");
const dateForm = document.getElementById("datebirth-input");
const emailForm = document.getElementById("email-input");
const cepForm = document.getElementById("cep-input");
const enderecoForm = document.getElementById("adrress-input");
const senhaForm = document.getElementById("password-input");

btnForm.addEventListener("click", () => {
	// Recebe os dados do formulário e os transforma em um objeto
	const cliente = JSON.stringify({
		// name-input cpf-input datebirth-input email-input cep-input adrress-input password-input
		nome: nameForm.value,
		cpf: cpfForm.value,
		dataNascimento: dateForm.value,
		email: emailForm.value,
		cep: cepForm.value,
		endereco: enderecoForm.value,
		senha: senhaForm.value,
	});

	// Armazena o cliente no Local Storage
	tbClientes.push(cliente);
	localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
	alert("Usuário Cadastrado com sucesso!");
});
