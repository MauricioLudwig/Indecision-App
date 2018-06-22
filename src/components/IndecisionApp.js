import React from 'react';

import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option
            })
        }));
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => {
            return {
                selectedOption: option
            };
        });
    };

    handleAddOption = (option) => {

        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    };

    clearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    };

    componentDidMount() {
        try {
            const data = JSON.parse(localStorage.getItem('options'));
            if (data) {
                this.setState(() => ({
                    options: data
                }));
            }
        } catch (e) {
            // Do nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('componentwillunmount');
    }

    render() {
        const subtitle = "Put your life in the hands of a computer";

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    handlePick={this.handlePick}
                    hasOptions={this.state.options.length > 0}
                />
                <Options
                    handleDeleteOptions={this.handleDeleteOptions}
                    options={this.state.options}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
                <OptionModal 
                    clearSelectedOption={this.clearSelectedOption} 
                    selectedOption={this.state.selectedOption} 
                />
            </div>
        );
    }
}