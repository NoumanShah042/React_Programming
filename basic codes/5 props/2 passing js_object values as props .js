import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// setup vars
const firstBook = {
	img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
	title: "I Love You to the Moon and Back",
	author: "Amelia Hepworth",
};

const secondBook = {
	img: "https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg",
	title: "Our Class is a Family",
	author: "Shannon Olsen",
};

function BookList() {
	return (
		<section className="booklist">
			<Book
				img={firstBook.img}
				title={firstBook.title}
				author={firstBook.author}
			/>
			<Book
				img={secondBook.img}
				title={secondBook.title}
				author={secondBook.author}
			/>
		</section>
	);
}
// props means properties
const Book = (props) => {
	console.log(props);

	return (
		<article className="book">
			<img src={props.img} alt="" />
			<h1>{props.title}</h1>
			<h4>{props.author}</h4>
		</article>
	);
};

ReactDom.render(<BookList />, document.getElementById("root"));

// passing object in prop
// se List 4 and 5 file
