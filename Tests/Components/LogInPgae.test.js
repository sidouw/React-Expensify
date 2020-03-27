import React from 'react'
import {shallow} from 'enzyme'
import login from '../../src/Components/LogInPage.jsx'


test('shdoul render log in page ', ()=>{

    const wrapper = shallow(<login/>)
    expect(wrapper).toMatchSnapshot()

})