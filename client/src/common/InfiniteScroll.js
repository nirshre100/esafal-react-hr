import React, { Component } from "react";

export class InfiniteScroll extends Component {
  shouldLoadMoreItems = () =>
    !this.props.isLoading &&
    window.innerHeight + window.scrollY >= document.body.offsetHeight;

  onWindowEvent = () =>
    this.shouldLoadMoreItems() && this.props.loadMoreItems();

  componentDidMount() {
    window.addEventListener("scroll", this.onWindowEvent);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onWindowEvent);
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}
