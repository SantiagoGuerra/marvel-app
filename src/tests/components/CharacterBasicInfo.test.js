const React = require('react');
const { shallow } = require('enzyme');
const { default: CharacterBasicInfo } = require('../../components/CharacterBasicInfo');

describe('Test <CharacterBasicInfo /> Component', () => {


  const thumbnail = {
    path: 'https://cloudimg.io/s/XSdTer23dwedffwqa',
    extension: 'png',
  };

  const name = 'Hulk';

  const comics = {
    amount: [],
    available: 99,
  };

  const events = {
    amount: [],
    available: 99,
  };

  const series = {
    amount: [],
    available: 99,
  };

  const stories = {
    amount: [],
    available: 99,
  };

  const description = 'lorem ipsum';

  const data = {
    thumbnail, name, comics, events, series, stories, description,
  };

  const wrapper = shallow(<CharacterBasicInfo data={data} />);


  test('should render the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should have data as parameter', () => {
    const wrapper = shallow(<CharacterBasicInfo data={data} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should have a component called Box', () => {
    const Box = wrapper.find('Box');


    expect(Box.exists()).toBe(true);
  });


  test('should have a component called CharacterDescription', () => {
    const CharacterDescription = wrapper.find('CharacterDescription');


    expect(CharacterDescription.exists()).toBe(true);
  });
  
});
