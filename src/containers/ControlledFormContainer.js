import React, { Component } from "react";
import ControlledForm from "../components/ControlledForm";
import { validateForm } from "../helpers";
var timeout = null;

class ControlledFormContainer extends Component {
	constructor() {
		super();
		this.state = {
			success: false,
			errors: {},
			exampleEmail: "",
			examplePassword: "",
			exampleURL: ""
		};
	}

	onChangeInput = e => {
		clearTimeout(timeout);

		this.setState({
			[e.target.name]: e.target.value
		});
		const errors = validateForm(this.state);
		if (errors) {
			this.setState({ errors: { [e.target.name]: errors[e.target.name] } });
		}
	};

	onSubmit = e => {
		e.preventDefault();
		console.log(this.state);
		console.log(e.target);
		const errors = validateForm(this.state);

		if (errors) {
			this.setState({ errors });
		} else {
			console.log();
			this.formSuccess();
		}
	};

	formSuccess = () => {
		this.setState(
			{
				success: true,
				errors: {},
				exampleEmail: "",
				examplePassword: "",
				exampleURL: ""
			},
			() => console.log("Success!")
		);
	};

	render() {
		return (
			<ControlledForm
				onSubmit={this.onSubmit}
				onChangeInput={this.onChangeInput}
				{...this.state}
			/>
		);
	}
}

export default ControlledFormContainer;
