import React from 'react'
import Input from '../../UI/Input/Input'
import classes from './ContactForm.module.css'
import Button from '../../UI/Button/Button'


export default props => {
    const formElemArr=[]
    for(let key in props.orderForm){
        formElemArr.push({
            id:key,
            config:props.orderForm[key]
        })
    }

    // console.log(formElemArr);
    

    return( 
        <div className={classes.Form}>
            <h4> Enter Your Details Here </h4>
            <form >
                {formElemArr.map(formEl => (
                    <div key={formEl.id} style={{margin:'2px'}}>
                        <label style={{margin:'6px',fontWeight:'bold',textTransform: 'capitalize'}}>{formEl.id}</label>
                        <Input ElemType={formEl.config.ElemType}
                            ElemConfig={formEl.config.ElemConfig}
                            value={formEl.config.value}
                            key={formEl.id}
                            inputChange={e => props.inputChange(e,formEl.id)}
                            /> 
                    </div>
                    ))
                }    
            </form>
            <div>
                <Button clicked={props.continueOrder} btnType='Success'>!! ORDER IT !! </Button>
            </div>

        </div>
    )
}
