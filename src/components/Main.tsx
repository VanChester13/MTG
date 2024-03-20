import ItemList from "./ItemList";
import { Info, ResponseList, ReduxState } from "../types/interfaces";
import ReactPaginate from "react-paginate";
import React from "react";
import { connect } from "react-redux";
import { store } from "..";
import { itemsPerPage } from "../consts";
import "../styles/main.scss";

interface IProps {
  data: ResponseList;
  lang: string;
}

interface State {
  initList: Info[];
  currentList: Info[];
  pageCount: number;
  itemOffset: number;
}

class Main extends React.Component<IProps, State> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      initList: [],
      currentList: [],
      pageCount: 0,
      itemOffset: 0,
    };
  }

  componentDidMount() {
    const initList: Info[] = Object.values(this.props.data.ru);
    this.setState({ initList });
  }

  componentDidUpdate(prevProps: IProps, prevState: State) {
    const lang = store.getState().lang;
    const { initList, itemOffset } = this.state;

    if (lang !== prevProps.lang) {
      this.setState({ initList: Object.values(this.props.data[lang]) });
    }
    if (
      initList !== prevState.initList ||
      itemOffset !== prevState.itemOffset
    ) {
      const endOffset = itemOffset + itemsPerPage;
      const currentList = initList.slice(itemOffset, endOffset);
      const pageCount = Math.ceil(initList.length / itemsPerPage);
      this.setState({ currentList, pageCount });
    }
  }

  handlePageClick = (selected: any) => {
    const { initList } = this.state;
    const newOffset = (selected.selected * itemsPerPage) % initList.length;
    this.setState({ itemOffset: newOffset });
  };

  render() {
    const { currentList, pageCount } = this.state;
    return (
      <div className="main">
        <div className="list">
          {currentList.map((item: Info, index: number) => (
            <ItemList key={index} item={item} />
          ))}
        </div>
        <div className="paginate">
          <ReactPaginate
            nextLabel=">"
            onPageChange={this.handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="<"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = function (state: ReduxState) {
  return {
    lang: state.lang,
  };
};

export default connect(mapStateToProps)(Main);