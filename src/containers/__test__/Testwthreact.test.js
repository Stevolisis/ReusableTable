import {React} from 'react'
import Counter from '../Testingwthreact'
import {render,fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


let getByTestId;
beforeEach(()=>{
    const componenet = render(<Counter/>);
    getByTestId=componenet.getByTestId;
})


describe('Group test',()=>{
test('header renders with correct text',()=>{
    const headerEL=getByTestId("header");
    expect(headerEL.textContent).toBe('My Counter')
})


test('Ounter starts with text 0',()=>{
    const counterEl=getByTestId("counter");
    expect(counterEl.textContent).toBe('0')
})

test('input contains initial value 1',()=>{
    const inputEl=getByTestId("input");
    expect(inputEl.value).toBe('1')
})

test('add button renders with +',()=>{
    const addbtn=getByTestId("add-btn");
    expect(addbtn.textContent).toBe('+')
})

test('subtract button renders with -',()=>{
    const subtractbtn=getByTestId("subtract-btn");
    expect(subtractbtn.textContent).toBe('-')
})

test('Change value of input works correctly',()=>{
    const inputEl=getByTestId("input");

    expect(inputEl.value).toBe('1')

    fireEvent.change(inputEl,{
        target:{
            value:'5'
        }
    })
    expect(inputEl.value).toBe('5')
})


test('Click on plus btn adds 1 to counter',()=>{
    const btnEl=getByTestId("add-btn");
    const counterEl=getByTestId("counter");

    expect(counterEl.textContent).toBe('0')

    fireEvent.click(btnEl)
    expect(counterEl.textContent).toBe('1')
})


test('Click on plus btn subtract 1 to counter',()=>{
    const btnEl=getByTestId("subtract-btn");
    const counterEl=getByTestId("counter");

    expect(counterEl.textContent).toBe('0')

    fireEvent.click(btnEl)
    expect(counterEl.textContent).toBe('-1')
})


test('Changing input value then clicking on addbtn works correctly',()=>{
    const addBtnEl=getByTestId("add-btn");
    const counterEl=getByTestId("counter");
    const inputEl=getByTestId("input");

   // expect(counterEl.textContent).toBe('0')

    fireEvent.change(inputEl,{
       target:{
           value:'5'
       }
    })

    fireEvent.click(addBtnEl);
    expect(counterEl.textContent).toBe('5')
})



test('Changing input value then clicking on subtractbtn works correctly',()=>{
    const subtractBtnEl=getByTestId("subtract-btn");
    const counterEl=getByTestId("counter");
    const inputEl=getByTestId("input");

   // expect(counterEl.textContent).toBe('0')

    fireEvent.change(inputEl,{
       target:{
           value:'5'
       }
    })

    fireEvent.click(subtractBtnEl);
    expect(counterEl.textContent).toBe('-5')
})

test('adding and subtracting leads to the correct counter number',()=>{
    const subtractBtnEl=getByTestId("subtract-btn");
    const addBtnEl=getByTestId("add-btn");
    const counterEl=getByTestId("counter");
    const inputEl=getByTestId("input");

   // expect(counterEl.textContent).toBe('0')

    fireEvent.change(inputEl,{
       target:{
           value:'10'
       }
    })

    fireEvent.click(addBtnEl);
    fireEvent.click(addBtnEl);
    fireEvent.click(addBtnEl);
    fireEvent.click(addBtnEl);
    fireEvent.click(subtractBtnEl);
    fireEvent.click(subtractBtnEl);

    expect(counterEl.textContent).toBe('20')

    fireEvent.change(inputEl,{
        target:{
            value:'5'
        }
     })

     fireEvent.click(addBtnEl);
     fireEvent.click(subtractBtnEl);
     fireEvent.click(subtractBtnEl);

     expect(counterEl.textContent).toBe('15')

});

test('counter contains correct className',()=>{
    const counterEl=getByTestId("counter");
    const inputEl=getByTestId("input");
    const subtractBtnEl=getByTestId("subtract-btn");
    const addBtnEl=getByTestId("add-btn");

    fireEvent.change(inputEl,{
        target:{
            value:'50'
        }
     })

     fireEvent.click(addBtnEl);
    expect(counterEl.className).toBe('')

    fireEvent.click(addBtnEl);
    expect(counterEl.className).toBe('green')

    fireEvent.click(addBtnEl);
    expect(counterEl.className).toBe('green')

    fireEvent.click(subtractBtnEl);
    fireEvent.click(subtractBtnEl);
    expect(counterEl.className).toBe('')


    fireEvent.click(subtractBtnEl);
    fireEvent.click(subtractBtnEl);
    fireEvent.click(subtractBtnEl);
    fireEvent.click(subtractBtnEl);
    expect(counterEl.className).toBe('red')
})

});


