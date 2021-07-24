/* ---------- DATABASE ---------- */
const degionDesktop = {
	id: 1,
	name: "Degion Desktop",
	price: 2000,
};

const degionAllInOne = {
	id: 2,
	name: "Degion All In One",
	price: 2500,
};

const degionNotebook = {
	id: 3,
	name: "Degion Notebook",
	price: 3000,
};

const degionGamer = {
	id: 4,
	name: "Degion Gamer",
	price: 3500,
};

// Cria um array para armazenamento dos produtos
const items = (() => {
	const fieldValue = localStorage.getItem("cart");
	return fieldValue === null ? [] : JSON.parse(fieldValue);
})();

/* ---------- FUNCIONALIDADES ---------- */

// Armazena o produto Degion Desktop no array
const btnDesktop = document.getElementById("btn-desktop");
btnDesktop.addEventListener("click", () => {
	items.push(degionDesktop);
	localStorage.setItem("cart", JSON.stringify(items));
	alert("Degion Desktop adicionado ao carrinho!");
});

// Armazena o produto Degion All In One no array
const btnAllInOne = document.getElementById("btn-allinone");
btnAllInOne.addEventListener("click", () => {
	items.push(degionAllInOne);
	localStorage.setItem("cart", JSON.stringify(items));
	alert("Degion All In One adicionado ao carrinho!");
});

// Armazena o produto Degion Notebook no array
const btnNotebook = document.getElementById("btn-notebook");
btnNotebook.addEventListener("click", () => {
	items.push(degionNotebook);
	localStorage.setItem("cart", JSON.stringify(items));
	alert("Degion Notebook adicionado ao carrinho!");
});

// Armazena o produto Degion Gamer no array
const btnGamer = document.getElementById("btn-gamer");
btnGamer.addEventListener("click", () => {
	items.push(degionGamer);
	localStorage.setItem("cart", JSON.stringify(items));
	alert("Degion Gamer adicionado ao carrinho!");
});
