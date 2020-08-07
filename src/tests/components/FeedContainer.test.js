const React = require('react');
const { shallow } = require('enzyme');
const { default: FeedContainer } = require('../../components/FeedContainer');

describe('Test <FeedContainer /> Component', () => {
  const feed = [];

  const filter = {};

  const wrapper = shallow(<FeedContainer feed={feed} filter={filter} />);

  test('should render the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should have data as parameter', () => {
    const wrapper = shallow(<FeedContainer feed={feed} filter={filter} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should have a component called Box', () => {
    const Box = wrapper.find('Box');

    expect(Box.exists()).toBe(true);
  });
});
