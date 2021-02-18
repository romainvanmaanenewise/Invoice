import React, { Component } from "react";
import { observer } from "mobx-react"
import Item from "./Item";

class App extends Component{
  render() {
    const { invoice } = this.props;

    return <div className='App'>
      <h1>{invoice.status()}</h1>
      <button onClick={invoice.markPaid}>pay</button>
      <button onClick={invoice.markUnPaid}>unpay</button>

      <form onSubmit={e => {
        e.preventDefault();
        invoice.itemList.add({
          name: this.nameInput.value,
          quantity: parseFloat(this.quantityInput.value),
          price: parseFloat(this.priceInput.value)
        })
        e.target.reset();
        this.nameInput.focus();
      }}>
        <label htmlFor='name'>
          Name
          <input type='text' ref={input => (this.nameInput = input)} id="name"/>
        </label>
        <label htmlFor='quantity'>
          Quanity
          <input type='number' ref={input => (this.quantityInput = input)} id="quantity"/>
        </label>
        <label htmlFor='price'>
          Price
          <input type='text' ref={input => (this.priceInput = input)} id="price"/>
        </label>
        <button type='submit'>Add</button>
      </form>
    </div>;

    <ul>
      {invoice.itemList.items.map((item, i) => (
        <Item item={item} key={i} />
      ))}
    </ul>
  }
}

export default observer(App);
