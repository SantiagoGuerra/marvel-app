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
});
