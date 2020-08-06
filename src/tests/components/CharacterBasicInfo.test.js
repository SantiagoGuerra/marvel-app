
const React = require('react');
const { shallow } = require("enzyme");
const { default: CharacterBasicInfo } = require("../../components/CharacterBasicInfo");

describe('Test <CharacterBasicInfo /> Component', () => {
  test('should render the component correctly', () => {
    
    const wrapper = shallow(<CharacterBasicInfo />)


    expect( wrapper ).toMatchSnapshot()

    
  })
  
})
