const inputEmail = document.getElementById("email");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
	const key = "email";
	const value = inputEmail.value;

	if (key && value) {
		localStorage.setItem(key, value);
		alert("E-mail cadastrado com sucesso!");
	} else {
		alert("Campo e-mail é obrigatório!");
	}
});
