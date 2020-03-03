import React from 'react';
import { shallow, mount } from 'enzyme';
import CarouselSlide from '../CarouselSlide';

describe('CarouselSlide', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CarouselSlide
        imgUrl="https://example.com/default.jpg"
        description="Default test image"
      />,
    );
  });

  it('should render a <figure>', () => {
    expect(wrapper.type()).toBe('figure');
  });

  it('should render an <img> and a <figcaption> as children', () => {
    expect(wrapper.childAt(0).type()).toBe(CarouselSlide.defaultProps.Img);
    expect(wrapper.childAt(1).type()).toBe('figcaption');
  });

  it('should pass `imgUrl` through to the <img>', () => {
    const imgUrl = 'https://example.com/image.png';
    wrapper.setProps({ imgUrl });
    const img = wrapper.find(CarouselSlide.defaultProps.Img);
    expect(img.prop('src')).toBe(imgUrl);
  });

  it('should use `description` and `attribution` as the <figcaption>', () => {
    const description = 'A jaw-droppingly spectacular image';
    const attribution = 'Trevor Burnham';
    wrapper.setProps({ description, attribution });
    expect(wrapper.find('figcaption').text()).toBe(
      `${description} ${attribution}`,
    );
    expect(wrapper.find('figcaption strong').text()).toBe(description);
  });

  it('should pass other props through to the <figure>', () => {
    const style = {};
    const onClick = () => {};
    const className = 'my-carousel-slide';
    wrapper.setProps({ style, onClick, className });
    expect(wrapper.prop('style')).toBe(style);
    expect(wrapper.prop('onClick')).toBe(onClick);
    expect(wrapper.prop('className')).toBe(className);
  });
});

describe('Img', () => {
  let mounted;
  const imgUrl = 'https://example.com/default.jpg';

  beforeEach(() => {
    const { Img } = CarouselSlide.defaultProps;
    mounted = mount(<Img src={imgUrl} imgHeight={500} />);
  });

  it('should render an <img> with the given src', () => {
    expect(mounted.containsMatchingElement(<img src={imgUrl} />)).toBe(true);
  });
});
