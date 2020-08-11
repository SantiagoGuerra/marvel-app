const React = require('react');
const { shallow } = require('enzyme');
const { default: FeedItem } = require('../../../components/FeedItem');

describe('Test <FeedItem /> Component', () => {
  const name = 'Hulk';
  const thumbnail = {
    path: 'https://...',
    extension: 'png',
  };

  const wrapper = shallow(<FeedItem name={name} thumbnail={thumbnail} />);

  test('should render the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should have data as parameter', () => {
    const wrapper = shallow(<FeedItem name={name} thumbnail={thumbnail} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should have a component called Text', () => {
    const Text = wrapper.find('Text');

    expect(Text.exists()).toBe(true);
  });
});
