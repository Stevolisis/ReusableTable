import {React} from 'react'
import Tablecon from '../Tablecon'
import {render,fireEvent, waitFor,screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

let getByTestId;
beforeEach(()=>{
    const component = render(<Tablecon/>);
    getByTestId=component.getByTestId;
})



describe('Group test',()=>{
test('Text in title',()=>{
    const imageEL=getByTestId("image");
    expect(imageEL.textContent).toBe('images')
})
});

