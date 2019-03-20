import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MMHome from './MMHome';
import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// function setup()
// {
//   const enzymeWrapper=shallow(<MMHome/>);
//   Enzyme.configure({adapter:new Adapter()})
//   return{enzymeWrapper}
// }

describe('MMHome',()=>{
  it('class home is there',()=>{
    //const{enzymeWrapper}=setup();
    Enzyme.configure({adapter:new Adapter()})
    const enzymeWrapper=shallow(<MMHome />);
    expect(enzymeWrapper.find('p').text()).toBe('© Copyrights Pavan Pakki 2019');
  })
})
