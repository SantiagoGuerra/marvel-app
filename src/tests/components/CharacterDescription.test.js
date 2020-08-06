const React = require('react');
const { shallow } = require('enzyme');
const { default: CharacterDescription } = require('../../components/CharacterDescription');

describe('Test <CharacterDescription/> Component', () => {
  const thumbnail = {
    path: 'https://cloudimg.io/s/XSdTer23dwedffwqa',
    extension: 'png',
  };

  const name = 'Hulk';

  const description = 'lorem ipsum';

  const wrapper = shallow(
    <CharacterDescription
      thumbnail={thumbnail}
      name={name}
      description={description}
    />,
  );

  test('should render the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should have [thumbnail, name and description] as parameters', () => {
    const wrapper = shallow(
      <CharacterDescription
        thumbnail={thumbnail}
        name={name}
        description={description}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
