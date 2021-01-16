import React from 'react'


const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

export default function CartItem(props){

const{item,idx}=props

const featureHash = item + '-' + idx;
const itemOption = props.state[item];

return (<div className="summary__option" key={featureHash}>
    <div className="summary__option__label">{item} </div>
    <div className="summary__option__value">{itemOption.name}</div>
    <div className="summary__option__cost">
        {USCurrencyFormat.format(itemOption.cost)}
    </div>
</div>);
}