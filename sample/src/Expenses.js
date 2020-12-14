import React, { Component } from 'react';
import AppNav from './AppNav';
import './App.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {Table, Container, Input, Button, Label, Form, FormGroup} from 'reactstrap';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';

class Expenses extends Component {

    emptyItem = {
        descript : '',
        expensedate : new Date(),
        id: 104,
        location : '',
        category : {id:1, name:'Travel'}
    }

    constructor(props){
        super(props)

        this.state = {

            isLoading: false,
            Categories: [],
            Expenses: [],
            date : new Date(),
            item : this.emptyItem
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    async handleSubmit(event) {
        const item = this.state.item;

        await fetch(`/api/expenses`, {
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(item),
    });

        //console.log(this.state);
        //this.props.history.push("/expenses");
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item={...this.state.item};
        item[name] = value;
        this.setState({item});
        console.log(item);
    }

    handleDateChange(date) {
        let item={...this.state.item};
        item.expensedate = date;
        this.setState({item});
    }


    async remove(id) {
        await fetch(`/api/expenses/${id}`, {
            method: 'DELETE',
            headers : {
                'Accept' : 'application/json',
                'Conent-Type' : 'application/json'
            }
        }).then(() => {
            let updatedExpense = [...this.state.Expenses].filter(i => i.id !== id);
            this.setState({Expenses : updatedExpense});
        });
    }

    async componentDidMount() {
        const response = await fetch('/api/categories');
        const body = await response.json();
        this.setState({Categories: body, isLoading: false});

        const responseExp = await fetch('/api/expenses');
        const bodyExp = await responseExp.json();
        this.setState({Expenses: bodyExp, isLoading: false});
    }
    render() { 
        const title = <h3>Add movie to your list</h3>
        const {Categories} = this.state;
        const {Expenses, isLoading} = this.state;
       
        if (isLoading) {
            return(<div>Loading...</div>)
        }

        let optionList = 
            Categories.map( (category) =>
                <option value ={category.id} key={category.id}>
                                        {category.name}
                </option>)
            
        let rows = 
            Expenses.map( expense =>
                <tr key={expense.id}>
                    <td>{expense.descript}</td>
                    <td>{expense.location}</td>
                    <td><Moment date={expense.expensedate} format="YYYY/MM/DD"></Moment></td>
                    <td>{expense.category.name}</td>
                    <td><Button size="sm" color="success" onClick= { () => this.remove(expense.id)}>Watched</Button></td>
                </tr>
            )

        return ( 
            <div>
                <AppNav/>
                <Container>
                    {title}
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="descript">Title</Label>
                            <Input type="text" name="descript" id="descript" 
                                onChange={this.handleChange} autoComplete="name"/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="category">Category</Label>
                            <select onChange={this.handleChange}>
                                {optionList}
                            </select>
                           
                        </FormGroup>

                        <FormGroup>
                            <Label for="expenseDate">Date</Label>
                            <DatePicker selected={this.state.item.expensedate} onChange={this.handleDateChange}></DatePicker>
                        </FormGroup>
                    <div className="row">
                        <FormGroup className="col-md-4 mb-3">
                            <Label for="location">Location</Label>
                            <Input type="text" name="location" id="location"/>
                        </FormGroup>
                    </div>
                        <FormGroup>
                            <Button color="success" type="submit">Save</Button>{' '}
                            <Button color="secondary" tag={Link} to="/">Cancel</Button>
                        </FormGroup>

                    </Form>
                </Container>

                {''}
                    <Container>
                        <h3>WishList</h3>
                        <Table  clasName="mt-4">
                            <thead>
                                <tr>
                                    <th width="30%">Title</th>
                                    <th width="10%">Location</th>
                                    <th>Date</th>
                                    <th>Category</th>
                                    <th width="10%">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {rows}
                            </tbody>
                        </Table>
                    </Container>
                
            </div>
        );
    }
}
 
export default Expenses;