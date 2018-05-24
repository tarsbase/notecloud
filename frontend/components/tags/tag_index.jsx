import React from 'react';
import TagIndexItem from './tag_index_item';

export default class TagIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.getAllTags();
  }

  render() {
    const tags = this.props.tags.map( tag => <TagIndexItem key={tag.id} tag={tag}/>);
    return <ul>{tags}</ul>;
  }
}